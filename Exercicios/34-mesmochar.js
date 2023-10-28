function compararStrings(string1, string2) {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    for(let i = 0; i < string1.length; i++) {
        if(string2.indexOf(string1[i]) === -1) {
            return false;
        }
    }

    for(let i = 0; i < string2.length; i++) {
        if(string1.indexOf(string2[i]) === -1) {
            return false;
        }
    }

    return true;
}

console.log(compararStrings('abc', 'cba')); // retorna true
console.log(compararStrings('abc', 'def')); // retorna false
