import React,{useState} from 'react';
import styles from '../css/Player.module.css';
import { HiPlay } from "react-icons/hi2";
import { MdReplay } from "react-icons/md";
import { FaPause} from "react-icons/fa";

function Player({start,songCnt}){
	const [play,setPlay] = useState(false); //음악재생상태?
	const degree = 45;
	let rot = [];
	function onPlay() { //음악재생
		setPlay(true);
		console.log(play);
	}
	function onPause() { //음악정지
		setPlay(false);
	}
	
	const songs =[
		{
			id:1,
			title:'Rain',
			artist:'태연'
		},
		{
			id:2,
			title:'55(feat.백예린, 웬디)',
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
		 //음악종류
	];
	for(let i=0;i<8;i++) {
		const musicNum = (i+start)%songCnt; //지금 현재 음악 번호
		if (i===0){
			rot.push(
				<div className={styles.on}> {/*가운데에 오는 플레이어*/}
					<div className={styles.form} style={{transform:`rotate(${i*degree}deg) translateY(-100vh)`}}>
						<div className={play ? styles.playdisc:styles.disc} style={{backgroundImage:`url(assets/img/list${musicNum+1}.png)`}}>
						</div>
						<div className={styles.discshadow}></div>
						<h2 className={styles.musicname}>{songs[musicNum].title}</h2>
						<p className={styles.artist}>{songs[musicNum].artist}</p>
						<div className={styles.controlform}>
							<div className={styles.pause} onClick={onPause}><FaPause/></div>
							<div className={styles.play} onClick={onPlay}><HiPlay/></div>
							<div className={styles.replay}><MdReplay/></div>
						</div>
					</div>
				</div>)
		}
		else{
			rot.push(
				<div className={styles.off}>
					<div className={styles.form} style={{transform:`rotate(${i*degree}deg) translateY(-100vh)`}}>
						<div className={styles.disc} style={{backgroundImage:`url(assets/img/list${musicNum+1}.png)`}}>
						</div>
						<h2 className={styles.musicname}>{songs[musicNum].title}</h2>
						<p className={styles.artist}>{songs[musicNum].artist}</p>
						<div className={styles.controlform}>
							<div className={styles.pause}><FaPause/></div>
							<div className={styles.play}><HiPlay/></div>
							<div className={styles.replay}><MdReplay/></div>
						</div>
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