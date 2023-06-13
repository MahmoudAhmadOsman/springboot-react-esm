package com.eforce.daos;

import com.eforce.models.Order;

import java.util.List;

public interface OrderDAO {
    Order saveOrder(Order order);

    List<Order> getAllOrders();
}
