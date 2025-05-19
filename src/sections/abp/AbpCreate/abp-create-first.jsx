import React from 'react';
import PropTypes from 'prop-types';

import { LoadingButton } from '@mui/lab';
import { Box, Stack } from '@mui/system';
import { Grid, Typography } from '@mui/material';

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
            <RHFDropDown
              name="application_status"
              label="Application Status"
              options={[
                { label: 'Pending', value: 'pending' },
                { label: 'Approved', value: 'approved' },
              ]}
            />
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
            alignItems={{ sm: 'center' }} 
            placeItems={{ sm: 'center start' }}
          >
            <RHFDropDown
              name="rating_matrix.operational_age"
              label="Operational Age of ABP from date of registration"
              options={[
                { label: '2-3', value: '2-3' },
                { label: '3-5', value: '3-5' },
                { label: '5+', value: '5+' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.women_directors"
              label="Women Directors"
              options={[
                { label: '1-2', value: '1-2' },
                { label: '3-4', value: '3-4' },
                { label: '5+', value: '5+' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.bod_meetings"
              label="Number of BoD meetings conducted in a year"
              options={[
                { label: '4-8', value: '4-8' },
                { label: '9-12', value: '9-12' },
                { label: '12+', value: '12+' },
              ]}
            />
            <RHFSwitch name="rating_matrix.agm_conducted" label="Annual general body meeting conducted" />
            <RHFDropDown
              name="rating_matrix.agm_participation"
              label="Participation of shareholders for the AGM"
              options={[
                { label: '0-50', value: '0-50' },
                { label: '51-75', value: '51-75' },
                { label: '75+', value: '75+' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.audit_status"
              label="Audits Undertaken"
              options={[
                { label: 'non_compliant', value: 'non_compliant' },
                { label: 'compliant', value: 'compliant' },
              ]}
            />
            <RHFSwitch name="rating_matrix.has_ceo" label="Full time Manager/CEO" />
            <RHFSwitch name="rating_matrix.has_accountant" label="Full time Accountant" />
            <RHFSwitch name="rating_matrix.has_ca_cs" label="Appointment of CA/CS" />
            <RHFSwitch name="rating_matrix.has_gst" label="=GST" />
            <RHFSwitch name="rating_matrix.has_fssai" label="FSSAI" />
            <RHFSwitch name="rating_matrix.has_export_license" label="APEDA/Export, etc" />
            <RHFDropDown
              name="rating_matrix.fpc_linkage"
              label="Direct linkages with FPCs from Kerala"
              options={[
                { label: '1', value: '1' },
                { label: '2-5', value: '2-5' },
                { label: '5+', value: '5+' },
                { label: 'export', value: 'export' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.warehouse_linkage"
              label="Linkages with warehouse facility/ e-market linkages"
              options={[
                { label: 'own', value: 'own' },
                { label: 'link', value: 'link' },
                { label: 'etrade', value: 'etrade' },
              ]}
            />
            <RHFSwitch name="rating_matrix.benefit_crop_advisory" label="Crop advisory with required unique specifications" />
            <RHFSwitch name="rating_matrix.benefit_custom_hiring" label="Custom hiring support of machineries, primary and secondary processing, packaging, quality assurance, exports" />
            <RHFSwitch name="rating_matrix.benefit_collection" label="Collection centre/ storage" />
            <RHFSwitch name="rating_matrix.benefit_other" label="Any other Please specify" />
            <RHFDropDown
              name="rating_matrix.turnover_range"
              label="Turnover of FPC per year (as per audited balance sheet) in Rs."
              options={[
                { label: '10-12 Cr', value: '10-12' },
                { label: '12-15 Cr', value: '12-15' },
                { label: '15-20 Cr', value: '15-20' },
                { label: '20 Cr+', value: '20+' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.land_status"
              label="Lease/ Own Land"
              options={[
                { label: 'lease_basic', value: 'lease_basic' },
                { label: 'lease_infra', value: 'lease_infra' },
                { label: 'own_infra', value: 'own_infra' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.convergence_scheme_count"
              label="Convergence with state/ central government"
              options={[
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '>3', value: '>3' },
              ]}
            />
            <RHFSwitch name="rating_matrix.loan_availed" label="Need based loan availed from financial institutions- Working capital or term loan" />
            <RHFSwitch name="rating_matrix.regular_repayment" label="Regular repayments without defaults" />
          </Box>
        </Grid>


        <Stack
          direction="row"
          sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2, width: '100%' }}
        >
          <LoadingButton size="small" variant="contained" onClick={methods.handleSubmit(() => setStep(2))}>
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
