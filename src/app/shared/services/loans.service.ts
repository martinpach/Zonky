import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoanAmount } from '../models/loan-amount.interface';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  constructor(private http: HttpClient) { }

  getAllLoanAmountsByRating(rating: string): Observable<LoanAmount[]> {
    return this.http.get<LoanAmount[]>(`/loans/marketplace?rating__eq=${rating}&fields=amount`);
  }
}
