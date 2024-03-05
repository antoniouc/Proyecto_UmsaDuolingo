// <<=========== importamos los modulos que se estaran usando para crear componentes ======>>
import { crearButton } from "./modules/Button.js";
import { CrearSeccion1 } from "./modules/Section1.js";
import {Section2 } from "./modules/SectionDosDivertido.js";
import {Section3 } from "./modules/section3.js";
import {Section4 } from "./modules/section4.js";
import { Section5 } from "./modules/section5.js";
import {Section6}  from './modules/section6.js';
import {Section7}  from './modules/section7.js';
import {Section8}  from './modules/section8.js';
import {Section9}  from './modules/section9.js';
import {Section10}  from './modules/section10.js';
import {Section11}  from './modules/section11.js';
let stilosboton;
let id;
// creamos un div que va a contener todo el body, este div tendra  la clase container
const container = document.createElement("div");
container.classList.add("container");

//obtenemos el body
const body = document.getElementById("Contededorduo");

// creamos el nav principal de la pagina
const navdou = document.createElement("nav");
navdou.id = "navDuo";
// creamos el elemento ul  que va a contener los botones del menu
const ulDuo = document.createElement("ul");

const enlace = document.createElement('a');
enlace.href = 'https://es.duolingo.com/'; // URL de destino del enlace

// Agregar la imagen como hijo del enlace

// <====== creamos los elementos que van en el nav bar ========>
const imgLogo = document.createElement("img");
// agregamos la ruta de la imagen (svg) y las demas propiedades de la clase
imgLogo.src = "./public/svg/duolingo.svg";
imgLogo.alt = "logo duolingo";
imgLogo.style.marginLeft = "300px";
// agregamos la direccion a la imagen para que al seleccionarlo  nos redirija
// a la página principal de Duolingo

enlace.appendChild(imgLogo);

// creamos el boton del nav que estara oculto  hasta que haga scroll
// y agregamos sus propiedades
stilosboton = {
    margin: "0px",
    width: "20%",
    marginLeft: "25%",
    position: "absolute",
    backgroundColor: "#58CC02",
    color: "white",
    fontSize: "15px",
    border: "none",
    borderRadius: "10px",
    height: "50px",
    width: "300px",
    boxShadow: "inset 0px -3px 0px 0px #366115",
    display: "none"
};

id = "btnEmpezar";
const btnEmpezar = crearButton(stilosboton, id);
btnEmpezar.textContent = "EMPIEZA AHORA";


stilosboton = {
  color: "#C0C0C0",
  fontSize: "18px",
  margin: "10px",
  width: "20%",
  position: "absolute",
  marginLeft: "25%",
  border: "none",
  backgroundColor: "#f2f2f700",
};

 id = "btnIdioma";
const btnIdiomaPagina = crearButton(stilosboton, id);

const span = document.createElement("span");
span.textContent = "IDIOMA DE LA PÁGINA: ESPAÑOL";
btnIdiomaPagina.appendChild(span);

const li1 = document.createElement("li");
li1.style.textDecoration = "none";
li1.appendChild(enlace);

const li2 = document.createElement("li");
li2.style.textDecoration = "none";
li2.appendChild(btnEmpezar);
li2.appendChild(btnIdiomaPagina);
ulDuo.appendChild(li1);
ulDuo.appendChild(li2);
navdou.appendChild(ulDuo);
container.appendChild(navdou);
// <====== FIN creamos los elementos que van en el nav bar ========>

// <=======   AQUI EMPIEZA CODIGO DE LAS 12 SECCIONES =========>

const divSection =  document.createElement("div");
divSection.classList.add("containerSection");

// <========== inicio seccion1 =========>

const sectionduo1 = CrearSeccion1();
//<========== fin seccion 1 ===========>
const sectionduo2  = Section2(); 
const  sectionduo3 = Section3();
const sectionduo4 = Section4()
const sectionduo5 = Section5();
const sectionduo6 = Section6();
const sectionduo7 = Section7();
const sectionduo8 = Section8();
const sectionduo9 = Section9();
const sectionduo10 = Section10();
const sectionduo11 = Section11();
divSection.appendChild(sectionduo1);
divSection.appendChild(sectionduo2);
divSection.appendChild(sectionduo3);
divSection.appendChild(sectionduo4);
divSection.appendChild(sectionduo5);
divSection.appendChild(sectionduo6);
divSection.appendChild(sectionduo7);
divSection.appendChild(sectionduo8);
divSection.appendChild(sectionduo9);
divSection.appendChild(sectionduo10);
divSection.appendChild(sectionduo11);
container.appendChild(divSection);

body.appendChild(container);

window.addEventListener("scroll", function() {
    // Obtener la posición vertical actual del usuario
    const scrollY = window.scrollY || window.pageYOffset;

    // Obtener la posición vertical de las secciones
    const  seccion1Top = sectionduo1.offsetTop;
    const seccion5Top =  sectionduo6.offsetTop + 10 ;
    const seccion6Top =  sectionduo6.offsetTop;
    const section8Top = sectionduo7.offsetTop +500;
    const additionalOffset = 500;
    // Calcular la posición a la cual se debe ocultar el botón
    const hideButtonPosition = seccion1Top + additionalOffset;
    // Si la posición vertical actual es mayor o igual a la posición de la segunda sección
    //ocultar el botón.
    if (scrollY >= (hideButtonPosition)) {
         btnEmpezar.style.display = "block";
        btnIdiomaPagina.style.display = "none";
        navdou.style.borderBottom = "1px solid #C0C0C8";
    } else {
        navdou.style.borderBottom = "0px solid #6f6e6e";
        btnIdiomaPagina.style.display = "block";
        btnEmpezar.style.display = "none";
    }

    if(scrollY >= (seccion5Top || seccion6Top)  && (scrollY <= section8Top)){
        navdou.style.display = "none";
    } else{
        navdou.style.display = "flex";
    }
});