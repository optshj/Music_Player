import React from 'react';
import './css/App.module.css';
import Logo from './component/Logo.js';
import Btn from'./component/Btn.js';
import {PlayContextProvider} from './Context';

function App(){
    return (
	<PlayContextProvider>	
      <div className="App">
			<Logo/>
			<Btn/>
      </div>
	</PlayContextProvider>
    );
}

export default App;
