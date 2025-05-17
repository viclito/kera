import React from 'react';

import Container from '@mui/material/Container';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import AbpCreateForm from '../abp-create-form';

export default function AbpCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs heading="New ABP" links={[{ name: 'Create ABP' }]} />
      <AbpCreateForm />
    </Container>
  );
}
