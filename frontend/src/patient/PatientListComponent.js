import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientService from "../service/PatientService";

import "./Patient.css";

const PatientListComponent = () => {
	const navigate = useNavigate();

	const [patients, setPatients] = useState([]);

	//get all patients
	const getPatients = async () => {
		await PatientService.getAllPatients()
			.then((res) => {
				setPatients(res.data);
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getPatients(navigate("/patients"));
	}, []);

	return (
		<section className="patietn-list">
			<div className="container">
				<h1 className="text-success">Patient List</h1> <hr />
				<div className="row">
					{patients.map((patient) => (
						<div className="col-md-4" key={patient.id}>
							<p>{patient.firstName}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PatientListComponent;
