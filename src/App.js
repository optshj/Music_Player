import React from 'react';
import './css/App.module.css';
import Logo from './component/Logo.js';
import Btn from'./component/Btn.js';
import {PlayProvider} from './Context';

function App(){
    return (
	<PlayProvider>	
      <div className="App">
			<Logo/>
			<Btn/>
      </div>
	</PlayProvider>
    );
}

export default App;
