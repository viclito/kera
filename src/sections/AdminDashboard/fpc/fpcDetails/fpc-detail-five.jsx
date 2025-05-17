import React from 'react';

import { Box, Grid, List, ListItem, Typography, ListItemText } from '@mui/material';

import { InfoListItem } from './InfoListItem';

export default function FPCDetailFive() {
  const defaultData = {
    presentInfrastructure: {
      rawMaterials: 'Rice, Wheat, Pulses',
      landName: 'Green Valley Farms',
      location: 'Domestic',
      giProducts: 'Yes - Basmati Rice (GI Registered)',
      tribalAreaInfo: 'No',
    },
    additionalInfo: {
      apedaSchemes: "Yes - Under APEDA's Agricultural Export Promotion Scheme",
      promotedBy: 'Government agencies - NABARD, SFAC Kerala',
      servicesProvided: 'Input supply, Training, Weather data, Market linkage',
      awards: 'Best FPC Award 2022, State Agriculture Excellence Award',
    },
  };

  const data = defaultData;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
        Inventory of the FPCs
      </Typography>

      {/* Present Infrastructure Section */}
      <>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
          Present infrastructure
        </Typography>

        <List dense>
          <ListItem>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ListItemText primary="Products details - name of the raw materials available" />
              </Grid>
              <Grid item xs={8}>
                <Typography>{data.presentInfrastructure.rawMaterials}</Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ListItemText primary="Land Name" />
              </Grid>
              <Grid item xs={8}>
                <Typography>{data.presentInfrastructure.landName}</Typography>
              </Grid>
            </Grid>
          </ListItem>

          <InfoListItem
            label="Location - Local/domestic/international"
            value={data.presentInfrastructure.location}
          />

          <ListItem>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ListItemText primary="GI registered products details" />
              </Grid>
              <Grid item xs={8}>
                <Typography>{data.presentInfrastructure.giProducts}</Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ListItemText primary="Tribal area or forest products info" />
              </Grid>
              <Grid item xs={8}>
                <Typography>{data.presentInfrastructure.tribalAreaInfo}</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ListItemText primary="Export oriented (APEDA Schemes)" />
              </Grid>
              <Grid item xs={8}>
                <Typography>{data.additionalInfo.apedaSchemes}</Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ListItemText primary="Promoted by" />
              </Grid>
              <Grid item xs={8}>
                <Typography>{data.additionalInfo.promotedBy}</Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ListItemText primary="Services provided to members" />
              </Grid>
              <Grid item xs={8}>
                <Typography>{data.additionalInfo.servicesProvided}</Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ListItemText primary="Awards/Rewards & Recognitions" />
              </Grid>
              <Grid item xs={8}>
                <Typography>{data.additionalInfo.awards}</Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </>
    </Box>
  );
}
