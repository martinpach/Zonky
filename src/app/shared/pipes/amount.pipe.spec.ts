import { AmountPipe } from "./amount.pipe";

describe('AmountPipe', () => {
  const pipe = new AmountPipe();

  it('transforms "123" into "123,-"', () => {
    expect(pipe.transform(123)).toBe('123,-');
  })
});