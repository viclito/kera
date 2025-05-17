import { Navigate, useRoutes } from 'react-router-dom';

import { PATH_AFTER_LOGIN, PATH_BEFORE_LOGIN } from 'src/config-global';

import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { dashboardRoutes } from './dashboard';
import { adminAuthRoutes } from './adminAuth';
import { adminDashboardRoutes } from './adminDashboard';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // SET INDEX PAGE WITH SKIP HOME PAGE
    {
      path: '/',
      element: <Navigate to={PATH_BEFORE_LOGIN} replace />,
    },

    // ----------------------------------------------------------------------

    // Auth routes
    ...authRoutes,

    // Admin Auth routes
    ...adminAuthRoutes,

    ...adminDashboardRoutes , 

    // Dashboard routes
    ...dashboardRoutes,

    // Main routes
    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
