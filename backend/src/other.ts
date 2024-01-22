import { getData, setData } from './dataStore';

export function clear() {
  const data = {
    users: [],
    groups: [],
    exercises: []
  }
  setData(data);
}