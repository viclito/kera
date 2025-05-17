import React from 'react';

import { Typography } from '@mui/material';

import ResponsiveTable from 'src/components/custom-table/custom-table';

export default function FPCDetailSix() {
  const productionColumns = [
    { field: 'slNo', headerName: 'Sl. No.' },
    { field: 'CommoditiesPrimary', headerName: 'Commodities Primary' },
    { field: 'Commodities', headerName: 'Commodities Secondary/ value addition' },
    { field: 'AreaInHectare', headerName: 'FY 2022-23 Area in Hectare' },
    { field: 'ProductionInMetricTon', headerName: 'FY 2022-23 Production in Metric ton' },
    { field: 'AreaInHa', headerName: 'FY 2023-24 Area in Hectare' },
    { field: 'ProductionInMT', headerName: 'FY 2023-24 Production in Metric ton' },
  ];

  const productionData = [
    {
      slNo: 1,
      CommoditiesPrimary: '',
      Commodities: '',
      AreaInHectare: '',
      ProductionInMetricTon: '',
      AreaInHa: '',
      ProductionInMT: '',
    },
    {
      slNo: 2,
      CommoditiesPrimary: '',
      Commodities: '',
      AreaInHectare: '',
      ProductionInMetricTon: '',
      AreaInHa: '',
      ProductionInMT: '',
    },
    {
      slNo: 3,
      CommoditiesPrimary: '',
      Commodities: '',
      AreaInHectare: '',
      ProductionInMetricTon: '',
      AreaInHa: '',
      ProductionInMT: '',
    },
  ];

  const BusinessColumns = [
    { field: 'slNo', headerName: 'Sl. No.' },
    { field: 'BusinessActivities', headerName: 'Business activities' },
    { field: 'Avg', headerName: 'Average Yearly turnover in FY 23-24 in Rs.' },
    { field: 'Profit', headerName: 'Profitability of the business in FY 23-24 in Rs.' },
  ];

  const BusinessData = [
    {
      slNo: 'Input services',
      BusinessActivities: 'Seed',
      Avg: '',
      Profit: '',
    },
    {
      slNo: '',
      BusinessActivities: 'Fertiliser',
      Avg: '',
      Profit: '',
    },
    {
      slNo: '',
      BusinessActivities: 'Pesticides',
      Avg: '',
      Profit: '',
    },
    {
      slNo: '',
      BusinessActivities: 'Machineries',
      Avg: '',
      Profit: '',
    },
    {
      slNo: '',
      BusinessActivities: 'Others, please specify',
      Avg: '',
      Profit: '',
    },
    {
      slNo: 'Output service',
      BusinessActivities: 'Collection Centre',
      Avg: '',
      Profit: '',
    },
    {
      slNo: '',
      BusinessActivities: 'Marketing- wholesale/ retail',
      Avg: '',
      Profit: '',
    },
    {
      slNo: '',
      BusinessActivities: 'Export',
      Avg: '',
      Profit: '',
    },
    {
      slNo: '',
      BusinessActivities: 'Import',
      Avg: '',
      Profit: '',
    },
    {
      slNo: '',
      BusinessActivities: 'Others, please specify',
      Avg: '',
      Profit: '',
    },
    {
      slNo: 'Processing',
      BusinessActivities: 'Primary- cleaning & grading, packing',
      Avg: '',
      Profit: '',
    },
    {
      slNo: '',
      BusinessActivities: 'Secondary- value addition, branding, packing/ bottling',
      Avg: '',
      Profit: '',
    },
    {
      slNo: '',
      BusinessActivities: 'Others, please specify',
      Avg: '',
      Profit: '',
    },
    {
      slNo: 'Storage facility',
      BusinessActivities: 'Warehouse, cold storage, silo',
      Avg: '',
      Profit: '',
    },
    {
      slNo: '',
      BusinessActivities: 'Others, please specify',
      Avg: '',
      Profit: '',
    },
    {
      slNo: 'Transportation',
      BusinessActivities: 'Vehicle- tractor, tiller, Cold chamber vehicle, pickups',
      Avg: '',
      Profit: '',
    },
    {
      slNo: '',
      BusinessActivities: 'Others, please specify',
      Avg: '',
      Profit: '',
    },
    {
      slNo: 'Others business activities',
      BusinessActivities: 'Please specify',
      Avg: '',
      Profit: '',
    },
  ];

  const TurnoverColumns = [
    { field: 'FnYr', headerName: 'Financial Year' },
    { field: 'Turnover', headerName: 'Turnover (Rs.)' },
    { field: 'Profit', headerName: 'Profit (Rs.)' },
    { field: 'Loss', headerName: 'Loss (Rs.)' },
  ];

  const TurnoverData = [
    {
      FnYr: '2023-24',
      Turnover: '3244',
      Profit: '33322',
      Loss: '44323',
    },
    {
      FnYr: '2024-25',
      Turnover: '3244',
      Profit: '33322',
      Loss: '44323',
    },
    {
      FnYr: '2025-26',
      Turnover: '3244',
      Profit: '33322',
      Loss: '44323',
    },
  ];

  const CreditColumns = [
    { field: 'FnYr', headerName: 'Financial Year' },
    { field: 'loan', headerName: 'Loan Amount (Rs.)' },
    { field: 'fund', headerName: 'Source of fund' },
    { field: 'term', headerName: 'Term period' },
    { field: 'purpose', headerName: 'Purpose of loan (Working capital, long term loan)' },
    { field: 'Repayment', headerName: 'Repayment (Rs.)' },
    { field: 'Outstanding', headerName: 'Outstanding (Rs.)' },
  ];

  const CreditData = [
    {
      FnYr: '2023-24',
      loan: '3244',
      fund: '33322',
      term: '44323',
      purpose: '',
      Repayment: '',
      Outstanding: '',
    },
    {
      FnYr: '2024-25',
      loan: '3244',
      fund: '33322',
      term: '44323',
      purpose: '',
      Repayment: '',
      Outstanding: '',
    },
    {
      FnYr: '2025-26',
      loan: '3244',
      fund: '33322',
      term: '44323',
      purpose: '',
      Repayment: '',
      Outstanding: '',
    },
  ];
  const grantsColumns = [
    { field: 'SlNo', headerName: 'Sl. No' },
    { field: 'name', headerName: 'Name of the scheme' },
    { field: 'Department', headerName: 'Department/ agencies' },
    { field: 'Grant', headerName: 'Grant (Rs. Lakhs)' },
    { field: 'Year', headerName: 'Year of the grant received' },
  ];

  const grantsData = [
    {
      SlNo: 1,
      name: 'PM FME Scheme',
      Department: 'Ministry of Food Processing Industries',
      Grant: '10',
      Year: '2022-23',
    },
    {
      SlNo: 2,
      name: 'RKVY',
      Department: 'Department of Agriculture',
      Grant: '5',
      Year: '2023-24',
    },
    {
      SlNo: 3,
      name: 'NABARD Grant',
      Department: 'NABARD',
      Grant: '7.5',
      Year: '2021-22',
    },
  ];
  const proposalColumns = [
    { field: 'SlNo', headerName: 'Sl. No' },
    { field: 'Details', headerName: 'Details' },
    { field: 'Number', headerName: 'Number' },
    { field: 'Capacity', headerName: 'Capacity (Area/MT)' },
    { field: 'Estimated', headerName: 'Estimated Cost (Rs. In lakhs)' },
  ];

  const proposalData = [
    {
      SlNo: '1',
      Details:
        'Infrastructure supporting business proposal (storage, package unit, cold storage, primary and secondary processing unit, etc)',
      Number: '2',
      Capacity: '500 MT',
      Estimated: '120',
    },
    {
      SlNo: '2',
      Details: 'Equipment’s/ Machineries',
      Number: '5',
      Capacity: 'N/A',
      Estimated: '80',
    },
    {
      SlNo: '3',
      Details: 'Logistic support',
      Number: '3',
      Capacity: 'N/A',
      Estimated: '40',
    },
    {
      SlNo: '4',
      Details: 'Purchase of technology, traceability',
      Number: '1',
      Capacity: 'N/A',
      Estimated: '25',
    },
    {
      SlNo: '5',
      Details: 'Packing, Branding, Labelling',
      Number: '2',
      Capacity: 'N/A',
      Estimated: '15',
    },
    {
      SlNo: '6',
      Details: 'Export Promotion (Licenses/Certification)',
      Number: '1',
      Capacity: 'N/A',
      Estimated: '10',
    },
    {
      SlNo: '7',
      Details: 'Franchise model (FPC/ABP)',
      Number: '1',
      Capacity: 'N/A',
      Estimated: '20',
    },
    {
      SlNo: '8',
      Details: 'Others (Please specify)',
      Number: '1',
      Capacity: 'N/A',
      Estimated: '5',
    },
    {
      SlNo: '',
      Details: 'Total',
      Number: '',
      Capacity: '',
      Estimated: '315',
    },
  ];

  return (
    <>
      <Typography variant="h4" sx={{ my: 3 }}>
        Agriculture produces collected by the FPC from members annually
      </Typography>
      <ResponsiveTable
        columns={productionColumns}
        data={productionData}
        rowsPerPageOptions={[5, 10]}
      />

      <Typography variant="h4" sx={{ my: 3 }}>
        Current Business activities
      </Typography>
      <ResponsiveTable
        columns={BusinessColumns}
        data={BusinessData}
        rowsPerPageOptions={[10, 20]}
      />

      <Typography variant="h4" sx={{ my: 3 }}>
        Turnover for the last 3 year from audited balance sheet
      </Typography>
      <ResponsiveTable
        columns={TurnoverColumns}
        data={TurnoverData}
        rowsPerPageOptions={[10, 20]}
      />

      <Typography variant="h4" sx={{ my: 3 }}>
        Credit facility availed
      </Typography>
      <ResponsiveTable columns={CreditColumns} data={CreditData} rowsPerPageOptions={[10, 20]} />
      <Typography variant="subtitle2">
        Whether the account of FPC declared as Non-Performing Asset (NPA) by Bank/ FI due to past
        loan default: Yes/No
      </Typography>

      <Typography variant="h5" sx={{ my: 3, mt: 4 }}>
        Whether the FPC has availed grants from other government schemes for the facilities of the
        business proposal on the proposed land. If yes, details of the same are as follows:
      </Typography>
      <ResponsiveTable columns={grantsColumns} data={grantsData} rowsPerPageOptions={[10, 20]} />
      <Typography variant="subtitle2">
        Whether the power of attorney/board resolution to sign the various documents of the FPC is
        attached ……………………(Yes/No)
      </Typography>

      <Typography variant="h4" sx={{ my: 3, mt: 4 }}>
        Components proposed for productive alliance based on the business proposal
      </Typography>
      <ResponsiveTable
        columns={proposalColumns}
        data={proposalData}
        rowsPerPageOptions={[10, 20]}
      />
    </>
  );
}
