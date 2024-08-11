import { Component, OnInit } from '@angular/core';
import {  CustomerDetails, CustomerService, TransactionDetails } from '../customer.service';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
    customers:CustomerDetails[] = [];
    selectedAccount: number| null = null;
    transactionDetails:TransactionDetails |null=null
    constructor(private customerService: CustomerService) {}
  
    ngOnInit(): void {
      this.customerService.getCustomers().subscribe(customers => {
        this.customers = customers;
      });
    }
  getTransactionDetails(accountNumber:number): void {
    this.selectedAccount = accountNumber;
    this.customerService.getTransactionDetails(accountNumber).subscribe(transactionDetails => {
      this.transactionDetails = transactionDetails;
    });
  }
}
