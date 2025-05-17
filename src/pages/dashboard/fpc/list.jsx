import { Helmet } from 'react-helmet-async';

import { FpcListView } from 'src/sections/fpc/view';

// ----------------------------------------------------------------------

export default function FpcListPage() {
  return (
    <>
      <Helmet>
        <title> Fpc: Fpc List</title>
      </Helmet>

      <FpcListView />
    </>
  );
}
