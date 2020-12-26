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

function laipsnis(d, e) {
    return d ** e;
}

console.log(laipsnis(2, 3));
console.log(laipsnis(2, 10));