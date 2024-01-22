import { getData, setData } from './dataStore';

export function emailExists(
  email: string
) {
  const store = getData();
  for (const user of store.users) {
    if (email === user.email) {
      return false;
    }
  }
  return true;
}

export function usernameExists(
  username: string
) {
  const store = getData();
  for (const user of store.users) {
    if (username === user.username) {
      return false;
    }
  }
  return true;
}

export function idExists(
  id: number
) {
  const store = getData();
  for (const user of store.users) {
    if (user.userId === id) {
      return true;
    }
  }
  return false;
}

export function getId(
  username: string
 ) {
  const store = getData();
  for (const user of store.users) {
    if (user.username === username) {
      return user.userId;
    }
  }
 }