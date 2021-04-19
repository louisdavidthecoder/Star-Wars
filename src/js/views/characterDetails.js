import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const characterDetails = props => {
	const { store, actions } = useContext(Context);
	const index = useParams().id;
	let pattern = /\d+/g;
	console.log(index);
	const id = store.people[index].homeworld.match(pattern) && store.people[index].homeworld.match(pattern);

	return (
		<div className="container">
			<div className="card mb-3" style={{ width: "80vw" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="..." alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.people && store.people[index].name}</h5>
							<p className="card-text">Gender: {store.people && store.people[index].gender}</p>
							<p className="card-text">Birth Year: {store.people && store.people[index].birth_year}</p>
							<p className="card-text">Height: {store.people && store.people[index].height}</p>
							<p className="card-text">
								Home World:{" "}
								<Link to={"/planetdetails/" + id}>{store.people && store.people[index].homeworld}</Link>
							</p>
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
