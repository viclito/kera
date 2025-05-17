/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { LoadingButton } from '@mui/lab'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box,Grid , Stack, Button, Typography } from '@mui/material'

import { RHFSwitch, RHFTextField } from 'src/components/hook-form'

export default function FpcCreateEight({field, append, setStep, remove ,field2, append2, remove2}) {
  return (
    <div>
      <Grid container sx={{ mt: 3 }}>
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Infrastructure / 
          </Typography>
          <Box
            sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
          >
            <Button
              onClick={() =>
                append({
                  item: '',
                  available: true,
                  source: ''
                })
              }
              size="small"
              variant="contained"
            >
              <AddIcon sx={{ fontSize: '16px', mr: 1 }} /> Add Infrastructure
            </Button>
          </Box>
          {field.map((item, index) => (
            <Box key={index} sx={{ borderBottom: '1px solid #E0E0E0', pb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 2 }}>
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
                <RHFTextField name={`infrastructure[${index}].item`} label="Item" />
                <RHFTextField name={`infrastructure[${index}].source`} label="Source" />
                <RHFSwitch name={`infrastructure[${index}].available`} label="Available" sx={{m:3}}/>
              </Box>
            </Box>
          ))}
        </Grid>

        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            ABP Interest / 
          </Typography>
          <Box
            sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
          >
            <Button
              onClick={() =>
                append2({
                  abp_name: '',
                  reason: ''
                })
              }
              size="small"
              variant="contained"
            >
              <AddIcon sx={{ fontSize: '16px', mr: 1 }} /> Add ABP Interest
            </Button>
          </Box>
          {field2.map((item, index) => (
            <Box key={index} sx={{ borderBottom: '1px solid #E0E0E0', pb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 2 }}>
                <Button onClick={() => remove2(index)} variant="contained" size="small">
                  <DeleteIcon sx={{ fontSize: '16px', mr: 1 }} /> Delete
                </Button>
              </Box>
              <Box
                gap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                }}
                sx={{ mb: 2 }}
              >
                <RHFTextField name={`abp_interest[${index}].abp_name`} label="ABP Name" />
                <RHFTextField name={`abp_interest[${index}].reason`} label="Reason" />
              </Box>
            </Box>
          ))}
        </Grid>

        <Stack
          direction="row"
          sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 , width: '100%'}}
        >
          <LoadingButton size="small" variant="outlined" onClick={() => setStep(7)}>
            Back
          </LoadingButton>
          <LoadingButton size="small" variant="contained" onClick={() => setStep(9)}>
            Next
          </LoadingButton>
        </Stack>
      </Grid>
    </div>
  )
}
