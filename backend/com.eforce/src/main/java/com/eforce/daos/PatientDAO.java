package com.eforce.daos;

import com.eforce.models.Patient;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface PatientDAO {

    Patient savePatient(Patient patient);


    //list
    List<Patient> getAllPatients();


    //findById
    Optional<Patient> findPatientById(Long id);


    //update
    Patient updatePatient(Long id, Patient patient);


    //patch
    Patient updatePatientByFields(Long id, Map<String, Object> fields);


    //delete
    void deletePatientByName(Long id);

}
