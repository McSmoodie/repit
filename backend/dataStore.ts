import fs from 'fs';
const DB_PATH = './dataStore.json';

export interface User {
  userId: number;
  username: string;
  email: string;
  password: string;
  following: number[];
}

export interface Exercise {
  id: number;
  name: string;
}

export interface MuscleGroups {
  chest: Exercise[];
  shoulders: Exercise[];
  triceps: Exercise[];
  back: Exercise[];
  biceps: Exercise[];
  forearms: Exercise[];
  quads: Exercise[];
  glutes: Exercise[];
  hamstrings: Exercise[];
  calves: Exercise[];
  abs: Exercise[];
}

export interface DataStore {
  users: User[];
  groups: MuscleGroups[];
  exercises: Exercise[];
}

let data: DataStore = {
  users: [],
  groups: [],
  exercises: []
}

// Use get() to access the data
function getData(): DataStore {
  if (fs.existsSync(DB_PATH)) {
    const dbstr = fs.readFileSync(DB_PATH);
    data = JSON.parse(String(dbstr));
  }
  return data;
}

// Use set(newData) to pass in the entire data object, with modifications made
function setData(newData: DataStore) {
  const jsonstr = JSON.stringify(newData, null, 2);
  fs.writeFileSync(DB_PATH, jsonstr);
}

export { getData, setData };