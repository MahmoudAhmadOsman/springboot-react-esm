import React from "react";

import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import EmployeeListComponent from "./components/EmployeeListComponent";
import FooterComponent from "./components/FooterComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
import Nav from "./components/Nav";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";

function App() {
	return (
		<BrowserRouter>
			{" "}
			<Nav />
			<main>
				<Routes>
					<Route path="/add-employee/:id" element={<AddEmployeeComponent />} />
					<Route
						path="/view-employee/:id"
						element={<ViewEmployeeComponent />}
					/>
					<Route
						path="/update-employee/:id"
						element={<UpdateEmployeeComponent />}
					/>
					<Route path="/add-employee" element={<AddEmployeeComponent />} />
					<Route path="/employees" element={<EmployeeListComponent />} />
					<Route path="/about" element={<AboutComponent />} />
					<Route path="/" exact element={<HomeComponent />} />
				</Routes>
			</main>
			<FooterComponent />
		</BrowserRouter>
	);
}

export default App;
