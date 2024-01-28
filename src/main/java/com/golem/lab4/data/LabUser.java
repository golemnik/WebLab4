package com.golem.lab4.data;

import jakarta.persistence.*;

@Entity
@Table(name = "lab_user")
public class LabUser {

    @Id
    @Column(name = "login")
    private String login;
    @Column(name = "password")
    private String password;

    public LabUser() {}

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
