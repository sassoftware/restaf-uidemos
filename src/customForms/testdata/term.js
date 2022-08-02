async function term (data, type) {
    /* do some additional work for the FSEDITDataForm */
    /* TODO: The dataform needs to run this before scrolling off and SUBMIT */
    /* return the modified data object */
    /* status flags to be determined  - one of the conditions must be to terminate with user prompt */
    // return [data, status]
    let status = {code: 0, msg: "Term processing completed"};
    return [data, status];
};
export default term;
