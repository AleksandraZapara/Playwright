function getLetterCount(text) {
    let count = {};
    for (let symb of text.toLowerCase()) {
        if (/[a-za]/.test(symb)) {
            count[symb] = (count[symb] || 0) + 1;
        }
    }
    return count;
}

console.log(getLetterCount("banana")); 
// { b: 1, a: 3, n: 2 }
console.log(getLetterCount("The short text")); 
// { t: 4, h: 2, e: 2, s: 1, o: 1, r: 1, x: 1 }
