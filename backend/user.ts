import { getData, setData } from './dataStore';

interface UserId {
  userId: number;
}

export function userRegister(
  username: string,
  email: string,
  password: string
): UserId {
  const store = getData();
  const id = Date.now()
  store.users.push({
    userId: id,
    username: username,
    email: email,
    password: password, 
    following: []
  });
  return {userId: id};
}