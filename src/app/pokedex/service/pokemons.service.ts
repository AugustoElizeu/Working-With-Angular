import { Injectable } from '@angular/core';

import { Pokemons } from './../Models/Pokemons';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private readonly endPoint = "/api/pokedexList"

  constructor(private http: HttpClient) { }

  list() {
   /* return [
      {_id:'1',nome:'Pikachu',descricao:'Pokémon Mega fogoparece um ratinho'},
      {_id:'2',nome:"Bulbasauro",descricao:"Filho do thyplosion"}
    ];*/
    return this.http.get<Pokemons[]>(this.endPoint).pipe(first(),
    //delay(1000),
    //tap(pokemon => console.log(pokemon))
  );
  }

  loadById(id:string){
    return this.http.get<Pokemons>(`${this.endPoint}/${id}`);
  }

  save(record: Partial<Pokemons>){
    if(record._id){
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Pokemons>) {
    return this.http.post<Pokemons[]>(this.endPoint, record).pipe(first());
  }

  private update(record: Partial<Pokemons>) {
    return this.http.put<Pokemons[]>(`${this.endPoint}/${record._id}`, record).pipe(first());
  }


}
