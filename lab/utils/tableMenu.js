function tableMenu(dataMenu,closeFlag, options,table, isTable) {
  const _scrollCheck = (item) => {
     // const options = appEnv.state.scrollOptions;
     
      if (table === null) return true;
      if (options === null) return false;
      if (isTable === true) return false;
      let flag = options.indexOf(item) === -1 ? true: false;
      return flag;
  };
  let scroller = {
      first: {
      label: "First",
      action: "first",
      disabled: table === null,
      state: false,
      },
      prev: {
      label: "Previous",
      action: "prev",
      disabled:  _scrollCheck("prev"),
      state: false,
      },
      next: {
      label: "Next",
      action: "next",
      disabled: _scrollCheck("next"),
      state: false,
      }
  };
  let dmanage = {
      new: {
      label: "Add Row",
      action: "add",
      disabled: true,
      dialog: "NewDialog",
      state: false,
      },
      append: {
      label: "Append",
      action: "append",
      disabled: true,
      dialog: "AppendDialog",
      state: false,
      },
      save: {
      label: "Save Table",
      action: "save",
      disabled: false,
      state: false,
      },
      saveas: {
      label: "Save As",
      action: "saveas",
      disabled: true,
      dialog: "SaveAsDialog",
      state: false,
      },
      close: {
      label: "Close",
      action: "close",
      disabled: false,
      dialog: "AlertDialog",
      state: false,
      },
  };

  let tmenu = (dataMenu === true) ? {...scroller, ...dmanage} : scroller;
  if (closeFlag !== true) {
      delete tmenu.close;
  }
  return tmenu;

}
export default tableMenu;