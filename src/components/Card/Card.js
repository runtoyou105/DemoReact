import { memo } from 'react';
import { Link } from "react-router-dom";

import './Card.css';


function Card ( {pokemon} ) {	
	return (
		<ul className="container-fluid"  >
			<div className="card-container justify-content-center col-12 col-lg-4 col-md-12 " >
				<Link to={"card/" + pokemon.id}>
					<div className="row card ">
						<div className="col card-title">
							<p className="pokemon-id">{pokemon.id}</p>
							<img className="pokemon-image " src={pokemon.img} alt=""></img>
						</div>
						<div className="row pokemon-types">
							<div className="col-6">
								<small className="type">{pokemon.type1} </small>
								<small> | </small>
								<small className="type">{pokemon.type2}</small>
							</div>
						</div>
						<div className="row name">
							<strong>{pokemon.name}</strong>
						</div>
					</div>
				</Link>
			</div>	
		</ul>
	);
}

export default memo( Card );