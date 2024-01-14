import React from 'react';
import styles from '../css/Player.module.css';
import { HiPlay } from "react-icons/hi2";
import { MdReplay } from "react-icons/md";
import { FaPause} from "react-icons/fa";
import {usePlayContext} from '../Context';

function Player({start,songCnt}){
	const {state,actions} = usePlayContext();
	const degree = 45;
	
	function onPlay(i) { //음악재생
		actions.setPlay(i);
	}
	function onPause(i) { //음악정지
		actions.setPause(i);
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

    return (
    <div>
      {[...Array(8)].map((_, i) => {
        const musicNum = (i + start) % songCnt;
        const isPlaying = state.playIndex === i;
        return (
          <div key={i} className={isPlaying ? styles.on : styles.off}>
            <div className={styles.form} style={{ transform: `rotate(${i * degree}deg) translateY(-100vh)` }}>
              <div
                className={isPlaying ? styles.playdisc : styles.disc}
                style={{ backgroundImage: `url(assets/img/list${musicNum + 1}.png)` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}
              ></div>
              <h2 className={styles.musicname}>{songs[musicNum].title}</h2>
              <p className={styles.artist}>{songs[musicNum].artist}</p>
              <div className={styles.controlform}>
                <div className={styles.pause} onClick={() => onPause(i)}>
                  <FaPause />
                </div>
                <div className={styles.play} onClick={() => onPlay(i)}>
                  <HiPlay />
                </div>
                <div className={styles.replay}>
                  <MdReplay />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Player;