import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedexList/pokedex.component';

export const routes: Routes = [
  {path: '', redirectTo: 'pokedex',pathMatch:'full'},
  {path: 'pokedex', component: PokedexComponent}
];
