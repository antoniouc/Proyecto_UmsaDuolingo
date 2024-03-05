import { CrearSeccion } from "./section.js";
import { crearButton } from "./Button.js";
export function Section6 () {

    let stilosboton;
    const divsContenedor = document.createElement('div');
divsContenedor.classList.add("divs-contenedor");
divsContenedor.style.flexDirection=" column" ;
const div1 =  document.createElement("div");

div1.style.paddingLeft = "40%";
div1.style.paddingRight = "0px";
div1.classList.add("divContenedorDiv");

const div2 = document.createElement('div');
div2.classList.add("divContenedorDiv");
div1.style.display = "flex";
div1.style.flexDirection= "row";
div2.style.paddingRight = "0%";
div2.style.paddingLeft = "50%";



const h1Section =  document.createElement("h1");

h1Section.textContent= "aprende cuando quieras y donde quieras";
h1Section.style.color = "#042C60";
h1Section.style.fontFamily =" 'Oxygen', sans-serif";
h1Section.style.fontSize = "64px";
div1.appendChild(h1Section);

stilosboton = {
    color: "#C0C0C0",
    margin:"10px",
    width: "45%",
    backgroundColor: "#ffff",
    color: "#0397fa",
    fontSize: "15px",
    fontFamily: "'Nunito', sans-serif;",
    height: "50px",
    border: "none",
    borderRadius: "10px",
    width: "300px",
    boxShadow: " 0px 3px 2px 3px #CECECE",
  };
  
 const  id = "btnapple";
  const botonApple = crearButton(stilosboton, id);
  botonApple.style.display = "Flex";
  botonApple.style.flexDirection  = "row";
  // agregamos el svg  de apple a nuestro botón como un span que esta en la carpeta ./public/svg/apple.svg
  const spanapple =  document.createElement("span");
  spanapple.style.width = "50px";
  const img = document.createElement("img");
img.src = "./public/svg/apple.svg";
img.alt = "Descripción de la imagen";
spanapple.appendChild( img);
const spanapple1 =  document.createElement("span");
spanapple1.style.marginTop = "15px";
 const a = document.createElement( "a" );
 a.href = "https://www.apple.com/education/worldwide/";
 a.textContent = "Descárgalo en la App store";
 a.style.color = "#4B4B4B";
 a.style.textDecoration = "none";
 spanapple1.appendChild(a);

  botonApple.appendChild(spanapple);
  botonApple.appendChild(spanapple1);
div2.appendChild(botonApple);

stilosboton = {
    color: "#C0C0C0",
    margin:"10px",
    width: "45%",
    backgroundColor: "#ffff",
    color: "#0397fa",
    fontSize: "15px",
    fontFamily: "'Nunito', sans-serif;",
    height: "50px",
    border: "none",
    borderRadius: "10px",
    width: "300px",
    boxShadow: " 0px 3px 2px 3px #CECECE",
  };
  
 const  idstore = "btnstore";
  const btnstore = crearButton(stilosboton, idstore);
  btnstore.style.display = "Flex";
  btnstore.style.flexDirection  = "row";
  // agregamos el svg  de apple a nuestro botón como un span que esta en la carpeta 
  const spanstore =  document.createElement("span");
  spanstore.style.width = "50px";
  const imgstore = document.createElement("img");
imgstore.src = "./public/svg/playstore.svg";
imgstore.alt = "Descripción de la imagen";
spanstore.appendChild( imgstore);
const spanstore1 =  document.createElement("span");
spanstore1.style.marginTop = "15px";
 const aStore = document.createElement( "a" );
 aStore.href = "https://www.apple.com/education/worldwide/";
 aStore.textContent = "Descárgalo en la App store";
 aStore.style.color = "#4B4B4B";
 aStore.style.textDecoration = "none";
 spanstore1.appendChild(aStore);

 btnstore.appendChild(spanstore);
 btnstore.appendChild(spanstore1);
  div2.appendChild(btnstore);



const estilosSection = {
   
    display: "flex",
    width: "99.3%",
    height: "50rem",
    backgroundColor: "#DDF4FF",
     /* Establecer la imagen de fondo */
  backgroundImage: "url('./public/svg/section7.svg')",

  /* Ajustar el tamaño del fondo */
  backgroundSize: "cover", /* La imagen se ajusta para cubrir todo el elemento */
  backgroundPosition: "center", /* Centrar la imagen */

  /* Otras propiedades opcionales */
  backgroundRepeat: "no-repeat" /* Evita que la imagen se repita */
};

divsContenedor.appendChild(div1);
divsContenedor.appendChild(div2);
const secId = "sectionSeis"
const sectionduo = CrearSeccion([divsContenedor], estilosSection,  secId);

return sectionduo;

}