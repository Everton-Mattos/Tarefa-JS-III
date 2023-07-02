// Converte uma string para um número inteiro
function convertToInt(string) {
    // Sua implementação aqui
    const number = parseInt(string);
    return number;    
}

// Converte um número inteiro para uma string
function convertToString(number) {
    // Sua implementação aqui
    let numberString = number.toString();
    return numberString;
}

// Converte um valor para um booleano
function convertToBoolean(value) {
    // Sua implementação aqui
    if (value === 0) {
        return false;
    } else if (value === "true") {
        return true;
    } else {
        return Boolean(value);
    }
}

module.exports = { convertToInt, convertToString, convertToBoolean };