import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------
const FPCCreatePage = lazy(() => import('src/pages/dashboard/fpc/new'));

const ABPCreatePage = lazy(() => import('src/pages/dashboard/abp/new'));

// BLANK PAGE
const BlankPage = lazy(() => import('src/pages/dashboard/blank'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: '/dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <FPCCreatePage />, index: true },
      {
        path: 'fpc',
        children: [{ path: 'new-fpc', element: <FPCCreatePage /> }],
      },
      {
        path: 'abp',
        children: [{ path: 'new-abp', element: <ABPCreatePage /> }],
      },
      { path: 'blank', element: <BlankPage /> },
    ],
  },
];
