package com.eforce.service;

import com.eforce.daos.PatientDAO;
import com.eforce.models.Patient;
import com.eforce.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class PatientService implements PatientDAO {


    @Autowired
    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }


    @Override
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
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
        Patient patientToUpdate = patientRepository.findById(id).orElse(null);
        patientToUpdate.setFirstName(patient.getFirstName());
        patientToUpdate.setLastName(patient.getLastName());
        patientToUpdate.setEmail(patient.getEmail());
        patientToUpdate.setGender(patient.getGender());
        patientToUpdate.setMartialStatus(patient.getMartialStatus());
        patientToUpdate.setDateOfBirth(patient.getDateOfBirth());
        patientToUpdate.setSsn(patient.getSsn());
        patientToUpdate.setPhoneNumber(patient.getPhoneNumber());
        patientToUpdate.setStreetName(patient.getStreetName());
        patientToUpdate.setCity(patient.getCity());
        patientToUpdate.setState(patient.getState());
        patientToUpdate.setZipCode(patient.getZipCode());
        patientToUpdate.setNote(patient.getNote());
        patientToUpdate.setProviderName(patient.getProviderName());
        patientToUpdate.setAccountNumber(patient.getAccountNumber());
        patientToUpdate.setGroupNumber(patient.getGroupNumber());
        patientToUpdate.setProviderPhone(patient.getProviderPhone());
        patientToUpdate.setCareType(patient.getCareType());
        patientToUpdate.setRenewalMonth(patient.getRenewalMonth());
        patientToUpdate.setCreationDate(patient.getCreationDate());
        return patientRepository.save(patientToUpdate);


    }

    @Override
    public Patient updatePatientByFields(Long id, Map<String, Object> fields) {

        Optional<Patient> existingPatient = patientRepository.findById(id);
        if (existingPatient.isPresent()) {
            fields.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(Patient.class, key);
                field.setAccessible(true);
                ReflectionUtils.setField(field, existingPatient.get(), value);
            });
            return patientRepository.save(existingPatient.get());
        }

        return null;
    }

    @Override
    public void deletePatientById(Long id) {
        patientRepository.deleteById(id);
    }


}
