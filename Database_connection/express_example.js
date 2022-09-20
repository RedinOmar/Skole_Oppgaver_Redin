const express = require('express')
const app = express()
const port = 3306
var mysql = require('mysql');

app.get('/', (req, res) => {
  // serveren skal respondere til databasen
  connectDatabase("select * from elev");
  console.log(mysql);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function connectDatabase(createConnection) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Dromtorp"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  module.exports = con;
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
