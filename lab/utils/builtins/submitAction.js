// import { casActionRun } from "@sassoftware/restaflib";
async function submitAction(action, args, appEnv) {
  const { casActionRun } = appEnv.builtins.restaflib;
  let p = {
    action: action,
    data: args
  };
  try {
    let r = await casActionRun(appEnv.store, appEnv.session, p);
    return { status: { statusCode: 0, msg: null }, results: r };
  } catch (err) {
    return { status: { statusCode: 2, msg: err }, results: {} };
  }
}
export default submitAction;