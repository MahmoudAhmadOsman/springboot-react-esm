package com.eforce.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private String description;
    private double price;


    //Image model
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "product_images",
            joinColumns = {
            @JoinColumn(name = "product_id")},
            inverseJoinColumns = {
            @JoinColumn(name = "image_id")
    }
    )
    private Set<ImageModel> prodductImages;

    public Set<ImageModel> getProdductImages() {
        return prodductImages;
    }

    public void setProdductImages(Set<ImageModel> prodductImages) {
        this.prodductImages = prodductImages;
    }
}
