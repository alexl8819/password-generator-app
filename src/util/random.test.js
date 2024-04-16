import { 
  generateSequence, 
  ALPHABET_LOWER, 
  ALPHABET_UPPER, 
  NUMBERS, 
  SYMBOLS 
} from './random';

describe('Random sequence generator', () => {
  test('Should generate a 13 character sequence based on a limit and custom alphabet', () => {
    expect(generateSequence(13, ALPHABET_LOWER + ALPHABET_UPPER + NUMBERS + SYMBOLS)).toHaveLength(13);
  });
});
