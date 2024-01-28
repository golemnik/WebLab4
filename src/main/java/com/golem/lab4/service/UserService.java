package com.golem.lab4.service;

import com.golem.lab4.data.LabUser;

public interface UserService {
    void register (LabUser labUser);
    boolean login (LabUser labUser);
}
