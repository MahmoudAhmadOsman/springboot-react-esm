import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v3/products";

class ProductService {
	getAllProducts() {
		return axios.get(BASE_URL + "/list");
	}

	saveProduct(productData) {
		return axios.post(BASE_URL + "/save", productData);
	}

	// saveProduct(productData) {
	// 	return axios.post(BASE_URL + "/save", productData, {
	// 		headers: {
	// 			Accept: "application/json",
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(productData),
	// 	});
	// }

	getProductById(id) {
		return axios.get(`${BASE_URL}/${id}`);
	}

	deleteProduct(id) {
		return axios.delete(BASE_URL + "/delete/" + id);
	}
}
export default new ProductService();
