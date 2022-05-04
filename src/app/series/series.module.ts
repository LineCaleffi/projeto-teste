import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';

import { HttpClientModule } from '@angular/common/http';
import { SeriesRoutingModule } from './series-routing.module';
import { FormSeriesComponent } from './form-series/form-series.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListarComponent,
    FormSeriesComponent
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    SeriesRoutingModule,
    SharedModule
  ],
  exports:[
    ListarComponent
  ]
})
export class SeriesModule { }
