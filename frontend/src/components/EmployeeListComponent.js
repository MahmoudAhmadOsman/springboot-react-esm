import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const EmployeeListComponent = () => {
	return (
		<section className="employee-list">
			<div className="container mt-5">
				<div className="row">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">ID #</th>
								<th scope="col">First</th>
								<th scope="col">Last</th>
								<th scope="col">Email</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default EmployeeListComponent;
