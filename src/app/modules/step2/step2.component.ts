import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaymentResult } from '../../core/models/payment-result.model';
import { User } from '../../core/models/user-model';
import { PaymentService } from '../../core/services/payment.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  @Input() user = {} as User;
  @Output() PaymentResult = new EventEmitter<PaymentResult>();
  @Output() backButtonClicked = new EventEmitter<boolean>();

  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
  }

  onBack() {
    this.backButtonClicked.emit(true);
  }

  onPayment() {
    this.paymentService.payment(this.user)
      .subscribe(
        (result) => {
          this.PaymentResult.emit(result);
        }, () => {});
  }
}
