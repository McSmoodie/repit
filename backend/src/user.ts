import { getData, setData } from './dataStore';
import { isEmailUnique } from './helpers';

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
  if (!isEmailUnique(email)) {
    return { error: 'Email is already in use!'};
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