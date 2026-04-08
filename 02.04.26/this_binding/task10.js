function show() {
    return this.name;
}

const a = { name: "A" };
const b = { name: "B" };
const fn = show.bind(a);

console.log(fn.call(b)); /* it will print A, because 'bind' binds 'this' to the object and 
                            after that 'this' cannot be changed  */
