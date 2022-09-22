function connectDatabase(createConnection) {
    var mysql = require('mysql');
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
  module.exports = conn;
};

const express = require('express')
const app = express()
const port = 3000

/*app.get('/elev', (req, res) => {
  // serveren skal respondere til databasen
  connectDatabase("select * from elev");
  console.log(mysql);
  res.send(elev)
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
