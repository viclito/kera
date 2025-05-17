import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import FpcCreateEditForm from '../fpc-create-edit-form';

// ----------------------------------------------------------------------

export default function FpcEditView({ FpcId }) {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="FPC Edit"
        links={[
          // {
          //   name: 'FPC List',
          //   href: paths.Fpc.list,
          // },
          { name: 'FPC Edit' },
        ]}
      />

      <FpcCreateEditForm FpcId={FpcId} />
    </Container>
  );
}

FpcEditView.propTypes = {
  FpcId: PropTypes.string,
};
