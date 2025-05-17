/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { LoadingButton } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Grid, Stack, Button, Typography } from '@mui/material';

import { RHFSwitch, RHFTextField } from 'src/components/hook-form';

export default function AbpCreateThird({ field, append, setStep, remove, field2, append2, remove2 }) {
  return (
    <div>
      <Grid container sx={{ mt: 3 }}>
        {/* Promoters */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Components
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button
              onClick={() =>
                append({
                    detail: "",
                    number: null,
                    capacity: "",
                    estimated_cost_lakhs: ""
                })
              }
              size="small"
              variant="contained"
            >
              <AddIcon sx={{ fontSize: '16px', mr: 1 }} /> Add Components
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
                <RHFTextField name={`components[${index}].detail`} label="Detail" />
                <RHFTextField name={`components[${index}].number`} label="Number" />
                <RHFTextField name={`components[${index}].capacity`} label="Capacity" />
                <RHFTextField name={`components[${index}].estimated_cost_lakhs`} label="Estimated Cost in Lakhs" />
              </Box>
            </Box>
          ))}
        </Grid>

        {/* Components */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Infra Availability
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button
              onClick={() =>
                append2({
                    item: "",
                    available: true,
                    source: ""
                })
              }
              size="small"
              variant="contained"
            >
              <AddIcon sx={{ fontSize: '16px', mr: 1 }} /> Add Infra
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
                <RHFTextField name={`infra_availability[${index}].item`} label="Item" />
                <RHFTextField name={`infra_availability[${index}].source`} label="Source" />
                <RHFSwitch name={`infra_availability[${index}].available`} label="Available" sx={{m:2}}/>
                
              </Box>
            </Box>
          ))}
        </Grid>

        <Stack
          direction="row"
          sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2, width: '100%' }}
        >
          <LoadingButton size="small" variant="outlined" onClick={() => setStep(2)}>
            Back
          </LoadingButton>
          <LoadingButton size="small" variant="contained" onClick={() => setStep(4)}>
            Next
          </LoadingButton>
        </Stack>
      </Grid>
    </div>
  );
}
