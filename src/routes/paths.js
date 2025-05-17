// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
  ADMIN_DASHBOARD : '/admin/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  // AUTH
  auth: {
    login: `${ROOTS.AUTH}/login`,
    register: `${ROOTS.AUTH}/register`,
  },
  // DASHBOARD
  fpc: {
    root: `${ROOTS.DASHBOARD}/fpc/new-fpc`,
  },
  abp: {
    root: `${ROOTS.DASHBOARD}/abp/new-abp`,
  },
  admin_dashboard:{
    root : `${ROOTS.ADMIN_DASHBOARD}`
  },
  admin_fcp:{
    root : `${ROOTS.ADMIN_DASHBOARD}/fpc/view-fpc`
  },
  admin_abp:{
    root : `${ROOTS.ADMIN_DASHBOARD}/abp/view-abp`
  },
};
