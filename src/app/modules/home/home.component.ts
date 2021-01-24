import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { TranslateService } from '@ngx-translate/core';
import { PaymentResult } from '../../core/models/payment-result-model';
import { User } from '../../core/models/user-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  user = {} as User;
  paymentResult = {} as PaymentResult;


  constructor(
    private trans: TranslateService
  ) { }

  ngOnInit(): void {
  }

  onGetUser(event: User) {
    this.user = event;
    this.nextStep();
  }

  onGetPaymentResult(event: PaymentResult) {
    if (!event) { return; }
    this.paymentResult = event;
    this.nextStep();
  }

  getLabelTranslate(label: string) {
    return this.trans.instant(label);
  }

  nextStep() {
    this.stepper.next();
  }

  previousStep() {
    this.stepper.previous();
  }
}
