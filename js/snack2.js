// controllo js
console.log(`JS OK`);

// array di oggetti

const students = [
    {
        id : 213,
        fullName : `Marco della Rovere`,
        vote : 78
    },
    {
        id : 110,
        fullName : `Paola Cortellessa`,
        vote : 96
    },
    {
        id : 250,
        fullName : `Andrea Mantegna`,
        vote : 48
    },
    {
        id : 145,
        fullName : `Gaia Borromini`,
        vote : 74
    },
    {
        id : 196,
        fullName : `Luigi Grimaldello`,
        vote : 68
    },
    {
        id : 102,
        fullName : `Piero della Francesca`,
        vote : 50
    },
    {
        id : 120,
        fullName : `Francesca da Polenta`,
        vote : 84
    },
];

// array voti
const studentsVote = students.filter(student => student.vote >= 70);

// array id
const studentsid = students.filter(student => student.vote >= 70 && student.id >= 120);

// array nomi
const studentsName = students.map(student => student.fullName.toUpperCase())

// stampa in console
console.log(studentsVote)
console.log(studentsid)
console.log(studentsName)