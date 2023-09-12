import React,{useState,useContext} from 'react';
import styles from '../css/Btn.module.css';
import {AiOutlineSwapLeft,AiOutlineSwapRight} from "react-icons/ai";
import Player from './Player.js';
import PlayContext from '../Context';

function Prev(){
	const songCnt = 8;
	const [musicNum,setMusicNum] = useState(0);
	const {state,actions} = useContext(PlayContext);
	const clickNext = () => {
		setMusicNum((musicNum+1)%songCnt);
		actions.setPlay(false);
	}
	function clickPrev() {
		if (musicNum === 0) {
			setMusicNum(songCnt-1);
		}
		else{
			setMusicNum(musicNum-1);
		}
		actions.setPlay(false);
	}
	return(
		<div className={styles.form}>
			<div onClick={clickPrev} className={styles.prev}><AiOutlineSwapLeft/></div>
			<div onClick={clickNext} className={styles.next}><AiOutlineSwapRight/></div>
			<Player start={musicNum} songCnt={songCnt}/>
		</div>
	);
	
}
export default Prev;