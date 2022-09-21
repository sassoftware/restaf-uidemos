
async function init (data,row,appEnv,type) {
  let status = {code: 0, msg: "Init processing completed"};
  data.offer = data.priceperuser * data.numberofusers*(1 - (data.discount/100));
  if (type === 'main') {
    status.msg = null;
  }
  return [data, status];
};

async function term (data, rowIndex, appEnv, type) {
  return [data, { code: 0, msg: `${type} processing completed` }];
};

let appControlOffer1 = {
 
    description: 'Product Offers',

    source: 'cas',
    table : { caslib: 'casuser', name: 'tempdata' },
    byvars: ['pk'],
    initialFetch: {
      qs: {
        start : 0,
        limit : 50,
        format: false,
        where : ''
      }
    },
    preamble: `
      action datastep.runCode /
        code = 'data casuser.tempdata; set Public.PRODUCT_MASTER;run;';
        run;
    `,
    customColumns: {
      offer: {
        Column         : 'Offer',
        Label          : 'Offer Price',
        FormattedLength: 12,
        Type           : 'double'
      }
    },
    editControl: {
      // eslint-disable-next-line object-shorthand
      handlers: { init, main: init, term },
      autoSave: true
    },
    // stuff below is for the UI
    appData: {
      viewType: 'table', /* table|form */
      form: {
        defaultComponent: 'InputEntry',
        show            : ['pk', 'viya4_solutions', 'version', 'priceperuser', 'numberofusers', 'discount', 'offer'],
        classes         : {},
        title           : 'Offer Application',
        visuals         : {
          offer: {
            props: {
              disabled: true
            }
          },
          pk: {
            props: {
              disabled: true,
            }
          },
          viya4_solutions: {
            props: {
              disabled: true,
            }
          },
          version: {
            props: {
              disabled: true,
            }
          }
        }
      }
    }
  };
  let appControlOffer2 = {
 
    description: 'Product Offers',

    source: 'cas',
    table : { caslib: 'casuser', name: 'tempdata' },
    byvars: ['pk'],
    initialFetch: {
      qs: {
        start : 0,
        limit : 1,
        format: false,
        where : ''
      }
    },
    preamble: `
      action datastep.runCode /
        code = 'data casuser.tempdata; set Public.PRODUCT_MASTER;run;';
        run;
    `,
    customColumns: {
      offer: {
        Column         : 'Offer',
        Label          : 'Offer Price',
        FormattedLength: 12,
        Type           : 'double'
      }
    },
    editControl: {
      // eslint-disable-next-line object-shorthand
      handlers: { init, main: init, term },
      autoSave: true
    },
    // stuff below is for the UI
    appData: {
      viewType: 'form', /* table|form */
      form: {
        defaultComponent: 'InputEntry',
        show            : ['pk', 'viya4_solutions', 'version', 'priceperuser', 'numberofusers', 'discount', 'offer'],
        classes         : {},
        title           : 'Offer Application',
        visuals         : {
          offer: {
            props: {
              disabled: true
            }
          },
          pk: {
            props: {
              disabled: true,
            }
          },
          viya4_solutions: {
            props: {
              disabled: true,
            }
          },
          version: {
            props: {
              disabled: true,
            }
          }
        }
      }
    }
  };
  function getAppControl(type) {
    
    return (type === 'form') ? appControlOffer2 : appControlOffer1;
  }

  