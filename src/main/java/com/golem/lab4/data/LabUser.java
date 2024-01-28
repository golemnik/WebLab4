package com.golem.lab4.data;

import jakarta.persistence.*;

@Entity
@Table(name = "lab_user")
public class LabUser {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
    @SequenceGenerator(name = "user_seq", sequenceName = "user_seq")
    private int id;
    @Column(name = "login")
    private String login;
    @Column(name = "password")
    private String password;

    public LabUser() {}

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

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
