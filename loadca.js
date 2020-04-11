/*
 *  ------------------------------------------------------------------------------------
 *  * Copyright (c) SAS Institute Inc.
 *  *  Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  * http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  *  Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  limitations under the License.
 * ----------------------------------------------------------------------------------------
 *
 */

"use strict";

const ca = require('win-ca');


let a = ca({format: ca.der2.pem,  store: ['root', 'ca'], save: 'pems'});

let pem ='';
// let a = ca({format: ca.der2.pem,  store: [ 'root', 'ca' ], ondata: (c) => {pem = pem + c}});
console.log(pem);

// Alternate approach: save the pems and reuse them. In this case all you need to pass to restaf is roots.pem which has 
// all the pems.