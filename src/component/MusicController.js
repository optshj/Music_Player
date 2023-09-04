import React from 'react';
import styles from '../css/MusicController.module.css';
import { HiPlay } from "react-icons/hi2";
import { MdReplay } from "react-icons/md";
import { FaPause} from "react-icons/fa";

function MusicController() {
	return(
		<div className={styles.form}>
			<div className={styles.pause}><FaPause/></div>
			<div className={styles.play}><HiPlay/></div>
			<div className={styles.replay}><MdReplay/></div>
		</div>
	)
	
	
}

export default MusicController;