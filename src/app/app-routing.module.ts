import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './series/listar/listar.component';
import { ListarComponente } from './filmes/listar_filmes/listar.component';

const routes: Routes = [
  {path: 'series', component: ListarComponent},
  {path: 'filmes', component: ListarComponente},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
