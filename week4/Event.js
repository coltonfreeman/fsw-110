const canvas = document.createElement('div');
canvas.style.width = "400px";
canvas.style.height = "400px";
canvas.style.backgroundColor = "white";
canvas.style.backgroundColor = "white";
canvas.style.backgroundColor = "white";
canvas.style.margin = "0 auto";
canvas.style.marginTop = "20px";
canvas.style.border = "5px solid black";
document.body.appendChild(canvas);
//White to start as a base color.
for (let i = 0; i < 20; i++) {
    const h1 = document.createElement("h1");
    h1.textContent = "This is a color changing square";
    document.body.appendChild(h1);
}
//Black upon complete loading of the HTML page *you might have to look up how to do this*
window.addEventListener("load", function() {
    canvas.style.backgroundColor = "black";
});
//Green when the mouse hovers over the square
canvas.addEventListener("mouseover", function() {
    canvas.style.backgroundColor = "green";
});
//Yellow when the mouse button is held down over the square
canvas.addEventListener("mousedown", function() {
    canvas.style.backgroundColor = "yellow";
});
//Blue when the mouse button is let go over the square
canvas.addEventListener("mouseup", function() {
    canvas.style.backgroundColor = "blue";
});
//Red when the mouse is double clicked in the square
canvas.addEventListener("dblclick", function() {
    canvas.style.backgroundColor = "red";
});
//Purple when the mouse scroll is used somewhere in the window (not just over the square). 
window.addEventListener("wheel", function() {
    canvas.style.backgroundColor = "purple";
})

function setSquareBackgroundColor(color) {
    canvas.style.backgroundColor = color;
};

window.addEventListener('keydown', function(event) {
    switch (event.which) {
        case 82:
            setCanvasBackgroundColor('red');
            break;
        case 71:
            setCanvasBackgroundColor('green');
            break;
        case 66:
            setCanvasBackgroundColor('blue');
            break;
        case 89:
            setCanvasBackgroundColor('yellow');
            break;
        case 80:
            setCanvasBackgroundColor('purple');
            break;
    }
});