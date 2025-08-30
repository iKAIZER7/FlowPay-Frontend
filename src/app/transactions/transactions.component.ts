import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-transaction',
  imports: [ReactiveFormsModule,CommonModule],
  standalone: true,
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionComponent {
  transactionForm!: FormGroup;
  paymentType: string = '';

  constructor(private fb: FormBuilder) {}

  selectPaymentType(type: string) {
    this.paymentType = type;

    if (type === 'NEFT') {
      this.transactionForm = this.fb.group({
        fromAccount: ['', Validators.required],
        toAccount: ['', Validators.required],
        amount: ['', [Validators.required, Validators.min(1)]]
      });
    } else if (type === 'UPI') {
      this.transactionForm = this.fb.group({
        fromUPI: ['', Validators.required],
        toUPI: ['', Validators.required],
        amount: ['', [Validators.required, Validators.min(1)]]
      });
    }
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      console.log("Transaction submitted:", this.transactionForm.value);
      alert(`✅ ${this.paymentType} Transaction Successful!`);
      this.transactionForm.reset();
      this.paymentType = '';
    }
  }
}
