import PropTypes from 'prop-types';

import { Card } from '@mui/material';
import Container from '@mui/material/Container';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import DashboardList from '../dashboard-list';


export default function AbpAdminView() {
    const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      {/* <CustomBreadcrumbs heading="ABP Details" links={[{ name: 'ABP Details' }]} /> */}

      <Card sx={{ backgroundColor: '#fff', px: 3, py: 2, mb: 1 }}> 
        <DashboardList  />
      </Card>
    </Container>
  );
}

AbpAdminView.propTypes = {
    
};
