import { Helmet } from 'react-helmet-async';

import { FpcAdminView } from 'src/sections/AdminDashboard/fpc/view';

// ----------------------------------------------------------------------

export default function FpcViewPage() {
  return (
    <>
      <Helmet>
        <title> FPC: VIEW FPC</title>
      </Helmet>

      <FpcAdminView />
    </>
  );
}
