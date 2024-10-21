import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from "@angular/material/dialog";
import { ErrorDialogComponent } from '../../shared/component/errordialog/errordialog.component';
import {MatIconModule} from '@angular/material/icon';

import { Pokemons } from '../Models/Pokemons';
import { PokemonsService } from '../service/pokemons.service';
import { CategoryPipe } from '../../shared/pipe/category.pipe';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatCardModule,MatToolbarModule,MatProgressSpinnerModule,ErrorDialogComponent,MatIconModule,CategoryPipe],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent  implements OnInit{
  pokemon$: Observable<Pokemons[]>;
  displayedColumns = ['nome','descricao'];
  constructor(private pokemonsService : PokemonsService,public dialog: MatDialog) {
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
}
