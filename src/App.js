import './App.css'

import React from 'react'
import Editor from './editor'

const sleep = (delay, value) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay, value)
  })
}

class App extends React.Component {
  onInputHash = async (char) => {
    if (char === '#') {
      console.log(`running promise...`)
      await sleep(2000)
      console.log(`promise resolved.`)
    }
  }

  render() {
    return (
      <div className='App'>
        <Editor
          onInputChar={this.onInputHash}
        />
      </div>
    )
  }
}

export default App
