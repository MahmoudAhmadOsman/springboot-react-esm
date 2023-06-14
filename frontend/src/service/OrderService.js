import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v4/orders";

class OrderService {
	saveOrder(orderData) {
		return axios.post(BASE_URL + "/saveOrder", orderData);
	}

	getAllOrders() {
		return axios.get(BASE_URL + "/orderList");
	}
}
export default new OrderService();
