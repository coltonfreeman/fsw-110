var form = document.myForm;
var selectMenu = document.getElementById("options");

form.addEventListener("submit", function() {
    var checkbox = document.querySelectorAll('input[type = "checkbox"]:checked');
    var languages = [];
    for (var i = 0; i < checkbox.length; i++) {
        languages.push(" " + checkbox[i].value);

    }
    alert(` 
    First Name: ${form.first_name.value}
    Last Name: ${form.last_name.value}
    Age: ${form.age.value}
    Is this your first JavaScript course: ${form.question.value}
    How likely to reccomend: ${selectMenu.options[selectMenu.selectedIndex].value}
    Other Languages: ${languages}`);
});