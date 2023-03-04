package com.eforce.service;

import com.eforce.dto.AuthorityDto;
import com.eforce.dto.RoleDto;
import com.eforce.dto.UserDto;
import com.eforce.models.Authority;
import com.eforce.models.Role;
import com.eforce.models.User;
import com.eforce.repository.RoleRepository;
import com.eforce.repository.UserRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.RandomUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public List<UserDto> getAllUsers() {
        System.out.println("getAllUsers");
       return null;
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        if (checkIfUsernameExists(userDto)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "UserName already exists!");
        }
        if (checkIfEmailExists(userDto)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email already exists!");
        }

        User user = new User();
        BeanUtils.copyProperties(userDto, user);
        user.setEmailId(userDto.getEmailId().toLowerCase());
        user.setUserName(userDto.getUserName().toLowerCase());


        Optional<Role> role = roleRepository.findById(3L);// get the default roles from the database


        Set<Role> roles = new HashSet<>(); // set the roles to the user
        roles.add(role.get()); // add the role to a user

        user.setRoles(roles); // set the roles to the user

        user.setEnabled(true);


        //generate a random password for the user
        String password = RandomStringUtils.random(7, true, true);
        System.out.println("password = " + password);
//     user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.setPassword(passwordEncoder.encode(password));

        user = userRepository.save(user);

        userDto = this.getUserDto(user);


        return userDto;

    }

    //check if username exists or not in the database
    public boolean checkIfUsernameExists(UserDto userDto) {
        return StringUtils.isNotBlank(userDto.getUserName()) && userRepository.findUserByUserName(userDto.getUserName().toLowerCase()) != null;
    }

    //check if email exists
    public boolean checkIfEmailExists(UserDto userDto) {
        return StringUtils.isNotBlank(userDto.getEmailId()) && userRepository.findUserByEmailId(userDto.getEmailId().toLowerCase()) != null;
    }


    //get userDto
    public UserDto getUserDto(User user) {
        UserDto userDto = new UserDto();

        userDto.setEmailId(user.getEmailId());
        userDto.setEnabled(user.isEnabled());
        userDto.setFristName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setUserName(user.getUserName());
        userDto.setPassword(user.getPassword());


        Set<RoleDto> rSet = new HashSet<>();
        for (Role r : user.getRoles()) {
            RoleDto rDto = new RoleDto();
            rDto.setName(r.getName());

            Set<AuthorityDto> aSet = new HashSet<>();
            for (Authority a : r.getAuthorities()) {
                AuthorityDto aDto = new AuthorityDto(a.getName());
                aSet.add(aDto);
            }
            rDto.setAuthorities(aSet);
            rSet.add(rDto);

        }
        userDto.setRoles(rSet);

        return userDto;
    }


    @Override
    public UserDto updateUser(UserDto userDto) {

        User user = userRepository.findUserByUserName(userDto.getUserName().toLowerCase());
        user.setFirstName(userDto.getFristName());
        user.setLastName(userDto.getLastName());
        //user.setPassword(passwordEncoder.encode(userDto.getPassword()));

        Set<Role> rSet = new HashSet<>(); // set the roles to the user

        for (RoleDto rDto : userDto.getRoles()) {
//            Role role = roleRepository.findByName(rDto.getName());
            rSet.add(roleRepository.findByName(rDto.getName()));
        }
        user.setRoles(rSet);
        user = userRepository.save(user);
        userDto.setId(user.getId());


        return userDto;
    }
}
