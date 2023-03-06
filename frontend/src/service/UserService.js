import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v4";

class UserService {

	
	registerUser(userData) {
		return axios.post(BASE_URL + "/register-user", userData);
	}







	//	savePatient(patientData) {
	// 	return axios.post(BASE_URL + "/save", patientData);
	// }
}

export default new UserService();
