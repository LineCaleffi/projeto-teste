import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSeriesComponent } from './form-series/form-series.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {path: 'series', component: ListarComponent},
  {path: 'series/criar', component: FormSeriesComponent},
  {path: 'series/editar/:id', component: FormSeriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
