// controllo js
console.log(`JS OK`);

// array di oggetti
const bikes = [
    {
        name : `merida`,
        weight : 4
    },
    {
        name : `Trek`,
        weight : 3
    },
    {
        name : `Specialized`,
        weight : 5
    },
    {
        name : `Cannondale`,
        weight : 2
    },
    {
        name : `bmx`,
        weight : 7
    },
];

console.log(bikes);

// metodo per il peso minore

const lessWeights = bikes.reduce((acc, less) => 
acc.weight < less.weight ? acc : less
,0);

console.log(lessWeights)