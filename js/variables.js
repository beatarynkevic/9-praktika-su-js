// https://docs.google.com/document/d/1UnM5MzO7KPf-atlz3HXPJN8XlaN37nlUJ7fp6GwvIZ8/edit#heading=h.k8axyvjq1m02

const miestas = 'Vilniu';
const vardas = 'Ona';
const veiksmas = 'atvaziavo';

const amzius = 26;
const menuo = 12;
const diena = 21;

const miestai = ['Kaunas', 'Klaipeda', 'Moletai', 'Anyksciai'];
const pazymiai = [2, 3, 4, 5, 6];

const suma = amzius + menuo + diena;
console.log(suma);

const tekstas = `${vardas} ${veiksmas} i ${miestas}`;
console.log(tekstas);

let verte = 0;
verte += pazymiai[0];
verte -= pazymiai[1];
verte += pazymiai[2];
verte -= pazymiai[3];
verte += pazymiai[4];
console.log(verte);

// cieties, names
let allCities = '';
for (let i = 0; i < miestai.length; i++) {
    allCities += miestai[i] + ', ';
}

console.log(allCities);