package com.golem.lab4.controller;

import com.golem.lab4.data.Dot;
import com.golem.lab4.service.DotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


}
