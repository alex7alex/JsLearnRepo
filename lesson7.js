// Функція отримує на вході 2 числа. Якщо числа парні - повертає добуток чисел, якщо непарні - їх суму, інакше - повернути непарне число.
// - 6, 8 => 6 * 8

function multiplicationTwoDigits(a,b) {
    return a * b;
}
function additionTwoDigits(a,b) {
    return a + b;
}
function digitOperations(a,b) {
    if (a % 2 === 0 && b % 2 === 0) {
       return multiplicationTwoDigits (a,b);
    }
    else if (a % 2 !== 0 && b % 2 !== 0) {
        return additionTwoDigits (a,b);
    }
    else return (a % 2 === 0) ? b : a;
}
