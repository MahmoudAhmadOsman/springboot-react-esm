package com.eforce.service;

import com.eforce.daos.EmployeeDOA;
import com.eforce.model.Employee;
import com.eforce.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.util.ReflectionUtils;

import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;

import java.util.Map;
import java.util.Optional;

@Service
public class EmployeeService implements EmployeeDOA {
    @Autowired
    private EmployeeRepository employeeRepository;


    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        //1. get employee by id
        Employee employeeToUpdate = employeeRepository.findById(id).orElse(null);
        //2. set the new employee data/values
        employeeToUpdate.setFirstName(employee.getFirstName());
        employeeToUpdate.setLastName(employee.getFirstName());
        employeeToUpdate.setEmail(employee.getEmail());
        employeeToUpdate.setStatus(employee.isStatus());
        return employeeRepository.save(employeeToUpdate);
    }

    @Override
    public Employee updateEmployeeByFields(Long id, Map<String, Object> fields) {
        Optional<Employee> existingEmployee = employeeRepository.findById(id);

        if (existingEmployee.isPresent()) {
            fields.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(Employee.class, key);
                field.setAccessible(true);
                ReflectionUtils.setField(field, existingEmployee.get(), value);
            });
            return employeeRepository.save(existingEmployee.get());
        }
        return null;
    }



    @Override
    public void deleteEmployeeById(Long id) {
        employeeRepository.deleteById(id);

    }
}
