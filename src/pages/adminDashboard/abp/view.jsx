import { Helmet } from 'react-helmet-async';

import { AbpAdminView } from 'src/sections/AdminDashboard/abp/view';


// ----------------------------------------------------------------------

export default function AbpViewPage() {
  return (
    <>
      <Helmet>
        <title> ABP: VIEW ABP</title>
      </Helmet>

      <AbpAdminView />
    </>
  );
}
