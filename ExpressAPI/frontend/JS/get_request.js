function fetchData() {

  fetch('http://localhost:3000/')
  .then((response) => response.json())
  .then((data) => console.log(data));
}

function generateTable(data) {
  const table = document.getElementById('tablebody');
  var row = table.insertRow(0);

  var cell1 = row.insertRow(0);
  var cell2 = row.insertRow(1);
  var cell3 = row.insertRow(2);
  var cell4 = row.insertRow(3);
  var cell5 = row.insertRow(4);
  var cell6 = row.insertRow(5);
  var cell7 = row.insertRow(6);

  cell1.innerHTML = 'ElevID';
  cell2.innerHTML = 'Fornavn';
  cell3.innerHTML = 'Etternavn';
  cell4.innerHTML = 'Klasse';
  cell5.innerHTML = 'Hobby';
  cell6.innerHTML = 'Kjønn';
  cell7.innerHTML = 'datamaskin';

  data.forEach((element, index) => {
    var row = table.insertRow(index+1);

    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6 = row.insertCell(5)
    var cell7 = row.insertCell(6)

    cell1.innerHTML = element.ElevID
    cell1.innerHTML = element.Fornavn
    cell1.innerHTML = element.Etternavn
    cell1.innerHTML = element.Klasse
    cell1.innerHTML = element.Hobby
    cell1.innerHTML = element.Kjønn
    cell1.innerHTML = element.datamaskin
  });
}

function updateRow() {

  var input_elevid = document.getElementById("hvilket_elevid_update").value;
  var input_hobby = document.getElementById("hvilken_hobby").value;

  var url = 'http://localhost:3000/'+input_elevid;

  fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
}

function deleteRow() {
  var input_elevid = document.getElementById('hvilken_elev').value;

  var url = 'http://localhost:3000/'+input_elevid;

  fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
}

function insertRow() {
  var input_elevid = document.getElementById("elevid_insert").value;
  var input_fornavn = document.getElementById("fornavn_insert").value;
  var input_etternavn = document.getElementById("etternavn_insert").value;
  var input_klasse = document.getElementById("klasse_insert").value;
  var input_hobby = document.getElementById("hobby_insert").value;
  var input_kjønn = document.getElementById("kjønn_insert").value;
  var input_datamaskin = document.getElementById("datamaskin_insert").value;
}
