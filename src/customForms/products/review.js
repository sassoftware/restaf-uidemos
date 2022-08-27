function review (data, _appEnv) {
    let newData = [];
    for (let i=0; i <data.length; i++) {
        if (data[i].numberofusers > 0) {
            newData.push(data[i]);
        }
    }
    return newData;
}
export default review;
