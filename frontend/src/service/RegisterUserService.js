import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v4/users";

class RegisterUserService {
	saveRegister(userData) {
		return axios.post(BASE_URL + "/register", userData);
	}
}

export default new RegisterUserService();
