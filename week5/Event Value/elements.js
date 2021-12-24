var yourName = document.getElementById("yourName");
var base = document.getElementById("base");
var location = document.getElementById("location");

let form = document.getElementById("myForm");

form.addEventListener("submit", function() {
    alert(`Your Name: ${yourName.value} \nBase: ${base.value} \nLocation: ${location.value}`);
    yourName.value = "";
    base.value = "";
    location.value = "";
});