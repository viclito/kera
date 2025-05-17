import { Card } from '@mui/material';
import Container from '@mui/material/Container';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import FPCList from '../fpc-list';

export default function FpcAdminView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs heading="FPC Details" links={[{ name: 'FPC Details' }]} />

      <Card sx={{ backgroundColor: '#fff', px: 3, py: 2, mb: 1 }}>
        <FPCList />
      </Card>
    </Container>
  );
}

FpcAdminView.propTypes = {};
