/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';
import hilite from '../lib/hilite';

function HtmlViewer(props) {
    let {html, selections} = props;
    let text = (selections != null) ? hilite(html, selections) : html;
    return (
        <div>
            <Editor
                value={html}
                disabled
               /* menubar={true}*/
                init={{
                    height: 'inherit',
                    inline: true,
                    toolbar: true,
                    menubar: false,
                    plugins:[
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ]
                    /*
                    setup: function (editor) {
                        editor.on('AfterSetSelectionRange', (e) => {
                            let bookmark = editor.selection.getBookMark();
                            console.log(bookmark);
                        });
                    },
                    */
                }}
            />
        </div>
    );
};

HtmlViewer.propTypes = {
    html      : PropTypes.string.isRequired,
    selections: PropTypes.object
}
export default HtmlViewer;
