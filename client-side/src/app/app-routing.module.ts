import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './default/home/home.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { LoginComponent } from './seguranca/login/login.component';
import { SegurancaPessoaComponent } from './seguranca/seguranca-pessoa/seguranca-pessoa.component';
import { SegurancaComponent } from './seguranca/seguranca.component';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: 'seguranca', component: SegurancaComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'pessoa/incluir', component: SegurancaPessoaComponent },
      { path: 'pessoa/:idPessoa', component: SegurancaPessoaComponent },
    ]
  },
  { path: 'pessoas', component: PessoaComponent },
  { path: 'publicacoes', component: PublicacoesComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }