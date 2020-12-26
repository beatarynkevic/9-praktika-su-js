function bigNum(list) {
    //input validation
    if (typeof list !== 'object') {
        return 'Netinkamas tipas';
    }
    const size = list.length;

    if (size === 0) {
        return 'Sarasas yra turscias';
    }

    //logic
    let biggest = -Infinity;

    for (let i = 0; i < size; i++) {
        const num = list[i];

        //saraso elemento validacija
        if (typeof num !== 'number') {
            continue;
        }

        //logika
        if (biggest < num) {
            biggest = num;
        }
    }

    //post logic validation
    if (biggestNumber === -Infinity) {
        return 'Sarase nerastas nei vienas normalus skaicius';
    }

    //return
    return biggest;
}

console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum('pomidoras'));
console.log(bigNum([]));
console.log(bigNum(true));
console.log(bigNum(585));
console.log(bigNum([-1, -2, -3, -4]));
console.log(bigNum(['labas', 5, 8, 7]));
console.log(bigNum([NaN, 5, 6]));
console.log(bigNum(['labas', true, NaN, [3, 5, 9]]));

// https://www.youtube.com/watch?v=l1KU9TYoTfo&list=PLcLHBZr0jPAAvGmEpLIH5yN4w3NPI08du&index=39