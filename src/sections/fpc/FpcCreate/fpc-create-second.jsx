import React from 'react';
import PropTypes from 'prop-types';

import { LoadingButton } from '@mui/lab';
import { Box, Grid, Stack, Button, Typography } from '@mui/material';
import { AddBox, Delete, AddIcCallOutlined } from '@mui/icons-material';

import { RHFDropDown, RHFTextField } from 'src/components/hook-form';

export default function FpcCreateSecond({ append, remove, fields, setStep }) {
  return (
    <div>
      <Grid container sx={{ mt: 3 }}>
        {/* Board Members */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Board Members / ബോർഡ് അംഗങ്ങൾ
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button
              onClick={() =>
                append({
                  name: '',
                  designation: '',
                  din: '',
                  contact_number: '',
                  category: '',
                  gender: '',
                })
              }
              variant="contained"
              size="small"
            >
              <AddBox sx={{ fontSize: '16px', mr: 1 }} /> Add Board Member
            </Button>
          </Box>
          {fields.map((item, index) => (
            <Box sx={{ borderBottom: '1px solid #E0E0E0', pb: 2 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 2 }}
              >
                <Button onClick={() => remove(index)} variant="contained" size="small">
                  <Delete sx={{ fontSize: '16px', mr: 1 }} /> Delete
                </Button>
              </Box>
              <Box
                key={item.id}
                gap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(3, 1fr)',
                }}
                sx={{ mb: 2 }}
              >
                <RHFTextField name={`board_members[${index}].name`} label="Name" />
                <RHFTextField name={`board_members[${index}].designation`} label="Designation" />
                <RHFTextField name={`board_members[${index}].din`} label="DIN" />
                <RHFTextField
                  name={`board_members[${index}].contact_number`}
                  label="Contact Number"
                  type="number"
                />
                <RHFDropDown
                  name={`board_members[${index}].category`}
                  label="Category"
                  options={[
                    { label: 'SC', value: 'SC' },
                    { label: 'ST', value: 'ST' },
                    { label: 'OBC', value: 'OBC' },
                    { label: 'General', value: 'General' },
                  ]}
                />
                <RHFDropDown
                  name={`board_members[${index}].gender`}
                  label="Gender"
                  options={[
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                    { label: 'Other', value: 'other' },
                  ]}
                />
              </Box>
            </Box>
          ))}
        </Grid>
        <Stack
          direction="row"
          sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2, width: '100%' }}
        >
          <LoadingButton size="small" variant="outlined" onClick={() => setStep(1)}>
            Back
          </LoadingButton>
          <LoadingButton size="small" variant="contained" onClick={() => setStep(3)}>
            Next
          </LoadingButton>
        </Stack>
      </Grid>
    </div>
  );
}

FpcCreateSecond.propTypes = {
  append: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  setStep: PropTypes.func.isRequired,
};
