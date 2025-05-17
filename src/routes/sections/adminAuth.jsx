import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { GuestGuard } from 'src/auth/guard';
import AuthClassicLayout from 'src/layouts/auth/classic';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const LoginPage = lazy(() => import('src/pages/adminAuth/login'));
const RegisterPage = lazy(() => import('src/pages/adminAuth/register'));

// ----------------------------------------------------------------------

const adminAuth = {
  path: '',
  element: (
    <Suspense fallback={<SplashScreen />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: 'login',
      element: (
        <GuestGuard>
          <AuthClassicLayout>
            <LoginPage />
          </AuthClassicLayout>
        </GuestGuard>
      ),
    },
    {
      path: 'register',
      element: (
        <GuestGuard>
          <AuthClassicLayout title="">
            <RegisterPage />
          </AuthClassicLayout>
        </GuestGuard>
      ),
    },
  ],
};

export const adminAuthRoutes = [
  {
    path: 'admin',
    children: [adminAuth],
  },
];
