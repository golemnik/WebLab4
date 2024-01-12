package com.golem.lab4.controller;

import com.golem.lab4.data.Dot;
import com.golem.lab4.service.DotService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public void addDot (@RequestBody Dot dot) {
        dotService.saveDot(dot);
    }

    @DeleteMapping("/dots/{id}")
    public String deleteDot (@PathVariable int id) {
        dotService.deleteDot(id);
        return "Dot with id {" + id + "} removed.";
    }
}
