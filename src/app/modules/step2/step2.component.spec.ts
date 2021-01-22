import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppModule } from '../../app.module';
import { PaymentResult } from '../../core/models/payment-result.model';
import { PaymentService } from '../../core/services/payment.service';

import { Step2Component } from './step2.component';

describe('Step2Component', () => {
  let component: Step2Component;
  let fixture: ComponentFixture<Step2Component>;
  let paymentService: PaymentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Step2Component],
      imports: [
        AppModule
      ],
      providers: [
        PaymentService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2Component);
    component = fixture.componentInstance;
    paymentService = TestBed.inject(PaymentService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click on back button', fakeAsync(() => {

    spyOn(component, 'onBack');

    const button = fixture.debugElement.query(By.css('.button-previous'));
    button.triggerEventHandler('click', null);
    tick();
    expect(component.onBack).toHaveBeenCalled();
  }));

  it('should click on next button', fakeAsync(() => {

    spyOn(component, 'onPayment');

    const button = fixture.debugElement.query(By.css('.button-next'));
    button.triggerEventHandler('click', null);
    tick();
    expect(component.onPayment).toHaveBeenCalled();
  }));

  it('should call payment and return PaymentResult object', async(() => {
    const result = {} as PaymentResult;

    spyOn(paymentService, 'payment').and.returnValue(of(result));

    let resultEmitted = {} as PaymentResult;

    // subscribe to EventEmitter value
    component.PaymentResult.subscribe(
      (res: PaymentResult) => {
        resultEmitted = res;
      });

    component.onPayment();
    // check if result emitted is ok
    expect(resultEmitted).toEqual(result);
  }));



  it('should emit true when click on back button', fakeAsync(() => {

    spyOn(component.backButtonClicked, 'emit');

    const button = fixture.debugElement.query(By.css('.button-previous'));
    button.triggerEventHandler('click', null);
    tick();

    expect(component.backButtonClicked.emit).toHaveBeenCalled();
    expect(component.backButtonClicked.emit).toHaveBeenCalledWith(true);

  }));
});
