function fetchFromForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username + password);
};

async function logJSONData(username, password) {
    const response = await fetch("http://localhost:3000/");
    const jsonData = await response.json();
    console.log(jsonData);
};