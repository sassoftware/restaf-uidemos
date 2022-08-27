/* do some additional work for the FSEDITDataForm */
/* If present it will be called in the same order as FSEDIT */
/* return the modified data object or null to indicste that there are no updates */
/* status flags need to be designed */

async function main (data, _rowIndex, appEnv,_type) {
    let status = {code: 0, msg: "Main processing completed"};
    data.total = data.priceperuser*data.numberofusers*(1 - (data.discount/100));
    return [data, status];
};
export default main;