import React from 'react';
import PropTypes from 'prop-types';

import { Box, Divider, Typography } from '@mui/material';

import { InfoListItem } from './InfoListItem';

// Reusable SectionHeader component
const SectionHeader = ({ title }) => (
  <>
    <Divider />
    <Box sx={{ my: 3, color: 'text.secondary' }}>
      <Typography variant="h6">{title}</Typography>
    </Box>
  </>
);

export default function FPCDetailOne() {
  const data = {
    applicationNo: 'FPC20230001',
    representApplicantName: 'John Doe',
    mobileNumber: '9876543210',
    applicationAddress: '123 Farm Lane, Agri Town',
    email: 'contact@fpc.example.com',
    phone: '08012345678',
    fpcName: 'Green Farmers Producer Company',
    fpcLocation: 'Agri Town',
    block: 'Central Block',
    district: 'Farm District',
    pinCode: '560001',
    addressForCommunication: 'Same as above',
    fpcCinNumber: 'U01100KA2023PTC123456',
    tan: 'BLNG12345D',
    pan: 'BLNG12345D',
    gst: '29BLNG12345D1Z5',
    registrationDate: '2023-01-15',
    numberOfMembersInBoD: 7,
    numberOfWomenMembersInBoD: 3,
    numberOfShareholders: 150,
    paidUpCapital: 500000,
    isWomanFPC: 'No',
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        FPC Basic Details
      </Typography>

      <>
        <SectionHeader title="Application Information" />
        <InfoListItem label="Application No" value={data.applicationNo} />
        <InfoListItem label="Represent Applicant Name" value={data.representApplicantName} />
        <InfoListItem label="Mobile number" value={data.mobileNumber} />
        <InfoListItem label="Application Address" value={data.applicationAddress} />
        <InfoListItem label="Email" value={data.email} />
        <InfoListItem label="Phone" value={data.phone} />

        <SectionHeader title="FPC Details" />
        <InfoListItem label="FPC Name" value={data.fpcName} />
        <InfoListItem label="FPC Location" value={data.fpcLocation} />
        <InfoListItem label="Block" value={data.block} />
        <InfoListItem label="District" value={data.district} />
        <InfoListItem label="Pin code" value={data.pinCode} />
        <InfoListItem label="Address For Communication" value={data.addressForCommunication} />

        <SectionHeader title="Registration & Tax Details" />
        <InfoListItem label="FPC CIN number" value={data.fpcCinNumber} />
        <InfoListItem label="TAN" value={data.tan} />
        <InfoListItem label="PAN" value={data.pan} />
        <InfoListItem label="GST" value={data.gst} />
        <InfoListItem label="Registration Date" value={data.registrationDate} />

        <SectionHeader title="Membership Details" />
        <InfoListItem label="Number of members in the BoD" value={data.numberOfMembersInBoD} />
        <InfoListItem
          label="Number of Women members in BoD"
          value={data.numberOfWomenMembersInBoD}
        />
        <InfoListItem label="Number of shareholders" value={data.numberOfShareholders} />
        <InfoListItem
          label="Paid up capital as per MCA (Rs.)"
          value={data.paidUpCapital?.toLocaleString('en-IN')}
        />
        <InfoListItem
          label="Is it a woman FPC (fully owned and managed by women)"
          value={data.isWomanFPC}
        />
      </>
    </>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string,
};

// You can now use <InfoListItem label="..." value={...} /> wherever you want a label-value row.
// For example, replacing DetailRow:
// <InfoListItem label="Application No" value={data.applicationNo} />
