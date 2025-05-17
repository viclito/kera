/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { LoadingButton } from '@mui/lab'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box,Grid , Stack, Button, Typography } from '@mui/material'

import { RHFTextField } from 'src/components/hook-form'

export default function FpcCreateSeventh({field, append, setStep, remove ,field2, append2, remove2}) {
  return (
    <div>
      <Grid container sx={{ mt: 3 }}>
                    {/* Staff Members */}
                    <Grid xs={12}>
                      
                      <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
                            Grants / 
                      </Typography>
      
                      <Box
                        sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
                      >
                        <Button
                          onClick={() =>
                            append({
                                scheme_name: "",
                                department: "",
                                grant_amount: "",
                                year_received: null
                            })
                          }
                          size="small"
                          variant="contained"
                        >
                          <AddIcon sx={{fontSize:'16px' , mr:1}}/> Add Grants
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
                            <RHFTextField name={`grants[${index}].scheme_name`} label="Scheme Name" />
                            <RHFTextField name={`grants[${index}].department`} label="Department" />
                            <RHFTextField name={`grants[${index}].grant_amount`} label="Grant Amount" />
                            <RHFTextField name={`grants[${index}].year_received`} label="Year Received" />
                            
                            
                          </Box>
      
                          
                        </Box>
                      ))}
                      
                    </Grid>

                    <Grid xs={12}>
                      <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
                            Components / 
                      </Typography>
      
                      <Box
                        sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
                      >
                        <Button
                          onClick={() =>
                            append2({
                                detail: "",
                                number: null,
                                capacity: "",
                                estimated_cost_lakhs: ""
                            })
                          }
                          size="small"
                          variant="contained"
                        >
                          <AddIcon sx={{fontSize:'16px' , mr:1}}/> Add Components
                        </Button>
                      </Box>
      
                      {field2.map((item, index) => (
                        <Box key={index} sx={{ borderBottom:'1px solid #E0E0E0' , pb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' , mt:2}}>
                            <Button onClick={() => remove2(index)} variant="contained" size="small">
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
                            <RHFTextField name={`components[${index}].detail`} label="Detail" />
                            <RHFTextField name={`components[${index}].number`} label="Number" />
                            <RHFTextField name={`components[${index}].capacity`} label="Capacity" />
                            <RHFTextField name={`components[${index}].estimated_cost_lakhs`} label="Estimated Cost Lakhs" />
                            
                            
                          </Box>
      
                          
                        </Box>
                      ))}
                      
                    </Grid>
      
                    <Stack
                      direction="row"
                      sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 , width: '100%'}}
                    >
                      <LoadingButton size="small" variant="outlined" onClick={() => setStep(6)}>
                        Back
                      </LoadingButton>
                      <LoadingButton size="small" variant="contained" onClick={() => setStep(8)}>
                        Next
                      </LoadingButton>
                    </Stack>
                  </Grid>
    </div>
  )
}
