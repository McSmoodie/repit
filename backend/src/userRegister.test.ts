import { clear } from './other';
import { userRegister } from './user';
import { getData, setData } from './dataStore';

const ERROR = { error: expect.any(String) };
const USERID = { userId: expect.any(Number) };

beforeEach(() => {
  clear();
});

describe('Fail cases', () => {
  test('User with email already exists', () => {
    userRegister('test@mail.com', 'Kobe', 'BlackMamba');
    expect(userRegister('test@mail.com', 'Jokic', 'Joker')).toStrictEqual(ERROR);
  });
});

describe('Success cases', () => {
  test('Create user', () => {
    expect(userRegister('test@mail.com', 'Kobe', 'BlackMamba')).toStrictEqual(USERID);
  });
});