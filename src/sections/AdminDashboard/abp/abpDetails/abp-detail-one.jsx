import React from 'react';

import { Box, Container, Divider, Paper, Typography } from '@mui/material';

import { InfoListItem, InfoTableHead } from '../../fpc/fpcDetails/InfoListItem';
import PropTypes from 'prop-types';

// Reusable SectionHeader component
const SectionHeader = ({ title }) => (
  <>
    <Divider />
    <Box sx={{ my: 3, color: 'text.secondary' }}>
      <Typography variant="h6">{title}</Typography>
    </Box>
  </>
);

export default function ABPDetailOne() {
  const data = {
    applicationNo: 'ABP20240001',
    applicantName: 'Priya Sharma',
    gender: 'Female',
    mobileNumber: '9123456789',
    applicationAddress: '45 Market Road, City Center',
    email: 'priya.sharma@abp.example.com',
    phone: '08098765432',
    firmName: 'AgroBiz Partners',
    firmLocation: 'City Center',
    block: 'North Block',
    district: 'Metro District',
    pinCode: '600001',
    addressForCommunication: '45 Market Road, City Center',
    firmRegistrationNumber: 'REG2024ABP001',
    firmType: 'Partnership firm',
    tan: 'ABPT12345E',
    pan: 'ABPT12345E',
    gst: '33ABPT12345E1Z9',
    registrationDate: '2024-04-10',
    numberOfPromoters: 4,
    womenPromoters: 2,
    paidUpCapital: 750000,
    businessType: 'Wholesaler',
  };

  return (

      <Box sx={{mt:2}}>
        <InfoTableHead value='FPC Basic Details'/>
        <SectionHeader title="Application Information" />
        <InfoListItem label="Application No" value={data.applicationNo} />
        <InfoListItem label="Applicant Name" value={data.applicantName} />
        <InfoListItem label="Gender" value={data.gender} />
        <InfoListItem label="Mobile number" value={data.mobileNumber} />
        <InfoListItem label="Application Address" value={data.applicationAddress} />
        <InfoListItem label="Email ID" value={data.email} />
        <InfoListItem label="Phone" value={data.phone} />

        <SectionHeader title="Firm Details" />
        <InfoListItem label="Firm Name" value={data.firmName} />
        <InfoListItem label="Firm Location" value={data.firmLocation} />
        <InfoListItem label="Block" value={data.block} />
        <InfoListItem label="District" value={data.district} />
        <InfoListItem label="Pin code" value={data.pinCode} />
        <InfoListItem label="Address For Communication" value={data.addressForCommunication} />
        <InfoListItem label="Firm registration number" value={data.firmRegistrationNumber} />
        <InfoListItem
          label="Firm type- Partnership firm/ sole proprietor firm"
          value={data.firmType}
        />
        <InfoListItem label="TAN" value={data.tan} />
        <InfoListItem label="PAN" value={data.pan} />
        <InfoListItem label="GST" value={data.gst} />
        <InfoListItem label="Registration Date" value={data.registrationDate} />
        <InfoListItem
          label="Number of Promoter/Partners/Directors in the organization"
          value={data.numberOfPromoters}
        />
        <InfoListItem
          label="Women Promoter/Partners/Directors in organization"
          value={data.womenPromoters}
        />
        <InfoListItem
          label="Paid up capital as per MCA (Rs.)"
          value={data.paidUpCapital?.toLocaleString('en-IN')}
        />
        <InfoListItem
          label="Type of business (Wholesaler/ Retailer/Supermarkets/registered traders/ MSMEs/Entrepreneurs/MSMEs)"
          value={data.businessType}
        />
      </Box>
  );
}

// You can now use <InfoListItem label="..." value={...} /> wherever you want a label-value row.
// For example, replacing DetailRow:
// <InfoListItem label="Application No" value={data.applicationNo} />


SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};