import { Injectable } from '@angular/core';

import { Pokemons } from './../Models/Pokemons';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private readonly endPoint = "/assets/pokedex.json"

  constructor(private http: HttpClient) { }

  list() {
   /* return [
      {_id:'1',nome:'Pikachu',descricao:'Pokémon Mega fogoparece um ratinho'},
      {_id:'2',nome:"Bulbasauro",descricao:"Filho do thyplosion"}
    ];*/
    return this.http.get<Pokemons[]>(this.endPoint).pipe(first(),delay(5000),tap(pokemon => console.log(pokemon)));
  }
}
