import { LoadingButton } from '@mui/lab';
import { Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
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

        {/* Rating Matrix */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Rating Matrix
          </Typography>
          <Box
            gap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <RHFTextField name="rating_matrix.operational_age" label="Operational Age" />
            <RHFTextField name="rating_matrix.women_directors" label="Women Directors" />
            <RHFTextField name="rating_matrix.bod_meetings" label="BoD Meetings" />
            <RHFSwitch name="rating_matrix.agm_conducted" label="AGM Conducted" />
            <RHFTextField name="rating_matrix.agm_participation" label="AGM Participation" />
            <RHFTextField name="rating_matrix.audit_status" label="Audit Status" />
            <RHFSwitch name="rating_matrix.has_ceo" label="Has CEO" />
            <RHFSwitch name="rating_matrix.has_accountant" label="Has Accountant" />
            <RHFSwitch name="rating_matrix.has_ca_cs" label="Has CA/CS" />
            <RHFSwitch name="rating_matrix.has_gst" label="Has GST" />
            <RHFSwitch name="rating_matrix.has_fssai" label="Has FSSAI" />
            <RHFSwitch name="rating_matrix.has_export_license" label="Has Export License" />
            <RHFTextField name="rating_matrix.fpc_linkage" label="FPC Linkage" />
            <RHFTextField name="rating_matrix.warehouse_linkage" label="Warehouse Linkage" />
            <RHFSwitch name="rating_matrix.benefit_crop_advisory" label="Benefit Crop Advisory" />
            <RHFSwitch name="rating_matrix.benefit_custom_hiring" label="Benefit Custom Hiring" />
            <RHFSwitch name="rating_matrix.benefit_collection" label="Benefit Collection" />
            <RHFSwitch name="rating_matrix.benefit_other" label="Benefit Other" />
            <RHFTextField name="rating_matrix.turnover_range" label="Turnover Range" />
            <RHFTextField name="rating_matrix.land_status" label="Land Status" />
            <RHFTextField
              name="rating_matrix.convergence_scheme_count"
              label="Convergence Scheme Count"
            />
            <RHFSwitch name="rating_matrix.loan_availed" label="Loan Availed" />
            <RHFSwitch name="rating_matrix.regular_repayment" label="Regular Repayment" />
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