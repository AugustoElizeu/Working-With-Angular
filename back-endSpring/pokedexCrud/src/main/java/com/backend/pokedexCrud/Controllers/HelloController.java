package com.backend.pokedexCrud.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hello")
public class HelloController {
	
	@GetMapping
	public String Hello() {

		return "ANGULAR 2024 PROJETO HEIM";
	}
}
