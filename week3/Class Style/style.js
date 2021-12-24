
for (var i = 0; i < 5; i++) {
    const h2 = document.createElement("h2");
    h2.textContent = "Let's Go Dallas Cowboys";
    document.body.appendChild(h2);
}
const h2Style = document.querySelectorAll("h2");

for (let i = 0; i < h2Style.length; i++) {
    h2Style[i].style.fontSize = "20px";
    h2Style[i].style.fontWeight = "lighter";
    h2Style[i].style.fontFamily = "sans-serif";
    h2Style[i].style.color = "cornflowerblue";
}


for (let i = 0; i < h2Style.length; i++) {
    h2Style[i].classList.add("border");
}