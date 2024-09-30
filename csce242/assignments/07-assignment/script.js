


const drawButton = document.getElementById('drawButton');
const numStars = document.getElementById('numStars');
const errorMessage = document.getElementById('error-message');


drawButton.onclick = () => {
    if (numStars.value > 0) {
        errorMessage.innerHTML = "";
        document.getElementById("inner").innerHTML = "";

        for (let i = 0; i < numStars.value; i++) {
            const newStar = document.createElement('p');
            newStar.innerHTML = "&#9733;";


            newStar.id = "Star " + i;


            newStar.classList.add("star");


            const randomTop = Math.floor(Math.random() * 380) - 20 + 'px';
            const randomLeft = Math.floor(Math.random() * 380) + 'px';

            newStar.style.top = randomTop;
            newStar.style.left = randomLeft;

            newStar.onclick = () => {
                errorMessage.innerHTML = newStar.id;
            }



            document.getElementById("inner").appendChild(newStar);
        }
    } else {
        errorMessage.innerHTML = "* Invalid Input";

    }

};
