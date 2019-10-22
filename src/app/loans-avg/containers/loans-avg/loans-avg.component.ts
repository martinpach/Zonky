import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter, map, catchError, tap } from 'rxjs/operators';
import { LoansService } from '../../../shared/services/loans.service';
import { RatingsService } from '../../../shared/services/ratings.service';

@Component({
  selector: 'app-loans-avg',
  templateUrl: './loans-avg.component.html',
  styleUrls: ['./loans-avg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoansAvgComponent implements OnInit {

  ratings: string[];
  loanAmountsAvg$: Observable<number>;
  avgLoading = false;

  constructor(private loansService: LoansService, private ratingsService: RatingsService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.ratings = this.ratingsService.getAllRatings();
  }

  onRatingChange(rating: string) {
    this.avgLoading = true;
    this.loanAmountsAvg$ = this.loansService.getAllLoanAmountsByRating(rating).pipe(
      filter(amounts => amounts && amounts.length > 0),
      map(amounts => amounts.reduce((acc, curr) => acc += curr.amount, 0) / amounts.length),
      catchError(e => {
        this.snackBar.open('Something went wrong! Try again later.', null, {
          duration: 3000
        });
        return of(null);
      }),
      tap(() => this.avgLoading = false)
    );
  }

}
