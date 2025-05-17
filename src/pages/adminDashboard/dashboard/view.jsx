import { Helmet } from 'react-helmet-async';

import { DashboardAdminView } from 'src/sections/AdminDashboard/Dashboard/view';


// ----------------------------------------------------------------------

export default function DashboardViewPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: VIEW Dashboard</title>
      </Helmet>

      <DashboardAdminView />
    </>
  );
}
