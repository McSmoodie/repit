import { clear } from '../other';
import { userRegister, userFollow } from '../user';

const ERROR = { error: expect.any(String) };

let user1: number;
let user2: number;
beforeEach(() => {
  clear();
  const res1 = userRegister('kobe@mail.com', 'Kobe', 'BlackMamba');
  if ('userId' in res1) {
    user1 = res1.userId;
  }
  const res2 = userRegister('anthony@mail.com', 'Anthony', 'AntMan');
  if ('userId' in res2) {
    user2 = res2.userId;
  }
});

describe('Fail cases', () => {
  const random = (user1 + user2) / 2;
  test('Follower does not exist', () => {
    expect(userFollow(random, user2)).toStrictEqual(ERROR);
  });
  test('Followee does not exist', () => {
    expect(userFollow(user1, random)).toStrictEqual(ERROR);
  });
});

describe('Success cases', () => {
  test('Success', () => {
    expect(userFollow(user1 ,user2)).toStrictEqual({});
  });
});