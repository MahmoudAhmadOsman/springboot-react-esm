package com.eforce.daos;

import com.eforce.model.Employee;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface EmployeeDOA {
    //Save

    Employee saveEmployee(Employee employee);

    //Get employee by id
    Optional<Employee> getEmployeeById(Long id);


    //Get all employees

    List<Employee> getAllEmployees();

    //Update

    Employee updateEmployee(Long id, Employee employee);

 //Patch
   Employee updateEmployeeByFields(Long id, Map<String, Object> fields);

    //Delete
    void deleteEmployeeById(Long id);
}
