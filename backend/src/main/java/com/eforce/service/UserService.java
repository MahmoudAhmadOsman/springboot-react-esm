package com.eforce.service;

import com.eforce.dto.UserDto;
import org.springframework.stereotype.Service;


public interface UserService {

    public UserDto createUser(UserDto userDto);

    UserDto updateUser(UserDto userDto);
}
