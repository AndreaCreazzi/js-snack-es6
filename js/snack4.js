// controllo js
console.log(`JS OK`);

// funzione per il math random
const getRandomNumbers = (min,max) => {
   const random = Math.floor(Math.random() * max + 1 - min) + min
   return random
};

// array di oggetti
const teams = [
    {
        name : `lazio`,
        fouls : 0,
        points : 0
    },
    {
        name : `roma`,
        fouls : 0,
        points : 0
    },
    {
        name : `inter`,
        fouls : 0,
        points : 0
    },
    {
        name : `milan`,
        fouls : 0,
        points : 0
    },
    {
        name : `juve`,
        fouls : 0,
        points : 0
    },
    {
        name : `napoli`,
        fouls : 0,
        points : 0
    },
];


// metodo forEach
for (const team of teams) {
    team.fouls = getRandomNumbers(1,40);
    team.points = getRandomNumbers(1,100)    
};

// metodo map
const teamsFouls = teams.map(({name , fouls}) => {
    return {
        name,
        fouls
    }
});

// stampa in console
console.log(teams);

console.log(teamsFouls);

