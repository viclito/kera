import React from 'react';

import { Typography } from '@mui/material';

import ResponsiveTable from 'src/components/custom-table/custom-table';
import { InfoTableHead } from '../../fpc/fpcDetails/InfoListItem';

export default function ABPDetailTwo() {
  // Columns based on the provided image
  const columns = [
    { field: 'srNo', headerName: 'Sl. No.' },
    { field: 'name', headerName: 'Name' },
    { field: 'designation', headerName: 'Designation' },
    { field: 'contact', headerName: 'Contact Number' },
    { field: 'email', headerName: 'Email ID' },
    { field: 'category', headerName: 'Category' },
    { field: 'gender', headerName: 'Gender' },
  ];

  // Dummy data for 10 rows
  const data = [
    {
      srNo: 1,
      name: 'Amit Kumar',
      designation: 'Director',
      contact: '9876543210',
      email: 'amit.kumar@example.com',
      category: 'General',
      gender: 'Male',
    },
    {
      srNo: 2,
      name: 'Sunita Rao',
      designation: 'Promoter',
      contact: '8765432109',
      email: 'sunita.rao@example.com',
      category: 'OBC',
      gender: 'Female',
    },
    {
      srNo: 3,
      name: 'Ravi Patel',
      designation: 'Director',
      contact: '7654321098',
      email: 'ravi.patel@example.com',
      category: 'SC',
      gender: 'Male',
    },
    {
      srNo: 4,
      name: 'Meena Singh',
      designation: 'Promoter',
      contact: '6543210987',
      email: 'meena.singh@example.com',
      category: 'ST',
      gender: 'Female',
    },
    {
      srNo: 5,
      name: 'Vikram Joshi',
      designation: 'Director',
      contact: '5432109876',
      email: 'vikram.joshi@example.com',
      category: 'General',
      gender: 'Male',
    },
    {
      srNo: 6,
      name: 'Priya Nair',
      designation: 'Promoter',
      contact: '4321098765',
      email: 'priya.nair@example.com',
      category: 'OBC',
      gender: 'Female',
    },
    {
      srNo: 7,
      name: 'Suresh Das',
      designation: 'Director',
      contact: '3210987654',
      email: 'suresh.das@example.com',
      category: 'SC',
      gender: 'Male',
    },
    {
      srNo: 8,
      name: 'Anjali Verma',
      designation: 'Promoter',
      contact: '2109876543',
      email: 'anjali.verma@example.com',
      category: 'General',
      gender: 'Female',
    },
    {
      srNo: 9,
      name: 'Deepak Shah',
      designation: 'Director',
      contact: '1098765432',
      email: 'deepak.shah@example.com',
      category: 'OBC',
      gender: 'Male',
    },
    {
      srNo: 10,
      name: 'Kavita Pillai',
      designation: 'Promoter',
      contact: '0987654321',
      email: 'kavita.pillai@example.com',
      category: 'ST',
      gender: 'Female',
    },
  ];
  const commoditiesColumn = [
    { field: 'slNo', headerName: 'Sl. No.' },
    { field: 'commodity', headerName: 'Name of commodity' },
    {
      field: 'products',
      headerName: 'Products (primary & secondary processing, value added products)',
    },
  ];

  const commoditiesData = [
    {
      slNo: 1,
      commodity: 'Rice',
      products: 'Polished Rice, Rice Bran Oil, Rice Flour',
    },
    {
      slNo: 2,
      commodity: 'Wheat',
      products: 'Whole Wheat Flour, Maida, Semolina',
    },
    {
      slNo: 3,
      commodity: 'Pulses',
      products: 'Split Pulses, Pulse Flour, Roasted Pulses',
    },
    {
      slNo: 4,
      commodity: 'Fruits',
      products: 'Fruit Pulp, Jam, Jelly, Dried Fruits',
    },
    {
      slNo: 5,
      commodity: 'Vegetables',
      products: 'Frozen Vegetables, Pickles, Dehydrated Veg',
    },
  ];

  const businessColumn = [
    { field: 'slNo', headerName: 'Sl. No' },
    { field: 'details', headerName: 'Details' },
    { field: 'number', headerName: 'Number' },
    { field: 'capacity', headerName: 'Capacity (volume/ MT)' },
    { field: 'estimatedCost', headerName: 'Estimated Cost (Rs. In lakhs)' },
  ];

  const businessData = [
    { slNo: 1, details: 'Infrastructure', number: '2', capacity: '500 MT', estimatedCost: '120' },
    {
      slNo: 2,
      details: 'Equipment’s/ Machineries',
      number: '5',
      capacity: 'N/A',
      estimatedCost: '80',
    },
    { slNo: 3, details: 'Vehicles', number: '3', capacity: 'N/A', estimatedCost: '40' },
    { slNo: 4, details: 'Technology', number: '1', capacity: 'N/A', estimatedCost: '25' },
    {
      slNo: 5,
      details: 'Packing, Branding, Labelling',
      number: '2',
      capacity: 'N/A',
      estimatedCost: '15',
    },
    {
      slNo: 6,
      details: 'Export Promotion (Licenses/Certification)',
      number: '1',
      capacity: 'N/A',
      estimatedCost: '10',
    },
    {
      slNo: 7,
      details: 'Operators for the machineries and equipment’s',
      number: '4',
      capacity: 'N/A',
      estimatedCost: '8',
    },
    { slNo: 8, details: 'Franchise model', number: '1', capacity: 'N/A', estimatedCost: '20' },
    {
      slNo: 9,
      details: 'Others (Please specify)',
      number: '1',
      capacity: 'N/A',
      estimatedCost: '5',
    },
  ];

  return (
    <>
        <InfoTableHead value='Details of the Promoter/Partners/Directors of the organization'/>
      <ResponsiveTable columns={columns} data={data} />

      <InfoTableHead value='Major commodities/ products of the firm'/>
      <ResponsiveTable columns={commoditiesColumn} data={commoditiesData} />

      <InfoTableHead value='Components proposed for productive alliance based on the business proposal'/>
      <ResponsiveTable columns={businessColumn} data={businessData} />
    </>
  );
}
