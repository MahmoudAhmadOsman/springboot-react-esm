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
public class Patient {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private Date dateOfBirth;
    private String SSN;

    private String streetName;
    private String city;
    private String state;
    private String zipCode;
    private  String note;



    private String providerName;
    private Long accountNumber;
    private int groupNumber;
    private String contactNumber;
    private String careType;
    private String renewalMonth;

    @Temporal(TemporalType.DATE)
    private Date creationDate;

}
