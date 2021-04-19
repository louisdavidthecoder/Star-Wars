import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card m-3" style={{ width: "18rem" }}>
			<img
				src="https://lumiere-a.akamaihd.net/v1/images/vicruls-sythe-main_e404bc44.jpeg"
				className="card-img-top"
				alt="..."
				img
			/>
			<div className="card-body">
				<h5 className="card-title">{props.character && props.character.name}</h5>
				<p className="card-text">
					<p>Height: {props.character && props.character.height}</p>
					<p>Weight: {props.character && props.character.mass}</p>
					<p>Skin color: {props.character && props.character.skin_color}</p>
				</p>
				<Link to={`/characterdetails/${props.index}`}>
					<span href="#" className="btn btn-primary">
						Learn more
					</span>
				</Link>
			</div>
		</div>
	);
};

Card.propTypes = {
	character: PropTypes.object,
	index: PropTypes.number,
	planets: PropTypes.object,
	index: PropTypes.number
};
