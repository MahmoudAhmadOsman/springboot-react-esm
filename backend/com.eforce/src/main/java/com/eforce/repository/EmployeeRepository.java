package com.eforce.repository;

import com.eforce.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Object findByEmail(String email);
}