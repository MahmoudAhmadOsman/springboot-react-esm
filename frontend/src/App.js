import React from "react";

import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import AddEmployeeComponent from "./employee/AddEmployeeComponent";
import EmployeeListComponent from "./employee/EmployeeListComponent";
import FooterComponent from "./footer/FooterComponent";
import ViewEmployeeComponent from "./employee/ViewEmployeeComponent";
import Navigation from "./navigation/Navigation";
import UpdateEmployeeComponent from "./employee/UpdateEmployeeComponent";
import HomeComponent from "./home/HomeComponent";
import AboutComponent from "./pages/AboutComponent";
import AddPatientComponent from "./patient/AddPatientComponent";
import PatientListComponent from "./patient/PatientListComponent";
import ViewPatientComponent from "./patient/ViewPatientComponent";
import UpdatePatientComponent from "./patient/UpdatePatientComponent";

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<React.Fragment>
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
					<Route path="/patients" element={<PatientListComponent />} />

					<Route
						path="/update-patient/:id"
						element={<UpdatePatientComponent />}
					/>
					<Route path="/view-patient/:id" element={<ViewPatientComponent />} />

					<Route
						path="/patient/add-patient"
						element={<AddPatientComponent />}
					/>

					<Route path="/about" element={<AboutComponent />} />
					<Route path="/" exact element={<HomeComponent />} />
				</Routes>
			</React.Fragment>
			<FooterComponent />
		</BrowserRouter>
	);
}

export default App;
