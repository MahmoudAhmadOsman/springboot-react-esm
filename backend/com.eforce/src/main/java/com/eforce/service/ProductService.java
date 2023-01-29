package com.eforce.service;


import com.eforce.daos.ProductDAO;

import com.eforce.models.Product;
import com.eforce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@Service
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


//    public void  saveProduct(MultipartFile file, String name, String description
//            , int price)
//    {
//        Product p = new Product();
//        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//        if(fileName.contains(".."))
//        {
//            System.out.println("not a a valid file");
//        }
//        try {
//            p.setImage(Base64.getEncoder().encodeToString(file.getBytes()));
//        } catch (IOException e) {
//            System.out.println("Unable to save product with images: " + e.getMessage());
//            e.printStackTrace();
//        }
//        p.setDescription(description);
//
//        p.setName(name);
//        p.setPrice(price);
//        productRepository.save(p);
//    }


    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
