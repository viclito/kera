import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { FpcDetailsView } from 'src/sections/fpc/view';

// ----------------------------------------------------------------------

export default function FpcDetailsForm() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Fpc Form</title>
      </Helmet>

      <FpcDetailsView FpcId={`${id}`} />
    </>
  );
}
