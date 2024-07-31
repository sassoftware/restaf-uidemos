/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, {useState} from 'react';
import Editor from "@monaco-editor/react";
//import useSize from '@react-hook/size';

function VScode(props) {
  const {value,name, style, onChange, language, designMode} = props;
  const [code, setCode] = useState(value);
  const divref = React.useRef(null);
 // const [width, height] = useSize(divref);
  
  const _setCode = (value) => {
    setCode(value);
    const synthE = {
      key   : 'Enter',
      target: {
        value: code,
        name : name
      }
    };
    if (designMode === false) {
      onChange(synthE.target.value, synthE);
    }
  }
  /*
  height={height - 5}
    width= {width -5}
  */
  let editor = <Editor
    height="inherit"
    width= "Inherit"
    value={code}
    defaultLanguage={language}
    defaultValue={code}
    options={editorOptions()}
    onChange={_setCode}
    codeLens={false}
  />;
  let sx ={height: 'inherit', width: 'inherit', margin: '2px', borderStyle: 'solid', borderWidth: '1px', borderRadius: '8px', ...style};

  return (
    <div name={name} style={sx} ref={divref}>
      {editor}
    </div>);
}
function editorOptions() {
  return {
    "acceptSuggestionOnCommitCharacter": true,
    "acceptSuggestionOnEnter": "on",
    "accessibilitySupport": "auto",
    "autoIndent": false,
    "automaticLayout": true,
    "codeLens": true,
    "colorDecorators": true,
    "contextmenu": true,
    "cursorBlinking": "blink",
    "cursorSmoothCaretAnimation": false,
    "cursorStyle": "line",
    "disableLayerHinting": false,
    "disableMonospaceOptimizations": false,
    "dragAndDrop": false,
    "fixedOverflowWidgets": false,
    "folding": true,
    "foldingStrategy": "auto",
    "fontLigatures": false,
    "formatOnPaste": false,
    "formatOnType": false,
    "hideCursorInOverviewRuler": false,
    "highlightActiveIndentGuide": true,
    "links": true,
    "minimap": {
      "enabled": true,
      "maxColumn": 120,
      "renderCharacters": true,
      "showSlider": "mouseover",
      "side": "right"
    },
    "mouseWheelZoom": false,
    "multiCursorMergeOverlapping": true,
    "multiCursorModifier": "alt",
    "overviewRulerBorder": true,
    "overviewRulerLanes": 2,
    "quickSuggestions": true,
    "quickSuggestionsDelay": 100,
    "readOnly": false,
    "renderControlCharacters": false,
    "renderFinalNewline": true,
    "renderIndentGuides": true,
    "renderLineHighlight": "all",
    "renderWhitespace": "none",
    "revealHorizontalRightPadding": 30,
    "roundedSelection": true,
    "rulers": [],
    "scrollBeyondLastColumn": 5,
    "scrollBeyondLastLine": true,
    "selectOnLineNumbers": true,
    "selectionClipboard": true,
    "selectionHighlight": true,
    "showFoldingControls": "mouseover",
    "smoothScrolling": false,
    "suggestOnTriggerCharacters": true,
    "wordBasedSuggestions": true,
    "wordSeparators": "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
    "wordWrap": "off",
    "wordWrapBreakAfterCharacters": "\t})]?|&,;",
    "wordWrapBreakBeforeCharacters": "{([+",
    "wordWrapBreakObtrusiveCharacters": ".",
    "wordWrapColumn": 80,
    "wordWrapMinified": true,
    "wrappingIndent": "none"
  }
}
export default VScode;