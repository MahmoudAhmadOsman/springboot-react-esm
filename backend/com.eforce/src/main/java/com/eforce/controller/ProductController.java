package com.eforce.controller;


import com.eforce.models.Product;
import com.eforce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v3/products")
public class ProductController {

//    public static String uploadDirectory = System.getProperty("user.dir") + "/src/main/resources/static/images";


    @Autowired
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }


//     @PostMapping(value = "/save", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
//    Product saveProduct(@RequestPart("product") Product product, @RequestPart("imageFile") MultipartFile[] file) {
//
//        try {
//            Set<ImageModel> images = uploadImage(file);
//            product.setproductImages(images);
//            return productService.saveProduct(product);
//
//        } catch (IOException e) {
//            System.out.println("Unable to save product with images into the database: " + e.getMessage());
//            e.printStackTrace();
//        }
//        return null;
//
//    }
//
//    public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException {
//        Set<ImageModel> imageModels = new HashSet<>();
//
//        for (MultipartFile file : multipartFiles) {
//            ImageModel imageModel = new ImageModel(file.getOriginalFilename(), file.getContentType(), file.getBytes());
//            imageModels.add(imageModel);
//        }
//        return imageModels;
//    }


    @PostMapping(value = "/save")
//    @RequestBody
    //public Product saveProduct(Product product, @RequestParam("image") MultipartFile file)
    public Product saveProduct(@RequestBody Product product, @RequestParam("image") MultipartFile file) {
//        StringBuilder fileNames = new StringBuilder();
//        String fileName = product.getId()  + file.getOriginalFilename().substring(file.getOriginalFilename().length() -4);
//        Path fileNameAndPath = Paths.get(uploadDirectory, fileName);

        try {
//            Files.write(fileNameAndPath, file.getBytes());
            return productService.saveProduct(product);
        }
        catch(Exception e){
            System.out.println("Unable to save product data into the database: " + e.getMessage());
            e.printStackTrace();
        }
      return null;

    }

    @GetMapping(value = "/list")
    public List<Product> getAllPatients() {
        return productService.getAllProducts();
    }


}


