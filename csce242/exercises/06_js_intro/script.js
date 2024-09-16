
const doStuff = () => {
    alert("Hello World");
};





const myButton = document.getElementById("btn-click");
myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone";
    document.getElementById("stuff").classList.add("special");
};

const secondButton = document.getElementById("say-goodbye");
secondButton.onclick = () => {
    document.getElementById("bye-message").innerHTML = "Goodbye";
    document.getElementById("stuff").classList.remove("special")
}