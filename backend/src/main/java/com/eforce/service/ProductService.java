package com.eforce.service;


import com.eforce.daos.ProductDAO;

import com.eforce.dto.ProductData;
import com.eforce.mapper.ProductMapper;
import com.eforce.models.Product;
import com.eforce.repository.ProductRepository;
import com.eforce.util.ImageProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;

import java.io.IOException;
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
    public String saveProduct(ProductData productData, MultipartFile file) throws IOException {
        if (!file.isEmpty()) {
            productData.setImage(ImageProcessor.uploadImage(file));
        }
        productRepository.save(ProductMapper.mapToEntity(productData));
        return "Saved Successfully";
    }

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
