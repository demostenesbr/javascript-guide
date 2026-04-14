function isPalindromeNumber(number) {
    // Garante que ele é um número inteiro
    if(!Number.isInteger(number)) return false;

    const str = String(number);
    const reversed = str.split('').reverse().join('');

    return str === reversed;
}

console.log(isPalindromeNumber(121)); // true
console.log(isPalindromeNumber(123)); // false
console.log(isPalindromeNumber(1221)); // true
console.log(isPalindromeNumber(-121)); // false

