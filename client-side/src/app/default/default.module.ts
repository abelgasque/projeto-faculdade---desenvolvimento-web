import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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

    SharedModule
  ]
})
export class DefaultModule { }
