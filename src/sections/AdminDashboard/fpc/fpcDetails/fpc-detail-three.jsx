import React from 'react';

import Table from '@mui/material/Table';
import { Typography } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import {
  useTable,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
} from 'src/components/table';

// Dummy data based on the image
const DATA = [
  {
    slNo: 1,
    category: 'Scheduled Caste',
    numMale: 5,
    numFemale: 7,
    numTrans: 0,
    numTotal: 12,
    percMale: 20,
    percFemale: 28,
    percTrans: 0,
    percTotal: 48,
  },
  {
    slNo: 2,
    category: 'Scheduled Tribe',
    numMale: 2,
    numFemale: 3,
    numTrans: 0,
    numTotal: 5,
    percMale: 8,
    percFemale: 12,
    percTrans: 0,
    percTotal: 20,
  },
  {
    slNo: 3,
    category: 'OBC',
    numMale: 4,
    numFemale: 6,
    numTrans: 1,
    numTotal: 11,
    percMale: 16,
    percFemale: 24,
    percTrans: 4,
    percTotal: 44,
  },
  {
    slNo: 4,
    category: 'General',
    numMale: 3,
    numFemale: 2,
    numTrans: 0,
    numTotal: 5,
    percMale: 12,
    percFemale: 8,
    percTrans: 0,
    percTotal: 20,
  },
  {
    slNo: null,
    category: 'Total',
    numMale: 14,
    numFemale: 18,
    numTrans: 1,
    numTotal: 33,
    percMale: 56,
    percFemale: 72,
    percTrans: 4,
    percTotal: 132,
  },
];

// Table head structure based on the provided image
const TABLE_HEAD = [
  { id: 'slNo', label: 'Sl. No.', align: 'center' },
  { id: 'category', label: 'Member Category', align: 'left' },
  { id: 'numMale', label: 'Numbers - Male', align: 'center' },
  { id: 'numFemale', label: 'Numbers - Female', align: 'center' },
  { id: 'numTrans', label: 'Numbers - Transgender', align: 'center' },
  { id: 'numTotal', label: 'Numbers - Total', align: 'center' },
  { id: 'percMale', label: 'Percentage (%) - Male', align: 'center' },
  { id: 'percFemale', label: 'Percentage (%) - Female', align: 'center' },
  { id: 'percTrans', label: 'Percentage (%) - Transgender', align: 'center' },
  { id: 'percTotal', label: 'Percentage (%) - Total', align: 'center' },
];

export default function FPCDetailThree() {
  const table = useTable();

  const dataSorted = DATA;
  const dataPage = dataSorted.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );
  const isNotFound = !dataPage.length;

  return (
    <>
      <Typography variant="h4" sx={{ my: 2 }}>
        Details of the members of the organization
      </Typography>
      <TableContainer>
        <Table size={table.dense ? 'small' : 'medium'}>
          <TableHeadCustom
            order={table.order}
            orderBy={table.orderBy}
            headLabel={TABLE_HEAD}
            onSort={table.onSort}
          />
          <TableBody>
            {dataPage.map((row, idx) => (
              <TableRow key={row.slNo + row.category}>
                <TableCell align="center" sx={{ color: 'white' }}>
                  .
                </TableCell>
                <TableCell align="center">{row.slNo}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell align="center">{row.numMale}</TableCell>
                <TableCell align="center">{row.numFemale}</TableCell>
                <TableCell align="center">{row.numTrans}</TableCell>
                <TableCell align="center">{row.numTotal}</TableCell>
                <TableCell align="center">{row.percMale}</TableCell>
                <TableCell align="center">{row.percFemale}</TableCell>
                <TableCell align="center">{row.percTrans}</TableCell>
                <TableCell align="center">{row.percTotal}</TableCell>
              </TableRow>
            ))}
            <TableEmptyRows
              height={53}
              emptyRows={emptyRows(table.page, table.rowsPerPage, DATA.length)}
            />
            <TableNoData notFound={isNotFound} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
