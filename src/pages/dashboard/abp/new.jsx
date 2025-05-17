import { Helmet } from 'react-helmet-async';

import { AbpCreateView } from 'src/sections/abp/View';
// ----------------------------------------------------------------------

export default function AbpCreatePage() {
  return (
    <>
      <Helmet>
        <title> ABP: NEW ABP</title>
      </Helmet>

      <AbpCreateView />
    </>
  );
}
