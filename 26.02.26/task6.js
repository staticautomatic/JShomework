let numList = [3, 6, 9, 12];

for(let ind = 0; ind < numList.length; ind++) {
    if(numList[ind] === 9) {
        console.log("The index of the number 9 in array is", ind);
        break;
    }
}