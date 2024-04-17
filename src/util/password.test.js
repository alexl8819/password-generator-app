import create from './password';

const flags = {
  lowercase: false,
  uppercase: false,
  numbers: false,
  symbols: false
};

describe('Password creation', () => {
  test('Should create a 10 character password with only lowercase characters', () => {
    expect(create(Object.assign(flags, { lowercase: true }), 10)).toMatch(/^[a-z]+$/);
  });
  test('Should create a 10 character password with only uppercase characters', () => {
    expect(create(Object.assign(flags, { lowercase: false, uppercase: true }), 10)).toMatch(/^[A-Z]+$/);
  });
  test('Should create a 10 character password with only numeric characters', () => {
    expect(create(Object.assign(flags, { uppercase: false, numbers: true }), 10)).toMatch(/^[0-9]+$/);
  });
  test('Should create a 10 character password with only symbol characters', () => {
    expect(create(Object.assign(flags, { numbers: false, symbols: true }), 10)).toMatch(/^[!@?#$%^&*]+$/);
  });
  test('Should create a 10 character password with lower and uppercase characters', () => {
    expect(create(Object.assign(flags, { symbols: false, lowercase: true, uppercase: true }), 10)).toMatch(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$/);
  });
  test('Should create a 10 character password with lower and numeric characters', () => {
    expect(create(Object.assign(flags, { uppercase: false, numbers: true }), 10)).toMatch(/^(?=.*[a-z])(?=.*[0-9])[a-z0-9]+$/);
  });
  test('Should create a 10 character password with lower and symbol characters', () => {
    expect(create(Object.assign(flags, { numbers: false, symbols: true }), 10)).toMatch(/^(?=.*[a-z])(?=.*[!@?#$%^&*])[a-z!@?#$%^&*]+$/);
  });
  test('Should create a 10 character password with uppercase and numeric characters', () => {
    expect(create(Object.assign(flags, { symbols: false, numbers: true, lowercase: false, uppercase: true }), 10)).toMatch(/^(?=.*[A-Z])(?=.*[0-9])[A-Z0-9]+$/);
  });
  test('Should create a 10 character password with uppercase and symbol characters', () => {
    expect(create(Object.assign(flags, { numbers: false, symbols: true }), 10)).toMatch(/^(?=.*[A-Z])(?=.*[!@?#$%^&*])[A-Z!@?#$%^&*]+$/);
  });
  test('Should create a 10 character password with numeric and symbol characters', () => {
    expect(create(Object.assign(flags, { numbers: true, uppercase: false }), 10)).toMatch(/^(?=.*[0-9])(?=.*[!@?#$%^&*])[0-9!@?#$%^&*]+$/);
  });
  test('Should create a 10 character password with numeric, symbol and lowercase characters', () => {
    expect(create(Object.assign(flags, { lowercase: true }), 10)).toMatch(/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@?#$%^&*])[a-z0-9!@?#$%^&*]+$/);
  });
  test('Should create a 10 character password with numeric, symbol and uppercase characters', () => {
    expect(create(Object.assign(flags, { lowercase: false, uppercase: true }), 10)).toMatch(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@?#$%^&*])[A-Z0-9!@?#$%^&*]+$/);
  });
  test('Should create a 10 character password with numeric, uppercase and lowercase characters', () => {
    expect(create(Object.assign(flags, { lowercase: true, symbols: false }), 10)).toMatch(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]+$/);
  });
  test('Should create a 10 character password with uppercase, lowercase and symbols characters', () => {
    expect(create(Object.assign(flags, { symbols: true, numbers: false }), 10)).toMatch(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@?#$%^&*])[a-zA-Z!@?#$%^&*]+$/);
  });
  test('Should create a 10 character password with charsets included', () => {
    expect(create(Object.assign(flags, { numbers: true }), 10)).toMatch(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@?#$%^&*])[a-zA-Z0-9!@?#$%^&*]+$/);
  });
});
