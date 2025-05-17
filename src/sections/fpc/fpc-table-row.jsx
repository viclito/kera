import PropTypes from 'prop-types';

import { IconButton } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ListItemText from '@mui/material/ListItemText';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function FpcTableRow({ row, onViewRow }) {
  const { name, date, status } = row;

  const statusMap = {
    pending: 'Received',
    approved: 'Approved',
    reject: 'Failed',
  };

  return (
    <TableRow hover>
      <TableCell padding="checkbox" />
      <TableCell
        onClick={() => onViewRow()}
        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      >
        <ListItemText
          primary={name}
          primaryTypographyProps={{ typography: 'body2' }}
          secondaryTypographyProps={{
            component: 'span',
            color: 'text.disabled',
          }}
        />
      </TableCell>
      <TableCell onClick={() => onViewRow()} sx={{ whiteSpace: 'nowrap', cursor: 'pointer' }}>
        {date}
      </TableCell>
      <TableCell sx={{ cursor: 'pointer' }} onClick={() => onViewRow()}>
        <Label
          variant="soft"
          color={
            (status === 'approved' && 'success') ||
            (status === 'pending' && 'warning') ||
            (status === 'reject' && 'error') ||
            'default'
          }
        >
          {statusMap[status] || 'Failed'}
        </Label>
      </TableCell>
      <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
        <IconButton>
          <Iconify icon="pen" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

FpcTableRow.propTypes = {
  onViewRow: PropTypes.func,
  row: PropTypes.object,
};
