/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { LoadingButton } from '@mui/lab'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box,Grid , Stack, Button, Typography } from '@mui/material'

import { RHFDropDown, RHFTextField } from 'src/components/hook-form'

export default function FpcCreateFourth({field, append, setStep, remove}) {
  return (
    <div>
        <Grid container sx={{ mt: 3 }}>
              {/* Staff Members */}
              <Grid xs={12}>
                <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
                  Staff Members / സ്റ്റാഫ് അംഗങ്ങൾ
                </Typography>

                <Box
                  sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
                >
                  <Button
                    onClick={() =>
                      append({
                        name: '',
                        designation: '',
                        education: '',
                        contact_number: '',
                        email: '',
                        category: '',
                        gender: '',
                        months_associated: null,
                        monthly_salary: '',
                      })
                    }
                    size="small"
                    variant="contained"
                  >
                    <AddIcon sx={{fontSize:'16px' , mr:1}}/> Add Staff Member
                  </Button>
                </Box>

                {field.map((item, index) => (
                  <Box key={index} sx={{ borderBottom:'1px solid #E0E0E0' , pb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' , mt:2}}>
                      <Button onClick={() => remove(index)} variant="contained" size="small">
                        <DeleteIcon sx={{fontSize:'16px' , mr:1}}/> Delete
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
                      <RHFTextField name={`staff_members[${index}].name`} label="Name" />
                      <RHFTextField
                        name={`staff_members[${index}].designation`}
                        label="Designation"
                      />
                      <RHFTextField name={`staff_members[${index}].education`} label="Education" />
                      <RHFTextField
                        name={`staff_members[${index}].contact_number`}
                        label="Contact Number"
                        type="number"
                      />
                      <RHFTextField name={`staff_members[${index}].email`} label="Email" />
                      <RHFDropDown
                        name={`staff_members[${index}].category`}
                        label="Category"
                        options={[
                          { label: 'SC', value: 'SC' },
                          { label: 'ST', value: 'ST' },
                          { label: 'OBC', value: 'OBC' },
                          { label: 'General', value: 'General' },
                        ]}
                      />
                      <RHFDropDown
                        name={`staff_members[${index}].gender`}
                        label="Gender"
                        options={[
                          { label: 'Male', value: 'male' },
                          { label: 'Female', value: 'female' },
                          { label: 'Other', value: 'other' },
                        ]}
                      />
                      <RHFTextField
                        name={`staff_members[${index}].months_associated`}
                        label="Months Associated"
                        type="number"
                      />
                      <RHFTextField
                        name={`staff_members[${index}].monthly_salary`}
                        label="Monthly Salary"
                        type="number"
                      />
                    </Box>

                    
                  </Box>
                ))}
                
              </Grid>

              <Stack
                direction="row"
                sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 , width: '100%'}}
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
  )
}
