import { LoadingButton } from '@mui/lab';
import { Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { RHFSwitch, RHFDropDown, RHFTextField } from 'src/components/hook-form';

export default function AbpCreateFirst({ methods, setStep }) {
  return (
    <div>
      <Grid container sx={{ mt: 3 }}>
        {/* Basic FPC Information */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Basic FPC Information / എഫ്.പി.സി അടിസ്ഥാന വിവരങ്ങൾ
          </Typography>
          <Box
            gap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
          >
            {/* <RHFSwitch name="is_deleted" label="Is Deleted" /> */}
            <RHFDropDown
              name="application_status"
              label="Application Status"
              options={[
                { label: 'Pending', value: 'pending' },
                { label: 'Approved', value: 'approved' },
              ]}
            />
            {/* <RHFSwitch name="is_draft" label="Is Draft" /> */}
            <RHFTextField name="applicant_name" label="Applicant Name" />
            <RHFDropDown
              name="gender"
              label="Gender"
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
              ]}
            />
            <RHFTextField name="mobile_number" label="Mobile Number" />
            <RHFTextField name="application_address" label="Application Address" />
            <RHFTextField name="email" label="Email" />
            <RHFTextField name="phone" label="Phone" />
            <RHFTextField name="firm_name" label="Firm Name" />
            <RHFTextField name="firm_location" label="Firm Location" />
            <RHFTextField name="block" label="Block" />
            <RHFDropDown
              name="district"
              label="District"
              options={[
                { label: 'District 1', value: 'district1' },
                { label: 'District 2', value: 'district2' },
              ]}
            />
            <RHFTextField name="pin_code" label="PIN Code" />
            <RHFTextField name="communication_address" label="Communication Address" />
          </Box>
        </Grid>

        {/* Registration Details */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Registration Details / രജിസ്ട്രേഷൻ വിശദാംശങ്ങൾ
          </Typography>
          <Box
            gap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <RHFTextField name="registration_number" label="Registration Number" />
            <RHFTextField name="firm_type" label="Firm Type" />
            <RHFTextField name="tan" label="TAN" />
            <RHFTextField name="pan" label="PAN" />
            <RHFTextField name="gst" label="GST" />
            <RHFTextField
              name="registration_date"
              label="Registration Date"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
            <RHFTextField name="num_directors" label="Number of Directors" type="number" />
            <RHFTextField name="women_directors" label="Number of Women Directors" type="number" />
            <RHFTextField name="paid_up_capital" label="Paid Up Capital" type="number" />
          </Box>
        </Grid>

        {/* Business Information */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Business Information / ബിസിനസ് വിവരങ്ങൾ
          </Typography>
          <Box
            gap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <RHFTextField name="business_type" label="Business Type" />
            <RHFTextField name="present_structure" label="Present Structure" multiline rows={3} />
            <RHFTextField name="intended_products" label="Intended Products" multiline rows={3} />
            <RHFTextField name="brand_name" label="Brand Name" />
            <RHFTextField name="marketing_avenues" label="Marketing Avenues" />
            <RHFTextField name="abp_fpc_dealings" label="ABP-FPC Dealings" />
            <RHFTextField name="benefits_from_govt" label="Benefits from Government" />
            <RHFTextField name="infra_details" label="Infrastructure Details" multiline rows={3} />
            <RHFTextField name="awards" label="Awards" multiline rows={2} />
            <RHFTextField name="num_working_staff" label="Number of Working Staff" type="number" />
            <RHFTextField name="other_details" label="Other Details" multiline rows={2} />
            <RHFTextField
              name="business_plan_summary"
              label="Business Plan Summary"
              multiline
              rows={2}
            />
            <RHFTextField name="creator" label="Creator" />
            <RHFTextField name="updater" label="Updater" />
          </Box>
        </Grid>

        <Stack
          direction="row"
          sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2, width: '100%' }}
        >
          <LoadingButton size="small" variant="contained" onClick={() => setStep(2)}>
            Next
          </LoadingButton>
        </Stack>
      </Grid>
    </div>
  );
}

AbpCreateFirst.propTypes = {
  methods: PropTypes.object.isRequired,
  setStep: PropTypes.func.isRequired,
};
