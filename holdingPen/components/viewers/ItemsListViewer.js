

import React, { useState, useContext, useEffect, useRef} from 'react';

import {AppContext} from '../../providers';

function ItemsListViewer (props) {
    // common setup
    let appContext = useContext(AppContext); /* get app control information */
    let { store } = appContext; /* dereference restaf store - your gateway to Viya */
    debugger;

    // component setup
    let [ display, setDisplay ] = useState(null);
    let [ folder, setFolder ]   = useState(null);
    let [ error, setError ]     = useState(null);

    // load the initial set of items

    
    let lastService = useRef(null);
    

    useEffect(() => {
        async function getService (newService) {
            let s = await store.addServices(newService);
            let service = s[ newService ];
            let f = await store.apiCall(service.links(newService));
            return f;
        }
        if (lastService.current !== props.name) {
            debugger;
            getService(props.name)
                .then((f) => {
                    setFolder(f);
                    setError(null);
                    lastService.current = props.name;
                })
                .catch(err => {
                    setError(JSON.stringify(err, null, 4));
                })
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // handle scrolling thru the list of items
    useEffect(() => {
        const doCommand = (f, rel) => {
            store.apiCall(f.scrollCmds(rel))
                .then((fnew) => {
                    setFolder(fnew);
                    })
        }

        const makeMenu = (f) => {
            let cmds = f.scrollCmds();
            let menu = [];
            cmds.forEach((c, rel) => {
                menu.push(
                    <button key={rel} onClick={()=> doCommand(f, rel)} className="button">
                        {' '}
                        {rel}{' '}
                    </button>
                );
            });
            return menu;
        }

        const makeTable = (f) => {
            let itemsList = f.itemsList();
            return (
                <div className="idTable">
                    <ul>
                        {itemsList.map((m, i) => (
                            <li key={i}> {m} </li>
                        ))}
                    </ul>{' '}
                </div>
            );
        }
    
        if (folder !== null) {
            let menu = makeMenu(folder);
            let table = makeTable(folder);
            setDisplay({ menuList: menu, table: table });
        }
    
    }, [folder,store]);
    
  
    // create display

    let show = (error !== null) ? <div>{error}</div> :
        (display == null)
        ? <div> Loading...</div>
        : <div>
            {display.menuList}
            {display.table}
        </div>
    return show;

}
export default ItemsListViewer;


