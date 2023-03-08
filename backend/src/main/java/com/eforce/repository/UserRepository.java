package com.eforce.repository;

import com.eforce.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    //check if  userName & emailId exists when registering new user
    User findUserByUserName(String userName);

    User findUserByEmailId(String emailId);


}
