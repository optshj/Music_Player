import React from 'react';
import styles from '../css/Player.module.css';
import MusicController from './MusicController.js';


function Player(){
	const songs =[
		{
			id:1,
			title:'Rain',
			artist:'태연'
		},
		{
			id:2,
			title:'55',
			artist:"CODE KUNST"
		},
		{
			id:3,
			title:'소로 小路',
			artist:'심규선'
		},
		{
			id:4,
			title:'Across the Universe',
			artist:'Jxxn'
		},
		{
			id:5,
			title:'Square (2017)',
			artist:'Yerin Baek'
		},
		{
			id:6,
			title:'사건의 지평선',
			artist:'윤하'
		},
		{
			id:7,
			title:'Can I Love ?',
			artist:'Cosmic Boy'
		},
		{
			id:8,
			title:'Running through the night',
			artist:'Seori'
		}
		
	]
	const degree = 45;
	let rot = [];
	for(let i=0;i<8;i++) {
		if (i===0){
			rot.push(
				<div className={styles.on}>
					<div className={styles.form} style={{transform:`rotate(${i*degree}deg) translateY(-100vh)`}}>
						<div className={styles.disc} style={{backgroundImage:`url(assets/img/list${i+1}.png)`}}>
							<div className={styles.dot}></div>
						</div>
						<h2 className={styles.musicname}>{songs[i].title}</h2>
						<p className={styles.artist}>{songs[i].artist}</p>
						<MusicController/>
					</div>
				</div>)
		}
		else{
			rot.push(
				<div className={styles.off}>
					<div className={styles.form} style={{transform:`rotate(${i*degree}deg) translateY(-100vh)`}}>
						<div className={styles.disc} style={{backgroundImage:`url(assets/img/list${i+1}.png)`}}>
							<div className={styles.dot}></div>
						</div>
						<h2 className={styles.musicname}>{songs[i].title}</h2>
						<p className={styles.artist}>{songs[i].artist}</p>
						<MusicController/>
					</div>
				</div>)
		}
	}
	return(
		<div>
			{rot}
		</div>
	);
}

export default Player;