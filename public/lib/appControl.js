// web app version of Example 2
// Main difference is the initialize function to do the initialization
// when the body is initialized
//

 
async function init (data, rowIndex, appEnv, type) {
  data.total = data.x1 + data.x2 + data.x3 ;
  return [data, { code: 0, msg: `${type} processing completed` }];
};
async function main (data, rowIndex, appEnv, type) {
  data.total = data.x1 + data.x2 + data.x3 ;
  return [data, { code: 0, msg: `${type} processing completed` }];;
};
async function term (data, rowIndex, appEnv, type) {
  return [data, { code: 0, msg: `${type} processing completed` }];
};

async function x1 (data, name, rowIndex, appEnv) {
  let status = { code: 1, msg: `${name} handler executed.` };
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
    table : { caslib: 'casuser', name: 'testdatatemp' },
    byvars: ['id'],

    preamble: `
    action datastep.runcode /
    code= "
       data casuser.testdatatemp;
       keep x1 x2 x3 id;
       /*length id $;*/
       do i = 1 to 1000;
       x1=i; x2=3; x3=i*10; id='longstring'||compress(TRIMN('key'||i));
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
        title           : 'Editing Data with React Components',
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

let appControlCompute = {
  description: 'Simple Example',

    source: 'compute',
    table : { libref: 'public', name: 'testdata' },
    byvars: ['id'],

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
        title           : 'Editing Data with React Components',
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
function getAppControl (source) {
  return (source === 'cas') ? appControlCas : appControlCompute;
}
