import { registerImage } from "./lazy.js";

//crear (1) imagen
// gregar imagen 

const maximum = 122;
const minimum = 1;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;


const createImageNode = () => {
    const container = document.createElement("div");
    container.className = "p-4";

    const imagen = document.createElement('img')
    imagen.className = "mx-auto";
    imagen.width = '320'
    imagen.dataset.src= `https://randomfox.ca/images/${random()}.jpg`;// TODO

    container.appendChild(imagen);


    return container;

};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");

const addButton = document.querySelector('button');


const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
}


addButton.addEventListener("click", addImage);



