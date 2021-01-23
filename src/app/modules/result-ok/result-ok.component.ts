import { Component, Input, OnInit } from '@angular/core';
import { PaymentResult } from '../../core/models/payment-result.model';

@Component({
  selector: 'app-result-ok',
  templateUrl: './result-ok.component.html',
  styleUrls: ['./result-ok.component.scss']
})
export class ResultOkComponent implements OnInit {
  @Input() resultOk = {} as PaymentResult;

  constructor() { }

  ngOnInit(): void {
  }

}
