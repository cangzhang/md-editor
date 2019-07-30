import 'draft-js/dist/Draft.css'

import React from 'react'
import { Editor, EditorState, Modifier, SelectionState } from 'draft-js'
// import { isPromise } from './utils'
import Toolbar from './toolbar'

export default class MyEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }

  handleCharInput = (chars, editorState) => {
    const { onInputChar } = this.props
    onInputChar(chars)
  }

  handlePastedTxt = (text, html, editorState) => {
  }

  onInsertHeader = () => {
    const { editorState } = this.state
    const contentState = editorState.getCurrentContent()
    const selectionState = editorState.getSelection()
    const anchorKey = selectionState.getAnchorKey()

    const currentContentBlock = contentState.getBlockForKey(anchorKey)
    const startOffset = selectionState.getStartOffset()
    const endOffset = selectionState.getEndOffset()

    const hasSelection = startOffset !== endOffset
    let cs = null

    if (hasSelection) {
      // const focusOffset = selectionState.getFocusOffset()
      const focusKey = selectionState.getFocusKey()
      const selectedText = currentContentBlock.getText().slice(startOffset, endOffset)
      const newTxt = `# ${selectedText} #`

      const ss = SelectionState.createEmpty('header')
      const updatedSelection = ss.merge({
        focusKey,
        focusOffset: 0
      })

      cs = Modifier.replaceText(contentState, updatedSelection, newTxt)
      let newState = EditorState.push(editorState, cs, 'insert-characters')

      this.setState({
        editorState: newState
      })
    } else {
      cs = Modifier.insertText(contentState, selectionState, ` # `)
      const newState = EditorState.push(editorState, cs, 'insert-characters')
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
