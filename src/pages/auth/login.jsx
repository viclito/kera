import { Helmet } from 'react-helmet-async';

import { JwtLoginView } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login</title>
      </Helmet>

      <JwtLoginView />
    </>
  );
}
