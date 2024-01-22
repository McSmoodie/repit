import { getData, setData } from './dataStore';

export function isEmailUnique(
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