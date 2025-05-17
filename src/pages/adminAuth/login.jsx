import { Helmet } from 'react-helmet-async';

import { JwtLoginView } from 'src/sections/adminAuth';

// ----------------------------------------------------------------------

export default function AdminLoginPage() {
  return (
    <>
      <Helmet>
        <title>Admin Login</title>
      </Helmet>

      <JwtLoginView />
    </>
  );
}
