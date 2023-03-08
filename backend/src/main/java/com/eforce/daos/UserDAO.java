package com.eforce.daos;

import com.eforce.dto.UserDto;
import com.eforce.models.User;

import java.util.List;

//acts as DAO - moved to [dao] folder later
public interface UserDAO {

    List<User> getAllUsers();

    public UserDto createUser(UserDto userDto);

    UserDto updateUser(UserDto userDto);
}
