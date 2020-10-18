import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PasswordModule } from 'primeng/password';

import { SharedModule } from '../shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { PublicacoesComponent } from './publicacoes.component';
import { PublicacoesService } from './publicacoes.service';

@NgModule({
  declarations: [PublicacoesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

    TableModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    PanelModule,
    SelectButtonModule,
    PasswordModule,

    SharedModule
  ],
  providers: [
    PublicacoesService
  ]
})
export class PublicacoesModule { }
