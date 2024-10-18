import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { Pokemons } from '../Models/Pokemons';
import { PokemonsService } from './../service/pokemons.service';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [MatTableModule,MatCardModule,MatToolbarModule],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent  implements OnInit{
  pokemon: Pokemons[] = [];
  pokemonsService: PokemonsService;
  displayedColumns = ['nome','descricao'];
  constructor() {
    //this.pokemon = [];
    this.pokemonsService = new PokemonsService;
    this.pokemon = this.pokemonsService.list();
  }

  ngOnInit(): void {

  }
}
