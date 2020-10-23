import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent, 
    DefaultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    MatCardModule,
    
    SharedModule,
    
  ]
})
export class DefaultModule { }
