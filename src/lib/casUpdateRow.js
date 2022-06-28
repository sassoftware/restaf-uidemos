
import {casUpdateData} from '@sassoftware/restaflib/dist/restaflib.js';
async function casUpdateRow (table, data, where, columns, appEnv) {
    
    let {store, session} = appEnv;
    if (where === null || where.length === 0) {
        return {Warning: "You must specify keys"};
    }
    let t = {};
    for (let k in data) {
        if (k !== '_index_' && columns[k].custom === false) {
            t[k] = data[k];
        }
    }
    let payload = {
        table: table,
        data : t,
        where: where,
    };
    let r = await casUpdateData(store, session, payload);
    return r;
}

export default casUpdateRow;
