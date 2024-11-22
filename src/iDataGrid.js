import { DataGrid } from '@mui/x-data-grid';

function iDataGrid(props) {
  const { rows, columns, style, eProps } = props;
  return (
    <Box sx={style}>
      {rows === null ? <p> No data to display </p> :
        <DataGrid
          rows={rows}
          columns={columns}
          {...eProps}
        />
      }
    </Box>

  );

}
export default iDataGrid;