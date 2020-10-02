import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {SidebarModule} from 'primeng/sidebar';
import {AccordionModule} from 'primeng/accordion';
import {ScrollPanelModule} from 'primeng/scrollpanel';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProdutoService } from '../produto/produto.service';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    NavbarComponent
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
    TableModule
    
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class SharedModule { }
