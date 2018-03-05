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

function findODS( result ) {
    return new Promise( ( resolve, reject ) => {
        debugger;
        let ods = result.items();
        let ODSItem = null;
        // get the last htm output
        debugger;
        ods.forEach( (o, k) => {
            if ( k.indexOf( '.htm' ) >= 0 ) {
                ODSItem = k;
            }
        } );
        if ( ODSItem !== null ) {
            console.log( ODSItem );
            resolve( result.itemsCmd( ODSItem, 'self' ) );
        } else {
            reject( { Warning: 'No ODS output was returned' } )
        }
    } )
}

function logViewer (store, folder) {
    let props = {
        store  : store,
        folder : folder
    };
    rafuip.LogList(props, "#log");
    return true;
}

