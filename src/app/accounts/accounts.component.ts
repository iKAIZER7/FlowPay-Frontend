import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../service/account.service';
import { CommonModule } from '@angular/common';
import{ FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-account',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountComponent {

  account: Account = {
    name: '',
    email: '',
    aadhaarNo: '',
    dob: '',
    mobile: '',
    occupation: '',
    permanentAddress: '',
    residentialAddress: ''
  };

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  createAccount(): void {
    this.accountService.createAccount(this.account).subscribe({
      next: (response : any) => {
        console.log('Account Created:', response);
        alert("Account created successfully with ID: " + response.accountId);
        this.router.navigate(['/dashboard']);  // redirect after success
      },
      error: (err) => {
        console.error('Error creating account:', err);
        alert("Error creating account!");
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
