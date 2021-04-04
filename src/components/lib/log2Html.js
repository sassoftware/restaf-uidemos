function log2Html (logl, classes) {
    let outAll = '';
    logl.forEach((l, i) => {
        let line = l.line;
        let type = l.type;
        console.log(l);
        if (line.length === 0) {
            line = '  ';
        }
        let out;
      //  line = line.substr(1);
        let c = classes[ `l${type}` ];
        if (l.type === 'title') {
            out =
                `<h2 key={i} className=${c}>
                    ${line}
                </h2>`;

        } else {
            out = 
                `<p key={i} className=${c}>
                    ${line}
                </p>`;
        }
        debugger;
        outAll = outAll + out;
    });

     return outAll;
}
export default log2Html;