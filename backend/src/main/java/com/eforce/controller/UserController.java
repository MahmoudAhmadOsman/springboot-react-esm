package com.eforce.controller;


import com.eforce.dto.UserDto;
import com.eforce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v4/users")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping(path = "/list")
    public List<UserDto> getAllUsers() {
        return userService.getAllUsers();
    }


    @PostMapping(path = "/register-user", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public UserDto createUser(@RequestBody UserDto userDto) {
        userDto = userService.createUser(userDto);
        return userDto;
    }


    @PutMapping(value = "/update-user/{id}", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public UserDto updateUser(@RequestBody UserDto userDto) {
        userDto = userService.updateUser(userDto);
        return userDto;
    }


}
