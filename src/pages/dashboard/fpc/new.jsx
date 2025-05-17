import { Helmet } from 'react-helmet-async';

import { FpcCreateView } from 'src/sections/fpc/view';

// ----------------------------------------------------------------------

export default function FpcCreatePage() {
  return (
    <>
      <Helmet>
        <title> FPC: New FPC</title>
      </Helmet>

      <FpcCreateView />
    </>
  );
}
