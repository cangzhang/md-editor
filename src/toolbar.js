import './toolbar.css'

import React from 'react'

export default class EditorToolbar extends React.Component {
  render() {
    return (
      <div className={'editor-toolbar-container'}>
        <div className={'control-btns'}>
          <ul>
            <li>H</li>
            <li>B</li>
            <li>I</li>
          </ul>
        </div>
      </div>
    )
  }
}
