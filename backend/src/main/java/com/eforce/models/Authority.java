package com.eforce.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "authority")
public class Authority implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String name;


    @ManyToMany(mappedBy = "authorities")
    private Set<Role> roles;


    public Authority() {
    }

    public Authority(String name, Set<Role> roles) {
        this.name = name;
        this.roles = roles;
    }

    public Authority(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Authority authority = (Authority) o;
        return id.equals(authority.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}