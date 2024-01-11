package com.golem.lab4.dao;

import com.golem.lab4.data.Dot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DotRepository extends JpaRepository<Dot, Integer> {
}
