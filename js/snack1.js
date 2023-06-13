// controllo js
console.log(`JS OK`)

// array invitati
const vipGuests = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

// nuovo array oggetti
const vipDescription = vipGuests.map((guest , index) => {
    return {
        tableName : `Tavolo vip`,
        vipName : guest,
        numberSeat : index + 1,
    }
})

// stampa della lista 
console.log(vipDescription)