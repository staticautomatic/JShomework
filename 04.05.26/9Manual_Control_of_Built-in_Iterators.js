// Input
const mixedMap = new Map([
  [1, 'num'],
  ['str', 'text'],
  [true, false]
]);

let iterMap = mixedMap.entries();

while(true) {
    let res = iterMap.next();
    if(res.done) break;

    let arr = res.value;
    if(typeof arr[1] === 'string') {
        console.log(arr);
    }
}

// Expected Output in console
// [1, 'num']
// ['str', 'text']