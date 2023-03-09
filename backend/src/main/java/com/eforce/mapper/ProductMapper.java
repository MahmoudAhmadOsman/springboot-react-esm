package com.eforce.mapper;

import com.eforce.dto.ProductData;
import com.eforce.models.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

    public static Product mapToEntity(ProductData productData) {
        Product product = new Product();
        product.setName(productData.getName());
        product.setImage(productData.getImage());
        product.setProductRating(productData.getProductRating());
        product.setDescription(productData.getDescription());
        product.setPrice(productData.getPrice());
        return product;
    }
}
