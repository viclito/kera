import React, { useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Paper,
  Table,
  Button,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
} from '@mui/material';

// Fix Table import order for lint: Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, Typography

import FPCDetailOne from './fpcDetails/fpc-detail-one';
import FPCDetailTwo from './fpcDetails/fpc-detail-two';
import FPCDetailSix from './fpcDetails/fpc-details-six';
import FPCDetailFour from './fpcDetails/fpc-detail-four';
import FPCDetailFive from './fpcDetails/fpc-detail-five';
import FPCDetailThree from './fpcDetails/fpc-detail-three';
import FPCDetailSeven from './fpcDetails/fpc-detail-seven';

// Dummy applications data
const applications = [
  {
    applicationNo: 'FPC20230001',
    representApplicantName: 'John Doe',
    mobileNumber: '9876543210',
    applicationAddress: '123 Farm Lane, Agri Town',
  },
  {
    applicationNo: 'FPC20230002',
    representApplicantName: 'Priya Sharma',
    mobileNumber: '9123456789',
    applicationAddress: '45 Market Road, City Center',
  },
  {
    applicationNo: 'FPC20230003',
    representApplicantName: 'Amit Kumar',
    mobileNumber: '9988776655',
    applicationAddress: '78 Green Street, Agri Town',
  },
];

export default function FPCList() {
  const [selectedApp, setSelectedApp] = useState(null);

  if (!selectedApp) {
    return (
      <div>
        <Typography variant="h4" sx={{ mb: 2 }}>
          FPC Applications
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Application No</TableCell>
                <TableCell>Applicant Name</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Application Address</TableCell>
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
                  <TableCell>{app.representApplicantName}</TableCell>
                  <TableCell>{app.mobileNumber}</TableCell>
                  <TableCell>{app.applicationAddress}</TableCell>
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
        variant="text"
        disableRipple
        disableElevation
        onClick={() => setSelectedApp(null)}
        sx={{ marginBottom: 1, display: 'flex', alignItems: 'center', gap: 1, color: 'green' }}
      >
        <ArrowBackIcon style={{ marginRight: 4 }} /> Back to List
      </Button>
      <FPCDetailOne />
      <FPCDetailTwo />
      <FPCDetailThree />
      <FPCDetailFour />
      <FPCDetailFive />
      <FPCDetailSix />
      <FPCDetailSeven />
    </div>
  );
}
