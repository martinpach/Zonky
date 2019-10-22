import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  constructor(private http: HttpClient) { }

  getAllRatings() {
    return ['AAAAAA', 'AAAAA', 'AAAA', 'AAA', 'AAE', 'AA', 'AE', 'A', 'B', 'C', 'D'];
  }
}
