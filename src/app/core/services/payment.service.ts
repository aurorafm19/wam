import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentResult } from '../models/payment-result-model';
import { User } from '../models/user-model';
import { createHttpParams } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient,
  ) { }

  payment(user: User) {
    const url = 'https://run.mocky.io/v3/12c9eea7-cbdf-4fa1-b849-a56a57337ac2';
    const headers = {} as HttpHeaders;
    const params = createHttpParams(user);
    return this.http.get<PaymentResult>(url, {...headers, params});
  }
}
