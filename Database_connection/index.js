var mysql = require('mysql');

function ConnectDatabase(sql) {

  console.log(sql);

  // Parameter
  // Konstant

    const connection = mysql.createConnection({ // Const er en connection.
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'Dromtorp',
        port: 3306
      });

      connection.connect(

        (err) => {

          if (err) {
            console.error('error connecting: ' + err.stack);
            return;
          }

          console.log('connected as id ' + connection.threadId);

        }

      );


      connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        //console.log('The solution is: ', results);

      });

      connection.end();
}

function updateSql() {
    const updateSQL = "UPDATE TABLE elev set Hobby = 'Basket' where elev='Hanna'";
    ConnectDatabase(updateSQL);
}

function insertSql(sql) {
  const updateSQL = "INSERT INTO elev () VALUES ()";
    ConnectDatabase(updateSQL);
}

function deleteTable(sql) {

}

updateSql();

/*con.query("UPDATE `elev` SET `Fornavn`= 'Redin', `Etternavn`= 'Omar', `Klasse` = 2, `Hobby` = 'Gaming', `Kjønn` = 'G', `datamaskin` = 1 WHERE ElevID = 1");*/
/*con.query("INSERT INTO `elev` (`Fornavn`, `Etternavn`, `Klasse`, `Hobby`, `Kjønn`, `datamaskin`) VALUES ('Joakim', 'Husefest', 3, 'Progamering' , 'G', 3)");*/
/*con.query("DELETE FROM `elev` WHERE ElevID = 11");*/
