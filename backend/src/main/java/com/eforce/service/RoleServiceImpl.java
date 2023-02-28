package com.eforce.service;

import com.eforce.dto.AuthorityDto;
import com.eforce.dto.RoleDto;
import com.eforce.models.Authority;
import com.eforce.models.Role;
import com.eforce.repository.AuthorityRepository;
import com.eforce.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;


@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private AuthorityRepository authorityRepository;


    @Override
    public RoleDto createRole(RoleDto roleDto) {
        //*1. create a role
        Role role = new Role();
        role.setName(roleDto.getName());

        role.setAuthorities(roleDto.getAuthorities().stream().map(a -> {
            Authority authority = authorityRepository.findByName(a.getName());
            if (authority == null) {
                authority = authorityRepository.save(new Authority(a.getName()));
            }
            return authority;
        }).collect(Collectors.toSet()));


        System.out.println("roleDto:: = " + role);
        roleRepository.save(role);
        System.out.println("======================================");
        roleDto.setName(role.getName());
        roleDto.setAuthorities(role.getAuthorities().stream().map(a ->
                new AuthorityDto(a.getName())).collect(Collectors.toSet()));

        System.out.println("RoleDto in response:: = " + roleDto);

        return roleDto;
    }
}
