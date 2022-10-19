// web app version of Example 2
// Main difference is the initialize function to do the initialization
// when the body is initialized
//


 
async function init (data, rowIndex, appEnv, type) {
  data.total = data.x1 + data.x2 + data.x3 ;
  data.t1 = data.x1;
  data.t2 = 'A long string';
  debugger;
  return [data, { code: 0, msg: `${type} processing completed` }];
};
async function main (data, rowIndex, appEnv, type) {
  data.total = data.x1 + data.x2 + data.x3 ;
  debugger;
  return [data, { code: 0, msg: `${type} processing completed` }];;
};
async function term (data, rowIndex, appEnv, type) {
  return [data, { code: 0, msg: `${type} processing completed` }];
};

async function x1 (data, name, rowIndex, appEnv) {
  let status = { code: 1, msg: `${name} handler executed.` };
  data.t1=data.x1;
  debugger;
  if (data.x1 > 10) {
    data.x1 = 10;
    status = { code: 0, msg: 'Exceeded Max. Value reset to max' };
  }
  return [data, status];
};

// eslint-disable-next-line no-unused-vars
let appControlCas = {
 
    description: 'Simple Example',

    source: 'cas',
    table : { caslib: 'casuser', name: 'newdeal' },
    byvars: ['id'],
    onNoData: 'update',

    preamble: `
    action datastep.runcode /
    single="YES"
    code= "
       data casuser.newdeal;
       keep x1 x2 x3 x4 x5 x6 x7 x8 id;
       length id varchar(50);
       do i = 1 to 50;
       x1=i; x2=3; x3=i*10; x4=1;x5=1;x6=1;x7=1;x8=1; id=compress(TRIMN('key'||i));
       output;
       end;
       ";
       `,

    initialFetch: {
      qs: {
        start : 0,
        limit : 20,
        format: false,
        where : ''
      }
    },
    customColumns: {
      total: {
        Column         : 'Total',
        Label          : 'Grand Total',
        FormattedLength: 12,
        Type           : 'double'
      },
      t1: {
        Column         : 'T1',
        Label          : 'Grand Total T1',
        FormattedLength: 12,
        Type           : 'double'
      },
      t2: {
        Column         : 'T2',
        Label          : 'some string',
        FormattedLength: 25,
        Type           : 'char'
      }
    },
    editControl: {
      // eslint-disable-next-line object-shorthand
      handlers: { init, main: main, term: term, x1: x1 },
      autoSave: true
    },
    appData: {
      viewType: 'table', /* table|form */
      form: {
        defaultComponent: 'InputEntry',
        show            : [],
        classes         : {},
        title           : '',
        visuals         : {
          total: {
            props: {
              disabled: true
            }
          },
          t1: {
            props: {
              disabled: true
            }
          },
          id: {
            props: {
              disabled: true,
            }
          }
        }
      }
    }
  };

let appControlCompute = {
  description: 'Simple Example',

    source: 'compute',
    table : { libref: 'public', name: 'testdata' },
    byvars: ['id'],
    onNoData: 'update',

    preamble: `
    libname public '/tmp';run; 
    data public.testdata;
    keep x1 x2 x3 id;
    length id $ 5;
    do i = 1 to 100; x1=i; x2=3; x3=i*10; id=compress(TRIMN('key'||i));
    output;
    end;
    run;
       `,

    initialFetch: {
      qs: {
        start : 0,
        limit : 20,
        format: false,
        where : ''
      }
    },
    customColumns: {
      total: {
        Column         : 'Total',
        Label          : 'Grand Total',
        FormattedLength: 12,
        Type           : 'double'
      }
    },
    editControl: {
      // eslint-disable-next-line object-shorthand
      handlers: { init, main: main, term: term, x1: x1 },
      autoSave: true
    },
    appData: {
      viewType: 'table', /* table|form */
      form: {
        defaultComponent: 'InputEntry',
        show            : ['id', 'x1', 'x2', 'x3', 'total'],
        classes         : {},
        title           : 'Editing SAS Table with @sassoftware/restafedit',
        visuals         : {
          total: {
            props: {
              disabled: true
            }
          },
          id: {
            props: {
              disabled: true,
            }
          }
        }
      }
    }
  };


  // eslint-disable-next-line no-unused-vars
  function getAppControl (source, viewType) {
    console.log('Source: ', source);
    console.log('viewType', viewType )
    let t = (source === 'cas') ? appControlCas : appControlCompute;
    if (viewType === 'form') {
      t.appData.viewType = 'form';
      t.initialFetch.limit = 1;
    }
    return t;
  }
  
  