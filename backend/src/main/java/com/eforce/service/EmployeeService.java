package com.eforce.service;

import com.eforce.daos.EmployeeDAO;
import com.eforce.models.Employee;
import com.eforce.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.util.ReflectionUtils;

import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import java.util.Map;
import java.util.Optional;

@Service
public class EmployeeService implements EmployeeDAO {
    @Autowired
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

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
       //employeeToUpdate.setStatus(employee.isStatus()); // if boolean
         employeeToUpdate.setStatus(employee.getStatus()); // if string = 0 or 1
        return employeeRepository.save(employeeToUpdate); // if status equals to 0
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
