import 'draft-js/dist/Draft.css'

import React from 'react';
import { Editor, EditorState } from 'draft-js';
import { isPromise } from './utils'

export default class MyEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = (editorState) => this.setState({ editorState })

  handleCharInput = (chars, editorState) => {
    console.log(chars)
    const { onInputChar } = this.props
    const isP = isPromise(onInputChar)

    if (chars === '#') {
      if (isP) {
        onInputChar()
      }
    }
  }

  handlePastedTxt = (text, html, editorState) => {}

  render() {
    return (
      <div
        className={'edit-container'}
      >
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleBeforeInput={this.handleCharInput}
          handlePastedText={this.handlePastedTxt}
        />
      </div>
    );
  }
}
