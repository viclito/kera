import React from 'react';
import PropTypes from 'prop-types';

import { Box, Container, Divider, Paper, Typography } from '@mui/material';

import ResponsiveTable from 'src/components/custom-table/custom-table';

import { InfoListItem, InfoTableHead } from '../../fpc/fpcDetails/InfoListItem';

const SectionHeader = ({ title }) => (
  <>
    <Divider />
    <Box sx={{ my: 3, color: 'text.secondary' }}>
      <Typography variant="h6">{title}</Typography>
    </Box>
  </>
);

export default function ABPDetailThree() {
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
  ];

  const BusinessColumns = [
    { field: 'slNo', headerName: 'Sl.No.' },
    { field: 'activity', headerName: 'Business activities' },
    { field: 'monthlyTurnover', headerName: 'Average Monthly turnover in FY 2-23-24 (in Rs.)' },
    { field: 'yearlyTurnover', headerName: 'Average Yearly turnover in FY 2-23-24 (in Rs.)' },
    { field: 'profit', headerName: 'Profitability of the business in FY 23-24 (in Rs.)' },
  ];

  const BusinessData = [
    {
      slNo: 1,
      activity: 'Seed',
      monthlyTurnover: '50,000',
      yearlyTurnover: '6,00,000',
      profit: '1,20,000',
    },
    {
      slNo: 2,
      activity: 'Fertiliser',
      monthlyTurnover: '40,000',
      yearlyTurnover: '4,80,000',
      profit: '1,00,000',
    },
    {
      slNo: 3,
      activity: 'Pesticides',
      monthlyTurnover: '30,000',
      yearlyTurnover: '3,60,000',
      profit: '80,000',
    },
    {
      slNo: 4,
      activity: 'Machineries',
      monthlyTurnover: '20,000',
      yearlyTurnover: '2,40,000',
      profit: '60,000',
    },
    {
      slNo: 5,
      activity: 'Collection Centre',
      monthlyTurnover: '60,000',
      yearlyTurnover: '7,20,000',
      profit: '1,50,000',
    },
    {
      slNo: 6,
      activity: 'Direct marketing',
      monthlyTurnover: '35,000',
      yearlyTurnover: '4,20,000',
      profit: '90,000',
    },
    {
      slNo: 7,
      activity: 'Export',
      monthlyTurnover: '25,000',
      yearlyTurnover: '3,00,000',
      profit: '70,000',
    },
    {
      slNo: 8,
      activity: 'Import',
      monthlyTurnover: '15,000',
      yearlyTurnover: '1,80,000',
      profit: '40,000',
    },
    {
      slNo: 9,
      activity: 'Primary',
      monthlyTurnover: '22,000',
      yearlyTurnover: '2,64,000',
      profit: '55,000',
    },
    {
      slNo: 10,
      activity: 'Secondary',
      monthlyTurnover: '18,000',
      yearlyTurnover: '2,16,000',
      profit: '45,000',
    },
    {
      slNo: 11,
      activity: 'Value addition',
      monthlyTurnover: '28,000',
      yearlyTurnover: '3,36,000',
      profit: '65,000',
    },
    {
      slNo: 12,
      activity: 'Common Facility Centre',
      monthlyTurnover: '12,000',
      yearlyTurnover: '1,44,000',
      profit: '30,000',
    },
    {
      slNo: 13,
      activity: 'Vehicle',
      monthlyTurnover: '10,000',
      yearlyTurnover: '1,20,000',
      profit: '25,000',
    },
  ];

  const turnoverColumns = [
    { field: 'financialYear', headerName: 'Financial Year' },
    { field: 'turnover', headerName: 'Turnover (Rs.)' },
    { field: 'profit', headerName: 'Profit (Rs.)' },
    { field: 'loss', headerName: 'Loss (Rs.)' },
  ];

  const turnoverData = [
    { financialYear: '2022-23', turnover: '12,00,000', profit: '2,00,000', loss: '50,000' },
    { financialYear: '2023-24', turnover: '15,00,000', profit: '2,50,000', loss: '30,000' },
    { financialYear: '2024-25', turnover: '18,00,000', profit: '3,00,000', loss: '20,000' },
  ];

  const CreditColumns = [
    { field: 'financialYear', headerName: 'Financial Year' },
    { field: 'loanAmount', headerName: 'Loan Amount (Rs.)' },
    { field: 'source', headerName: 'Source of fund' },
    { field: 'term', headerName: 'Term period' },
    { field: 'purpose', headerName: 'Purpose of loan (Working capital, long term loan)' },
    { field: 'repayment', headerName: 'Repayment (Rs.)' },
    { field: 'outstanding', headerName: 'Outstanding (Rs.)' },
  ];

  const CreditData = [
    {
      financialYear: '2022-23',
      loanAmount: '2,00,000',
      source: 'Bank of India',
      term: '3 years',
      purpose: 'Working capital',
      repayment: '1,00,000',
      outstanding: '1,00,000',
    },
    {
      financialYear: '2023-24',
      loanAmount: '3,00,000',
      source: 'NABARD',
      term: '5 years',
      purpose: 'Long term loan',
      repayment: '1,50,000',
      outstanding: '1,50,000',
    },
    {
      financialYear: '2024-25',
      loanAmount: '1,50,000',
      source: 'Cooperative Bank',
      term: '2 years',
      purpose: 'Working capital',
      repayment: '50,000',
      outstanding: '1,00,000',
    },
  ];

  return (
    <>
      <Container sx={{ py: 4 }}>
        <SectionHeader title="Details of Proposed Project Location and Land" />
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

      <InfoTableHead value='Information about the availability of basic infrastructure required for the proposed project'/>
      <ResponsiveTable columns={projectColumns} data={projectData} rowsPerPageOptions={[5, 10]} />

      <InfoTableHead value='Current Business activities'/>
      <ResponsiveTable columns={BusinessColumns} data={BusinessData} rowsPerPageOptions={[5, 10]} />

      <InfoTableHead value='Turnover for the last 3 year from audited balance sheet'/>
      <ResponsiveTable columns={turnoverColumns} data={turnoverData} rowsPerPageOptions={[5, 10]} />

      <InfoTableHead value='Credit facility availed.'/>
      <ResponsiveTable columns={CreditColumns} data={CreditData} rowsPerPageOptions={[5, 10]} />

   
        <SectionHeader title="Other details" />

      <InfoListItem
        label="Present structure/ infrastructure"
        value="Modern warehouse, cold storage, office building"
      />
      <InfoListItem
        label="Products intended to be handled/ Raw materials/ output available Brand Name Marketing avenues of the product"
        value="Rice, Wheat, Pulses, Brand: AgroFresh, Sold via local markets and online"
      />
      <InfoListItem
        label="Whether the ABPs dealing with FPC/FPC, if yes please mention the details"
        value="Yes, partnership with Green Farmers FPC for procurement and distribution"
      />
      <InfoListItem
        label="Have you availed any benefit from the Central/ State government schemes/ others, if yes mention the details"
        value="Yes, received subsidy under PM FME and RKVY schemes"
      />
      <InfoListItem
        label="Land and other Infrastructure owned / leased for FPC operations Furnish details"
        value="Owned: 2 acres land, Leased: 1 cold storage unit"
      />
      <InfoListItem
        label="Awards/ Rewards & Recognitions received"
        value="Best ABP Award 2023, State Agro Excellence 2022"
      />
      <InfoListItem label="Number of working staff" value="18" />
      <InfoListItem
        label="Other details if you think to share"
        value="ISO 9001 certified, Member of National Agro Association"
      />
    </>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string,
};
