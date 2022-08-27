
import {uploadData} from '@sassoftware/restafedit';

async function save (data, company,appEnv) {
    debugger;
    const table = appEnv.appControl.support.offers;
    let tempTable = {caslib: table.caslib, name: `${table.name}_temp`};
    const drop = ['_index_', '_rowIndex'];
    const addColumns = {
        company : company,
        datetime: Date()
    };
    debugger;
    const r = await uploadData(tempTable, data, drop, addColumns, appEnv,table);
    debugger;
    return r;
}
export default save;
