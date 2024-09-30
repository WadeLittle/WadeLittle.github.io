


let stickPictures = [];
stickPictures["Birthday <br> Yay! It's your birthday"] = "images/birthday.jpg"
stickPictures["Clown <br> Be funny, you're a clown"] = "images/clown.jpg"
stickPictures["Rain <br> Don't slip, it's raining"] = "images/rain.jpg"
stickPictures["Read <br> Enjoy the book"] = "images/read.jpg"
stickPictures["Shovel <br> What're you digging?"] = "images/shovel.jpg"
stickPictures["Work <br> We appreciate your work"] = "images/work.jpg"

const table = document.getElementById("imageTable");
let currentRow;

const keys=Object.keys(stickPictures);

for(let i=0;i<keys.length;i++) {
    console.log("hi");
    if(i % 3 == 0) {
        currentRow = document.createElement("tr");
        table.appendChild(currentRow);
    }
    const cell = document.createElement("td");
    const img = document.createElement("img");

    img.src=stickPictures[keys[i]];
    img.setAttribute("id", "image" + i)
    cell.appendChild(img);
    currentRow.appendChild(cell);

    let title =  document.getElementById("pic-name");
    cell.onclick = () => {
        console.log(keys[i]);
        title.innerHTML= keys[i];
    }
}