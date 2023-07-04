package com.eforce.controller;

import com.eforce.models.Employee;
import com.eforce.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping(path = "/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Employee saveEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    @GetMapping(path = "/list")
    @ResponseStatus(HttpStatus.OK)
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

//    @GetMapping(path = "/{id}")
//    public Optional<Employee> getEmployeeById(@PathVariable Long id) {
//        return employeeService.getEmployeeById(id);
//    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long id) {
        return employeeService.getEmployeeById(id).map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


    //    @PutMapping(path = "/{id}")
//    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
//        return employeeService.updateEmployee(id, employee);
//    }
    @PutMapping(path = "/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Long id,
                                                   @RequestBody Employee employee) {
        return employeeService.getEmployeeById(id).map(employeeToBeUpdated -> {
            employeeToBeUpdated.setFirstName(employee.getFirstName());
            employeeToBeUpdated.setLastName(employee.getLastName());
            employeeToBeUpdated.setEmail(employee.getEmail());
            employeeToBeUpdated.setPhone(employee.getPhone());
            employeeToBeUpdated.setStatus(employee.getStatus());

            Employee updatedEmployee = employeeService.updateEmployee(id, employeeToBeUpdated);
            return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);

        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PatchMapping(path = "/{id}")
    public Employee updateEmployeeFields(@PathVariable Long id,
                                         @RequestBody Map<String, Object> fields) {
        return employeeService.updateEmployeeByFields(id, fields);
    }


//    @DeleteMapping(path = "/delete/{id}")
//    public void deleteEmployee(@PathVariable("id") Long id) {
//        employeeService.deleteEmployeeById(id);
//    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long id) {
        employeeService .deleteEmployeeById(id);
        return new ResponseEntity<String>("Deleted employee record with id number: " + id + " successfully", HttpStatus.OK);
    }
}
