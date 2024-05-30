// import { updateTableRows, saveTable } from '@sassoftware/restafedit';
// TBD: fix updateTable rows issue with an array of rows

async function updateRows(rows, table, byvars, appEnv) {
  const { updateTableRows, saveTable } = appEnv.builtins.restafedit;
  let status = {statusCode: 0, msg: "Table updated successfully"};
  for (let i = 0; i < rows.length; i++) {
    let row = {...rows[i]};
    for (let r in row) {
      if (typeof (row[r]) === 'string') {  
        row[r] = row[r].trim();
      }
    }
    try {
      await updateTableRows(row, appEnv, table, byvars);
    } catch (err) {
      console.log(err);
      status = {statusCode: 2, msg: err};
    }
  }
  await saveTable(appEnv, table);
  return status;
}
export default updateRows;