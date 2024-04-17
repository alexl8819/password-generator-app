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
  test('Should be uniform', () => {
    const COUNT = 100 * 1000;
    const LENGTH = 5;
    const ALPHABET = ALPHABET_UPPER;

    let chars = {};

    for (var i = 0; i < COUNT; i++) {
      const seq = generateSequence(LENGTH, ALPHABET);
      for (var j = 0; j < seq.length; j++) {
        const char = seq[j];
        if (!chars[char]) {
          chars[char] = 0;
        }
        chars[char] += 1;
      }
    }

    for (let k in chars) {
      const distribution = (chars[k] * ALPHABET.length) / (COUNT * LENGTH);
      expect(distribution).toBeCloseTo(1, 1);
    }
  });
});
