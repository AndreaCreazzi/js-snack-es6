# SNACK 1

Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli
invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo ("Tavolo
Vip") e la lista degli invitati in ordine di posto:

[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina
Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney',
'Maneskin']

Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti
in cui ogni ospite sia un oggetto javascript che ha come attributi:

nome del tavolo, nome dell'ospite e posto occupato.

Generiamo e stampiamo in console la lista per i segnaposto.

# SNACK 2

Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e
somma totale dei loro voti di esame...

Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di
operazioni.

1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti
   superiore a 70

2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti
   superiore a 70 e id superiore a 120

3. dobbiamo stampare le targhe col nome degli studenti: creare una lista
   contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO
   DELLA ROVERE);

Questo è l'elenco degli studenti:

1. Id Name Grades
2. 213 Marco della Rovere 78
3. 110 Paola Cortellessa 96
4. 250 Andrea Mantegna 48
5. 145 Gaia Borromini 74
6. 196 Luigi Grimaldello 68
7. 102 Piero della Francesca 50
8. 120 Francesca da Polenta 84

## SNACK 3

Creare un array di oggetti:

Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e
weight.

Stampare in console la bici con peso minore utilizzando il destructuring

## SNACK 4

Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse
proprietà: nome, punti fatti, falli subiti.

nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli
subiti.

Infine, usando il destructuring, creiamo un nuovo array i cui elementi
contengono solo nomi e falli subiti e stampiamo tutto in console.

## BONUS

Stampare in pagina oltre che in console!

<hr>

## Scaletta

### SNACK 1

1. Creo un array di invitati
2. Con il vecchio array preparo un metodo per avere un altro array con gli
   oggetti
3. Dentro quel array preparo nome tavolo , nome invitato , posto a sedere
4. stampo in console

### SNACK 2

1. Creo un array di oggetti (id,studenti,voto)
2. Uso un metodo per l'array precedente creando un nuovo array che contenga gli
   studenti che hanno un voto superiore a 70
3. Uso un metodo per l'array precedente creando un nuovo array che contenga gli
   studenti che hanno un voto superiore a 70 e un id superiore a 120
4. Uso un metodo per l'array precedente creando un nuovo array che contenga i
   nomi degli studenti tutti in maiuscolo.

### SNACK 3

1. Creo un array di oggetti
2. Dentro questo array inserisco dei valori come:

- Nome bicicletta
- Peso effettivo

3. Creo un metodo che gira nell'array di oggetti per determinare quale pesa
   meno.
