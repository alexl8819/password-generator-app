import webcrypto from '@acusti/webcrypto';
import dedupe from 'dedupe';

export const ALPHABET_LOWER = 'abcdefghijklmnopqrstuvwxyz';
export const ALPHABET_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const NUMBERS = '0123456789';
export const SYMBOLS = '!@?#$%^&*';

export function generateSequence (limit, charset) {
  if (!charset.length) {
    throw new Error('charset must be greater than zero');
  }
  
  const buf = new Uint32Array(limit);
  webcrypto.getRandomValues(buf);
  charset = shuffle(dedupe(charset.trim().split(''))).join('');
  
  return Array.from(buf).map((num) => charset[Math.floor((num / (0xffffffff + 1)) * (Math.floor(charset.length - 1) + 1))]).join('');
}

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
function shuffle (charset) {
  if (!Array.isArray(charset)) {
    throw new Error('charset is not an array');
  }
  
  let temp;
  
  for (let i = charset.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    temp = charset[i];
    charset[i] = charset[j];
    charset[j] = temp;
  }
  
  return charset;
}

// console.log(generateSequence(16, ALPHABET_LOWER + ALPHABET_UPPER + NUMBERS));
