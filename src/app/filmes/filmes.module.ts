import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponente } from './listar_filmes/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FilmesRoutingModule } from './filmes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListarComponente,
    FormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FilmesRoutingModule,
    SharedModule
  ],
  exports:[
    ListarComponente
  ]
})
export class FilmesModule { }
