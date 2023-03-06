package com.eforce.repository;

import com.eforce.dto.UserDto;
import com.eforce.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    //Validate user with userName & emailId when registering
    User findUserByUserName(String userName);

    User findUserByEmailId(String emailId);


}
