import { LoansService } from "./loans.service";
import { LoanAmount } from '../models/loan-amount.interface';
import { of } from 'rxjs';

describe('LoansService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let loansService: LoansService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    loansService = new LoansService(<any>httpClientSpy);
  });

  it('#getAllLoanAmountsByRating should return loan amounts returned from 1 API call', () => {
    const loanAmounts: LoanAmount[] = [
      {
        additionallyInsured: false,
        amount: 7300,
        insuredInFuture: true,
        published: true,
        topped: false
      }
    ];

    httpClientSpy.get.and.returnValues(of(loanAmounts));

    loansService.getAllLoanAmountsByRating('A').subscribe(
      amounts => expect(amounts).toEqual(loanAmounts),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});