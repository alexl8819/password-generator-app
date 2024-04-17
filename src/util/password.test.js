import create from './password';

const flags = {
  lowercase: false,
  uppercase: false,
  numbers: false,
  symbols: false
};

describe('Password creation', () => {
  test('Should create a password with only lowercase characters', () => {
    expect(create(Object.assign(flags, { lowercase: true }), 10)).toMatch(/^[a-z]+$/);
  });
  test('Should create a password with only uppercase characters', () => {
    expect(create(Object.assign(flags, { lowercase: false, uppercase: true }), 10)).toMatch(/^[A-Z]+$/);
  });
  test('Should create a password with only numeric characters', () => {
    expect(create(Object.assign(flags, { uppercase: false, numbers: true }), 10)).toMatch(/^[0-9]+$/);
  });
  test('Should create a password with only symbol characters', () => {
    expect(create(Object.assign(flags, { numbers: false, symbols: true }), 10)).toMatch(/^[!@?#$%^&*]+$/);
  });
  /*test('Should create a password with only uppercase characters', () => {
    expect(create(Object.assign(flags, { lowercase: false, uppercase: true }), 10)).toMatch(/^[A-Z]+$/);
  });
  test('Should create a password with only uppercase characters', () => {
    expect(create(Object.assign(flags, { lowercase: false, uppercase: true }), 10)).toMatch(/^[A-Z]+$/);
  });
  test('Should create a password with only uppercase characters', () => {
    expect(create(Object.assign(flags, { lowercase: false, uppercase: true }), 10)).toMatch(/^[A-Z]+$/);
  });*/
});
