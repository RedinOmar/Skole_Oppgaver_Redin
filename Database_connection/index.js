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

/*con.query("UPDATE `elev` SET `Fornavn`= 'Redin', `Etternavn`= 'Omar', `Klasse` = 2, `Hobby` = 'Gaming', `Kjønn` = 'G', `datamaskin` = 1 WHERE ElevID = 1");*/
/*con.query("INSERT INTO `elev` (`Fornavn`, `Etternavn`, `Klasse`, `Hobby`, `Kjønn`, `datamaskin`) VALUES ('Joakim', 'Husefest', 3, 'Progamering' , 'G', 3)");*/
/*con.query("DELETE FROM `elev` WHERE ElevID = 11");*/
