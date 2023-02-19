package com.eforce.repository;

import com.eforce.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    //Validate user with userName & emailId when registering
    User findUserByUserName(String userName);

    User findUserByEmailId(String emailId);

}
