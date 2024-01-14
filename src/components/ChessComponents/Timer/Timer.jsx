import PropTypes from "prop-types";
import React, {useEffect, useRef, useState} from "react";
import {Colors} from "../../../data/Colors.js";
import styles from './Timer.module.css'

const Timer = React.memo(({currentPlayer}) => {
	const [whiteTimer, setWhiteTimer] = useState(1000);
	const [blackTimer, setBlackTimer] = useState(1000);
	const timer = useRef(null)
	
	useEffect(() => {
		startTimer()
	}, [currentPlayer]);
	
	function startTimer() {
		if(timer.current) {
			clearInterval(timer.current);
		}
		
		const callback = currentPlayer?.color === Colors.WHITE ?
			decrementWhiteTimer :
			decrementBlackTimer;
		timer.current = setInterval(callback, 1000);
	}
	
	function decrementWhiteTimer() {
		setWhiteTimer(prev => prev - 1);
	}
	
	function decrementBlackTimer() {
		setBlackTimer(prev => prev - 1);
	}
	
	function formatTime(time) {
		const date = new Date(time * 1000);
		const minutes = date.getUTCMinutes().toString().padStart(2, "0");
		const seconds = date.getUTCSeconds().toString().padStart(2, "0");
		
		return `${minutes}:${seconds}`
	}
	
	
	return (
		<div className={styles.Timer}>
			<div
				className={
					[styles.Wrapper, currentPlayer?.color === Colors.BLACK ?
						styles.CurrMove :
						styles.NoCurrMove].join(' ')
				}
			>
				<span className={styles.TimeText}>{formatTime(blackTimer)}</span>
			</div>
			<div
				className={
					[styles.Wrapper, currentPlayer?.color === Colors.WHITE ?
						styles.CurrMove :
						styles.NoCurrMove].join(' ')
				}
			>
				<span className={styles.TimeText}>{formatTime(whiteTimer)}</span>
			</div>
		</div>
	);
});

Timer.propTypes = {
	currentPlayer: PropTypes.any.isRequired
}

Timer.displayName = 'Timer';

export default Timer;