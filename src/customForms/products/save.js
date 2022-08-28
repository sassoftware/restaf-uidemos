
import {uploadData} from '@sassoftware/restafedit';

async function save (data, company,appEnv) {
    debugger;
    const table = appEnv.appControl.support.offers;
    let tempTable = {caslib: 'casuser', name: `${table.name}_temp`};
    const drop = ['_index_', '_rowIndex'];
    const addColumns = {
        company : company,
        datetime: Date()
    };
    debugger;
    const save = true;   /* do a save to storage */
    const r = await uploadData(tempTable, data, drop, addColumns, appEnv,table, save);
    debugger;
    return r;
}
export default save;
