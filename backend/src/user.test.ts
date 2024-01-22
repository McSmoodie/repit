import { clear } from './other';
import { userRegister } from './user';
import { getData, setData } from './dataStore';

beforeAll(() => {
  clear();
})

test('First test!!!', () => {
  let store = getData();
  expect(store).toStrictEqual({
    users: [],
    groups: [],
    exercises: []
  });
  const id = userRegister('test', 'adam', 'smith').userId;
  store = getData();
  expect(store.users).toStrictEqual([
    {
    userId: id,
    username: 'test',
    email: 'adam',
    password: 'smith',
    following: []
    }
  ])
})