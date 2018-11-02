import React, { Component } from "react";
import Cell from "./Cell";
import "./main.css";
class Canvas extends Component {
	componentWillUnmount() {
		this.continueAnimation = false;
	}

	render() {
		let table = this.props.cells.map((row, i) =>
			row.map((cell, x) => {
				return (
					<Cell
						key={`${x}-${i}`}
						onclick={this.props.onclick}
						cell={cell}
						row={i}
						col={x}
						size={this.props.cellSize}
					/>
				);
			})
		);
		return (
			<div className="canvas">
				<h1>Generation {this.props.generation}</h1>
				<div
					style={{
						width: this.props.col * this.props.cellSize,
						margin: "auto"
					}}
				>
					{table}
				</div>
			</div>
		);
	}
}

export default Canvas;
