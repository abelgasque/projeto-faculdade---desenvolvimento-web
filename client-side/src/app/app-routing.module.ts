import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './default/home/home.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
//   { path: 'nao-autorizado', component: NaoAutorizadoComponent },
//   { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
//   { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }