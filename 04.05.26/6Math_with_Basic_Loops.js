function intersection(set1, set2) {
    let setOfSameHob = new Set();
    for(let hob of set1) {
        if(set2.has(hob)) {
            setOfSameHob.add(hob);
        }
    }
    return setOfSameHob;
}

function difference(set1, set2) {
    let setOfDifHob = new Set();
    for(let hob of set1) {
        if(!set2.has(hob)) {
            setOfDifHob.add(hob);
        }
    }
    return setOfDifHob;
}

// Input
const setA = new Set(['reading', 'games', 'music']);
const setB = new Set(['games', 'sports']);

// Expected Output
console.log(intersection(setA, setB)); 
// Set(1) { 'games' }

console.log(difference(setA, setB)); 
// Set(2) { 'reading', 'music' }