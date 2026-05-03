function filterSpam(text, badWordsArray) {
    let badWordsSet = new Set(badWordsArray);
    let arrOfWords = text.split(' ');

    arrOfWords = arrOfWords.map(word => {
        return badWordsSet.has(word) ? '***' : word;
    });

    arrOfWords = arrOfWords.join(' ');
    return arrOfWords;
}

// Input
const text = "buy our new cheap product";
const badWords = ["cheap", "buy"];

// Expected Output
console.log(filterSpam(text, badWords));
// "*** our new *** product