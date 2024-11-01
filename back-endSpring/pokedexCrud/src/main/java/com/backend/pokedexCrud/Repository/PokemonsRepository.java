package com.backend.pokedexCrud.Repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.pokedexCrud.Models.Pokemons;

@Repository
public interface PokemonsRepository extends JpaRepository<Pokemons,Long> {

}
