package com.backend.pokedexCrud.Controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
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
	public @ResponseBody List<Pokemons> list(){
			return pkmRepository.findAll();
		}
	
	@GetMapping("/{Id}")
	public ResponseEntity<Pokemons> findId(@PathVariable("Id") Long Id){
		
		return pkmRepository.findById(Id).map(record -> ResponseEntity.ok().body(record)).orElse(ResponseEntity.notFound().build());
	}
	
	//@RequestMapping(method = RequestMethod.POST)
	@PostMapping
	public ResponseEntity<Pokemons> create(@RequestBody Pokemons pkmon){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(pkmRepository.save(pkmon));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Pokemons> update(@PathVariable Long id, @RequestBody Pokemons pkmon) {
	    return pkmRepository.findById(id)
	            .map(record -> {
	                // Atualiza os campos do objeto com os dados do objeto recebido
	                record.setNome(pkmon.getNome());
	                record.setDescricao(pkmon.getDescricao());
	                record.setTipo(pkmon.getTipo());
	                
	                // Salva o objeto atualizado no repositório
	                Pokemons updated = pkmRepository.save(record);
	                return ResponseEntity.ok().body(updated);
	            })
	            .orElse(ResponseEntity.notFound().build());
	}
		
}
