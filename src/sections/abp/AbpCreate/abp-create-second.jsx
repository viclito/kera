/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { LoadingButton } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Grid, Stack, Button, Typography } from '@mui/material';

import { RHFTextField } from 'src/components/hook-form';

export default function AbpCreateSecond({ field, append, setStep, remove, field2, append2, remove2 }) {
  return (
    <div>
      <Grid container sx={{ mt: 3 }}>
        {/* Promoters */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Promoters
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button
              onClick={() =>
                append({
                  name: "",
                  designation: "",
                  contact_number: "",
                  email: "",
                  category: "",
                  gender: ""
                })
              }
              size="small"
              variant="contained"
            >
              <AddIcon sx={{ fontSize: '16px', mr: 1 }} /> Add Promoters
            </Button>
          </Box>

          {field?.map((item, index) => (
            <Box key={index} sx={{ borderBottom: '1px solid #E0E0E0', pb: 2 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 2 }}
              >
                <Button onClick={() => remove(index)} variant="contained" size="small">
                  <DeleteIcon sx={{ fontSize: '16px', mr: 1 }} /> Delete
                </Button>
              </Box>
              <Box
                gap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(3, 1fr)',
                }}
                sx={{ mb: 2 }}
              >
                <RHFTextField name={`promoters[${index}].name`} label="Name" />
                <RHFTextField name={`promoters[${index}].designation`} label="Designation" />
                <RHFTextField name={`promoters[${index}].contact_number`} label="Contact Number" />
                <RHFTextField name={`promoters[${index}].email`} label="Email" />
                <RHFTextField name={`promoters[${index}].category`} label="Category" />
                <RHFTextField name={`promoters[${index}].gender`} label="Gender" />
              </Box>
            </Box>
          ))}
        </Grid>

        {/* Components */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Commodities
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button
              onClick={() =>
                append2({
                  name: "",
                  products: ""
                })
              }
              size="small"
              variant="contained"
            >
              <AddIcon sx={{ fontSize: '16px', mr: 1 }} /> Add Commodities
            </Button>
          </Box>

          {field2?.map((item, index) => (
            <Box key={index} sx={{ borderBottom: '1px solid #E0E0E0', pb: 2 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 2 }}
              >
                <Button onClick={() => remove2(index)} variant="contained" size="small">
                  <DeleteIcon sx={{ fontSize: '16px', mr: 1 }} /> Delete
                </Button>
              </Box>
              <Box
                gap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(3, 1fr)',
                }}
                sx={{ mb: 2 }}
              >
                <RHFTextField name={`commodities[${index}].name`} label="Name" />
                <RHFTextField name={`commodities[${index}].products`} label="Products" />
                
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
