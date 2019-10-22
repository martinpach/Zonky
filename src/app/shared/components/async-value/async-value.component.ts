import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-async-value',
  templateUrl: './async-value.component.html',
  styleUrls: ['./async-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncValueComponent implements OnInit {

  @Input() loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
