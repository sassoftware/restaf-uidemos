/*
 * Copyright (c) SAS Institute Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 *
 */

// Place holder for different scenarios of authentication

// password flow

let VIYA_HOST = 'http://samples.com';

//Valid AUTHOPTIONS values are: 'password' | 'implicit' | 'proxy' | 'external'

// password - password flow - make sure client_id is for password flow
//            you need to prompt user for userid and password
// implicit - implicit flow - ake sure client_id is for password flow
//            SAS will prompt user of userid and password - ideal
// proxy    - make sure you are using restaf-server in proxy mode
//            SAS will prompt user of userid and password - ideal
// external - assumes that you are running inside a previous authenticated session
//            use case is when using as an embedded url in VA


let AUTHOPTIONS = 'proxy';

let LOGONPAYLOAD = null;
debugger;
switch( AUTHOPTIONS ) {
    case 'proxy': {
        LOGONPAYLOAD = null;
        break;
    }
    case 'password': {
        LOGONPAYLOAD = {
            authType    : 'password',
            host        : VIYA_HOST,
            user        : 'user',
            password    : 'pw',
            clientID    : 'clientid',
            clientSecret: 'clientsecret'
        };
        break;
    }
    case 'implicit': {
        LOGONPAYLOAD = {
            authType: 'implicit',
            host: VIYA_HOST,
            clientID: 'implicit clientid',
            redirect: 'redirect html' /* might be obsolete based on what happpens in Viya 3.4 release */
        };
        break;
    }
    case 'server': {
        LOGONPAYLOAD = {
            authType:'server',
            host: VIYA_HOST
        };
        break;
    }
    default: {
        alert( 'AUTHOPTIONS not set in /shared/env.js');
        break;
    }

}



