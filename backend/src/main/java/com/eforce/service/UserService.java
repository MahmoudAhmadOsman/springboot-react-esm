package com.eforce.service;

import com.eforce.dto.UserDto;

import java.util.List;

//acts as DAO - moved to [dao] folder later
public interface UserService {

    List<UserDto> getAllUsers();

    public UserDto createUser(UserDto userDto); //create user

    UserDto updateUser(UserDto userDto); // update
}
