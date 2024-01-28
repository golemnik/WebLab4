package com.golem.lab4.controller;

import com.golem.lab4.data.Dot;
import com.golem.lab4.data.LabUser;
import com.golem.lab4.service.DotService;
import com.golem.lab4.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GeneralRestController {
    @Autowired
    private DotService dotService;

    @GetMapping("/dots")
    public List<Dot> showDots () {
        return dotService.getAll();
    }

    @GetMapping("/dots/{id}")
    public Dot getDot (@PathVariable int id) {
        return dotService.getDot(id);
    }

    @PostMapping("/dots")
    public ResponseEntity<String> addDot (@RequestBody Dot dot) {
        dotService.saveDot(dot);
        return new ResponseEntity<>("Ok", HttpStatus.OK);
    }

    @DeleteMapping("/dots")
    public ResponseEntity<String> deleteDots() {
        dotService.deleteAll();
        return new ResponseEntity<>("Ok", HttpStatus.OK);
    }


    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<Boolean> login (@RequestBody LabUser labUser) {
        boolean result = userService.login(labUser);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody LabUser labUser) {
        userService.register(labUser);
        return new ResponseEntity<>("Ok", HttpStatus.OK);
    }

}
