import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';

import { HttpClientModule } from '@angular/common/http';
import { SeriesRoutingModule } from './series-routing.module';


@NgModule({
  declarations: [
    ListarComponent
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    SeriesRoutingModule
  ],
  exports:[
    ListarComponent
  ]
})
export class SeriesModule { }
