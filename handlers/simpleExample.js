/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
let axios = require('axios');

module.exports = async function simpleExample (req,h) {
    const context = req.pre.context;
    let {token, host} = context;
    
    let config = {
        method : 'GET',
        url    : `${host}/files/files`,
        headers: {
            authorization: token
        }
    };

    let result = await axios(config);
    return result.data;
    
    };