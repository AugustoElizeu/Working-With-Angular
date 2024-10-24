import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedexList/pokedex.component';
import { PokedexEntryComponent } from './pokedex/pokedex-entry/pokedex-entry.component';

export const routes: Routes = [
  {path: '', redirectTo: 'pokedex',pathMatch:'full'},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'pokedex/new', component: PokedexEntryComponent}
];
