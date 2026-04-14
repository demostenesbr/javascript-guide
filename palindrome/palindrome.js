function isPalindromeNumber(number) {
    if(!Number.isInteger(number) || number < 0) return false;

    let original = number;
    let reversed = 0;

    while (original > 0) {
        const digit = original % 10;
        reversed = reversed * 10 + digit;
        original = Math.floor(original / 10);
    }

    return number === reversed;
}

console.log(isPalindromeNumber(121)); // true
console.log(isPalindromeNumber(123)); // false
console.log(isPalindromeNumber(1221)); // true
console.log(isPalindromeNumber(-121)); // false
