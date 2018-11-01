import React from "react";
const History = ({ showHistory, handleHistory }) => {
	return (
		<div className="Presets">
			<div onClick={handleHistory} className="Presets__heading">
				Background of Cellular Automata
			</div>
			{showHistory && (
				<React.Fragment>
					<ul>
						<li>
							In late 1940, John von Neumann defined life as a
							creation (as a being or organism) which can
							reproduce itself and simulate a Turing machine. Von
							Neumann was thinking about an engineering solution
							which would use electromagnetic components floating
							randomly in liquid or gas.[2] This turned out not to
							be realistic with the technology available at the
							time. Thus, ingeniously, Stanisław Ulam invented
							cellular automata, which were intended to simulate
							von Neumann's theoretical electromagnetic
							constructions. Ulam discussed using computers to
							simulate his cellular automata in a two-dimensional
							lattice in several papers. In parallel, Von Neumann
							attempted to construct Ulam's cellular automaton.
							Although successful, he was busy with other projects
							and left some details unfinished. His construction
							was complicated because it tried to simulate his own
							engineering design. Over time, simpler life
							constructions were provided by other researchers,
							and published in papers and books.[citation needed]
						</li>
					</ul>
				</React.Fragment>
			)}
		</div>
	);
};

export default History;
