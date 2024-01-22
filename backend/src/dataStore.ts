export interface User {
  userId: number;
  email: string;
  password: string;
  username: string;
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
  return data;
}

// Use set(newData) to pass in the entire data object, with modifications made
function setData(newData: DataStore) {
  data = newData;
}

export { getData, setData };

