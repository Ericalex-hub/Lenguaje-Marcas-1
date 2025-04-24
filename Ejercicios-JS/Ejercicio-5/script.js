/*const boton = document.getElementById("myBtn");

boton.addEventListener("click", mostrar);

function mostrar() {
    const myDiv = document.querySelector(".contenedor");
    myDiv.classList.toggle("active");
}*/
const boton = document.querySelector(".btn");

boton.addEventListener("click", mostrar);

function mostrar() {
    const myDiv = document.querySelector(".accordion-body");
    myDiv.classList.toggle("active");
}