import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v2/patients";

class PatientService {
	getAllPatient() {
		return axios.get(BASE_URL + "/list");
	}

	savePatient(patientData) {
		return axios.post(BASE_URL + "/save", patientData);
	}

	updatePatient(id, employeeData) {
		return axios.put(`${BASE_URL}/${id}`, patientData);
	}

	patchPatient(id, patientData) {
		return axios.patch(`${BASE_URL}/${id}`, patientData);
	}
	getPatientById(id) {
		return axios.get(`${BASE_URL}/${id}`);
	}

	deletePatient(id) {
		return axios.delete(BASE_URL + "/delete/" + id);
	}
}
export default new PatientService();
