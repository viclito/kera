import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useRouter } from 'src/routes/hooks';

import { PATH_AFTER_ADMIN_LOGIN } from 'src/config-global';

import { RHFTextField } from 'src/components/hook-form';

export default function LoginView() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');

  const methods = useForm();

  const handleLogin = () => {
    if (methods.getValues('username') === 'admin' && methods.getValues('password') === 'admin') {
        console.log(PATH_AFTER_ADMIN_LOGIN);
        
      router.push(PATH_AFTER_ADMIN_LOGIN); // Replace PATH_AFTER_LOGIN with '/dashboard'
    } else {
      setErrorMsg('Invalid username or password.');
    }
  };

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5 }}>
      <Typography variant="h4">Register to Kera</Typography>
      {/* <Stack direction="row" spacing={0.5}>
        <Typography variant="body2">Dont have an account?</Typography>
      </Stack> */}
    </Stack>
  );

  const renderLoginForm = (
    <FormProvider {...methods}>
      <Stack spacing={2.5}>
        <RHFTextField name="username" label="Username" />
        <RHFTextField name="password" label="Password" type="password" />
        <LoadingButton
          fullWidth
          color="primary"
          size="large"
          variant="contained"
          onClick={methods.handleSubmit(handleLogin)}
        >
          Login
        </LoadingButton>
      </Stack>
    </FormProvider>
  );

  const renderForm = renderLoginForm;

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

      {renderForm}
    </Box>
  );
}
