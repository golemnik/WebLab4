package com.golem.lab4.service;

import com.golem.lab4.data.Dot;

import java.util.List;

public interface DotService {
    List<Dot> getAll();
    void saveDot (Dot dot);
    Dot getDot (int id);
    void deleteDot (int id);
    void deleteAll ();
}
