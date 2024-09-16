
//Counter

document.getElementById("count-section").onclick = (event) => {
    let currentCount = parseInt(document.getElementById("counter").innerHTML);
    document.getElementById("counter").innerHTML = currentCount + 1;
}


//Refresher

document.getElementById("random-pic").onclick = (event) => {
    location.reload();
}





// Slider
const slider = document.getElementById('myRange');
const image = document.getElementById('movableImage');

// Adjust image position based on slider value
slider.addEventListener('input', function() {
    // Get slider value as percentage
    const sliderValue = this.value;

    // Move the image based on slider value
    // Adjust left position (range from 0% to 100%)
    image.style.left = sliderValue + '%';
});

