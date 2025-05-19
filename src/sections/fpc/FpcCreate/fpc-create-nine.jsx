/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { LoadingButton } from '@mui/lab';
import { Box, Grid, Stack, Typography } from '@mui/material';

import { RHFSwitch, RHFDropDown, RHFTextField } from 'src/components/hook-form';

export default function FpcCreateNinth({ setStep }) {
  return (
    <div>
      <Grid container sx={{ mt: 3 }}>
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Budget /
          </Typography>
          <Box
            gap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
            sx={{ mb: 2 }}
          >
            <RHFTextField name="budget.total_project_cost" label="Total Project Cost" />
            <RHFTextField name="budget.fpc_contribution" label="FPC Contribution" />
            <RHFTextField name="budget.grant_sought" label="Grant Sought" />
            <RHFTextField name="budget.loan_required" label="Loan Required" />
          </Box>
        </Grid>

        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Project Location /
          </Typography>
          <Box
            gap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
            sx={{ mb: 2 }}
          >
            <RHFSwitch name="project_location.has_land" label="Has Land" />
            <RHFDropDown
              name="project_location.ownership"
              label="Ownership Type"
              options={[
                { label: 'Owned', value: 'owned' },
                { label: 'Leased', value: 'leased' },
                { label: 'Rented', value: 'rented' },
              ]}
            />
            <RHFTextField name="project_location.lease_years" label="Lease Years" type="number" />
            <RHFTextField name="project_location.address" label="Address" />
            <RHFTextField name="project_location.area_sq_m" label="Area (sq.m)" type="number" />
            <RHFTextField name="project_location.lat_long" label="Latitude/Longitude" />
          </Box>
        </Grid>

        

        <Stack
          direction="row"
          sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2, width: '100%' }}
        >
          <LoadingButton size="small" variant="outlined" onClick={() => setStep(8)}>
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
