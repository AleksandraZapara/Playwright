function removeSpaces(text){
    return text.replace(/^\s+|\s+$/g, ""); 
}

console.log(removeSpaces('   textWithSpaces   '));
console.log(removeSpaces('   more text with spaces   '));
