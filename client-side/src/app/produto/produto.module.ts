import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { ProdutoComponent } from './produto.component';
import { ProdutoService } from './produto.service';
import { SharedModule } from '../shared/shared.module';
import { ProdutoFormComponent } from './produto-form/produto-form.component';

@NgModule({
  declarations: [
    ProdutoComponent,
    ProdutoFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,

    TableModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    PanelModule,
    SelectButtonModule,
    CalendarModule,
    InputTextareaModule,
    
    SharedModule
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule { }
