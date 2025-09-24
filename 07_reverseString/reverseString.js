const reverseString = function(string) {
    let aux = ""
    let aux_leng = string.length-1
    for (let index = aux_leng; index >= 0; index--) {
        aux = aux.concat(string[index]);
        
    }
    return aux;
};

// Do not edit below this line
module.exports = reverseString;
