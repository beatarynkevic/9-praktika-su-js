function numLength(num) {
    //input validation
    if (typeof num !== 'number') {
        return 'Pateikta netinkamo tipo reiksme';
    }
    if (isNaN(num)) {
        return 'Pateikta netinkamo tipo reiksme';
    }
    if (num === Infinity) {
        return 'Pateikta netinkamo tipo reiksme';
    }
    //logic
    const textNum = '' + num;
    let size = textNum.length;

    //post logic validation
    if (num < 0) {
        size--;
    }
    if (num % 1 !== 0) {
        size--;
    }

    //return
    return size;
}
console.log(numLength(true));
console.log(numLength('asd'));
console.log(numLength(5));
console.log(numLength(781));
console.log(numLength(370656565665));
console.log(numLength(NaN));

console.log(numLength(-5), '->', 1);
console.log(numLength(2.2), '->', 2);
console.log(numLength(3.1415), '->', 5);
console.log(numLength(Infinity));
// console.log(numLength(878944874141414141588908778555555555555555484848488228393966959548484849484));
