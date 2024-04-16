import {
  ALPHABET_LOWER,
  ALPHABET_UPPER,
  NUMBERS,
  SYMBOLS,
  generateSequence 
} from './random';

export default function create (flags, length) {
  let seq = '';

  do {
    seq = generateSequence(length, `${flags.uppercase ? ALPHABET_UPPER : ''}${flags.lowercase ? ALPHABET_LOWER : ''}${flags.numbers ? NUMBERS : ''}${flags.symbols ? SYMBOLS : ''}`);
  } while (!validate(
    flags.lowercase, 
    flags.uppercase,
    flags.numbers,
    flags.symbols,
    seq
  ));
  
  return seq;
}

// Function validates at least 1 of the required characters are contained in the sequence
function validate (hasLower, hasUpper, hasNumbers, hasSymbols, sequence) {
  if (hasLower && hasUpper && hasNumbers && hasSymbols) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@?#$%^&*])[a-zA-Z0-9!@?#$%^&*]+$/.test(sequence);
  } else if (hasLower && hasUpper && hasNumbers) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]+$/.test(sequence);
  } else if (hasUpper && hasNumbers && hasSymbols) {
    return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@?#$%^&*])[A-Z0-9!@?#$%^&*]+$/.test(sequence);
  } else if (hasLower && hasNumbers && hasSymbols) {
    return /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@?#$%^&*])[a-z0-9!@?#$%^&*]+$/.test(sequence);
  } else if (hasLower && hasUpper && hasSymbols) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@?#$%^&*])[a-zA-Z!@?#$%^&*]+$/.test(sequence);
  } else if (hasLower && hasUpper) {
    return /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$/.test(sequence);
  } else if (hasLower && hasNumbers) {
    return /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]+$/.test(sequence);
  } else if (hasLower && hasSymbols) {
    return /^(?=.*[a-z])(?=.*[!@?#$%^&*])[a-z!@?#$%^&*]+$/.test(sequence);
  } else if (hasUpper && hasSymbols) {
    return /^(?=.*[A-Z])(?=.*[!@?#$%^&*])[A-Z!@?#$%^&*]+$/.test(sequence);
  } else if (hasNumbers && hasSymbols) {
    return /^(?=.*[0-9])(?=.*[!@?#$%^&*])[0-9!@?#$%^&*]+$/.test(sequence);
  } else if (hasUpper && hasNumbers) {
    return /^(?=.*[A-Z])(?=.*[0-9])[A-Z0-9]+$/.test(sequence);
  } else if (hasLower) {
    return /^[a-z]+$/.test(sequence);
  } else if (hasUpper) {
    return /^[A-Z]+$/.test(sequence);
  } else if (hasNumbers) {
    return /^[0-9]+$/.test(sequence);
  } else if (hasSymbols) {
    return /^[!@?#$%^&*]+$/.test(sequence);
  }
}
