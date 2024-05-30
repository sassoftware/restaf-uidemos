function tablesExists(){
  let src =`
    count = dim(_args_);
    output = {};
    do i = 1 to count;
       t = _args_[i];
       rc = checkAndLoadTable(t.caslib, t.name);
       if ( rc eq 0) then do;
          output[i] =  t.name;
       end;
    end;
    send_response({casResults= {tables= output}});

`;
return src;
}
export default tablesExists;
 