import './App.css';

import React from 'react';
import Editor from './editor';

const sleep = (delay, value) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay, value)
  })
}

class App extends React.Component {

  onInputChar = () => {
    return sleep(3000, [])
      .then(val => {
        console.log(`val: `, val)
      })
  }

  render() {
    return (
      <div className="App">
        <Editor
          onInputChar={this.onInputChar}
        />
      </div>
    );
  }
}

export default App;
