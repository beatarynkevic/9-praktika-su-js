function sum(a, b) {
    return a + b;
}

console.log(sum(2, 5));
console.log(sum(22, 55));
console.log(sum(-8, 17));

console.log('-----------------')

function pazymiuVidurkis(list) {
    let sum = 0;
    const kiekis = list.length;

    for (let i = 0; i < kiekis; i++) {
        const pazymys = list[i];
        sum += pazymys;
    }

    const vidurkis = sum / kiekis;

    if (kiekis === 0) {
        console.log('Neturi pazymiu..')
    } else {
        console.log(`Vidurkis: ${vidurkis}.`);
    }
}

pazymiuVidurkis([5, 8, 9, 7]);

console.log('-----------------')

function kvadratu(a) {
    return a * a;
}

console.log(kvadratu(2));
console.log(kvadratu(-5));

console.log('-----------------')

// function laipsnis(d, e) {
//     return d ** e;
// }

function laipsnis(d, e) {
    let rez = 1;

    for (let i = 0; i < e; i++) {
        rez *= d;
    }

    return rez;
}

console.log(laipsnis(2, 3));
console.log(laipsnis(2, 10));

console.log('-----------------')

function faktorialas(n) {
    let rez = 1;

    for (let i = 1; i <= n; i++) {
        rez *= i;
    }

    return rez;
}

const f0 = faktorialas(0);
const f1 = faktorialas(1);
const f2 = faktorialas(2);
const f3 = faktorialas(3);

console.log(f0, '->', 1);
console.log(f1, '->', 1);
console.log(f2, '->', 2);
console.log(f3, '->', 6);

console.log('-----------------')

// 1*2*4*6*8
function lyginisFaktorialas(n) {
    let rez = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            rez *= i;
        }
    }
    return rez;
}

const fl0 = lyginisFaktorialas(0);
const fl1 = lyginisFaktorialas(1);
const fl2 = lyginisFaktorialas(2);
const fl3 = lyginisFaktorialas(4);

console.log(fl0, '->', 1);
console.log(fl1, '->', 1);
console.log(fl2, '->', 2);
console.log(fl3, '->', 8);

// https://www.youtube.com/watch?v=SVU6jzjM7Mk&list=PLcLHBZr0jPAAvGmEpLIH5yN4w3NPI08du&index=38