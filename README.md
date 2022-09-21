# @sassoftware/viyaeditmui - A component for data entry applications in SAS Viya

## Script Tag

```html
<script type="text/javascript" src="https://unpkg.com/@sassoftware/viyaeditmui></script>
```

The exported global is **ViyaEditMui**

> Why Mui? This sample component uses [MUI V5](https://mui.com/) to demonstrate how to use [@sassoftware/restafedit](https://github.com/sassoftware/restaf/blob/restafedit/README.md) to build data entry applictions. So I wanted to give them credit.
> You should use the component library of your choice. Also feel free to clone and improve this component library.

## Exported Entries

Two entries are exported.

### ViyaDataEditor

 The component to display either a table or a form for editing CAS or SAS datasets.

The props are:

**viyaConnection** - information for connecting to SAS Viya

**appControl** - application control information.

Please see [@sassoftware/restafedit](https://github.com/sassoftware/restaf/blob/restafedit/README.md) for details on these objects.

If you plan to use this component in a html page please see this [link](https://reactjs.org/docs/add-react-to-a-website.html) for guidance.

An alternative is to use the method below

### display

This allows the application writer to display the viewer in their html page.
This eliminates the need to use ReactDOM directly in the html page.

Use it as follows:
const props = {
    ViyaConnection,
    appControl
};
ViyaEditMui.display( props, 'name of a div');


## Displaying the application in SAS Visual Analytics.

One of the common application patterns is to use the web-content object in SAS VA.
S