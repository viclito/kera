import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthGuard } from 'src/auth/guard';
import AdminDashboardLayout from 'src/layouts/adminDashboard';

import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------
const FpcViewPage = lazy(() => import('src/pages/adminDashboard/fpc/view'));

const AbpViewPage = lazy(() => import('src/pages/adminDashboard/abp/view'));

const DashboardViewPage = lazy(() => import('src/pages/adminDashboard/dashboard/view'));

// BLANK PAGE
const BlankPage = lazy(() => import('src/pages/dashboard/blank'));

// ----------------------------------------------------------------------

const userType = localStorage.getItem('userType')

export const adminDashboardRoutes = [
  {
    path: '/admin/dashboard',
    element: (
      <AuthGuard>
        <AdminDashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </AdminDashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <DashboardViewPage />, index: true },
      {
        path: 'fpc',
        children: [{ path: 'view-fpc', element: <FpcViewPage /> }],
      },
      {
        path: 'abp',
        children: [{ path: 'view-abp', element: <AbpViewPage /> }],
      },
      { path: 'blank', element: <BlankPage /> },
    ],
  },
];
