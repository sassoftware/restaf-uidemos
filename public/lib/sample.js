function getAppControl() {
    return {
        description: 'Simple Example',
        source: 'cas',
        table : {caslib: 'public', name: 'TESTDATA'},
        byvars: ['id'],
  
        initialFetch: {
          qs: {
            start: 0,
            limit: 1,
            format: false
          },
        },
  
        customColumns: {
          total: {
            Column         : "Total",
            Label          : "Grand Total",
            FormattedLength: 12,
            Type           : "double"
            }
        },
        editControl: {
          handlers: {init: init, main: main, term: term, x1: x1}, 
          autoSave: true 
      
        },
        appData: {} 
    }
  }
async function init (data,rowIndex,appEnv,type) {
    let status = {code: 0, msg: `${type} processing completed`};
    data.total = data.x1 + data.x2 + data.x3 ;
    return [data, status];
};

async function x1 (data, name, rowIndex, appEnv) {
    let msg = {code: 1, msg: `${name} handler executed.`};
    if (data.x1 > 10) {
        data.x1 = 10;
        msg = {code: 0, msg: "Exceeded Max. Value reset to max"};
    }
  
    return [data, msg];
  };

async function main (data, rowIndex,appEnv, type) {
  let status = {code: 0, msg: `${type} processing completed`};
  data.total = data.x1 + data.x2 + data.x3 ;
  return [data, status];
};

async function term (data, rowIndex,appEnv, type) {
    let status = {code: 0, msg: `${type} processing completed`};
    return [data, status];
};


// Initialize the application
async function initialize() {
  let appControl = getAppControl();
  // initialize a session
  let r = await restafedit.setup(LOGONPAYLOAD, appControl);
  let r2 = await restafedit.scrollTable('first', r);
  return r;

}
  