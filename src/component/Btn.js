import React,{useState} from 'react';
import styles from '../css/Btn.module.css';
import {GrFormPrevious,GrFormNext} from "react-icons/gr";
import Player from './Player.js';


function Prev(){
	const songCnt = 8;
	const [musicNum,setMusicNum] = useState(0);
	const clickNext = () => {
		setMusicNum((musicNum+1)%songCnt);
	}
	function clickPrev() {
		if (musicNum == 0) {
			setMusicNum(songCnt-1);
		}
		else{
			setMusicNum(musicNum-1);
		}
	}
	return(
		<div className={styles.form}>
			<div onClick={clickPrev} className={styles.prev}><GrFormPrevious/></div>
			<div onClick={clickNext} className={styles.next}><GrFormNext/></div>
			<Player start={musicNum} songCnt={songCnt}/>
		</div>
	);
	
}
export default Prev;