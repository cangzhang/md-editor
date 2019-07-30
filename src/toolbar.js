import './toolbar.css'
import React from 'react'

export default class EditorToolbar extends React.Component {
  insertHeader = ev => {
    ev.preventDefault()
    this.props.onInsertHeader()
  }

  render() {
    return (
      <div className={'editor-toolbar-container'}>
        <div className={'control-btns'}>
          <ul>
            <li onMouseDown={this.insertHeader}>H</li>
            <li>B</li>
            <li>I</li>
          </ul>
        </div>
      </div>
    )
  }
}
