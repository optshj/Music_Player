import React from 'react';
import styles from '../css/Btn.module.css';
import {GrFormPrevious,GrFormNext} from "react-icons/gr";

function Prev(){
	return(
		<div className={styles.form}>
			<div className={styles.prev}><GrFormPrevious/></div>
			<div className={styles.next}><GrFormNext/></div>
		</div>
	);
	
}
export default Prev;