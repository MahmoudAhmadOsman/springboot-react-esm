package com.eforce.controller;


import com.eforce.dto.UserDto;
import com.eforce.models.User;
import com.eforce.repository.UserRepository;
import com.eforce.daos.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v4")
public class UserController {

    @Autowired
    private final UserDAO userService;

    @Autowired
    private final UserRepository userRepository;

    public UserController(UserDAO userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }


    @GetMapping(path = "/users", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }


    @PostMapping(path = "/register-user", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public UserDto createUser(@RequestBody UserDto userDto) {
        userDto = userService.createUser(userDto);
        return userDto;
    }


    //login controller ~~
    @RequestMapping("/login")
    public User getUserDetailsAfterLogin(Authentication authentication){
        List<User> users = (List<User>) userRepository.findUserByUserName(authentication.getName()); // something wrong here

        if (users.size() > 0) {
            return users.get(0);
        } else {
            return null;
        }
    }


    @PutMapping(path = "/update-user/{id}", consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public UserDto updateUser(@RequestBody UserDto userDto) {
        userDto = userService.updateUser(userDto);
        return userDto;
    }


}
