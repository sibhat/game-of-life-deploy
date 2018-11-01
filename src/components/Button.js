import React from "react";
import PauseSvg from "./svg/pause";
import PlaySvg from "./svg/play";
import StopSvg from "./svg/stop";
const Button = ({ text, onclick, play, playing, pause, stop, preset }) => {
	let className = preset ? "btn preset" : "btn control";
	return (
		<button onClick={onclick} className={className}>
			{play && <PlaySvg playing={playing} />}
			{pause && <PauseSvg />}
			{stop && <StopSvg />}
			{text && text}
		</button>
	);
};

export default Button;
