package com.golem.lab4.dao;

import com.golem.lab4.data.LabUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<LabUser, Integer> {
}
