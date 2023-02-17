package com.eforce.daos;

import com.eforce.models.Product;
import com.eforce.dto.ProductData;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ProductDAO {


    String saveProduct(ProductData productData, MultipartFile file) throws IOException;

    List<Product> getAllProducts();

    Optional<Product> getProductById(Long id);

    void deleteProductById(Long id);

}
