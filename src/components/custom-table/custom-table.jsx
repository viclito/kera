import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  Table,
  Paper,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TablePagination,
} from '@mui/material';

const ResponsiveTable = ({ columns, data, rowsPerPageOptions = [5, 10, 15] }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [selected] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const slicedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // const handleSelectAll = (event) => {
  //   if (event.target.checked) {
  //     const newSelected = slicedData.map((row) => row.id);
  //     setSelected(newSelected);
  //   } else {
  //     setSelected([]);
  //   }
  // };

  // const handleSelectRow = (id) => {
  //   const isSelected = selected.includes(id);
  //   if (isSelected) {
  //     setSelected(selected.filter((selectedId) => selectedId !== id));
  //   } else {
  //     setSelected([...selected, id]);
  //   }
  // };

  const isRowSelected = (id) => selected.includes(id);

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {/* Bulk select checkbox */}
              {/* <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < slicedData.length
                  }
                  checked={selected.length === slicedData.length && slicedData.length > 0}
                  onChange={handleSelectAll}
                />
              </TableCell> */}
              {columns.map((column) => (
                <TableCell key={column.field} align={column.align || 'left'} sx={{minWidth:'150px'}}>
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedData?.map((row) => (
              <TableRow key={row.id} selected={isRowSelected(row.id)}>
                {/* Row select checkbox */}
                {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={isRowSelected(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                  />
                </TableCell> */}
                {columns?.map((column) => (
                  <TableCell key={column.field} align={column.align || 'left'}>
                    {column.renderCell ? column.renderCell(row) : row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

ResponsiveTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
      renderCell: PropTypes.func, // Optional: For custom cell rendering
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
};

export default ResponsiveTable;
