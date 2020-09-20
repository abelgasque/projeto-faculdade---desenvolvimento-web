import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent, 
    DefaultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
  ]
})
export class DefaultModule { }
