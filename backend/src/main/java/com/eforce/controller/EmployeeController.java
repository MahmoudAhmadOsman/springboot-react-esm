package com.eforce.controller;

import com.eforce.models.Employee;
import com.eforce.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/v1/employees")
public class EmployeeController {

    @Autowired
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }


    @PostMapping(path = "/save")
    public Employee saveEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    @GetMapping(value = "/list")
    public List<Employee> getAllEmployee() {
        return employeeService.getAllEmployees();
    }

    @GetMapping(path = "/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }


    @PutMapping(path = "/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return employeeService.updateEmployee(id, employee);
    }


    @PatchMapping(path = "/{id}")
    public Employee updateEmployeeFields(@PathVariable Long id, @RequestBody Map<String, Object> fields) {
        return employeeService.updateEmployeeByFields(id, fields);
    }


    @DeleteMapping(path = "/delete/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployeeById(id);
    }
}
