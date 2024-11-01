import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/containers/pokedexList/pokedex.component';
import { PokedexEntryComponent } from './pokedex/containers/pokedex-entry/pokedex-entry.component';
import { pokedexResolver } from './pokedex/guard/pokedex.resolver';

export const routes: Routes = [
  {path: '', redirectTo: 'pokedex',pathMatch:'full'},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'pokedex/new', component: PokedexEntryComponent, resolve: {pokemon: pokedexResolver}},
  {path: 'pokedex/edit/:id', component: PokedexEntryComponent,resolve: {pokemon: pokedexResolver}}

];
