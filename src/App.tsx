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
      <video src="https://download-video.akamaized.net/2/playback/2ff0ce81-4cfa-4c99-8303-db697958fb19/9875ff83?__token__=st=1669751364~exp=1669765764~acl=%2F2%2Fplayback%2F2ff0ce81-4cfa-4c99-8303-db697958fb19%2F9875ff83%2A~hmac=3b67440b81716ccd6d03828bf65c90a6ea4f4bbfda02294669fa9835bec9f8dc&r=dXM%3D" autoPlay loop playsInline muted></video>
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
