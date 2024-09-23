/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState} from 'react';

import createAppControl from './utils/createAppControl';
import DataForm from '../frame/DataForm';
import Border from './Border';
import useSize from '@react-hook/size';
// https://www.react-spring.dev/docs/utilities/use-resize

function FormViewer(props) {
  const {name, style, value, lib, table,folder, form, menu,  show, drop, designMode, refresh, sharedProps} = props;
  const iappEnv = sharedProps.appEnv;
  const [appEnv, setAppEnv] = useState(null);
  const divref = React.useRef(null);
  const [width, height] = useSize(divref);

  useEffect(() => {
    const createInfo = async () => {
      let setupState = {
        store: iappEnv.store,
        source: iappEnv.source,
        sessionID: iappEnv.sessionID,
        logonPayload: iappEnv.logonPayload,
        lib: (lib != null && lib.trim().length >0 ) ? lib : null,
        name: (table != null && table.trim().length > 0) ? table : null,
        config: form,
        configFolder: folder,
        builtins: (props.builtins != null) ? props.builtins : {},
        user: iappEnv.user,
        userFunctions: (props.userFunctions != null) ? props.userFunctions : {},
        callbacks: { name: name, onChange: iappEnv._setValue, appEnv: iappEnv},
        viewType: 'table',
      }

      if(value != null && value.trim().length > 0) {
        let [l,n]= value.split('/');
        setupState.folder = l;
        setupState.form  = n;
      };
      // let tcase = (lib != null && lib.trim().length >0  && table != null && table.trim().length > 0);
      let fcase = (folder != null && folder.trim().length > 0  && form != null && form.trim().length > 0);
 
      if (fcase) {
         let appEnv = await createAppControl(setupState, false, null);
         
         return appEnv;
      } else {
          return null;
      }
    }
    createInfo()
       .then(appEnv => {
        
        if (appEnv !== null){
          let appControl = appEnv.appControl;
          appControl.initialFetch.qs.limit = 1;
          if (props.where != null && props.where.length > 0 ) {
              appControl.initialFetch.qs.where = props.where;
          };
          appControl.viewerOptions.show = (show == null) ? [] : show;
          appControl.viewerOptions.drop = (drop == null) ? [] : drop;
        }
        
        setAppEnv(appEnv);

      })
      .catch(err => {
        console.log(err);
      })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])

  let sx ={height: 'inherit', width: 'inherit', margin: '2px', borderStyle: 'solid', borderWidth: '1px', borderRadius: '8px', ...style};
  return (
    <div style={sx} ref={divref}>
      {(appEnv !== null) ?<DataForm appEnv={appEnv} mode="display" testMode={designMode} menuflag={menu} parentSize={{height, width}} parentRef={divref}/> : <Border/>}
    </div>);
};
export default FormViewer;