package com.golem.lab4.service;


import com.golem.lab4.dao.DotRepository;
import com.golem.lab4.data.Dot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DotServiceImpl implements DotService{
    @Autowired
    private DotRepository repository;
    @Override
    @Transactional
    public List<Dot> getAll() {
        return repository.findAll();
    }

    @Override
    @Transactional
    public void saveDot(Dot dot) {
        repository.save(dot);
    }

    @Override
    @Transactional
    public Dot getDot(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public void deleteDot(int id) {
        repository.deleteById(id);
    }

    @Override
    @Transactional
    public void deleteAll() {
        repository.deleteAll();
    }


}
