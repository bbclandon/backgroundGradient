var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById("gradient");

function background() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    //use for Gradient property display in the the bootom of gradient. 
    css.textContent = body.style.background + ",";
}

color1.addEventListener('input', background);
color2.addEventListener('input', background);


// console.log(css);
// console.log(color1);
// console.log(color2);