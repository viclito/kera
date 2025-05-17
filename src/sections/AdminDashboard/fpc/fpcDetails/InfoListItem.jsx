import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid, ListItem, Typography, ListItemText } from '@mui/material';

export function InfoListItem({ label, value }) {
  return (
    <ListItem>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ListItemText primary={label} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
            {value}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export function InfoTableHead({ value }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          padding: '4px 12px',
          borderRadius: 2,
          backgroundColor: 'green',
          color: 'white',
          my: 2,
        }}
      >
        <Typography variant="h6">{value}</Typography>
      </Box>
    </Box>
  );
}

InfoTableHead.propTypes = {
  value: PropTypes.string,
};

InfoListItem.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
};
