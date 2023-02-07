package com.eforce.daos;

import com.eforce.models.Product;

import java.util.List;
import java.util.Optional;

public interface ProductDAO {
    Product saveProduct(Product product);

    List<Product> getAllProducts();

    Optional<Product> getProductById(Long id);

    void deleteProductById(Long id);

}
