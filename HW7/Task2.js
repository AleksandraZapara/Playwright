function findCapitalWords(sentence) {
    return sentence.match(/\b[A-ZА][a-zа]*\b/g) || [];
}

console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog"));
console.log(findCapitalWords("no capital letter here"));
