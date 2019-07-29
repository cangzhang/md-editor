import 'draft-js/dist/Draft.css'

import React from 'react'
import { Editor, EditorState, Modifier, RichUtils } from 'draft-js'
// import { isPromise } from './utils'
import Toolbar from './toolbar'

export default class MyEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = (editorState) => this.setState({ editorState })

  handleCharInput = (chars, editorState) => {
    const { onInputChar } = this.props
    onInputChar(chars)
  }

  handlePastedTxt = (text, html, editorState) => {
  }

  onInsertHeader = () => {
    // this.onChange(
    //   RichUtils.toggleBlockType(this.state.editorState, 'header-one')
    // )

    const { editorState } = this.state
    let contentState = editorState.getCurrentContent()

    const selectionState = editorState.getSelection()
    const anchorKey = selectionState.getAnchorKey()

    const currentContentBlock = contentState.getBlockForKey(anchorKey)
    const startOffset = selectionState.getStartOffset()
    const endOffset = selectionState.getEndOffset()

    const hasSelection = startOffset === endOffset

    if (hasSelection) {
      const selectedText = currentContentBlock.getText().slice(startOffset, endOffset)
      console.log(selectedText)
    } else {
      console.log(`no selection`)
      contentState = Modifier.insertText(contentState, selectionState, `#`)
      let newState = EditorState.push(editorState, contentState, 'insert-header')
      this.setState({
        editorState: newState
      })
    }
  }

  render() {
    return (
      <div
        className={'edit-container'}
      >
        <Toolbar onInsertHeader={this.onInsertHeader}/>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleBeforeInput={this.handleCharInput}
          handlePastedText={this.handlePastedTxt}
        />
      </div>
    )
  }
}
