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

        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Rating Matrix /
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
            <RHFTextField name="rating_matrix.operational_age" label="Operational Age" />
            <RHFTextField
              name="rating_matrix.num_shareholders_range"
              label="Number of Shareholders Range"
            />
            <RHFTextField
              name="rating_matrix.participation_percent"
              label="Participation Percent"
            />
            <RHFTextField
              name="rating_matrix.num_women_directors_range"
              label="Number of Women Directors Range"
            />
            <RHFTextField
              name="rating_matrix.num_bod_meetings_range"
              label="Number of BoD Meetings Range"
            />
            <RHFTextField
              name="rating_matrix.training_participation_range"
              label="Training Participation Range"
            />
            <RHFSwitch name="rating_matrix.agm_conducted" label="AGM Conducted" />
            <RHFTextField
              name="rating_matrix.agm_participation_range"
              label="AGM Participation Range"
            />
            <RHFTextField name="rating_matrix.audit_status" label="Audit Status" />
            <RHFSwitch
              name="rating_matrix.share_allotment_updated"
              label="Share Allotment Updated"
            />
            <RHFSwitch name="rating_matrix.has_ceo" label="Has CEO" />
            <RHFSwitch name="rating_matrix.has_accountant" label="Has Accountant" />
            <RHFSwitch name="rating_matrix.has_ca_cs" label="Has CA/CS" />
            <RHFSwitch name="rating_matrix.has_seed_license" label="Has Seed License" />
            <RHFSwitch name="rating_matrix.has_fertilizer_license" label="Has Fertilizer License" />
            <RHFSwitch name="rating_matrix.has_pesticide_license" label="Has Pesticide License" />
            <RHFSwitch name="rating_matrix.has_gst" label="Has GST" />
            <RHFSwitch name="rating_matrix.has_fssai" label="Has FSSAI" />
            <RHFSwitch name="rating_matrix.has_export_license" label="Has Export License" />
            <RHFTextField name="rating_matrix.linkage_type" label="Linkage Type" />
            <RHFTextField
              name="rating_matrix.warehouse_linkage_type"
              label="Warehouse Linkage Type"
            />
            <RHFTextField name="rating_matrix.shareholder_growth" label="Shareholder Growth" />
            <RHFTextField
              name="rating_matrix.dividend_distribution"
              label="Dividend Distribution"
            />
            <RHFTextField name="rating_matrix.input_discount" label="Input Discount" />
            <RHFTextField
              name="rating_matrix.custom_hiring_discount"
              label="Custom Hiring Discount"
            />
            <RHFTextField name="rating_matrix.market_rate_increase" label="Market Rate Increase" />
            <RHFSwitch name="rating_matrix.has_warehouse_facility" label="Has Warehouse Facility" />
            <RHFTextField name="rating_matrix.turnover_range" label="Turnover Range" />
            <RHFTextField
              name="rating_matrix.convergence_scheme_count"
              label="Convergence Scheme Count"
            />
            <RHFTextField name="rating_matrix.loan_status" label="Loan Status" />
            <RHFSwitch name="rating_matrix.has_regular_repayment" label="Has Regular Repayment" />
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
