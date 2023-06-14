package com.eforce.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
 import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(nullable = false)
    private Long id;

    private String name;
    private String image;
    private Double price;
//    private int qty;
    private String productRating;

    @Lob
    private String description;

//    @Basic(optional = false)
//    @Column(insertable = false, updatable = false)
//    @Temporal(TemporalType.TIMESTAMP)
//    private Date orderDate;
    private String OrderStatus ="RECEIVED";


    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date orderDate;


    @PrePersist
    private void onCreate() {
        orderDate = new Date();
    }

}
