package com.eforce.controller;


import com.eforce.models.Employee;
import com.eforce.models.Product;
import com.eforce.service.ProductService;
import com.eforce.util.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v3/products")
public class ProductController {
    @Autowired
    private  ProductService productService;




// @PostMapping(value = "/create", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
//    public RedirectView saveProduct(
//            @RequestPart("product") Product product,
//            @RequestPart("imageFile")
//                    MultipartFile multipartFile) throws IOException {
//
//        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
//        product.setImage(fileName);
//        Product savedProduct = productService.saveProduct(product);
//        String uploadDir = "/" + savedProduct.getId();
//        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
//        return new RedirectView("/");
//
//    }

    //    @RequestMapping(value = "/save", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
//    @PostMapping(value = "/save", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
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





//    @RequestMapping(value = "/save", method = RequestMethod.POST, consumes = "application/x-www-form-urlencoded")
//    public String saveProduct(@RequestPart("file") MultipartFile file,
//                              @RequestPart("name") String name,
//                              @RequestPart("price") int price,
//                              @RequestPart("description") String description) {
//
//        productService.saveProduct(file, name, description, price);
//        return null;
//
//    }










    @GetMapping(value = "/list")
    public List<Product> getAllPatients() {
        return productService.getAllProducts();
    }


}


