async function calculate (data, appEnv) {
    let {store, restaflib, session} = appEnv;

    // calculations using casl
    // data is passsed as a dictionary named _args_

    let code = `
        send_response({total= _args_.x1 + _args_.x2 + _args_.x3});
    `;
    // run the code and return results
    let r = await restaflib.caslRun(store, session, code, data);

    return r.results.total;
}
export default calculate;