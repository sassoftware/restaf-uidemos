/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function hilite (text, selections) {
    let texta = text;
    selections.forEach((s, i) => {
        let cn = 'span' + i;
        let spanTextht = `<span class="${cn}">${s}</span>`;
        texta = texta.replaceAll(s, spanTextht);
    });
    return texta;
}
export default hilite;