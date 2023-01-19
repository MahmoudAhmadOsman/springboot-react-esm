package com.eforce.service;

import com.eforce.daos.PatientDAO;
import com.eforce.models.Patient;
import com.eforce.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class PatientService implements PatientDAO {


    @Autowired
    private PatientRepository patientRepository;


    @Override
    public Patient savePatient(Patient patient) {
        return null;
    }

    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    @Override
    public Optional<Patient> getPatientById(Long id) {
        return patientRepository.findById(id);
    }

    @Override
    public Patient updatePatient(Long id, Patient patient) {
        return null;
    }

    @Override
    public Patient updatePatientByFields(Long id, Map<String, Object> fields) {
        return null;
    }

    @Override
    public void deletePatientById(Long id) {
        patientRepository.deleteById(id);
    }


}
