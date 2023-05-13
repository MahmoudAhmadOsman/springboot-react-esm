package com.eforce.models;


import com.eforce.encrypt.MaskData;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "patients")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String gender;
    private String martialStatus;

    private String dateOfBirth;


    @MaskData
//    @Column(name = "snn")
    private String SSN;
    private String phoneNumber;

    private String streetName;
    private String city;
    private String state;
    private String zipCode;

    @Lob
    private String note;


    private String providerName;
    private Long accountNumber;
    private int groupNumber;
    private String providerPhone;
    private String careType;
    private String renewalMonth;

    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date creationDate;

    @PrePersist
    private void onCreate() {
        creationDate = new Date();
    }

}
