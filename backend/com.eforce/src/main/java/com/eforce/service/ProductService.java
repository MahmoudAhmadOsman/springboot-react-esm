package com.eforce.service;


import com.eforce.daos.ProductDAO;

import com.eforce.models.Product;
import com.eforce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ProductService implements ProductDAO {

    @Autowired
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }


    //added 2/3
//    @Override
//    public Product saveProduct(Product product) {
//
//        product.setName(product.getName());
//        product.setImage(product.getImage());
//        product.setPrice(product.getPrice());
//        product.setDescription(product.getDescription());
//        return productRepository.save(product);
//    }


    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public void deleteProductById(Long id) {
        productRepository.deleteById(id);
    }
}
