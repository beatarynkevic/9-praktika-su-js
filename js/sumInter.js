let suma = 0;
const nuo = 0;
const iki = 100;

if (nuo < iki) {
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
} else {
    for (let i = iki; i <= nuo; i++) {
        suma += i;
    }
}

console.log(`Skaiciu intervale tarp ${nuo} ir ${iki} suma yra ${suma}`);