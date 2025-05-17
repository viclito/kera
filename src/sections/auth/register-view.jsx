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

export default function JwtRegisterView() {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const returnTo = searchParams.get('returnTo');
  const { enqueueSnackbar } = useSnackbar();
  const [errorMsg, setErrorMsg] = useState('');
  const [userType, setUserType] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const LoginSchema = Yup.object().shape({
    mobile: Yup.string().required('Mobile is required'),
    otp: Yup.string(),
  });

  const { mutateAsync: sendOtp } = useLoginQuery.SendOpt();
  const { mutateAsync: verifyOpt } = useLoginQuery.VerifyOpt();
  const { mutateAsync: register } = useLoginQuery.Register();

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
      if (!userType) {
        enqueueSnackbar('Please select a user type', { variant: 'error' });
        return;
      }
      
      // Call register API first with mobile and user_type
      await register({
        mobile: data.mobile,
        user_type: userType,
      });
      
      // If register is successful (200), proceed to send OTP
      // await sendOtp({ mobile: data.mobile });
      
      setMobileNumber(data.mobile);
      methods.setContext({ isOtpStep: true });
      enqueueSnackbar('OTP sent successfully!', { variant: 'success' });
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMsg(typeof error === 'string' ? error : error.message);
      enqueueSnackbar(error.message || 'Registration failed', { variant: 'error' });
    }
  };

  const handleOtpSubmit = async (data) => {
    try {
      // Verify OTP with the mobile number and OTP
      await verifyOpt({
        mobile: mobileNumber,
        otp: data.otp,
      });
      
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
      <Typography variant="h4">Register to Kera</Typography>
    </Stack>
  );

  const renderInitialStep = (
    <Stack spacing={2.5}>
      <RHFTextField name="mobile" label="Mobile" />
      <Autocomplete
        options={[
          { label: 'FPC', value: 'fpc' },
          { label: 'ABP', value: 'abp' },
        ]}
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        onChange={(event, newValue) => setUserType(newValue?.value || '')}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select User Type"
            variant="outlined"
            sx={{
              '& .MuiInputBase-root': {
                height: '40px',
                padding: '0 12px',
                backgroundColor: '#F8FAFC',
              },
            }}
          />
        )}
      />
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



































// import * as Yup from 'yup';
// import { useSnackbar } from 'notistack';
// import { useForm } from 'react-hook-form';
// import { useState, useCallback } from 'react';
// import { yupResolver } from '@hookform/resolvers/yup';

// import { Box } from '@mui/material';
// import Link from '@mui/material/Link';
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import LoadingButton from '@mui/lab/LoadingButton';

// import { paths } from 'src/routes/paths';
// import { RouterLink } from 'src/routes/components';
// import { useRouter, useSearchParams } from 'src/routes/hooks';

// import { uploadImageToS3 } from 'src/utils/uploadToS3';

// import useLoginQuery from 'src/api/auth/login';
// import { PATH_AFTER_LOGIN } from 'src/config-global';

// import FormProvider, { RHFCode, RHFTextField, RHFUploadAvatar } from 'src/components/hook-form';

// // ----------------------------------------------------------------------

// export default function JwtRegisterView() {
//   const router = useRouter();

//   const [errorMsg, setErrorMsg] = useState('');
//   const { enqueueSnackbar } = useSnackbar();

//   const { mutateAsync: completeRegistration } = useLoginQuery.CompleteBasicRegistration();

//   const searchParams = useSearchParams();

//   const returnTo = searchParams.get('returnTo');

//   const RegisterSchema = Yup.object().shape({
//     first_name: Yup.string().required('First name required'),
//     email: Yup.string().required('Email is required').email('Email must be a valid email address'),
//     mpin: Yup.string().required('M PIN is required'),
//   });

//   const defaultValues = {
//     first_name: '',
//     email: '',
//     mpin: '',
//   };

//   const methods = useForm({
//     resolver: yupResolver(RegisterSchema),
//     defaultValues,
//   });

//   const {
//     reset,
//     handleSubmit,
//     setValue,
//     formState: { isSubmitting },
//   } = methods;

//   const onSubmit = handleSubmit(async (data) => {
//     try {
//       const payload = {
//         email: data?.email,
//         mpin: data.mpin,
//         first_name: data?.first_name,
//         profile_image: data?.profile_image,
//       };

//       if (data?.profile_image) {
//         const imageUrl = await uploadImageToS3(data?.profile_image);
//         payload.profile_image = imageUrl;
//       }
//       await completeRegistration?.(payload);
//       router.push(returnTo || PATH_AFTER_LOGIN);
//       enqueueSnackbar('Registration successful!', { variant: 'success' });
//     } catch (error) {
//       console.error(error);
//       reset();
//       setErrorMsg(typeof error === 'string' ? error : error.message);
//     }
//   });

//   const handleDrop = useCallback(
//     (acceptedFiles) => {
//       const file = acceptedFiles[0];

//       const newFile = Object.assign(file, {
//         preview: URL.createObjectURL(file),
//       });

//       if (file) {
//         setValue('profile_image', newFile, { shouldValidate: true });
//       }
//     },
//     [setValue]
//   );

//   const renderHead = (
//     <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
//       <Typography variant="h4">Complete Your Registration</Typography>

//       <Stack direction="row" spacing={0.5}>
//         <Typography variant="body2"> Already have an account? </Typography>

//         <Link href={paths.auth.login} component={RouterLink} variant="subtitle2">
//           Sign in
//         </Link>
//       </Stack>
//     </Stack>
//   );

//   const renderTerms = (
//     <Typography
//       component="div"
//       sx={{
//         mt: 2.5,
//         textAlign: 'center',
//         typography: 'caption',
//         color: 'text.secondary',
//       }}
//     >
//       {'By signing up, I agree to '}
//       <Link underline="always" color="text.primary">
//         Terms of Service
//       </Link>
//       {' and '}
//       <Link underline="always" color="text.primary">
//         Privacy Policy
//       </Link>
//       .
//     </Typography>
//   );

//   const renderForm = (
//     <Stack spacing={2}>
//       <RHFUploadAvatar name="profile_image" label="Profile Image" onDrop={handleDrop} />
//       <RHFTextField name="first_name" label="First name" />
//       <RHFTextField name="email" label="Email address" />
//       <RHFCode name="mpin" length={4} label="PIN" />

//       <LoadingButton
//         fullWidth
//         color="inherit"
//         size="large"
//         type="submit"
//         variant="contained"
//         loading={isSubmitting}
//       >
//         Complete Registration
//       </LoadingButton>
//     </Stack>
//   );

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         height: '100vh',
//         overflow: 'hidden',
//       }}
//     >
//       {renderHead}

//       {!!errorMsg && (
//         <Alert severity="error" sx={{ m: 3 }}>
//           {errorMsg}
//         </Alert>
//       )}

//       <FormProvider methods={methods} onSubmit={onSubmit}>
//         {renderForm}
//       </FormProvider>

//       {renderTerms}
//     </Box>
//   );
// }




// import * as Yup from 'yup';
// import { useState } from 'react';
// import { useSnackbar } from 'notistack';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';

// import { Box } from '@mui/material';
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import LoadingButton from '@mui/lab/LoadingButton';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

// import { useRouter } from 'src/routes/hooks';

// import useLoginQuery from 'src/api/auth/login';

// import FormProvider, { RHFCode, RHFTextField } from 'src/components/hook-form';
// import { PATH_AFTER_LOGIN, PATH_AFTER_LOGIN_ABP } from 'src/config-global';

// export default function LoginView() {
//   const router = useRouter();
//   const searchParams = new URLSearchParams(window.location.search);
//   const returnTo = searchParams.get('returnTo');
//   const [withMpin, setWithMpin] = useState(true);
//   const [otpSent, setOtpSent] = useState(false);
//   const { enqueueSnackbar } = useSnackbar();
//   const [errorMsg, setErrorMsg] = useState('');
//   const [userType, setUserType] = useState('');
//   const [phoneSuccess, setPhoneSuccess] = useState(false);

//   const LoginSchema = Yup.object().shape({
//     mobile: Yup.string().required('Mobile is required'),
//     mpin: withMpin ? Yup.string().required('Pin is required') : Yup.string(),
//     // otp: !withMpin ? Yup.string().required('OTP is required') : Yup.string(),
//   });

//   const { mutateAsync: login } = useLoginQuery.Login();
//   const { mutateAsync: sendOtp } = useLoginQuery.SendOpt();
//   const { mutateAsync: verifyOpt } = useLoginQuery.VerifyOpt();

//   const defaultValues = {
//     mobile: '',
//     mpin: '',
//     otp: '',
//   };

//   const methods = useForm({
//     resolver: yupResolver(LoginSchema),
//     defaultValues,
//   });

//   const {
//     reset,
//     handleSubmit,
//     formState: { isSubmitting },
//   } = methods;

//   const handleSendOTP = async (mobile) => {
//     try {
//       await sendOtp({ mobile });
//       setOtpSent(true);
//       enqueueSnackbar('OTP sent successfully!', { variant: 'success' });
//     } catch (error) {
//       console.error('Send OTP error:', error);
//       setErrorMsg(typeof error === 'string' ? error : error.message);
//       enqueueSnackbar(error.message || 'Failed to send OTP', { variant: 'error' });
//     }
//   };

//   const onSubmit = handleSubmit(async (data) => {
//     try {
//       if (withMpin) {
//         localStorage.setItem('accessToken', 'token');
//         setOtpSent(true); // Show the dropdown after login
//         setPhoneSuccess(true);
//         enqueueSnackbar('Login successful! Please select user type.', { variant: 'success' });
//       } else {
//         if (!otpSent) {
//           await handleSendOTP(data.mobile);
//           return;
//         }
//         const response = await verifyOpt({
//           mobile: data.mobile,
//           totp: data.otp,
//         });
//         if (response?.data?.is_basic_registered) {
//           setOtpSent(true); // Show the dropdown after OTP verification
//           enqueueSnackbar('OTP verified! Please select user type.', { variant: 'success' });
//         } else {
//           router.push('/auth/register');
//           enqueueSnackbar('OTP verified successfully!', { variant: 'success' });
//         }
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       reset();
//       setErrorMsg(typeof error === 'string' ? error : error.message);
//       enqueueSnackbar(error.message || 'An error occurred', { variant: 'error' });
//     }
//   });

//   const handleUserTypeSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     if (!userType) {
//       enqueueSnackbar('Please select a user type before proceeding.', { variant: 'warning' });
//       return;
//     }
//     localStorage.setItem('userType', userType);
//     enqueueSnackbar(`User type set to ${userType}`, { variant: 'success' });
//     userType === 'fpc' ? router.push(returnTo || PATH_AFTER_LOGIN) : router.push(returnTo || PATH_AFTER_LOGIN_ABP); // Navigate after selecting user type
//   };

//   const buttonText = withMpin ? 'Login with PIN' : `${otpSent ? 'Verify' : 'Send'} OTP`;

//   const renderHead = (
//     <Stack spacing={2} sx={{ mb: 5 }}>
//       <Typography variant="h4">Register to Kera</Typography>
//       <Stack direction="row" spacing={0.5}>
//         <Typography variant="body2">Dont have an account?</Typography>
//       </Stack>
//     </Stack>
//   );

//   const renderUserTypeDropdown = otpSent && (
//     <Stack spacing={2.5}>
//       <Autocomplete
//         options={[
//           { label: 'FPC', value: 'fpc' },
//           { label: 'ABP', value: 'abp' },
//         ]}
//         getOptionLabel={(option) => option.label}
//         isOptionEqualToValue={(option, value) => option.value === value.value}
//         onChange={(event, newValue) => setUserType(newValue?.value || '')}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="Select User Type"
//             variant="outlined"
//             sx={{
//               '& .MuiInputBase-root': {
//                 height: '40px',
//                 padding: '0 12px',
//                 backgroundColor: '#F8FAFC',
//               },
//             }}
//           />
//         )}
//       />
//       <LoadingButton
//         fullWidth
//         color="primary"
//         size="large"
//         variant="contained"
//         onClick={handleUserTypeSubmit}
//       >
//         Continue
//       </LoadingButton>
//     </Stack>
//   );

//   const renderForm = (
//     <Stack spacing={2.5}>
//       {!otpSent && <RHFTextField name="mobile" label="Mobile" />}

//       {withMpin ? (
//         <RHFCode name="mpin" length={4} label="PIN" />
//       ) : (
//         otpSent && <RHFCode name="otp" length={6} label="OTP" />
//       )}

//       {renderUserTypeDropdown}

//       <Typography
//         variant="body2"
//         sx={{ alignSelf: 'flex-end', cursor: 'pointer', textDecoration: 'underline' }}
//         onClick={() => {
//           setWithMpin(!withMpin);
//           setOtpSent(false);
//           reset();
//         }}
//       >
//         Login With {withMpin ? 'OTP' : 'PIN'}
//       </Typography>

//       {!phoneSuccess && (
//         <LoadingButton
//           fullWidth
//           color="primary"
//           size="large"
//           type="submit"
//           variant="contained"
//           loading={isSubmitting}
//         >
//           {buttonText}
//         </LoadingButton>
//       )}
//     </Stack>
//   );

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         height: '100vh',
//         overflow: 'hidden',
//       }}
//     >
//       {renderHead}

//       {!!errorMsg && (
//         <Alert severity="error" sx={{ mb: 3 }}>
//           {errorMsg}
//         </Alert>
//       )}

//       <FormProvider methods={methods} onSubmit={onSubmit}>
//         {renderForm}
//       </FormProvider>
//     </Box>
//   );
// }
