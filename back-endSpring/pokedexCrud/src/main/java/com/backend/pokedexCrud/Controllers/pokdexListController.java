package com.backend.pokedexCrud.Controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.pokedexCrud.Models.Pokemons;
import com.backend.pokedexCrud.Repository.PokemonsRepository;

@RestController
@RequestMapping("/api/pokedexList")
public class pokdexListController {
	
	private final PokemonsRepository pkmRepository;
	
	public pokdexListController(PokemonsRepository pkmRepository) {
		super();
		this.pkmRepository = pkmRepository;
	}

	@GetMapping
	public List<Pokemons> list(){
			return pkmRepository.findAll();
		}
	
	//@RequestMapping(method = RequestMethod.POST)
	@PostMapping
	public ResponseEntity<Pokemons> create(@RequestBody Pokemons pkmon){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(pkmRepository.save(pkmon));
	}
	
	
		
}
