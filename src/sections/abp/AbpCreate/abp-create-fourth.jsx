/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { LoadingButton } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Grid, Stack, Button, Typography } from '@mui/material';

import { RHFSwitch, RHFTextField } from 'src/components/hook-form';

export default function AbpCreateFourth({ field, append, setStep, remove, field2, append2, remove2 }) {
  return (
    <div>
      <Grid container sx={{ mt: 3 }}>
        {/* Promoters */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            FCP Interest
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button
              onClick={() =>
                append({
                    fpc_name: "",
                    reason: ""
                })
              }
              size="small"
              variant="contained"
            >
              <AddIcon sx={{ fontSize: '16px', mr: 1 }} /> Add FCP
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
                <RHFTextField name={`fpc_interest[${index}].fpc_name`} label="FCP Name" />
                <RHFTextField name={`fpc_interest[${index}].reason`} label="Reason" />
                
              </Box>
            </Box>
          ))}
        </Grid>

        {/* Components */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Business Activities
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button
              onClick={() =>
                append2({
                    key: "",
                    activity: "",
                    monthly_turnover: "",
                    yearly_turnover: "",
                    profit: ""
                })
              }
              size="small"
              variant="contained"
            >
              <AddIcon sx={{ fontSize: '16px', mr: 1 }} /> Add Business
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
                <RHFTextField name={`business_activities[${index}].key`} label="Key" />
                <RHFTextField name={`business_activities[${index}].activity`} label="Activity" />
                <RHFTextField name={`business_activities[${index}].monthly_turnover`} label="Monthly Turnover" />
                <RHFTextField name={`business_activities[${index}].yearly_turnover`} label="Yearly Turnover" />
                <RHFTextField name={`business_activities[${index}].profit`} label="Profit" />
                
              </Box>
            </Box>
          ))}
        </Grid>

        <Stack
          direction="row"
          sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2, width: '100%' }}
        >
          <LoadingButton size="small" variant="outlined" onClick={() => setStep(3)}>
            Back
          </LoadingButton>
          <LoadingButton size="small" variant="contained" onClick={() => setStep(5)}>
            Next
          </LoadingButton>
        </Stack>
      </Grid>
    </div>
  );
}
