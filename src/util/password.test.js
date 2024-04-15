import create from './password';

const flags = {
  includesLowercase: false,
  includesUppercase: false,
  includesNumbers: false,
  includesSymbols: false
};

describe('Password creation', () => {
  test('Should create a password with only lowercase characters', () => {
    expect(create(Object.assign(flags, { includesLowercase: true }), 10)).toMatch(/^[a-z]+$/);
  });
});
