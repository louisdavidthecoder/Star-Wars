import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const PlanetDetails = props => {
	const { store, actions } = useContext(Context);
	const index = useParams().id;

	return (
		<div className="container">
			<div className="card mb-3" style={{ width: "80vw" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="..." alt="..." />
					</div>
					<div className="col-md-8">
						<div clasName="card-body">
							<h5 clasName="card-title">{store.planets && store.planets[index].name}</h5>
							<p className="card-text">Climate: {store.planets && store.planets[index].climate}</p>
							<p className="card-text">Terrain: {store.planets && store.planets[index].terrain}</p>
							<p className="card-text">Population: {store.planets && store.planets[index].population}</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
