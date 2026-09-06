package com.stacknote.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Health {
    @GetMapping
    public String serverHealth() {
        return "Server Healthy, Up and running!";
    }
}
