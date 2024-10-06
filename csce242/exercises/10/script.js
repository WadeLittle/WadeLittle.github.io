class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");

        section.classList.add("dog");
        section.classList.add("columns");
        const imagediv = document.createElement("div");
        const image = document.createElement("img");
        const h1 = document.createElement("h1");
        h1.innerHTML = this.title;
        imagediv.append(h1);
        section.append(imagediv);
        image.src = this.pic;
        imagediv.append(image);

        const datadiv = document.createElement("div");
        const breed = document.createElement("h2");
        const color = document.createElement("h2");
        const age = document.createElement("h2");
        const size = document.createElement("h2");

        breed.innerHTML = "Breed: " + this.breed;
        color.innerHTML = "Color: " + this.color;
        age.innerHTML = "Age: " + this.age;
        size.innerHTML = "Size: " + this.size;

        datadiv.append(breed);
        datadiv.append(color);
        datadiv.append(age);
        datadiv.append(size);
        
        section.append(datadiv);
        datadiv.classList.add("hidden");
        const arrow = document.createElement("a");
        arrow.href="#";
        arrow.innerHTML = "&#x2964;";
        h3.append(arrow);

        arrow.onclick = () => {
            datadiv.classList.toggle("hidden");
        };

        return section;
    }
}

const dogs = [];

//const myDog = new Dog("molly","pitbull","brown", 4, "xs", "images/molly.jpg");

 dogs.push(new Dog("Coco", "Yorkie", "Black", 4, "s", "yorkie.jpg"));
 dogs.push(new Dog("Paul", "Westie", "white", 7, "small", "westie.jpg"));
 dogs.push(new Dog("Gary", "Labradoodle", "yellow", 2, "medium", "labradoodle.jpg"));

 dogs.forEach((dog)=> {
    document.getElementById("dog-list").append(dog.item);
 });