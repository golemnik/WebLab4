package com.golem.lab4.service;

import com.golem.lab4.dao.UserRepository;
import com.golem.lab4.data.LabUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository repository;

    @Override
    @Transactional
    public void register(LabUser labUser) {
        repository.save(labUser);
    }

    @Override
    @Transactional
    public boolean login(LabUser labUser) {
        LabUser loaded = repository.findAll().stream()
                .filter(labUser1 -> labUser1.getLogin().equals(labUser.getLogin()))
                .findFirst()
                .orElse(null);
        if (loaded == null) return false;
        return loaded.getPassword().equals(labUser.getPassword());
    }
}
