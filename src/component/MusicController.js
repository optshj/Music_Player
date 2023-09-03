import React from 'react';
import styles from '../css/MusicController.module.css';
import { HiPlay } from "react-icons/hi2";
import { MdReplay } from "react-icons/md";
import { FaPause} from "react-icons/fa";

function MusicController() {
	return(
		<div className={styles.form}>
			<div><FaPause/></div>
			<div><HiPlay/></div>
			<div><MdReplay/></div>
		</div>
	)
	
	
}

export default MusicController;