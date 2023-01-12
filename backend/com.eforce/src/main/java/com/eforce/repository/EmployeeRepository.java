package com.eforce.repository;

import com.eforce.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Object findByEmail(String email);
}