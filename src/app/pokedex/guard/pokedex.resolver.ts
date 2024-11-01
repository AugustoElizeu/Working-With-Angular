import { ResolveFn } from '@angular/router';
import { PokemonsService } from '../service/pokemons.service';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pokemons } from '../Models/Pokemons';

export const pokedexResolver: ResolveFn<Observable<Pokemons>> = (route, state, service:PokemonsService = inject(PokemonsService)) => {

  if (route.params?.['id']) {
    return service.loadById(route.params['id']).pipe(
      catchError(() => of({_id: "", nome: "", descricao: "", tipo: ""})) // Tratamento de erro
    );
  }
  return of({_id: "", nome: "", descricao: "", tipo: ""});
};
