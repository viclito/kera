import isEqual from 'lodash/isEqual';
import { useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import { Table, Button, TableBody, TableContainer } from '@mui/material';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  useTable,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TablePaginationCustom,
} from 'src/components/table';

import FpcTableRow from '../fpc-table-row';
import FpcTableFiltersResult from '../fpc-table-filters-result';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name' },
  { id: 'date', label: 'Date' },
  { id: 'status', label: 'Status', width: 220 },
  { id: '', width: 88 },
];

const defaultFilters = {
  id: '',
  district: '',
  status: 'all',
};

// ----------------------------------------------------------------------

export default function FpcListView() {
  const table = useTable();

  const settings = useSettingsContext();

  const router = useRouter();

  const [tableData] = useState([]);

  const denseHeight = table.dense ? 56 : 56 + 20;

  const convertedData = tableData?.map((item) => ({
    ...item,
    date: new Date(item.date).toLocaleDateString('en-GB').split('/').join('-'),
  }));

  const [filters, setFilters] = useState(defaultFilters);

  const canReset = !isEqual(defaultFilters, filters);
  const notFound = (!convertedData.length && canReset) || !convertedData.length;

  const handleFilters = useCallback(
    (name, value) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const handleViewRow = useCallback(
    (id) => {
      router.push(paths.Fpc.details(id));
    },
    [router]
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Fpc List"
        links={[{ name: 'Fpc List' }]}
        action={
          <Button
            component={RouterLink}
            href={paths.Fpc.new}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            Add Fpc
          </Button>
        }
      />

      <Card>
        {canReset && (
          <FpcTableFiltersResult
            filters={filters}
            onFilters={handleFilters}
            onResetFilters={handleResetFilters}
            results={convertedData.length}
            sx={{ p: 2.5, pt: 0 }}
          />
        )}

        <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
          <Scrollbar>
            <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960, mt: 5 }}>
              <TableHeadCustom
                order={table.order}
                orderBy={table.orderBy}
                headLabel={TABLE_HEAD}
                onSort={table.onSort}
              />

              <TableBody>
                {convertedData?.map((row, index) => (
                  <FpcTableRow
                    key={`${index}-${row.id}`}
                    row={row}
                    onViewRow={() => handleViewRow(row.id)}
                  />
                ))}

                <TableEmptyRows
                  height={denseHeight}
                  emptyRows={emptyRows(table.page, table.rowsPerPage, convertedData.length)}
                />

                <TableNoData notFound={notFound} />
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>
        <TablePaginationCustom
          count={convertedData.length}
          page={table.page}
          rowsPerPage={table.rowsPerPage}
          onPageChange={table.onChangePage}
          onRowsPerPageChange={table.onChangeRowsPerPage}
          dense={table.dense}
          onChangeDense={table.onChangeDense}
        />
      </Card>
    </Container>
  );
}
