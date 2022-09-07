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
        handlers: {init: init, main: init, term: term, x1: x1},/*note reuse of init*/
        autoSave: true 
    
      },
      appData: {} 
  }
}
