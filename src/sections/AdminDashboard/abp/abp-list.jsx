import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  Paper,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
  Button,
} from '@mui/material';

import ABPDetailOne from './abpDetails/abp-detail-one';
import ABPDetailTwo from './abpDetails/abp-detail-two';
import ABPDetailThree from './abpDetails/abp-detail-three';

const applications = [
  {
    applicationNo: 'ABP20240001',
    applicantName: 'Priya Sharma',
    gender: 'Female',
    mobileNumber: '9123456789',
  },
  {
    applicationNo: 'ABP20240002',
    applicantName: 'Amit Kumar',
    gender: 'Male',
    mobileNumber: '9988776655',
  },
  {
    applicationNo: 'ABP20240003',
    applicantName: 'Sunita Rao',
    gender: 'Female',
    mobileNumber: '9876501234',
  },
];

export default function ABPList() {
  const [selectedApp, setSelectedApp] = useState(null);

  if (!selectedApp) {
    return (
      <div>
        <Typography variant="h4" sx={{ mb: 2 }}>
          ABP Applications
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Application No</TableCell>
                <TableCell>Applicant Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Mobile Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.map((app) => (
                <TableRow
                  key={app.applicationNo}
                  hover
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedApp(app)}
                >
                  <TableCell>{app.applicationNo}</TableCell>
                  <TableCell>{app.applicantName}</TableCell>
                  <TableCell>{app.gender}</TableCell>
                  <TableCell>{app.mobileNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

  return (
    <div>
      <Button
        variant='text'
        disableRipple disableElevation
        onClick={() => setSelectedApp(null)}
        sx={{ marginBottom: 1, display: 'flex', alignItems: 'center', gap: 1 , color:'green' }}
      >
        <ArrowBackIcon style={{ marginRight: 4 }} /> Back to List
      </Button>
      <ABPDetailOne />
      <ABPDetailTwo />
      <ABPDetailThree />
    </div>
  );
}
