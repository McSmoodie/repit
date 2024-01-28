import { getData, setData } from './dataStore';
import { emailExists, usernameExists, idExists } from './helpers';

interface UserId {
  userId: number;
}

interface Error {
  error: string;
}

export function userRegister(
  email: string,
  password: string,
  username: string
): UserId | Error {
  if (emailExists(email)) {
    return { error: 'Email is already in use!'};
  }
  if (usernameExists(username)) {
    return { error: 'Username is already in use!'};
  }
  const store = getData();
  const id = Date.now()
  store.users.push({
    userId: id,
    username: username,
    email: email,
    password: password, 
    following: []
  });
  setData(store);
  return { userId: id };
}

export function userFollow(
  src: number,
  dst: number
) {
  if (!idExists(src) || !idExists(dst)) {
    return { error: 'User does not exist!'};
  }
  const store = getData();
  for (const user of store.users) {
    if (user.userId === src) {
      user.following.push(dst);
    }
  }
  return {};
}