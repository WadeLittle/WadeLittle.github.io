class Bird {
    constructor(type, wingspan, lifespan, food, habitat, fact, pic) {
        this.type = type;
        this.wingspan = wingspan;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
        this.pic = pic;
    }

    get item() {
        const overallDiv = document.createElement("div");
        overallDiv.classList.add("bird");
        overallDiv.classList.add("columns");
        
        const header = document.createElement("h3");
        header.innerHTML = this.type;  // Use `this.type`
        overallDiv.append(header);
        
        const image = document.createElement("img");
        image.src = "images/" + this.pic;
        overallDiv.append(image);
        
        document.getElementById("bird-list").append(overallDiv); // Correct `getElementById`
    }
}

const birds = [];
birds.push(new Bird("Bald Eagle", "8 feet", "20-30 years", "Primarily fish, but also small mammals, birds, and carrion.", "Found near large bodies of open water such as lakes, rivers, and coastal areas.", "Despite their powerful image, bald eagles are known to steal food from other birds, especially ospreys, rather than catching it themselves.", "baldEagle.jpg"));
birds.push(new Bird("Peregrine Falcon", "29 - 47 inches", "Around 15 - 20 years in the wild", "Mainly birds, such as pigeons, ducks, and songbirds.", "Wide range, including cliffs, mountains, and urban environments (especially tall buildings)", "The peregrine falcon is the fastest bird in the world, capable of reaching speeds over 240 mph (386 km/h) during its hunting dive, known as a stoop.", "falcon.jpg"));
birds.push(new Bird("Peacock", "90 inches", "10-25 years in the wild", "Omnivorous, eating seeds, insects, small mammals, and reptiles", "Open forests, farmlands, and grasslands, especially in India and Sri Lanka", "The male peacock’s impressive tail display, called a train, is made of elongated upper-tail coverts, not actual tail feathers. The iridescent eyes on the train are thought to attract mates.", "peacock.jpg"));
birds.push(new Bird("Penguin", "45 inches tall", "Around 15-20 years in the wild", "Primarily fish, but also squid and krill", "Found in Antarctica, living on sea ice and surrounding freezing waters", "Emperor penguins are the only penguin species that breed during the Antarctic winter, with males incubating the eggs for about two months while fasting in extreme conditions", "penguin.jpg"));

birds.forEach((bird) => {
    console.log(bird.type);  // Use `bird.type` to log the type of each instance
    bird.item;  // Just call the getter to append the bird item to the DOM
});
