import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrordialogComponent } from '../component/errordialog/errordialog.component';

@NgModule({
  imports: [
    CommonModule, ErrordialogComponent
  ],
  exports: [
    ErrordialogComponent
  ]
})
export class SharedModule { }
