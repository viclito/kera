import React from 'react';

import { Typography } from '@mui/material';

import ResponsiveTable from 'src/components/custom-table/custom-table';

export default function FPCDetailFour() {
  // Columns based on the provided image
  const columns = [
    { field: 'srNo', headerName: 'Sr. No.' },
    { field: 'name', headerName: 'Name' },
    { field: 'designation', headerName: 'Designation' },
    { field: 'education', headerName: 'Education qualification' },
    { field: 'contact', headerName: 'Contact Number*' },
    { field: 'email', headerName: 'Email ID' },
    { field: 'category', headerName: 'Category (SC/ST/OBC/General)' },
    { field: 'gender', headerName: 'Gender (Male/Female/Transgender)' },
    { field: 'monthsAssociated', headerName: 'No. of months associated with the FPC' },
    { field: 'salary', headerName: 'Monthly salary (Rs.)' },
  ];

  // Dummy data for 5 rows as shown in the image
  const data = [
    {
      srNo: 1,
      name: 'Rajesh Kumar',
      designation: 'Manager',
      education: 'MBA',
      contact: '9876543210',
      email: 'rajesh.k@fpc.com',
      category: 'OBC',
      gender: 'Male',
      monthsAssociated: 24,
      salary: '45,000',
    },
    {
      srNo: 2,
      name: 'Priya Sharma',
      designation: 'Accountant',
      education: 'B.Com',
      contact: '8765432109',
      email: 'priya.s@fpc.com',
      category: 'General',
      gender: 'Female',
      monthsAssociated: 18,
      salary: '32,000',
    },
    {
      srNo: 3,
      name: 'Amit Patel',
      designation: 'Field Officer',
      education: 'B.Sc Agriculture',
      contact: '7654321098',
      email: 'amit.p@fpc.com',
      category: 'SC',
      gender: 'Male',
      monthsAssociated: 12,
      salary: '28,000',
    },
    {
      srNo: 4,
      name: 'Sunita Devi',
      designation: 'Secretary',
      education: 'BA',
      contact: '6543210987',
      email: 'sunita.d@fpc.com',
      category: 'ST',
      gender: 'Female',
      monthsAssociated: 36,
      salary: '25,000',
    },
    {
      srNo: 5,
      name: 'Vikram Singh',
      designation: 'IT Support',
      education: 'BCA',
      contact: '5432109876',
      email: 'vikram.s@fpc.com',
      category: 'General',
      gender: 'Male',
      monthsAssociated: 6,
      salary: '30,000',
    },
  ];

  return (
    <>
      <Typography variant="h4" sx={{ my: 2, mt: 4 }}>
        Details of the Staff of the organization
      </Typography>
      <ResponsiveTable columns={columns} data={data} />
    </>
  );
}
