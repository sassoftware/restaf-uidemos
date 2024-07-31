/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function createHTML(control) {

  let htm = `
<html>
<header>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@sassoftware/viyaedit"></script>
<script src="https://unpkg.com/@sassoftware/restaflib@next"></script>

<!--  Use the three files below to customize your application -->

<script>
function getViyaConnection(authType, host) {

  // complete the section based on authType
  // Change the sample values as needed
  let payload = {
    implicit: {
      host    : host,
      authType: 'implicit',
      clientID: 'clientimpl',
      redirect: 'viyaapp',
      appName : 'viyaeditor'
    },
    code: {
      host    : host,
      authType: 'server',
      appName : 'viyaeditor'
    },
    token: {
      host    : host,
      authType: 'token',
      token   : 'your-token-String',
      appName : 'viyaeditor'

    },
    va: {
      host: (host == null) ?  window.location.ancestorOrigins[0] : host,
      authType: 'server',
      appName: 'viyaeditor'
    }
  };
  return payload[authType];
}
</script>
<script>
   ${control}
</script>
<link rel="stylesheet" href="./App.css">
<style>
  .approot {
    text-align: center;
  }
</style>
<script type="text/javascript">
    // setup and display application
    function _display() {
        const props = {
            viyaConnection: getViyaConnection('va'),
            appControl    : getAppControl()
        }
        // Display application
        ViyaEdit.display(props, 'approot');
        return true;
    }
</script>

</header>

<body onload="_display()">
  <div id="approot" class="main"></div> 
</body>

</html>
}
`;
return htm;
}
export default createHTML;