import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProdutoService } from '../produto/produto.service';
import { ToastyComponent } from './components/toasty/toasty.component';
import { ToastyService } from './components/toasty/toasty.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ToastyComponent,
    SpinnerComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,

    SidebarModule,
    AccordionModule,
    ScrollPanelModule,
    TableModule,
    TreeTableModule,
    ToastModule,
    ProgressSpinnerModule

  ],
  exports: [
    NavbarComponent,
    ToastyComponent,
    SpinnerComponent,
    FooterComponent
  ],
  providers: [
    ProdutoService,
    ToastyService,
    MessageService
  ]
})
export class SharedModule { }
