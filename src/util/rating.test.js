import { 
  toArray, 
  calculateNumeric, 
  Rating 
} from './rating';

describe('Rating', () => {
  test('Should take a set of char included fields and calculate a symbolic rating value', () => {
    expect(calculateNumeric(new Set(['l', 'u', 'n']))).toEqual(Rating.MEDIUM);
  });
  test('Should take a rating and return an array representation', () => {
    expect(Array.isArray(toArray(Rating.WEAK))).toEqual(true);
  });
});
