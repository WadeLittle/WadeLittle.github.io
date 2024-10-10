
/* Nav toggle */
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};



/* JSON parsing */

const getShoes = async() => {
    const url = "C:\Users\wdlit\OneDrive\Desktop\CSCE242\WadeLittle.github.io\csce242\projects\part6\shoe.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
}

const showShoes = async() => {
    const shoes = await getShoes();

    shoes.forEach((shoe) => {
        document.getElementById("shop-items").append(getShoeSection(shoe));
        
    });
}

const getShoeSection = (shoe) => {
    const section = document.createElement("section");
    section.classList.add("shop-section");

    const h1 = document.createElement("h1");
    h1.innerHTML = shoe.title;
    h1.classList.add("title");
    section.append(h1);




    return section;
}


showShoes()

