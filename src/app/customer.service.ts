// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CustomerService {

//   constructor() { }

// }
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Customer {
  id: number;
  name: string;
  address: string;
  accounts: Account[];
}

export interface Account {
  id: number;
  type: string;
  balance: number;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }
  getCustomers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/customers`);
  }

  getTransactionDetails(accountNumber:any): Observable<any> {
  
    return this.http.get(`http://localhost:5000/api/transactions/${accountNumber}`)
    
  }

}
