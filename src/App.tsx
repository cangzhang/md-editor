import './App.css';

import React from 'react';
import MdEditor from './editor';

function App() {
  const onChange = (code: string) => {
    console.log(`changed`)
  }

  return (
    <div className="App">
      <MdEditor defaultValue={``} onChange={onChange} language={`markdown`}/>
    </div>
  );
}

export default App;
