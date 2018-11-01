import React, { Component } from "react";
import Canvas from "./components/Bord";
import Button from "./components/Button";
import "./App.css";
import Presets from "./components/Presets";
import Rules from "./components/Rules";
import History from "./components/History";
import Landing from "./components/svg/Landing";
import anime from "animejs";

class App extends Component {
	state = {
		generation: 0,
		row: 10,
		col: 10,
		cellArry: [],
		continueAnimation: false,
		range: 1,
		speed: 1000,
		seeded: false,
		showPreset: false,
		showRuls: false,
		showHistory: false,
		playing: false,
		landingPage: true
	};
	setTimeoutId = 0;
	componentDidMount() {
		this.setState(
			(prevState, prevProps) => {
				return {
					cellArry: new Array(this.state.row)
						.fill()
						.map(item => new Array(this.state.col).fill(false))
				};
			},
			() => {
				this.seed();
				requestAnimationFrame(time => this.game(time));
			}
		);
	}
	count = (arry, row, col) => {
		let count = 0;
		for (let x = -1; x < 2; x++) {
			for (let y = -1; y < 2; y++) {
				let rows = (row + x + this.state.row) % this.state.row;
				let cols = (col + y + this.state.col) % this.state.col;
				if (arry[rows][cols]) count++;
			}
		}
		count -= 1;
		return count;
	};
	pauseGame = () => {
		this.setState({ continueAnimation: false, playing: false });
	};
	stopGame = () => {
		this.setState({
			cellArry: new Array(this.state.row)
				.fill()
				.map(item => new Array(this.state.col).fill(false)),
			generation: 0,
			continueAnimation: false,
			seeded: false,
			playing: false
		});
	};
	playGame = () => {
		if (!this.state.seeded || this.state.playing) {
			return;
		}
		this.setState({ continueAnimation: !this.state.continueAnimation });
		requestAnimationFrame(timestamp => this.game(timestamp));
	};
	seed = () => {
		let buffer = this.deepCopyArry(this.state.cellArry);
		buffer.forEach((row, i) => {
			row.forEach((cell, x) => {
				let randomNumber = Math.floor(Math.random() * 4);
				if (randomNumber === 1) {
					buffer[i][x] = true;
				} else {
					buffer[i][x] = false;
				}
			});
		});
		this.setState({
			cellArry: buffer,
			generation: 0,
			seeded: true
		});
	};
	start = null;
	game(timestamp) {
		if (this.state.continueAnimation) {
			requestAnimationFrame(timestamp => this.game(timestamp));
			if (this.start === null) {
				this.start = timestamp - 30; // milliseconds
			}
			let progress = timestamp - this.start;

			if (progress > this.state.speed / this.state.range / 4) {
				this.start = timestamp;
				let buffer = this.deepCopyArry(this.state.cellArry);
				buffer.forEach((row, i) => {
					row.forEach((cell, x) => {
						let count = this.count(buffer, i, x);
						if (count === 2) {
							buffer[i][x] = true; //stasis
						} else if (!buffer[i][x] && count === 3) {
							buffer[i][x] = true; //birth
						} else if (count > 3 || count < 2) {
							buffer[i][x] = false; //die
						}
					});
				});
				this.setState({
					cellArry: buffer,
					generation: this.state.generation + 1,
					playing: true
				});
			}
		}
	}
	clickHandlerForCell = (row, col) => {
		if (this.state.playing) {
			return;
		}
		let buffer = this.deepCopyArry(this.state.cellArry);
		buffer[row][col] = !buffer[row][col];
		this.setState({ cellArry: buffer, seeded: true });
	};
	handleHistory = e => {
		this.setState({
			showHistory: !this.state.showHistory
		});
	};
	componentWillUnmount() {
		// Stop animating
		this.continueAnimation = false;
		clearInterval(this.setTimeoutId);
	}
	deepCopyArry = arry => {
		var newArray = arry.map(function(arr) {
			return arr.slice();
		});
		return newArray;
	};
	handleChange = e => {
		this.setState({
			range: e.target.value
		});
	};
	handlePresets = e => {
		this.setState({ showPreset: !this.state.showPreset });
	};
	handleRules = e => {
		this.setState({ showRuls: !this.state.showRuls });
	};
	landingPage = e => {
		var timeline = anime.timeline({
			autoplay: true,
			direction: "alternate",
			loop: false
		});
		timeline.add({
			targets: ".landing",
			d: [
				{
					value:
						"M -11.227057456970215 -4.013760566711426 L -13.176599502563477 996.1010131835938 L 1400.240966796875 1003.899169921875  1400.240966796875 1003.899169921875 1448.1765982807613 351.1380342811975 1187.740966796875 175.34405517578125 C 755.8670654296875 -70.72327423095703 -23.45390392705695 -8.822071536065808 -11.227057456970215 -4.013760566711426 Z"
				},

				{
					value:
						"M -7.327974081039429 898.6239187717438 L -9.277515888214111 978.55517578125 L 1406.0894775390625 984.4037475585938 1406.0894775390625 984.4037475585938 672.1298828125 892.896240234375 491.754638671875 894.7248687744141 C 139.91659545898438 854.8134765625 -7.327974081039429 898.6239187717438 -7.327974081039429 898.6239187717438 Z"
				}
			],
			opacity: 0,
			duration: 1000,
			easing: "easeInQuad"
		});
		timeline.finished.then(k => {
			anime({
				targets: ".landing",
				opacity: 0,
				translateX: -500,
				easing: "easeInQuart",
				complete: () => {
					this.setState({ landingPage: false });
				}
			});
		});
	};
	render() {
		return (
			<div className="App">
				<nav className="nav">Home</nav>
				{this.state.landingPage && (
					<Landing landingPage={this.landingPage} />
				)}
				<div className="main">
					<div className="grid">
						<Canvas
							cells={this.state.cellArry}
							row={this.state.row}
							col={this.state.col}
							generation={this.state.generation}
							onclick={this.clickHandlerForCell}
						/>
						<div className="controles">
							<Button
								onclick={this.playGame}
								play
								playing={this.state.playing}
							/>
							<Button onclick={this.pauseGame} pause />
							<Button onclick={this.stopGame} stop />
							<div>
								<label htmlFor="range">
									Speed: {this.state.range}
								</label>
								<input
									type="range"
									name="range"
									min="0"
									max="5"
									value={this.state.range}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>
					<div className="option">
						<Presets
							seed={this.seed}
							showPreset={this.state.showPreset}
							handlePresets={this.handlePresets}
						/>
						<Rules
							showPreset={this.state.showRuls}
							handlePresets={this.handleRules}
						/>
						<History
							showHistory={this.state.showHistory}
							handleHistory={this.handleHistory}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
