package com.eforce.service;

import com.eforce.daos.DepartmentDAO;
import com.eforce.models.Department;
import com.eforce.repository.DepartmentRepository;
import org.springframework.stereotype.Service;


@Service
public class DepartmentService implements DepartmentDAO {

    private final DepartmentRepository departmentRepository;

    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @Override
    public Department saveDepartment(Department department) {
        return departmentRepository.save(department);
    }
}

