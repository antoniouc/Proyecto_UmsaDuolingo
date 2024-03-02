import { crearButton } from "./modules/Button.js";
import { CrearSeccion } from "./modules/section.js";
 let stilosboton;
// creamos un div que va a contener todo el body, este div tendra  la clase container
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);


//obtenemos el body
const body = document.getElementById("Contededorduo");

// creamos el nav de la pagina
const navDou = document.createElement("nav");

// creamos el elemento ul  que va a contener los botones del menu
const ulDuo = document.createElement("ul");

// creamos la imagen que va en el nav bar
const imgLogo = document.createElement("img");
// agregamos la ruta de la imagen (svg) y las demas propiedades de la clase
imgLogo.src = "./public/svg/duolingo.svg";
imgLogo.alt = "logo duolingo";

// creamos el boton del nav que estara oculto  hasta que haga scroll
// y agregamos sus propiedades

stilosboton = {
    margin:  "10px",
    width: "45vh",
    position: "absolute",
    marginLeft: "60%",
    border: "none",
    backgroundColor : "#f2f2f700"
}

const btnIdiomaPagina = crearButton(stilosboton);

const span = document.createElement("span");
span.textContent = "IDIOMA DE LA PÁGINA: ESPAÑOL"
btnIdiomaPagina.appendChild(span)
// stilosboton = {
//     width: "45vh",
//     position: "absolute",
//     marginLeft: "60%",
//     backgroundColor: "#58CC02",
//     color: "white",
//     fontSize: "20px",
//     height: "100px",
//     border: "none",
//     borderRadius: "10px",
//     height: "50px",
//     boxShadow: "#1e350c",
// };
// const button = crearButton(stilosboton);
// button.id = "btnEmpezar";
// button.textContent = "EMPIEZA AHORA";



const buttonEmpezarli = document.createElement("li");
buttonEmpezarli.style.textDecoration = "none";

buttonEmpezarli.appendChild(imgLogo);
buttonEmpezarli.appendChild(btnIdiomaPagina);
ulDuo.appendChild(buttonEmpezarli);
navDou.appendChild(ulDuo);
container.appendChild(navDou);
const sectionduo = CrearSeccion();
container.appendChild(sectionduo);

//Se crea un array con el nombre de las secciones.
// var seccion = ["inicioSesion", "aprender", "ciencia", "funcionalidades",
//     "aprendizaje", "descargas", "superDuo", "test", "forSchool", "abc", "math", "empieza"];

// seccion.forEach(function (nombreSeccion) {
//     let sectionDuo = document.createElement("section");
//     sectionDuo.id = nombreSeccion;
//     if (nombreSeccion == "inicioSesion") {
//         sectionDuo.style.marginTop = "95px";
//     }
//     var h1 = document.createElement("h1");
//     h1.textContent = nombreSeccion;
//     sectionDuo.appendChild(h1);
//     body.appendChild(sectionDuo);
// })
