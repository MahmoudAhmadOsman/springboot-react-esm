package com.eforce.daos;

import com.eforce.models.Patient;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface PatientDAO {

    Patient savePatient(Patient patient);

    List<Patient> getAllPatients();

    Optional<Patient> getPatientById(Long id);

    Patient updatePatient(Long id, Patient patient);

    Patient updatePatientByFields(Long id, Map<String, Object> fields);

    void deletePatientById(Long id);

}
