import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PaymentResult } from '../models/payment-result.model';
import { User } from '../models/user-model';
import { PaymentService } from './payment.service';


describe('PaymentService', () => {
  let httpTestingController: HttpTestingController;
  let service: PaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PaymentService
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PaymentService);
  });

  afterEach(() => {
    // verify there are no more pending requests
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return PaymentResult object', () => {
    const user = {} as User;
    const result = {
      title: '',
      text: '',
      img: ''
    } as PaymentResult;

    // check if result is ok
    service.payment(user).subscribe(
      (res: PaymentResult) =>
        expect(res).toEqual(result)
    );

    // check if call just once
    const req = httpTestingController.expectOne('http://www.mocky.io/v2/5e3d41272d00003f7ed95c09');

    expect(req.request.method).toEqual('GET');

    req.flush(result);

  });

});
