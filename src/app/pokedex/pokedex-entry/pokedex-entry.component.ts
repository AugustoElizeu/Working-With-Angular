import { Component, inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { PokemonsService } from '../service/pokemons.service';

@Component({
  selector: 'app-pokedex-entry',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatSelectModule, MatInputModule,MatButtonModule, MatCardModule,MatSnackBarModule],
  templateUrl: './pokedex-entry.component.html',
  styleUrl: './pokedex-entry.component.scss'
})
export class PokedexEntryComponent implements OnInit{

    form: FormGroup;
    private _snackBar = inject(MatSnackBar);

    constructor(private formBuilder : FormBuilder,
      private service: PokemonsService,
      private location: Location,
    ){
        this.form = this.formBuilder.group({
            nome: [null],
            tipo: [null],
            descricao: [null]
        });
    }

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }

    ngOnInit(): void {

    }

    onSubmit(){
      this.service.save(this.form.value).subscribe(data => {this.onSuccess()},error => {this.onFailure()});
    }
    onCancel(){
        this.location.back();
    }
    onSuccess(){
      this._snackBar.open("Parabéns, Entrada nova adicionada!!!","Fechar",{duration:5000})
      this.onCancel();
    }
    onFailure(){
      this._snackBar.open("Erro ao salvar informações","Fechar",{duration:5000})
    }

}
