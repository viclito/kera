/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { LoadingButton } from '@mui/lab'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box,Grid , Stack, Button, Typography } from '@mui/material'

import { RHFTextField } from 'src/components/hook-form'

export default function FpcCreateSixth({field, append, setStep, remove ,field2, append2, remove2}) {
  return (
    <div>
      <Grid container sx={{ mt: 3 }}>
                    {/* Staff Members */}
                    <Grid xs={12}>
                      
                      <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
                            Turnovers / ലാഭം
                      </Typography>
      
                      <Box
                        sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
                      >
                        <Button
                          onClick={() =>
                            append({
                                financial_year: "",
                                turnover: "",
                                profit: "",
                                loss: ""
                            })
                          }
                          size="small"
                          variant="contained"
                        >
                          <AddIcon sx={{fontSize:'16px' , mr:1}}/> Add Turnovers
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
                            <RHFTextField name={`turnovers[${index}].financial_year`} label="Financial Year" />
                            <RHFTextField name={`turnovers[${index}].turnover`} label="Turnover" />
                            <RHFTextField name={`turnovers[${index}].profit`} label="Profit" />
                            <RHFTextField name={`turnovers[${index}].loss`} label="Loss" />
                            
                          </Box>
      
                          
                        </Box>
                      ))}
                      
                    </Grid>

                    <Grid xs={12}>
                      <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
                            Credits / വായ്പകൾ
                      </Typography>
      
                      <Box
                        sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
                      >
                        <Button
                          onClick={() =>
                            append2({
                                financial_year: "",
                                loan_amount: "",
                                fund_source: "",
                                term_period: "",
                                purpose: "",
                                repayment: "",
                                outstanding: ""
                            })
                          }
                          size="small"
                          variant="contained"
                        >
                          <AddIcon sx={{fontSize:'16px' , mr:1}}/> Add Credits
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
                            <RHFTextField name={`credits[${index}].financial_year`} label="Financial Year" />
                            <RHFTextField name={`credits[${index}].loan_amount`} label="Loan Amount" />
                            <RHFTextField name={`credits[${index}].fund_source`} label="Fund Source" />
                            <RHFTextField name={`credits[${index}].term_period`} label="Term Period" />
                            <RHFTextField name={`credits[${index}].purpose`} label="Purpose" />
                            <RHFTextField name={`credits[${index}].repayment`} label="Repayment" />
                            <RHFTextField name={`credits[${index}].outstanding`} label="Outstanding" />
                            
                            
                          </Box>
      
                          
                        </Box>
                      ))}
                      
                    </Grid>
      
                    <Stack
                      direction="row"
                      sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 , width: '100%'}}
                    >
                      <LoadingButton size="small" variant="outlined" onClick={() => setStep(5)}>
                        Back
                      </LoadingButton>
                      <LoadingButton size="small" variant="contained" onClick={() => setStep(7)}>
                        Next
                      </LoadingButton>
                    </Stack>
                  </Grid>
    </div>
  )
}
