import React from 'react';
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import {
  Assignment,
  Business,
  People,
  Store,
} from '@mui/icons-material';

const dashboardData = [
  {
    label: 'Total FPC Applications',
    value: 3,
    icon: <Store fontSize="large" />,
    color: '#1976d2',
    subLabel: 'Applications received this year',
    chip: 'FPC',
  },
  {
    label: 'Total ABP Applications',
    value: 3,
    icon: <Business fontSize="large" />,
    color: '#43a047',
    subLabel: 'Active business partners',
    chip: 'ABP',
  },
  {
    label: 'Active FPCs',
    value: 2,
    icon: <People fontSize="large" />,
    color: '#fbc02d',
    subLabel: 'Currently operational',
    chip: 'Active',
  },
  {
    label: 'Pending Approvals',
    value: 1,
    icon: <Assignment fontSize="large" />,
    color: '#e53935',
    subLabel: 'Awaiting review',
    chip: 'Pending',
  },
];

export default function DashboardList() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, minHeight: '100vh' }}>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 800, color: '#222' }}>
        Dashboard Overview
      </Typography>

      <Grid container spacing={4}>
        {dashboardData.map((item, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={idx % 4 === 0 ? 6 : 3} // rectangle for every 4th item (idx 0, 4, 8...)
            key={idx}
          >
            <Paper
              elevation={1}
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 3,
                border: `1px solid ${item.color}44`,
                backgroundColor: '#fff',
                transition: 'transform 0.2s',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 6px 16px 0 ${item.color}33`,
                },
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ mb: 2, justifyContent: 'center' }}
              >
                <Avatar
                  sx={{
                    bgcolor: item.color,
                    color: '#fff',
                    width: 48,
                    height: 48,
                    boxShadow: 1,
                  }}
                >
                  {item.icon}
                </Avatar>
                <Chip
                  label={item.chip}
                  size="small"
                  sx={{
                    bgcolor: '#f5f5f5',
                    color: item.color,
                    fontWeight: 600,
                    fontSize: 12,
                  }}
                />
              </Stack>

              <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                {item.value}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ color: '#555', textAlign: 'center', mb: 1 }}
              >
                {item.label}
              </Typography>

              <Divider sx={{ width: '60%', my: 1 }} />

              <Typography
                variant="body2"
                sx={{ color: '#888', textAlign: 'center', fontStyle: 'italic' }}
              >
                {item.subLabel}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
