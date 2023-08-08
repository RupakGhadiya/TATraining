import React from 'react';
import './App.css';
import {TypingProps} from './components/Props/TypingProps';

function App() {
  return (
    <div className="App">
      <TypingProps name="Rupak" age={23}/>
    </div>
  );
}

export default App;
