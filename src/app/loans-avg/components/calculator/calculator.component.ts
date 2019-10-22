import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorComponent {
  @Input() ratings: string[];
  @Input() loanAmountsAvg;
  @Input() avgLoading: boolean;
  @Output() ratingChange = new EventEmitter<string>();

}
