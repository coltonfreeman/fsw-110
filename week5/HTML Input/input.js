var form = document.myForm;
var selectMenu = document.getElementById("options");

form.addEventListener("submit", function() {
    var checkbox = document.querySelectorAll('input[type = "checkbox"]:checked');
    var teams = [];
    for (var i = 0; i < checkbox.length; i++) {
        teams.push(" " + checkbox[i].value);

    }
    alert(` 
    First Name: ${form.first_name.value}
    Last Name: ${form.last_name.value}
    Age: ${form.age.value}
    Has your team clinched a Playoff berth: ${form.question.value}
    What chance do you think your team will make it to the SuperBowl: ${selectMenu.options[selectMenu.selectedIndex].value}
    What other teams do you think will make it: ${teams}`);
});