import { Injectable } from '@angular/core';

import { Pokemons } from './../Models/Pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  list(): Pokemons[] {
    return [
      {_id:'1',nome:'Pikachu',descricao:'Pokémon Mega fogoparece um ratinho'},
      {_id:'2',nome:"Bulbasauro",descricao:"Filho do thyplosion"}
    ];
  }
}
