import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  getAllRatings() {
    return ['AAAAAA', 'AAAAA', 'AAAA', 'AAA', 'AAE', 'AA', 'AE', 'A', 'B', 'C', 'D'];
  }
}
