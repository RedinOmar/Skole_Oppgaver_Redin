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

// funksjonen velger alle elevene fra tabellen "elev" og viser det på index.html
app.get('/SELECT', (req, res) => {
  connection.connect();
  connection.query('SELECT * FROM elev', (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
  connection.end();
});

/*app.get('/UPDATE', (req, res) => {
// funksjonen oppdaterer kolonnen "fornavn" og endrer veriden til et annet verdi
  connection.query('UPDATE elev SET Fornavn = "Ligma" WHERE ElevID = 1', (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
  connection.end();
});

app.get('/DELETE', (req, res) => {
// funksjonen sletter en elev fra tabellen "elev" i databasen via ElevID
  connection.query('DELETE FROM elev WHERE ElevID = 1', (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
  connection.end();
});*/


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}
