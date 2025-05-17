import React from 'react';

import Container from '@mui/material/Container';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import FpcCreateEditForm from '../fpc-create-edit-form';

export default function FpcCreate() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs heading="New FPC" links={[{ name: 'Create FPC' }]} />
      <FpcCreateEditForm />
    </Container>
  );
}
