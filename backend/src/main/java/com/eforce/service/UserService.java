package com.eforce.service;

import com.eforce.dto.UserDto;
import com.eforce.models.User;

import java.util.List;

//acts as DAO - moved to [dao] folder later
public interface UserService {

    List<User> getAllUsers();

    public UserDto createUser(UserDto userDto); //create user

    UserDto updateUser(UserDto userDto); // update
}
