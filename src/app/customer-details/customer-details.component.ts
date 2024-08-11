import { Component, OnInit } from '@angular/core';
import { Account, Customer, CustomerService } from '../customer.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

    customers: Customer[] = [];
    selectedAccount: number| null = null;
    transactions: any[] = [];
    transactionDetails:any
    constructor(private customerService: CustomerService) {}
  
    ngOnInit(): void {
      this.customerService.getCustomers().subscribe(customers => {
        this.customers = customers;
      });
    }
  getTransactionDetails(accountNumber:any): void {
    this.selectedAccount = accountNumber;
    this.customerService.getTransactionDetails(accountNumber).subscribe(transactionDetails => {
      this.transactionDetails = transactionDetails;
    });
    // this.http.get<any[]>(`http://localhost:5000/api/transactions/${this.selectedAccount}`).subscribe({
    //   next: (data) => {
    //     this.transactionDetails = data;
    //     console.log('Transaction details:', this.transactionDetails);
    //   },
    //   error: (err) => {
    //     console.error('Error fetching transaction details', err);
      // }
    // });
  }
}
