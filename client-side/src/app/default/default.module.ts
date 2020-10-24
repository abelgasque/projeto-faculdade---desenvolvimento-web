import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default.component';
import { SharedModule } from './../shared/shared.module';
import { LandpageComponent } from './landpage/landpage.component';

@NgModule({
  declarations: [
    HomeComponent, 
    DefaultComponent, LandpageComponent
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
