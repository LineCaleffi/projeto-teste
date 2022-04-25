import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponente } from './listar_filmes/listar.component';

@NgModule({
  declarations: [
    ListarComponente
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListarComponente
  ]
})
export class FilmesModule { }
