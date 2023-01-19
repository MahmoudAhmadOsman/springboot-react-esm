package com.eforce.controller;

import com.eforce.models.Patient;
import com.eforce.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v2/patients")
public class PatientController {

    @Autowired
    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }


    @GetMapping(value = "/list")
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }


    @GetMapping(value = "/{id}")
    public Optional<Patient> getPatientById(@PathVariable Long id) {
        return patientService.getPatientById(id);

    }


    //delete patient by id
    @DeleteMapping(value = "/delete/{id}")
    public void deletePatient(@PathVariable Long id) {
        patientService.deletePatientById(id);
    }


}
