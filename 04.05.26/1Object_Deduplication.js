function getUniqueUsers(users) {
    let arrOfUsers = users.map(user => [user.id, user]);
    let mapOfUsers = [...new Map(arrOfUsers).values()];
    return mapOfUsers;
}

// Input
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Anna' },
  { id: 1, name: 'John' } // duplicate
];

// Expected Output
console.log(getUniqueUsers(users));
// [ { id: 1, name: 'John' }, { id: 2, name: 'Anna' } ]