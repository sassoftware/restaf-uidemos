async function parseConfig(src, setupConfig, workBench) {
    // eslint-disable-next-line no-new-func
    let appControl = null;
    if (src.substr(0,22) !== 'function getAppControl') {
      // eslint-disable-next-line no-throw-literal
      throw `The selected file is not a valid viyafsedit form/viewtable`;
    }
    
    try {
      let tsrc = ` ${src}  return getAppControl();`;
      // eslint-disable-next-line no-new-func
      appControl = new Function(tsrc)();
      if (setupConfig === true) {
        appControl.table = null;
      }
      
      appControl.serverContext = (appControl.source ==='cas') ? appControl.casServer : appControl.computeContext;
      if (appControl.viewType == null) {
        appControl.viewType = 'form';
      } 
      return appControl;   
    } catch (err) {
      console.log(err);
      // eslint-disable-next-line no-throw-literal
      throw `Error parsing config ${err}`;
    }  
  } 
  export default parseConfig;