import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AmountPipe } from './pipes/amount.pipe';
import { MaterialModule } from '../material/material.module';
import { AsyncValueComponent } from './components/async-value/async-value.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    AsyncValueComponent,
    AmountPipe
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AsyncValueComponent,
    AmountPipe
  ]
})
export class SharedModule { }
