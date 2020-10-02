import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SegurancaPessoaComponent } from './seguranca-pessoa/seguranca-pessoa.component';
import { SegurancaComponent } from './seguranca.component';
import { SharedModule } from '../shared/shared.module';
import { PessoaModule } from '../pessoa/pessoa.module';

@NgModule({
  declarations: [
    LoginComponent, 
    SegurancaPessoaComponent, 
    SegurancaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    SharedModule,
    PessoaModule
  ]
})
export class SegurancaModule { }
