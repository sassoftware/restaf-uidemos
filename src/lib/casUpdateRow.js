import { casUpdateData } from '@sassoftware/restaflib/dist/restaflib.js';
async function casUpdateRow (table, data, where, columns, appEnv) {
    const { store, session } = appEnv;
    if (where === null || where.length === 0) {
        return { Warning: 'You must specify keys' };
    }
    const t = {};
    for (const k in data) {
        if (k !== '_index_' && columns[k].custom === false) {
            t[k] = data[k];
        };
    };
    const payload = {
        table: table,
        data : t,
        where: where
    };
    return await casUpdateData(store, session, payload);
}

export default casUpdateRow;
