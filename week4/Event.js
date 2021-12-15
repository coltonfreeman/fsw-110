const square = document.createElement('div');
square.style.width = "400px";
square.style.height = "400px";
square.style.backgroundColor = "white";
square.style.margin = "0 auto";
square.style.marginTop = "20px";
square.style.border = "5px solid black";
document.body.appendChild(square);
//White to start as a base color.
for (let i = 0; i < 20; i++) {
    const h1 = document.createElement("h1");
    h1.textContent = "This is a color changing square";
    document.body.appendChild(h1);
}
//Black upon complete loading of the HTML page *you might have to look up how to do this*
window.addEventListener("load", function() {
    square.style.backgroundColor = "black";
});
//Green when the mouse hovers over the square
square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "green";
});
//Yellow when the mouse button is held down over the square
square.addEventListener("mousedown", function() {
    square.style.backgroundColor = "yellow";
});
//Blue when the mouse button is let go over the square
square.addEventListener("mouseup", function() {
    square.style.backgroundColor = "blue";
});
//Red when the mouse is double clicked in the square
square.addEventListener("dblclick", function() {
    square.style.backgroundColor = "red";
});
//Purple when the mouse scroll is used somewhere in the window (not just over the square). 
window.addEventListener("wheel", function() {
    square.style.backgroundColor = "purple";
})

function setSquareBackgroundColor(color) {
    square.style.backgroundColor = color;
};

window.addEventListener('keydown', function(event) {
    switch (event.which) {
        case 82:
            setSquareBackgroundColor('red');
            break;
        case 71:
            setSquareBackgroundColor('green');
            break;
        case 66:
            setSquareBackgroundColor('blue');
            break;
        case 89:
            setSquareBackgroundColor('yellow');
            break;
        case 80:
            setSquareBackgroundColor('purple');
            break;
    }
});