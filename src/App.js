import React, { Component } from 'react';
import './css/App.module.css';
import Logo from './component/Logo.js';
import Player from './component/Player.js';
function App(){
    return (
      <div className="App">
			<Logo/>
			<Player/>
      </div>
    );
}

export default App;
