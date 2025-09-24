const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let aux = ""
    for (let index = 0; index < num; index++) {
        aux = aux.concat(string)
    }
    return aux;
};

// Do not edit below this line
module.exports = repeatString;
