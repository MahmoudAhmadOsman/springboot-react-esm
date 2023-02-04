package com.eforce.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;


import javax.persistence.*;
import java.util.Set;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;


    @Lob
    private String image;
    private double price;

    @Lob
    private String description;


    //Image model
//    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//    @JoinTable(name = "product_images",
//            joinColumns = {@JoinColumn(name = "product_id")},
//            inverseJoinColumns = {@JoinColumn(name = "image_id")})
//    private Set<ImageModel> productImages;
//
//    public Set<ImageModel> getProductImages() {
//        return productImages;
//    }
//
//    public void setproductImages(Set<ImageModel> productImages) {
//        this.productImages = productImages;
//    }


}
