import PropTypes from 'prop-types';
import { useWatch } from 'react-hook-form';
import React, { useEffect, useState } from 'react';

import { LoadingButton } from '@mui/lab';
import { Box, Stack } from '@mui/system';
import { Grid, Typography } from '@mui/material';

import { getBlock, getDistrict } from 'src/api/common/common';

import { RHFSwitch, RHFDropDown, RHFTextField } from 'src/components/hook-form';

export default function FpcCreateFirst({ methods, setStep }) {
  const [districtOptions, setDistrictOptions] = useState([]);
  const [blockOptions, setBlockOptions] = useState([]);

  const selectedDistrict = useWatch({ control: methods.control, name: 'district' });

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const res = await getDistrict({ limit: 100, offset: 0 });
        const options =
          res?.results?.map((d) => ({
            label: d.name, // Adjust if API returns different structure
            value: d.id,
          })) || [];
        setDistrictOptions(options);
      } catch (error) {
        console.error('Error loading districts', error);
      }
    };

    fetchDistricts();
  }, []);

  useEffect(() => {
    const fetchBlocks = async () => {
      if (!selectedDistrict) {
        setBlockOptions([]);
        return;
      }

      try {
        const res = await getBlock({ limit: 100, offset: 0, district_id: selectedDistrict });
        const options =
          res?.results?.map((b) => ({
            label: b.name, // Adjust if needed
            value: b.id,
          })) || [];
        setBlockOptions(options);
      } catch (error) {
        console.error('Error loading blocks', error);
      }
    };

    fetchBlocks();
  }, [selectedDistrict]);

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
            <RHFTextField name="applicant_name" label="Applicant Name" />
            <RHFTextField name="mobile_number" label="Mobile Number" />
            <RHFTextField name="email" label="Email" />
            <RHFTextField name="phone" label="Phone" />
            <RHFTextField name="fpc_name" label="FPC Name" />
            <RHFTextField name="fpc_location" label="FPC Location" />
            <RHFDropDown
              name="district"
              label="Select District"
              placeholder="Choose a District"
              options={districtOptions}
            />
            <RHFDropDown name="block" label="Block" options={blockOptions} />
            <RHFTextField name="pin_code" label="PIN Code" />
            <RHFTextField
              name="communication_address"
              label="Communication Address"
              multiline
              rows={3}
            />
            <RHFTextField
              name="application_address"
              label="Application Address"
              multiline
              rows={3}
            />
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
            <RHFTextField name="cin_number" label="CIN Number" />
            <RHFTextField name="tan" label="TAN" />
            <RHFTextField name="pan" label="PAN" />
            <RHFTextField name="gst" label="GST" />
            <RHFTextField
              name="registration_date"
              label="Registration Date"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
            <RHFTextField name="num_bod_members" label="Number of BoD Members" type="number" />
            <RHFTextField name="num_bod_women" label="Number of Women BoD Members" type="number" />
            <RHFTextField name="num_shareholders" label="Number of Shareholders" type="number" />
            <RHFTextField name="paid_up_capital" label="Paid Up Capital (₹)" type="number" />
            <RHFSwitch name="is_women_fpc" label="Is Women FPC" />
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
            <RHFTextField
              name="present_infrastructure"
              label="Present Infrastructure"
              multiline
              rows={3}
            />
            <RHFTextField name="raw_materials" label="Raw Materials" multiline rows={3} />
            <RHFTextField name="brand_name" label="Brand Name" />
            <RHFTextField name="market_location" label="Market Location" />
            <RHFSwitch name="is_gi_product" label="Is GI Product" />
            <RHFTextField
              name="gi_details"
              label="GI Details"
              multiline
              rows={2}
              disabled={!methods.watch('is_gi_product')}
            />
            <RHFSwitch name="is_tribal_or_forest" label="Is Tribal or Forest Product" />
            <RHFTextField
              name="tribal_details"
              label="Tribal/Forest Details"
              multiline
              rows={2}
              disabled={!methods.watch('is_tribal_or_forest')}
            />
            <RHFSwitch name="is_export_apeda" label="Is Export/APEDA Registered" />
            <RHFTextField
              name="apeda_details"
              label="Export/APEDA Details"
              multiline
              rows={2}
              disabled={!methods.watch('is_export_apeda')}
            />
            <RHFTextField name="promoter_agency" label="Promoter Agency" />
            <RHFTextField name="services_provided" label="Services Provided" multiline rows={2} />
            <RHFTextField name="awards" label="Awards & Recognition" multiline rows={2} />
            <RHFSwitch name="npa_declared" label="NPA Declared" />
            <RHFSwitch name="has_power_of_attorney" label="Has Power of Attorney" />
          </Box>
        </Grid>

        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Rating Matrix / റേറ്റിംഗ് മാട്രിക്സ്
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
            <RHFDropDown
              name="rating_matrix.operational_age"
              label="Operational Age of FPC from date of registration"
              options={[
                { label: '2-3', value: '2-3' },
                { label: '3-5', value: '3-5' },
                { label: '5+', value: '5+' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.num_shareholders_range"
              label="Number of shareholders in the FPC"
              options={[
                { label: '<200', value: '<200' },
                { label: '200-500', value: '200-500' },
                { label: '500-750', value: '500-750' },
                { label: '750+', value: '750+' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.social_mobilization"
              label="Social Mobilization"
              options={[
                { label: 'Up to 25%', value: '0-25' },
                { label: '26-50%', value: '26-50' },
                { label: '51-75%', value: '51-75' },
                { label: 'Above 75%', value: '75+' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.num_women_directors_range"
              label="Women Directors"
              options={[
                { label: '1-2', value: '1-2' },
                { label: '3-4', value: '3-4' },
                { label: '5+', value: '5+' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.num_bod_meetings_range"
              label="Number of BoD meetings conducted in a year"
              options={[
                { label: '4-8', value: '4-8' },
                { label: '9-12', value: '9-12' },
                { label: '12+', value: '12+' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.training_participation_range"
              label="Participation of the board members in trainings"
              options={[
                { label: '1-3', value: '1-3' },
                { label: '4-6', value: '4-6' },
                { label: '7-10', value: '7-10' },
                { label: '10+', value: '10+' },
              ]}
            />
            <RHFSwitch name="rating_matrix.agm_conducted" label="Annual general body meeting conducted" />
            <RHFDropDown
              name="rating_matrix.agm_participation_range"
              label="Participation of shareholders for the AGM"
              options={[
                { label: '0-50', value: '0-50'},
                { label: '51-75', value: '51-75' },
                { label: '75+', value: '75+' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.audit_status"
              label="Audits Undertaken"
              options={[
                { label: 'non-compliant', value: 'non_compliant' },
                { label: 'compliant', value: 'compliant' },
              ]}
            />
            <RHFSwitch
              name="rating_matrix.share_allotment_updated"
              label="Share allotment to shareholders and updating in MCA (Ministry of Corporate Affairs) Portal"
            />
            <RHFSwitch name="rating_matrix.has_ceo" label="Full time Manager/CEO" />
            <RHFSwitch name="rating_matrix.has_accountant" label="Full time Accountant" />
            <RHFSwitch name="rating_matrix.has_ca_cs" label="Appointment of CA/CS" />
            <RHFSwitch name="rating_matrix.has_seed_license" label="Valid Seed license" />
            <RHFSwitch name="rating_matrix.has_fertilizer_license" label="Fertiliser license" />
            <RHFSwitch name="rating_matrix.has_gst" label="GST" />
            <RHFSwitch name="rating_matrix.has_fssai" label="FSSAI" />
            <RHFSwitch name="rating_matrix.has_export_license" label="APEDA/Export, etc" />
            <RHFDropDown
              name="rating_matrix.linkage_type"
              label="Direct linkages of FPCs"
              options={[
                { label: 'input', value: 'input' },
                { label: 'market', value: 'market' },
                { label: 'input and market', value: 'input and market' },
                { label: 'custom', value: 'custom' },
                { label: 'export', value: 'export' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.warehouse_linkage_type"
              label="Linkages with warehouse facility/ e-market linkages"
              options={[
                { label: 'warehouse', value: 'warehouse' },
                { label: 'etrade', value: 'etrade' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.shareholder_growth"
              label="Increase in number of shareholders since date of commencement of business"
              options={[
                { label: '25%', value: '25%' },
                { label: '26-50%', value: '26-50%' },
                { label: '51-75%', value: '51-75%' },
                { label: '75%+', value: '75%+' },
              ]}
            />
            
            <RHFDropDown
              name="rating_matrix.input_discount"
              label="Discount on input purchase"
              options={[
                { label: '10%', value: '10%' },
                { label: '11-20%', value: '11-20%' },
                { label: '20%', value: '20%' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.custom_hiring_discount"
              label="Discount from custom hiring"
              options={[
                { label: '<10%', value: '<10%' },
                { label: '>10%', value: '>10%' },
              ]}
            />
            <RHFDropDown
              name="rating_matrix.market_rate_increase"
              label="Collection marketing through FPC"
              options={[
                { label: '<10%', value: '<10%' },
                { label: '>10%', value: '>10%' },
              ]}
            />
            <RHFSwitch name="rating_matrix.has_warehouse_facility" label="Has Warehouse Facility" />
            <RHFDropDown
              name="rating_matrix.turnover_range"
              label="Turnover of FPC per year (as per audited balance sheet) in Rs."
              options={[
                { label: '<25L', value: '<25L' },
                { label: '26-50L', value: '26-50L' },
                { label: '51L-1C', value: '51L-1C' },
                { label: '1-2C', value: '1-2C' },
                { label: '>2C', value: '>2C' },
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
            <RHFDropDown
              name="rating_matrix.loan_status"
              label="Loan Availed"
              options={[
                { label: 'none', value: 'none' },
                { label: 'availed', value: 'availed' },
              ]}
            />
            <RHFSwitch name="rating_matrix.has_regular_repayment" label="Has Regular Repayment" />
          </Box>
        </Grid>

        <Stack
          direction="row"
          sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2, width: '100%' }}
        >
          <LoadingButton
            size="small"
            variant="contained"
            onClick={methods.handleSubmit(() => setStep(2))}
          >
            Next
          </LoadingButton>
        </Stack>
      </Grid>
    </div>
  );
}

FpcCreateFirst.propTypes = {
  methods: PropTypes.object.isRequired,
  setStep: PropTypes.func.isRequired,
};
