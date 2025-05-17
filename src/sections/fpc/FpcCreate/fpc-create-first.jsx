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
        const options = res?.results?.map((d) => ({
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
        const options = res?.results?.map((b) => ({
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
            <RHFTextField name="application_no" label="Application Number" />
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
            <RHFDropDown name="block" label="Block" options={blockOptions}/>
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

FpcCreateFirst.propTypes = {
  methods: PropTypes.object.isRequired,
  setStep: PropTypes.func.isRequired,
};
