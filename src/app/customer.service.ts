
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface CustomerDetails {
  _id:              string;
  username:         string;
  name:             string;
  address:          string;
  birthdate:        Date;
  email:            string;
  active:           boolean;
  accounts:         number[];
  tier_and_details: { [key: string]: TierAndDetail };
}

export interface TierAndDetail {
  tier:     string;
  id:       string;
  active:   boolean;
  benefits: string[];
}

export interface TransactionDetails {
  _id:               string;
  account_id:        number;
  transaction_count: number;
  bucket_start_date: Date;
  bucket_end_date:   Date;
  transactions:      Transaction[];
}

export interface Transaction {
  _id:              string;
  date:             Date;
  amount:           number;
  transaction_code: TransactionCode;
  symbol:           string;
  price:            string;
  total:            string;
}

export enum TransactionCode {
  Buy = "buy",
  Sell = "sell",
}


@Injectable({
  providedIn: 'root'
})


export class CustomerService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }
  getCustomers(): Observable<CustomerDetails[]> {
    return this.http.get<CustomerDetails[]>(`${this.apiUrl}/customers`);
  }

  getTransactionDetails(accountNumber:number): Observable<TransactionDetails> {
    return this.http.get<TransactionDetails>(`http://localhost:5000/api/transactions/${accountNumber}`)
  }

}
