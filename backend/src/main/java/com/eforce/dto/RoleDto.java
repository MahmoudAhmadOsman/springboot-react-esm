package com.eforce.dto;

import java.util.Set;

public class RoleDto {
    private String name;

    private Set<AuthorityDto> authorities;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<AuthorityDto> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<AuthorityDto> authorities) {
        this.authorities = authorities;
    }


    @Override
    public String toString() {
        return "RoleDto{" +
                "name='" + name + '\'' +
                ", authorities=" + authorities +
                '}';
    }
}
