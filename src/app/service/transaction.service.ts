import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TransactionService {

  // Mock UPI
  initiateUpiTxn(payload: {
    vpa: string; amount: number; note?: string; pin: string;
  }): Observable<{ status: 'SUCCESS' | 'FAILED', txnId: string }> {
    // TODO: replace with HttpClient.post(...)
    return of(payload).pipe(
      delay(800),
      map(() => ({ status: 'SUCCESS', txnId: 'UPI' + Date.now() }))
    );
  }

  // Mock NEFT
  initiateNeftTxn(payload: {
    beneficiaryName: string; accountNumber: string; ifsc: string; amount: number; remarks?: string;
  }): Observable<{ status: 'SUCCESS' | 'FAILED', txnId: string }> {
    // TODO: replace with HttpClient.post(...)
    return of(payload).pipe(
      delay(800),
      map(() => ({ status: 'SUCCESS', txnId: 'NEFT' + Date.now() }))
    );
  }
}