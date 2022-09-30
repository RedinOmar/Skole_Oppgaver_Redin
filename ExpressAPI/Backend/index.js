const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
const mysql = require('mysql');

app.use(cors())

// Kobler til databasen
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dromtorp'
})


/*app.get('/', (req, res) => {
  connection.connect();
// funksjonen lager en rad med colonne navnenen.
  connection.query('INSERT INTO elev (Fornavn, Etternavn, Klasse, Hobby, Kjønn, datamaskin) Values ("Redin", "Omar", 2, "Gaming", "G", 3)', (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
  connection.end();
});*/

/*app.get('/', (req, res) => {
  connection.connect();
// funksjonen oppdaterer kolonnen "fornavn" og endrer veriden til et annet verdi.
  connection.query('UPDATE elev SET Fornavn = "ok" WHERE Fornavn = "Redin"', (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
  connection.end();
});*/

app.get('/', (req, res) => {
  connection.connect();
// Funksjonen henter ut alle collonenen, inkludert radene og viser det på nettsiden.
  connection.query('SELECT * FROM elev', (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
  connection.end();
});

/*app.get('/', (req, res) => {
// Funksjonen sletter en rad fra databasen.
  connection.query('DELETE FROM elev WHERE Etternavn = "Omar"', (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
  connection.end();
});*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
