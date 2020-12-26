function multiply(a, b) {
    //input validation
    if (typeof a !== 'number') {
        console.error('ERROR: pirmoji reiksme ne skaiciaus tipo');
        return false;
    }
    if (isNaN(a)) {
        console.error('ERROR: pirmoji reiksme nenormalus skaicius');
        return false;
    }
    if (typeof b !== 'number') {
        console.error('ERROR: antroji reiksme ne skaiciaus tipo');
        return false;
    }
    if (isNaN(b)) {
        console.error('ERROR: antroji reiksme nenormalus skaicius');
        return false;
    }

    //function logic
    const rez = a * b;

    //function result
    return rez;
}

console.log(multiply(2, 2));
console.log(multiply(2, -5));
console.log(multiply(2, 'labas'));
console.log(multiply('labas', true));
console.log(multiply(2, false));
console.log(multiply(true, false));
console.log(multiply(45, [5, 6, 7]));
console.log(multiply(45, null));

console.log(multiply(45, NaN));
console.log(multiply(45, Infinity));

// https://www.youtube.com/watch?v=SVU6jzjM7Mk&list=PLcLHBZr0jPAAvGmEpLIH5yN4w3NPI08du&index=38