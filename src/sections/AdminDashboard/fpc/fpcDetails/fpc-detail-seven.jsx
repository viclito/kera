import React from 'react';
import PropTypes from 'prop-types';

import { Box, Divider, Container, Typography } from '@mui/material';

import ResponsiveTable from 'src/components/custom-table/custom-table';

import { InfoListItem } from './InfoListItem';

const SectionHeader = ({ title }) => (
  <>
    <Divider />
    <Box sx={{ my: 3, color: 'text.secondary' }}>
      <Typography variant="h6">{title}</Typography>
    </Box>
  </>
);

export default function FPCDetailSeven() {
  const data = {
    proposed: 'Yes',
    owned: 'Owned',
    years: '5',
    Address: 'Survey No. 123, Green Village, Agri Panchayat, Central Block, Farm District',
    Area: '2500',
    COordinates: '10.8505° N, 76.2711° E',
  };

  const projectColumns = [
    { field: 'SlNo', headerName: 'Sl. No' },
    { field: 'Details', headerName: 'Details' },
    { field: 'YesNo', headerName: 'Yes / No' },
    { field: 'source', headerName: 'If Yes, mention the source' },
  ];

  const projectData = [
    {
      SlNo: '1',
      Details: 'Water Availability',
      YesNo: 'Yes',
      source: 'Borewell, Rainwater Harvesting',
    },
    {
      SlNo: '2',
      Details: 'Availability of electricity (KSEB/ Solar)',
      YesNo: 'Yes',
      source: 'KSEB Connection, Solar Panels',
    },
    {
      SlNo: '3',
      Details: 'Approach Road to the site',
      YesNo: 'Yes',
      source: 'Paved Road, 2 km from Highway',
    },
    {
      SlNo: '4',
      Details: 'Fencing (Chain link/ solar/ brick wall)',
      YesNo: 'Yes',
      source: 'Chain Link with Solar Security',
    },
  ];

  return (
    <>
      <Container sx={{ py: 4 }}>
        <SectionHeader title="Details of Proposed Project Location" />
        <InfoListItem
          label="Is the organization in possession of the land required for the proposed project?"
          value={data.proposed}
        />
        <InfoListItem label="If yes, whether it is owned or leased?" value={data.owned} />
        <InfoListItem label="If leased, how many years of lease?" value={data.years} />
        <InfoListItem
          label="Land Address (Survey No., Village, Panchayat, Block, District should be mentioned)"
          value={data.Address}
        />
        <InfoListItem label="Area of the land in (Sq. Meter)" value={data.Area} />
        <InfoListItem label="Latitudes and Longitudes Co-ordinates" value={data.COordinates} />
      </Container>

      <Typography variant="h4" sx={{ my: 3 }}>
        Information about the availability of basic infrastructure required for the proposed project
      </Typography>
      <ResponsiveTable columns={projectColumns} data={projectData} rowsPerPageOptions={[5, 10]} />
    </>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string,
};
