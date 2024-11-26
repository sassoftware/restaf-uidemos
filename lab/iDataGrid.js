import {DataGrid} from '@mui/x-data-grid';
function iDataGrid(props){
  const { columns,rows,style,eProps} = props;
  return (
    <Box sx={style}>
      {appEnv === null   ? <p>No Data to display </p>
      : <DataGrid
        rows={rows}
        columns={columns}
        {...eProps}
      />}
    </Box>
  );

}
export default iDataGrid;