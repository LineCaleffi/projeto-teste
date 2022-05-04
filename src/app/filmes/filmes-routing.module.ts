import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListarComponente } from './listar_filmes/listar.component';

const routes: Routes = [
  {path: 'filmes', component: ListarComponente},
  {path: 'filmes/criar', component: FormComponent},
  {path: 'filmes/editar/:id', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FilmesRoutingModule { }
