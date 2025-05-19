import React from 'react';
import PropTypes from 'prop-types';

import { LoadingButton } from '@mui/lab';
import { Box, Stack } from '@mui/system';
import { Grid, Typography } from '@mui/material';

import { RHFSwitch, RHFDropDown, RHFTextField } from 'src/components/hook-form';

export default function AbpCreateSixth({ methods, setStep }) {
  return (
    <div>
      <Grid container sx={{ mt: 3 }}>
        
        {/* Project Land */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Project Land
          </Typography>
          <Box
            gap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <RHFSwitch name="project_land.has_land" label="Has Land" />
            <RHFDropDown
              name="project_land.ownership"
              label="Ownership"
              options={[
                { label: 'Owned', value: 'owned' },
                { label: 'Leased', value: 'leased' },
              ]}
            />
            <RHFTextField name="project_land.lease_years" label="Lease Years" type="number" />
            <RHFTextField name="project_land.address" label="Address" />
            <RHFTextField name="project_land.area_sq_m" label="Area (sq.m)" type="number" />
            <RHFTextField name="project_land.lat_long" label="Latitude/Longitude" />
          </Box>
        </Grid>

        {/* Budget */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Budget
          </Typography>
          <Box
            gap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <RHFTextField name="budget.total_project_cost" label="Total Project Cost" />
            <RHFTextField name="budget.abp_contribution" label="ABP Contribution" />
            <RHFTextField name="budget.grant_sought" label="Grant Sought" />
            <RHFTextField name="budget.loan_required" label="Loan Required" />
          </Box>
        </Grid>

        

        <Stack
          direction="row"
          sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2, width: '100%' }}
        >
          <LoadingButton size="small" variant="outlined" onClick={() => setStep(5)}>
            Back
          </LoadingButton>
          <LoadingButton size="small" variant="contained" type="submit">
            Submit
          </LoadingButton>
        </Stack>
      </Grid>
    </div>
  );
}


AbpCreateSixth.propTypes = {
  methods: PropTypes.object.isRequired,
  setStep: PropTypes.func.isRequired,
};