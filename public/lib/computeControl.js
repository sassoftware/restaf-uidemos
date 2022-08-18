function getAppControl() {
  return {
      description: 'Simple Example',
      source: 'compute',
      table : {libref: 'public', name: 'testdata'},
      byvars: ['id'],
      preamble: `libname public '/tmp';run; 
            data public.testdata;
            keep x1 x2 x3 id;
            length id $ 5;
            do i = 1 to 10; x1=i; x2=3; x3=i*10; id=compress(TRIMN('key'||i));
            output;
            end;
            run;`,

      cachePolicy: true,

      initialFetch: {
        count : 1,
        from  : 1,
        format: false
      },

      customColumns: {
        total: {
          Column         : "Total",
          Label          : "Grand Total",
          FormattedLength: 12,
          Type           : "FLOAT"
          }
      },
    editControl: {
      handlers: {init: init, main: main, term: term},/*note reuse of init*/
      save    : true,  
      autoSave: true
  
    },
      appData: {}
  }
}