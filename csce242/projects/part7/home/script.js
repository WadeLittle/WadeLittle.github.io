document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};


/* JSON parsing */

const getShoes = async() => {
    const url = "https://wadelittle.github.io/csce242/projects/shoe.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
}

const showShoes = async() => {
    const shoes = await getShoes();

    shoes.forEach(shoe => {
        if(shoe.brand == "jordan") {
            document.getElementById("jordan-picks").append(getShoeSection(shoe));
        } else if (shoe.brand == "yeezy") {
            document.getElementById("yeezy-picks").append(getShoeSection(shoe));
        } else {
            document.getElementById("dunk-picks").append(getShoeSection(shoe));
        }
        
    });
}


const getShoeSection = (shoe) => {
    const section = document.createElement("section");
    section.classList.add("top-picks");

    const h2 = document.createElement("h2");
    h2.innerHTML = shoe.title;
    section.append(h2);

    const image = document.createElement("img");
    image.src = `../../images/${shoe.image}`;
    section.append(image);




    return section;
}

showShoes();

