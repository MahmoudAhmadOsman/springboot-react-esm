package com.eforce.service;

import com.eforce.models.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeServiceInterface {
    //Save

    Employee saveEmployee(Employee employee);

    //Get employee by id
    Optional<Employee> getEmployeeById(Long id);


    //Get all employees

    List<Employee> getAllEmployees();

    //Update

    Employee updateEmployee(Long id, Employee employee);


    //Delete
    void deleteEmployeeById(Long id);
}
