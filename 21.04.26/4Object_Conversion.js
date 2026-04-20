let Account = {
    balance: 1000,
    currency: "AMD",
    [Symbol.toPrimitive](hint) {
        if(hint === 'number') {
            return this.balance;
        }
        if(hint === 'string') {
            return this.currency;
        }
        if(hint === 'default') {
            return this.balance;
        }        
    }
}

//Here the Account object is converted to a number due to the unary '+' 
//and its proporty is taken, which has a numeric value
console.log(+Account);

//The String function converts our object into a string, 
//so its proporty is taken, whose value is a string
console.log(String(Account));

//It's almost the same as with unary plus, 
//the object is converted to a number due to the '+' operation
console.log(Account + 500);
