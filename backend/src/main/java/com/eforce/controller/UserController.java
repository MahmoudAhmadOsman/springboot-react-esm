package com.eforce.controller;


import com.eforce.dto.UserDto;
import com.eforce.models.User;
import com.eforce.repository.UserRepository;
import com.eforce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v4")
public class UserController {

    @Autowired
    private final   UserService userService;


    private final UserRepository userRepository;

    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }


    @GetMapping(path = "/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }


    @PostMapping(path = "/register-user", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public UserDto createUser(@RequestBody UserDto userDto) {
        userDto = userService.createUser(userDto);
        return userDto;
    }


    @PutMapping(path = "/update-user/{id}", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public UserDto updateUser(@RequestBody UserDto userDto) {
        userDto = userService.updateUser(userDto);
        return userDto;
    }


}
