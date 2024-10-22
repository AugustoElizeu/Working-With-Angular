package com.backend.pokedexCrud;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.backend.pokedexCrud.Models.Pokemons;
import com.backend.pokedexCrud.Repository.PokemonsRepository;

@SpringBootApplication
public class PokedexCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(PokedexCrudApplication.class, args);
	}	
	
	@Bean
	CommandLineRunner initDatabase(PokemonsRepository pokemonsRepository) {
		return args -> {
			pokemonsRepository.deleteAll();
			
			Pokemons p = new Pokemons();
			p.setNome("Blastoise");
			p.setTipo("Agua");
			p.setDescricao("É um pokémon de água");
			
			pokemonsRepository.save(p);
		};
	
	}

}
