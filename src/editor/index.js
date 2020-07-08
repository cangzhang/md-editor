// import 'highlight.js/styles/default.css';
import s from './style.module.scss';

// import hl from 'highlight.js';
import _noop from 'lodash/noop';
import { CodeJar } from '../codejar/codejar';

import React, { useEffect, useRef } from 'react';
import cn from 'classnames';

export default function MdEditor({ defaultValue, language = ``, onChange = _noop }) {
  const editor = useRef(null);
  const $jar = useRef(null);

  // const highlight = editor => {
  //   hl.highlightBlock(editor)
  // }

  useEffect(() => {
    $jar.current = CodeJar(editor.current, _noop, {
      indentOn: /[([{]$/
    })

    $jar.current.updateCode(defaultValue)

    $jar.current.onUpdate(code => {
      onChange(code)
    })
    // eslint-disable-next-line
  }, [])

  return <div className={cn(s.mdEditor, `language-${language} ${language}`)} ref={editor} />
}
