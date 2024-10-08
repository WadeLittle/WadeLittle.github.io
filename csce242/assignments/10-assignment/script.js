

const getFlavors = async () => {
    const url = "https://portiaportia.github.io/json/ice-creams.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

const showFlavors = async () => {
    const flavors = await getFlavors();

    flavors.forEach((flavor) => {
        document.getElementById("flavors-section").append(getFlavorSection(flavor));
    });
}

const getFlavorSection = (flavor) => {
    const section = document.createElement("section");
    section.style.backgroundImage = `url("https://portiaportia.github.io/json/images/ice-creams/${flavor.image}")`;
    section.classList.add("flavor-section");
    const h2 = document.createElement("h2");
    h2.innerHTML = flavor.name;
    h2.classList.add("name");
    section.append(h2);
    h2.classList.add("hidden");

    section.addEventListener("mouseenter", () => {
        h2.classList.remove("hidden");
    })
    section.addEventListener("mouseleave", () => {
        h2.classList.add("hidden");
    })


    return section;
}


showFlavors();