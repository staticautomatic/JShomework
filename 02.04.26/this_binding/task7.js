function show() {
    return this.name;
}
const obj = { name: "Test" };
const bound = show.bind(obj);
// ❗ What will this return? 
// it will return a new function with 'this' fixed to 'obj'
console.log(bound.call({ name: "Wrong" }));