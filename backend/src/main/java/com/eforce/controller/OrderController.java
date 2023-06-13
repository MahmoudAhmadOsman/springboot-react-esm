package com.eforce.controller;


import com.eforce.models.Order;
import com.eforce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping(path = "api/v4/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping(path = "/saveOrder")
    @ResponseStatus(HttpStatus.CREATED)
    public Order saveOrder(@RequestBody Order order) {
        return orderService.saveOrder(order);

    }
    
    @GetMapping(path = "/orderList")
    @ResponseStatus(HttpStatus.OK)
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }


}
