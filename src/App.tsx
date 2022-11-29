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
      <video src="https://download-video.akamaized.net/2/playback/2ff0ce81-4cfa-4c99-8303-db697958fb19/9875ff83?__token__=st=1669660290~exp=1669674690~acl=%2F2%2Fplayback%2F2ff0ce81-4cfa-4c99-8303-db697958fb19%2F9875ff83%2A~hmac=597d2883d63281594c310e6dbbdf2a1d5e65a6c610e91123be01f441bf27e548&r=dXM%3D" autoPlay loop playsInline muted></video>
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
