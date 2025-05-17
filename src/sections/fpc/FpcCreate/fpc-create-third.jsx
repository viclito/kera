import { LoadingButton } from '@mui/lab'
import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { RHFTextField } from 'src/components/hook-form'

export default function FpcCreateThird({setStep , defaultValues}) {
  return (
    <div>
        <Grid container sx={{ mt: 3 }}>
                      {/* Member Categories */}
                      <Grid xs={12}>
                        <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>
                          Member Categories / അംഗങ്ങളുടെ വിഭാഗങ്ങൾ
                        </Typography>
                        {defaultValues?.map((item, index) => (
                          <Box
                            sx={{ borderBottom: index === 3 ? '0px solid' : '1px solid #E0E0E0', pb: 2 }}
                          >
                            <Typography variant="subtitle2" sx={{ mt: 3, mb: 1.5 }}>
                              {index === 0 && 'Scheduled Caste'}
                              {index === 1 && 'Scheduled Tribe'}
                              {index === 2 && 'OBC'}
                              {index === 3 && 'General'}
                            </Typography>
                            <Box
                              key={index}
                              gap={2}
                              display="grid"
                              gridTemplateColumns={{
                                xs: 'repeat(1, 1fr)',
                                sm: 'repeat(4, 1fr)',
                              }}
                              sx={{ mb: 2 }}
                            >
                              <RHFTextField
                                name={`member_categories[${index}].category`}
                                label="Category"
                                value={item.category}
                                disabled
                              />
                              <RHFTextField
                                name={`member_categories[${index}].male_number`}
                                label="Male Number"
                                type="number"
                              />
                              <RHFTextField
                                name={`member_categories[${index}].female_number`}
                                label="Female Number"
                                type="number"
                              />
                              <RHFTextField
                                name={`member_categories[${index}].transgender_number`}
                                label="Transgender Number"
                                type="number"
                              />
                              <RHFTextField
                                name={`member_categories[${index}].total_number`}
                                label="Total Number"
                                type="number"
                                disabled
                              />
                              <RHFTextField
                                name={`member_categories[${index}].male_percentage`}
                                label="Male Percentage"
                                type="text"
                                disabled
                              />
                              <RHFTextField
                                name={`member_categories[${index}].female_percentage`}
                                label="Female Percentage"
                                type="text"
                                disabled
                              />
                              <RHFTextField
                                name={`member_categories[${index}].transgender_percentage`}
                                label="Transgender Percentage"
                                type="text"
                                disabled
                              />
                              <RHFTextField
                                name={`member_categories[${index}].total_percentage`}
                                label="Total Percentage"
                                type="text"
                                disabled
                              />
                            </Box>
                          </Box>
                        ))}
                      </Grid>
        
                      <Stack
                        direction="row"
                        sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 , width: '100%'}}
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
  )
}
