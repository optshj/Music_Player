import React from 'react'
import {createContext, useState } from 'react';

const PlayContext = createContext({
	state:true,
	actions:{
		setPlay:() => {},
	}
});

const PlayContextProvider = ({children}) =>{
	const [play,setPlay] = useState(false);
	const value = {
		state: play,
		actions: {setPlay}
	};
	return(
			<PlayContext.Provider value={value}>
				{children}
			</PlayContext.Provider>
	);
};

export default PlayContext;
export {PlayContextProvider};