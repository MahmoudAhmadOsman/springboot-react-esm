package com.eforce.controller;

import com.eforce.models.Patient;
import com.eforce.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v2/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;


    @GetMapping(value = "/list")
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }


}
