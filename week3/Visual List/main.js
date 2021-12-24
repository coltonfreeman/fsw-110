

let h1 = document.createElement("h1");
h1.textContent = "Hello World!";
document.body.appendChild(h1);


for (let i = 0; i < 10; i++) {
    let h1 = document.createElement("h1");
    h1.textContent = "Hello World!";
    h1.style.color = "blue";
    document.body.appendChild(h1);
}

const names = ["Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily", ];

let nameList = document.createElement("ul");

for (let i = 0; i < names.length; i++) {
    nameList.innerHTML += "<li>" + names[i] + "</li>";
}
document.body.appendChild(nameList)