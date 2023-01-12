import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import EmployeeListComponent from "./components/EmployeeListComponent";
import FooterComponent from "./components/FooterComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
import Nav from "./components/Nav";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
	return (
		<BrowserRouter>
			{" "}
			<Nav />
			<div className="main-container">
				<div className="container">
					<Routes>
						<Route path="/" element={<EmployeeListComponent />} />
						<Route path="/add-employee" element={<AddEmployeeComponent />} />

						<Route
							path="/add-employee/:id"
							element={<AddEmployeeComponent />}
						/>
						<Route
							path="/view-employee/:id"
							element={<ViewEmployeeComponent />}
						/>

						<Route
							path="/update-employee/:id"
							element={<UpdateEmployeeComponent />}
						/>
					</Routes>
				</div>
			</div>
			<FooterComponent />
		</BrowserRouter>
	);
}

export default App;
