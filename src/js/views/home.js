import React, { useContext, useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

//Strategy:
//Create Individual Bootstrap Card Component in one JS file - as a Component file
//Create Details Page Component in one JS file - as a View file
//onClick open "Details" Component
//Differentiate Card Components via their data
//Create seperate Arrays for planets, people, and vehicles
//Locate arrays in flux.js in the store "Context"
//Fetch with Get Method

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="row row-cols-3 row-cols-md-3 g-4">
				<div className="col d-flex ">
					{store.people.map((person, index) => {
						return <Card key={index} character={person} index={index} />;
					})}
				</div>
			</div>

			<div className="row row-cols-3 row-cols-md-3 g-4">
				<div className="col d-flex ">
					{store.planets.map((planets, index) => {
						return <Card key={index} planeta={planets} index={index} />;
					})}
				</div>
			</div>
		</>
	);
};
