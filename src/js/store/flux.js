const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => {
						if (!res.ok) {
							throw Error(res.statusText);
						}
						return res.json();
					})
					.then(data => {
						console.log("data", data);
						setStore({ planets: data.results });
					})
					.catch(err => console.error(err));
			},
			loadPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => {
						if (!res.ok) {
							throw Error(res.statusText);
						}
						return res.json();
					})
					.then(data => {
						console.log("data", data);
						setStore({ people: data.results });
					})
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
