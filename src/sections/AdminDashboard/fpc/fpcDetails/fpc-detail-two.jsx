import React from 'react';

import { Typography } from '@mui/material';

import ResponsiveTable from 'src/components/custom-table/custom-table';

export default function FPCDetailTwo() {
  // Columns based on the provided image
  const columns = [
    { field: 'srNo', headerName: 'Sr. No.' },
    { field: 'name', headerName: 'Name' },
    { field: 'designation', headerName: 'Designation (Director/Promotor)' },
    { field: 'din', headerName: 'DIN' },
    { field: 'contact', headerName: 'Contact Number' },
    { field: 'category', headerName: 'Category' },
    { field: 'gender', headerName: 'Gender' },
  ];

  // Dummy data for 10 rows
  const data = [
    {
      srNo: 1,
      name: 'John Doe',
      designation: 'Director',
      din: '123456',
      contact: '9876543210',
      category: 'General',
      gender: 'Male',
    },
    {
      srNo: 2,
      name: 'Jane Smith',
      designation: 'Promotor',
      din: '234567',
      contact: '8765432109',
      category: 'SC',
      gender: 'Female',
    },
    {
      srNo: 3,
      name: 'Alice Johnson',
      designation: 'Director',
      din: '345678',
      contact: '7654321098',
      category: 'ST',
      gender: 'Female',
    },
    {
      srNo: 4,
      name: 'Bob Brown',
      designation: 'Promotor',
      din: '456789',
      contact: '6543210987',
      category: 'OBC',
      gender: 'Male',
    },
    {
      srNo: 5,
      name: 'Charlie Green',
      designation: 'Director',
      din: '567890',
      contact: '5432109876',
      category: 'General',
      gender: 'Male',
    },
    {
      srNo: 6,
      name: 'Diana Prince',
      designation: 'Promotor',
      din: '678901',
      contact: '4321098765',
      category: 'General',
      gender: 'Female',
    },
    {
      srNo: 7,
      name: 'Eve Adams',
      designation: 'Director',
      din: '789012',
      contact: '3210987654',
      category: 'OBC',
      gender: 'Female',
    },
    {
      srNo: 8,
      name: 'Frank Lee',
      designation: 'Promotor',
      din: '890123',
      contact: '2109876543',
      category: 'SC',
      gender: 'Male',
    },
    {
      srNo: 9,
      name: 'Grace Kim',
      designation: 'Director',
      din: '901234',
      contact: '1098765432',
      category: 'ST',
      gender: 'Female',
    },
    {
      srNo: 10,
      name: 'Henry Ford',
      designation: 'Promotor',
      din: '012345',
      contact: '0987654321',
      category: 'General',
      gender: 'Male',
    },
  ];

  return (
    <>
      <Typography variant="h4" sx={{ my: 2 }}>
        Details of the Board of Directors of the organization
      </Typography>
      <ResponsiveTable columns={columns} data={data} />;
    </>
  );
}
