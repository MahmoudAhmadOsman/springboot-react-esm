package com.eforce.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String status;
//    private int status = 0;




    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date creationDate;


    @PrePersist
    private void onCreate() {
        creationDate = new Date();
    }


//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "department_id", insertable = false, updatable = false,
//            referencedColumnName = "id")
//    private Department department;


}
