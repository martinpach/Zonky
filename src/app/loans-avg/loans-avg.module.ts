import { CalculatorComponent } from './components/calculator/calculator.component';
import { NgModule } from '@angular/core';
import { LoansAvgComponent } from './containers/loans-avg/loans-avg.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CalculatorComponent,
    LoansAvgComponent
  ],
  exports: [
    LoansAvgComponent
  ]
})
export class LoansAvgModule {

}