import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Input, Output, EventEmitter } from '@angular/core';

import { CategoryPipe } from '../../../shared/pipe/category.pipe';
import { Pokemons } from '../../Models/Pokemons';


@Component({
  selector: 'app-list-dex',
  standalone: true,
  imports: [MatIconModule,MatTableModule, CategoryPipe, MatButtonModule],
  templateUrl: './list-dex.component.html',
  styleUrl: './list-dex.component.scss'
})
export class ListDexComponent implements OnInit {

    @Input() poke: Pokemons[] = [];
    @Output() add = new EventEmitter(false);
    @Output() edit = new EventEmitter(false);
    readonly displayedColumns = ['nome','descricao','tipo',"action"];
    constructor(){

    }
    ngOnInit(): void {
    }
    onAdd(){
        this.add.emit(true);
    }

    onEdit(pokemons: Pokemons){
      this.edit.emit(pokemons);
  }

}
