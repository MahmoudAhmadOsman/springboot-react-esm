package com.eforce.controller;


import com.eforce.dto.ProductData;
import com.eforce.models.Product;
import com.eforce.service.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api/v3/products")
public class ProductController {


    @Autowired
    private final ProductService productService;
    @Autowired
    private final ObjectMapper objectMapper;

    public ProductController(ProductService productService, ObjectMapper objectMapper) {
        this.productService = productService;
        this.objectMapper = objectMapper;
    }


    @PostMapping(value = "/save")
    public String saveProduct(@RequestParam("product") String product, @RequestParam("image") MultipartFile file) throws IOException {
        ProductData productData = objectMapper.readValue(product, ProductData.class);
        return productService.saveProduct(productData, file);
    }


    @GetMapping(value = "/list")
    public List<Product> getAllPatients() {
        return productService.getAllProducts();
    }


    @GetMapping(value = "/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id).get();
    }


    @DeleteMapping(value = "/delete/{id}")
    public void deleteProduct(@PathVariable Long id) throws IOException {

        Path path = Paths.get("C:/Users/fidow/OneDrive/Documents/java-react-2023/backend/src/main/resources/static/images/" + productService.getProductById(id).get().getImage());
        Files.delete(path);
        productService.deleteProductById(id);

    }


}


