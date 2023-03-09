package com.eforce.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductData {

    private String name;
    private String image;
    private double price;
    private String  productRating;
    private String description;
}