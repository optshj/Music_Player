import React, { Component } from 'react';
import './css/App.module.css';
import Logo from './component/Logo.js';
import Player from './component/Player.js';
import Btn from'./component/Btn.js';
function App(){
    return (
      <div className="App">
			<Logo/>
			<Btn/>
      </div>
    );
}

export default App;
