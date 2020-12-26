// uzdirba per en 5000, kiek tures pajamu per metus?

const alga = 5000;
const menesiu = 12;
let pajamos = 0;

for (let i = 1; i <= menesiu; i++) {
    pajamos += alga;
    // pajamos = alga * i;
    console.log(`${i}) ${pajamos} pinigu`);
}

// parasyti skaicius nuo 8 iki 4
;
for (let i = 8; i >= 4; i--) {
    console.log(i);
}

// https://www.youtube.com/watch?v=nXIv2Cs7ugc&list=PLcLHBZr0jPAAvGmEpLIH5yN4w3NPI08du&index=30
console.clear();
// isvardinti ciferblato skaicius nuo duotos valandos
const valanda = 3;
const max = 12;
for (let i = valanda; i <= max; i++) {
    console.log(i);
}

// Duotas miestu sarasas, isvardinti kiekviena aplankyta miesta

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda'];

for (let i = 0; i < miestai.length; i++) {
    console.log(miestai[i]);
}

// isvardinti saraso narius is galo

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

// for (let i = abc.length - 1; i >= 0; i--) {
//     console.log(abc[i]);
// } 
let a = '';
const step = 2;
for (let i = 1; i < abc.length; i = i + step) {
    a += abc[i];
}

console.log(a);