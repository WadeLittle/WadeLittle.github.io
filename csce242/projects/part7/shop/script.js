
/* Nav toggle */
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

    const image = document.createElement("img");
    image.src = `../../images/${shoe.image}`;
    image.classList.add("stock-photo");
    section.append(image);

    const sku = document.createElement("h3");
    sku.innerHTML = `SKU: ${shoe.sku}`;
    sku.classList.add("sku");
    section.append(sku);

    const label = document.createElement("label");
    label.setAttribute("for", "size");
    section.append(label);

    const select = document.createElement("select");
    select.name = "size";
    select.id = "size";
    shoe.sizes.forEach(size => {
       const option = document.createElement("option");
        option.value = size;
        option.innerHTML = size;
        select.append(option);
    });
    section.append(select);

    const price = document.createElement("h3");
    price.innerHTML = `Price: ${shoe.price}`;
    price.classList.add("price");
    section.append(price);


    const condition = document.createElement("h3");
    condition.innerHTML = `Condition: ${shoe.condition}`;
    condition.classList.add("condition");
    section.append(condition);


    const button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.classList.add("atc-button");
    section.append(button);



    return section;
}


showShoes();

