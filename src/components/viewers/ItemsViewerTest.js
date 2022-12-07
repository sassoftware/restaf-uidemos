/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useState, useContext,Fragment} from 'react';
import {AppContext} from '../../providers';
import ItemsMenu from '../helpers/ItemsMenu';

/**
 *
 * @param {
 *
 * } props
 */
function ItemsViewerTest(props) {
    let {service, initialRel} = props;
    let {store} = useContext(AppContext);
    let [appInfo, setAppInfo] = useState({
        result : null,
        msgText: null,
        msgIcon: null
    });
    // setting up this way to allow more setup calls as needed
    const _setup = async () => {
        let r  = await store.addServices(service);
        let result = await store.apiCall(r[service].links(initialRel));
        return result;
    }

    useEffect(() => {
        
        _setup()
            .then((result) => {
                setAppInfo({ result: result, msgText: null, msgIcon: null});
            })
            .catch((err) => {
                alert(JSON.stringify(err, null,4));
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [service]);

    const _onSelect = (name, index) => {
        alert(`${name}  ${index}`);
    }
    let show = (
        <Fragment>
             {appInfo.result !== null ? <ItemsMenu result={appInfo.result} showMenu={true} onSelect={_onSelect} {...props}/> : null}
             </Fragment>
    );
    return show;
}

export default ItemsViewerTest;
