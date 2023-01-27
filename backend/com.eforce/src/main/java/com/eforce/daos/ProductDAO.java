package com.eforce.daos;

import com.eforce.models.Product;

import java.util.List;

public interface ProductDAO {

    Product saveProduct(Product product);


    List<Product> getAllProducts();

}
