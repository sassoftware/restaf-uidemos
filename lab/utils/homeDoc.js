// TBD: use html plugins in bundler
function homeDoc() {
  let ht =
  `
  <!DOCTYPE html>
  
  <html>
  <head>
    <style>
      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
      }
      th, td {
        padding: 5px;
        text-align: left;
      }
      body {
        text-align: left;
      }
      blockquote {
        font-weight: bold;
        font-style: italic;
        color: black;
        outline: 1px solid black;
      }
      </style>
      </style>
    </head>
  <body>
  <h1> sasfsp/viyafsedit - A React Component for Building and Viewing Data Entry Forms in SAS Viya </h1>
  
  <blockquote>
  See <a href="https://mtesstaticcontent.z13.web.core.windows.net/sasfsp/v1/help.html" target="_blank"> this document for help <a/>
  </blockquote>

  <h2 id="preamble"> Preamble </h2>
  <hr>

  At this time this is for <strong>internal use only</strong>. You can use it to build demos,POC's and internal applications. 
  Do not share the component with customers.

  To install the component see <a href="https://mtesstaticcontent.z13.web.core.windows.net/sasfsp/v1/install.html" target="_blank">this document</a>.

<hr>
  <h2 id="intro">Introduction</h2>
<hr>
  <p>
  sasfsp/viyafsedit is a react component for building and viewing data entry forms.
  It is modeled after the SAS/FSP product from SAS 9. 
  </p>

  <h3> Is it lowcode/nocode</h3>

  I am personally not sure what features make an application lowcode/nocode. 
  
  <p>This version has generic but Viya aware features(components). By adding smarter components for specific domains 
  one could come to close to almost no code for application developers.
  </p>

  <blockquote>
  So for promotional purposes I am claiming sasfsp/viyafsedit is lowcode/nocode :-)
  </blockquote>

  <hr>
  <h2>Key Features</h2>
  <hr>
  <ul>
    <li> It is a React component(requires React 18.2.0 or higher)</li>
    <li> Available as esm and umd modules</li>
    <li> Add a component to the form with a click</li>
    <li> Resize and move the components with the mouse </li>
    <li> Customize and the look and functionality thru properties. Most properties are scriptable for greater control </li>
    <li>The application comes with a set of "smart" components that are Viya aware. The underlying react library is mostly by  
    <a href="https://mui.com/joy-ui/getting-started/overview" target="_blank"> mui/joy </a>. 
    The short term goal is to allow developers to supply their own react components(example: Nova) 
    </li>
    <li>The application is built using the SAS Viya REST APIs. </li>
    <li> All client side calculations use Javascript</li>
    <li> Developers have access to all Viya capabilities that are exposed thru REST API.
    <ul>
      <li>The application comes with builtin functions to execute SAS code, CAS code, run cas actions and access MAS</li>
      <li>It also provides a function to make http calls to any other service</li>
      <li> Developers can add their own functions</li>
    </ul>
  </ul>

`;
return ht;
}
export default homeDoc;