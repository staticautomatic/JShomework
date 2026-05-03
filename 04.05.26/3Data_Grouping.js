function groupByGroup(students) {
    let mapObj = new Map();
    for(let obj of students) {
        if(!mapObj.has(obj.group)) {
            mapObj.set(obj.group, []);
        }
        
        mapObj.get(obj.group).push(obj.name);
    }

    return mapObj;
}

// Input
const students = [
  { name: 'John', group: 'A' },
  { name: 'Anna', group: 'B' },
  { name: 'Max', group: 'A' }
];

// Expected Output
console.log(groupByGroup(students));
// Map(2) {
//   'A' => ['John', 'Max'],
//   'B' => ['Anna']
// }