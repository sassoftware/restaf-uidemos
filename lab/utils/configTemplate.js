
function configTemplate(source, table, setupConfig) {
  let src = getDefaultConfig();
  let tsrc = ` ${src} return getAppControl();`;
  let appControl = null;
   // eslint-disable-next-line no-new-func
  try {  
    // eslint-disable-next-line no-new-func
    let f = new Function(tsrc);
    appControl = f();
    appControl.source = source;
    appControl.table = (setupConfig === true) ? null : table;
    appControl.serverContext =(source ==='cas') ? appControl.casServer : appControl.computeContext;
    return appControl;
   }
   catch (err) {
    console.log(err);
    throw err;
   }
  
}
function getDefaultConfig() {
  return (
    `
    function getAppControl() {
      return {
        label: 'new.form',
        viewType: 'form',
        source: 'cas',
        table: null,
        byvars: [],
        preamble: null,
        sessionID: null,
        userSessionID: null,
        servers: null,
        computeContext: 'SAS Job Execution compute context',
        casServerName: 'cas-shared-default',
        serverContext: 'cas-shared-default',

        initialFetch: {
          qs: {
            start: 0,
            limit: 1,
            format: false,
            where: '',
            includeIndex: true
          }
        },
        customColumns: {},
        editControl: {
          autoSave: true,
          autoSaveTable: true,
          handlers: {
            initApp: async (appEnv) => {
              return {
                statusCode: 0,
                msg: ' '
              };
            },
            init: async (data, rowno, appEnv) => data,
            main: async (data, rowno, appEnv) => data,
            term: async (data, rowno, appEnv) => data
          }
        },
        viewerOptions: {
          show: [],
          drop: [],
          disabled: ['_index_'],
          cellStyles: {},
          userMenus: {},
          domLayout: 'autoHeight',
          agGridTheme: 'ag-theme-alpine-custom'
        },
        formControl: {
          version: 'v3',
          status: 'saved',
          drop: [],
          show: [],
          defaultComponent: 'Input',
          itemCounter: 0,
          currentItems: [],
          items: [],
          visuals: [],
          style: {height: '95%', width: '95%' , overflow: 'hidden', border: '1px', resize: 'both',borderStyle: 'solid', borderColor: 'black'}
          }
      }
    };
      `
    );
}
export default configTemplate;