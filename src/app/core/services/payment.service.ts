import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentResult } from '../models/payment-result.model';
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
    const url = 'http://www.mocky.io/v2/5e3d41272d00003f7ed95c09';
    const headers = {} as HttpHeaders;
    const params = createHttpParams(user);
    return this.http.get<PaymentResult>(url, {...headers, params});
  }
}
