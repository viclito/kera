import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import FPCDetailsForm from '../fpc-details-form';

// ----------------------------------------------------------------------

export default function FpcDetailsView({ FpcId }) {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs heading="FPC Details" links={[{ name: 'FPC Details' }]} />

      <FPCDetailsForm FpcId={FpcId} />
    </Container>
  );
}

FpcDetailsView.propTypes = {
  FpcId: PropTypes.string,
};
