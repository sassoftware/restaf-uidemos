function logViewer (dataL) {
    let l = '';
    dataL.map(data => {
      let line = data["line"].replace(/(\r\n|\n|\r)/gm, "");
      if (line.length === 0) {
        line = "  ";
      }
      l = l + '\n' + line;
    });
    return l;
  }
  