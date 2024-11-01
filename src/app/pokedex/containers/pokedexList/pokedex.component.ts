import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { CategoryPipe } from '../../../shared/pipe/category.pipe';
import { Pokemons } from '../../Models/Pokemons';
import { ErrorDialogComponent } from './../../../shared/component/errordialog/errordialog.component';
import { PokemonsService } from './../../service/pokemons.service';
import { ListDexComponent } from '../../Components/list-dex/list-dex.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatToolbarModule, MatProgressSpinnerModule, ErrorDialogComponent, MatIconModule, CategoryPipe,ListDexComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent  implements OnInit{

  pokemon$: Observable<Pokemons[]>;
  displayedColumns = ['nome','descricao','tipo',"action"];

  constructor(private pokemonsService : PokemonsService,public dialog: MatDialog,private router :Router,private acroute: ActivatedRoute) {
    //this.pokemon = [];
    //this.pokemonsService = new PokemonsService;
    this.pokemon$ = this.pokemonsService.list().pipe(catchError(err => {
      this.onError('Não foi possível encontrar a lista de dados desejada');
      return of([])
    }));
  }

  onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
      panelClass: 'custom-dialog'
    });
  }

  ngOnInit(): void {

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo:this.acroute});
  }
  onEdit(pokemons: Pokemons){
    this.router.navigate(['edit', pokemons._id], {relativeTo:this.acroute});
  }
}
