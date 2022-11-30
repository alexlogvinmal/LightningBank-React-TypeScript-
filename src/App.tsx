import React, { useState } from 'react';
import './App.css';
import { Main } from './components/Main';

function App() {

  let [clickedP, setClickedP] = useState(true);
  function enterPressed(event: any) {
    if(event.key=== 'Enter')
    {
      setClickedP(prev => false)
    }
  }
  

  return (
    <div tabIndex={0} onKeyUp={enterPressed} >

      { clickedP ? <div className="viewport-header" >
        <h1>
          WELCOME TO
          <span>LGHTNNGBNK</span>
        </h1>
        <p className="penter blink" onClick={() => setClickedP(prev => false)}>press [Enter]</p>
      </div> : <Main/> }
    </div>
  );
}

export default App;
