import * as Yup from 'yup';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';

import { useRouter } from 'src/routes/hooks';

import useLoginQuery from 'src/api/auth/login';
import { PATH_AFTER_LOGIN, PATH_AFTER_LOGIN_ABP } from 'src/config-global';

import FormProvider, { RHFCode, RHFTextField } from 'src/components/hook-form';

export default function LoginView() {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const returnTo = searchParams.get('returnTo');
  const { enqueueSnackbar } = useSnackbar();
  const [errorMsg, setErrorMsg] = useState('');
  // const [userType, setUserType] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const LoginSchema = Yup.object().shape({
    mobile: Yup.string().required('Mobile is required'),
    otp: Yup.string(),
  });

  const { mutateAsync: sendOtp } = useLoginQuery.SendOpt();
  const { mutateAsync: verifyOpt } = useLoginQuery.VerifyOpt();

  const defaultValues = {
    mobile: '',
    otp: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
    context: { isOtpStep: false }, 
  });

  const { reset, handleSubmit, setValue } = methods;

  const handleInitialSubmit = async (data) => {
    try {
      
      // Call register API first with mobile and user_type
      await sendOtp({
        mobile: data.mobile,
      });
      
      // If register is successful (200), proceed to send OTP
      // await sendOtp({ mobile: data.mobile });
      
      setMobileNumber(data.mobile);
      // methods.setContext({ isOtpStep: true });
      enqueueSnackbar('OTP sent successfully!', { variant: 'success' });
    } catch (error) {
      console.error('Registration error:', error);
      enqueueSnackbar(error.message || 'Registration failed', { variant: 'error' });
    }
  };

  const handleOtpSubmit = async (data) => {
    try {
      // Verify OTP with the mobile number and OTP
      const response = await verifyOpt({
        mobile: mobileNumber,
        otp: data.otp,
      });

      const userType = response.data.type
      
      // On successful verification, navigate based on user type
      if (userType === 'fpc') {
        router.push(returnTo || PATH_AFTER_LOGIN);
      } else {
        router.push(returnTo || PATH_AFTER_LOGIN_ABP);
      }
      
      enqueueSnackbar('Login successful!', { variant: 'success' });
    } catch (error) {
      console.error('OTP verification error:', error);
      setErrorMsg(typeof error === 'string' ? error : error.message);
      enqueueSnackbar(error.message || 'OTP verification failed', { variant: 'error' });
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    if (mobileNumber) {
      // We're in OTP step
      await handleOtpSubmit(data);
    } else {
      // We're in initial step
      await handleInitialSubmit(data);
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5 }}>
      <Typography variant="h4">Login to Kera</Typography>
    </Stack>
  );

  const renderInitialStep = (
    <Stack spacing={2.5}>
      <RHFTextField name="mobile" label="Mobile" />
      
      <LoadingButton
        fullWidth
        color="primary"
        size="large"
        type="submit"
        variant="contained"
      >
        Send OTP
      </LoadingButton>
    </Stack>
  );

  const renderOtpStep = (
    <Stack spacing={2.5}>
      <Typography variant="body1" sx={{fontSize:'12px' , textAlign:'center'}}>OTP sent to {mobileNumber}</Typography>
      <RHFCode name="otp" length={6} label="OTP" />
      <LoadingButton
        fullWidth
        color="primary"
        size="large"
        type="submit"
        variant="contained"
      >
        Verify OTP
      </LoadingButton>
    </Stack>
  );

  const renderForm = mobileNumber ? renderOtpStep : renderInitialStep;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {renderHead}

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <FormProvider methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </FormProvider>
    </Box>
  );
}