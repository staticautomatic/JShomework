function mapToJson(map) { 
    let jsonStr = JSON.stringify([...map]);
    return jsonStr;
    //return JSON.stringify(Object.fromEntries(map));
}

function jsonToMap(jsonStr) {
    let jsonToStr = JSON.parse(jsonStr);
    let jsonMap = new Map(jsonToStr);
    //let jsonMap = new Map(Object.entries(jsonToStr));
    return jsonMap;
}

// Input
const myMap = new Map([['a', 1], ['b', 2]]);

// Expected Output
const jsonStr = mapToJson(myMap);
console.log(jsonStr); 
// '{"a":1,"b":2}' OR '[["a",1],["b",2]]' (depends on implementation)

const restoredMap = jsonToMap(jsonStr);
console.log(restoredMap); 
// Map(2) { 'a' => 1, 'b' => 2 }