import { getData, setData } from './dataStore';
import { emailExists, usernameExists, idExists, getId } from './helpers';

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
  src: string,
  dst: string
) {
  if (!usernameExists(src) || !usernameExists(dst)) {
    return { error: 'Username does not exist!'};
  }
  const dstId = getId(dst);
  const store = getData();
  for (const user of store.users) {
    if (user.username === src) {
      user.following.push(dstId);
    }
  }
}