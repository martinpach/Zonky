import { RatingsService } from "./ratings.service";

describe('RatingsService', () => {
  let service: RatingsService;
  const ratings = ['AAAAAA', 'AAAAA', 'AAAA', 'AAA', 'AAE', 'AA', 'AE', 'A', 'B', 'C', 'D'];
  beforeEach(() => service = new RatingsService());

  it('#getAllRatings should return all possible ratings', () => {
    expect(service.getAllRatings()).toEqual(ratings);
  });
})