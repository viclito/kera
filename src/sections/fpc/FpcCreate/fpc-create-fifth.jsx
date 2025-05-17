import PropTypes from 'prop-types';

import { LoadingButton } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Grid, Stack, Button, Typography } from '@mui/material';

import {  RHFTextField } from 'src/components/hook-form';

export default function FpcCreateFifth({
  field,
  append,
  setStep,
  remove,
  field2,
  append2,
  remove2,
}) {
  return (
    <div>
      <Grid container sx={{ mt: 3 }}>
        {/* Staff Members */}
        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Collected Produce / ശേഖരിച്ച ഉൽപ്പന്നങ്ങൾ
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button
              onClick={() =>
                append2({
                  commodity_primary: '',
                  commodity_secondary: '',
                  last_fy_area: '',
                  last_fy_production: '',
                  current_fy_area: '',
                  current_fy_production: '',
                })
              }
              size="small"
              variant="contained"
            >
              <AddIcon sx={{ fontSize: '16px', mr: 1 }} /> Add Collected Produce
            </Button>
          </Box>

          {field2.map((item, index) => (
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
                <RHFTextField
                  name={`collected_produce[${index}].commodity_primary`}
                  label="Commodity Primary"
                />
                <RHFTextField
                  name={`collected_produce[${index}].commodity_secondary`}
                  label="Commodity Secondary"
                />
                <RHFTextField
                  name={`collected_produce[${index}].last_fy_area`}
                  label="Last FY Area"
                />
                <RHFTextField
                  name={`collected_produce[${index}].last_fy_production`}
                  label="Last FY Production"
                />
                <RHFTextField
                  name={`collected_produce[${index}].current_fy_area`}
                  label="Current FY Area"
                />
                <RHFTextField
                  name={`collected_produce[${index}].current_fy_production`}
                  label="Current FY Production"
                />
              </Box>
            </Box>
          ))}
        </Grid>

        <Grid xs={12}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
            Business Activities / ബിസിനസ് പ്രവർത്തനങ്ങൾ
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button
              onClick={() =>
                append({
                  key: '',
                  activity_name: '',
                  turnover: '',
                  profit: '',
                })
              }
              size="small"
              variant="contained"
            >
              <AddIcon sx={{ fontSize: '16px', mr: 1 }} /> Add Business Activities
            </Button>
          </Box>

          {field.map((item, index) => (
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
                <RHFTextField name={`business_activities[${index}].key`} label="key" />
                <RHFTextField
                  name={`business_activities[${index}].activity_name`}
                  label="Activity Name"
                />
                <RHFTextField name={`business_activities[${index}].turnover`} label="turnover" />
                <RHFTextField name={`business_activities[${index}].profit`} label="Profit" />
              </Box>
            </Box>
          ))}
        </Grid>

        <Stack
          direction="row"
          sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2, width: '100%' }}
        >
          <LoadingButton size="small" variant="outlined" onClick={() => setStep(4)}>
            Back
          </LoadingButton>
          <LoadingButton size="small" variant="contained" onClick={() => setStep(6)}>
            Next
          </LoadingButton>
        </Stack>
      </Grid>
    </div>
  );
}

FpcCreateFifth.propTypes = {
  field: PropTypes.array.isRequired,
  append: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  field2: PropTypes.array.isRequired,
  append2: PropTypes.func.isRequired,
  remove2: PropTypes.func.isRequired,
};
