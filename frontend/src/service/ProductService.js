import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v3/products";

class ProductService {
	getAllProducts() {
		return axios.get(BASE_URL + "/list");
	}

	saveProduct(formData) {
		return axios
			.post(`http://localhost:8080/api/v3/products/save`, formData)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	}

	getProductById(id) {
		return axios.get(`${BASE_URL}/${id}`);
	}

	deleteProduct(id) {
		return axios.delete(BASE_URL + "/delete/" + id);
	}
}
export default new ProductService();
