const wordList = ['labas', 'rytas', 'Lietuva'];

/*
Einame per zodziu sarasa
    Pasiimu viena konkretu zodi
    Pasiruosiu kintamaji naujam atvirkstiniam zodziui
    Einu per to zodzio raides
        Pasiimu to zodzio raide
        Pasidedu is priekio atvirkstiniam zodziui
    Atspausdinu atvirkstini zodi
*/

for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];
    let backward = '';
    for (let r = 0; r < word.length; r++) {
        const letter = word[r];
        backward = letter + backward;
    }
    console.log(backward);
}

// https://www.youtube.com/watch?v=oqlZh_3qDh8&list=PLcLHBZr0jPAAvGmEpLIH5yN4w3NPI08du&index=33