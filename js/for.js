// uzdirba per en 5000, kiek tures pajamu per metus?

const alga = 5000;
const menesiu = 12;
let pajamos = 0;

for (let i = 1; i <= menesiu; i++) {
    pajamos = alga * i;
    console.log(`${i}) ${pajamos} pinigu`);
}