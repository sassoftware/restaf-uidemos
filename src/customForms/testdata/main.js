/* do some additional work for the FSEDITDataForm */
/* If present it will be called in the same order as FSEDIT */
/* return the modified data object or null to indicste that there are no updates */
/* status flags need to be designed */

async function main (data, _rowIndex, appEnv,_type) {
    let status = {code: 0 , msg: "Main processing completed"};
    /* some code */
    
    data.total = data.x1 + data.x2 + data.x3 ;
    return [data, status];
};
export default main;