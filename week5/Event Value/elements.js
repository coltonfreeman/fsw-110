var yourName = document.getElementById("yourName");
var yourBase = document.getElementById("yourBase");
var yourLocation = document.getElementById("yourLocation");

let myform = document.getElementById("myform");

myform.addEventListener("submit", function() {
    alert(` 
    Your Name: ${yourName.value}
    Base: ${yourBase.value}
    Location: ${yourLocation.value} `);
});