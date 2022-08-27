/* do some additional work for the FSEDITDataForm */
/* If present it will be called on start of the edit */
/* return the modified data object or null to indicste that there are no updates */
/* status flags need to be designed */
async function init (data,row,appEnv,type) {
    let status = {code: 0, msg: "Init processing completed"};
    data.price = data.priceperuser * data.numberofusers*(1 - (data.discount/100));
    return [data, status];
};
export default init;
