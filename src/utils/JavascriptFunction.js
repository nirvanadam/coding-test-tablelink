// 1. find min age, show the name
export function getMinPerson(data) {
  return data.reduce((min, person) => (person.age < min.age ? person : min));
}

// 2. find max age, show the name
export function getMaxPerson(data) {
  return data.reduce((max, person) => (person.age > max.age ? person : max));
}

// 3. sort by min age
export function sortByMinAge(data) {
  return [...data].sort((a, b) => a.age - b.age);
}

// 4. sort by max age
export function sortByMaxAge(data) {
  return [...data].sort((a, b) => b.age - a.age);
}
