var css = document.getElementById("show-css");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

btn.addEventListener("click", function() {
    
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    setGradient();
})

function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var randomColor = "#";
    for (var i=0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random()*16)];
    }
    return randomColor;
}