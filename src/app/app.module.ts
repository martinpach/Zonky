import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoansAvgModule } from './loans-avg/loans-avg.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    LoansAvgModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
