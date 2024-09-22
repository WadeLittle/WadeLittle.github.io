
/* Options */

let clicked;
document.getElementById("exercise-1").onclick = () => {
    clicked = true;  
}
document.getElementById("exercise-2").onclick = () => {
    clicked = false;  
}
document.getElementById("options-selector").onclick = () => {
    
    if (clicked) {
       document.getElementById("color-slider-div").style.display = "block";
       document.getElementById("picture-chooser-div").style.display = "none";
    } else {
        document.getElementById("color-slider-div").style.display = "none";
       document.getElementById("picture-chooser-div").style.display = "block";
    }
};
/* Toggle nav */

document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("options-selector").classList.toggle("hidden-small");
    if(window.getComputedStyle(document.getElementById("options-selector")).display == "none") {
        document.getElementById("arrow").innerHTML = "&#8963";
    }
    else {
        document.getElementById("arrow").innerHTML = "&#8964";
    }
};

/* Color Slider */

document.getElementById("color-slider").oninput = (event) => {
    const red = event.target.value;
    document.getElementById("color-slider-div").style.backgroundColor = `rgb(${red},0,0)`;
    if (event.target.value < 115) {
        document.getElementById("color-phrase").innerHTML = "This is mostly black";
        document.getElementById("color-phrase").style.color = "white";
    }
    else if (event.target.value > 115 && event.target.value < 200 ) {
        document.getElementById("color-phrase").innerHTML = "This is red";
        document.getElementById("color-phrase").style.color = "black";
    }
    else {
        document.getElementById("color-phrase").innerHTML = "This is bright red";
    }
}

/* Picture Chooser */



document.getElementById("small").onclick = () => {
    document.getElementById("picture").src = "https://picsum.photos/50";
}
document.getElementById("medium").onclick = () => {
    document.getElementById("picture").src = "https://picsum.photos/200";
}
document.getElementById("large").onclick = () => {
    document.getElementById("picture").src = "https://picsum.photos/400";
}



