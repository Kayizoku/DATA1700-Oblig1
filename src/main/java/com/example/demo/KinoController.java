package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class KinoController {
    public final List<Bilett> bilettRegister = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBilett(Bilett person) {
        bilettRegister.add(person);
    }

    @GetMapping("/hentAlle")
    public List<Bilett> hentAlle() {
        return bilettRegister;
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        bilettRegister.clear();
    }
}

