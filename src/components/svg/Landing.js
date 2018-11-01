import React from "react";
const Landing = ({ landingPage }) => {
	return (
		<div onClick={landingPage} id="landing">
			<div className="center">
				<h1>Welcome to Conway's "Game of Life"</h1>
				<span>Click anywhere to start the game</span>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080">
				<g id="Artboard_1" data-name="Artboard 1">
					<path
						className="landing"
						d="M 24.412813186645508 48.32741165161133 L 32.953739166259766 938.2918090820312 L 1344.83984375 945.1245727539062 L 1344.83984375 55.16014862060547 L 24.412813186645508 48.32741165161133 Z"
					/>
				</g>
			</svg>
		</div>
	);
};

export default Landing;
