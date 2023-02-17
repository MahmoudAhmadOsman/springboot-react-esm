package com.eforce.mapper;

import com.eforce.dto.ProductData;
import com.eforce.models.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

    public static Product mapToEntity(ProductData productData) {
        Product product = new Product();
        product.setDescription(productData.getDescription());
        product.setImage(productData.getImage());
        product.setName(productData.getName());
        product.setPrice(productData.getPrice());
        return product;
    }
}
