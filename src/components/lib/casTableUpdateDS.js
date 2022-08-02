/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

async function casTableUpdateDS(store, session, caslib, table, data, where) {

    let bystmt = 'by ';
    where.map(m => { bystmt = bystmt + ' ' + m; });
    console.log(bystmt);

    let tempdata = 'data temp;  ';

    // let data = fdata.filter ( (r) => where.findIndex((k) => r.name === k.value));
    
    data.map((e, i) => {
        let valueString;
        if (e.name !== '_Index_') {
            if (e.value == null) {
                valueString = '.';
            } else if (typeof e.value === 'string') {
                valueString = JSON.stringify(e.value);
            } else {
                valueString = e.value.toString();
            }
            let r = `${e.name} = ${valueString};  `;
            tempdata += r;
        }
    });
    tempdata += ' output; run;';
    
    let step1 = `action datastep.runcode result=result1 / code = "${tempdata}"; print result1;`;

    let clib = (caslib.search('CASUSER') !== -1) ? caslib : 'casuser';
    clib = 'casuser';

    let mergestmt = `data ${clib}.${table}; merge ${clib}.${table} temp; ${bystmt};run;`;

    let step2 = `action datastep.runcode result=result2 / code = "${mergestmt}";  print result2;run;`;


    let code = step1 + step2;
    console.log(code);

    let payload = {
        action: 'sccasl.runCasl',
        data: { code: code }
    };
    console.log(payload);
    
    if (where.length > 0) {
        try {
            let r = await store.runAction(session, payload);
            let result = r.items().toJS();
            return result;
        }
        catch (err) {
            console.log(err);
        }
    }

}
export default casTableUpdateDS;