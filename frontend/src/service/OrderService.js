import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v4/orders";

class OrderService {
	saveOrder(orderData) {
		return axios.post(BASE_URL + "/saveOrder", orderData);
	}

	getAllOrders() {
		return axios.get(BASE_URL + "/orderList");
	}

	deleteOrder(id) {
		return axios.delete(BASE_URL + "/delete/" + id);
	}
}
export default new OrderService();
