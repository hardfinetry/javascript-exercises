const reverseString = function(string) {
    let stringLength = string.length;
    let reversed = "";
    for (let i = stringLength -1;
        i >= 0;
        i--) {
            reversed += string[i];
        }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
