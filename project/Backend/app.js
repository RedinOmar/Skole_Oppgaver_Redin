const express = require('express')
const app = express()
const port = 3000
const con = require('./db_Connection.js');
var SimpleCrypto = require("simple-crypto-js").default
var cors = require('cors')

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
app.use(cors())

app.get('/', (req, res) => {
  
  con.query("select * FROM users", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});


app.get('/', (req, res) => {

    var username = req.params.username;
    var password = req.params.password;

    console.log(username+' on server');
    console.log(password+' on server');

    var sql ="select * FROM users WHERE username="+username;
  
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      res.send(result);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

/*app.get('/updaterow/:fornavn', (req, res) => {

  var fornavn = req.params.fornavn;
  var sql = "UPDATE elev set hobby = 'Håndball' WHERE ElevID="+fornavn;
  
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });

});

app.get('/deleterow/:fornavn', (req, res) => {

  var elevid = req.params.fornavn;
  var sql = "DELETE FROM elev WHERE ElevID="+elevid;

  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });

});

app.get('/insertrow/:elevid/:fornavn/:etternavn/:programfag/:hobby/:kjonn/:datamaskin', (req, res) => {

  var elevid = req.params;
  console.log(elevid);

  con.query('select * from elev', function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });

}); */