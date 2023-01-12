import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
	getAllEmployees() {
		return axios.get(BASE_URL + "/list");
	}

	saveEmployee(employeeData) {
		return axios.post(BASE_URL + "/save", employeeData);
	}

	updateEmployee(id, employeeData) {
		return axios.put(`${BASE_URL}/${id}`, employeeData);
	}

	patchEmployee(id, employeeData) {
		return axios.patch(`${BASE_URL}/${id}`, employeeData);
	}
	getEmployeeById(id) {
		return axios.get(`${BASE_URL}/${id}`);
	}

	deleteEmployee(id) {
		return axios.delete(BASE_URL + "/delete/" + id);
	}
}
export default new EmployeeService();
