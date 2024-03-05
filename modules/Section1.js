import { CrearSeccion } from "./section.js";
import { crearButton } from "./Button.js";

export function CrearSeccion1() {
  let stilosboton;

const divsContenedor = document.createElement('div');
divsContenedor.classList.add("divs-contenedor");

const div1 =  document.createElement("div");
div1.style.paddingLeft = "150px";
div1.style.paddingRight = "0px";
div1.classList.add("divContenedorDiv");

const div2 = document.createElement('div');
div2.classList.add("divContenedorDiv");
div2.style.display = "flex";
div2.style.flexDirection= "column";
div2.style.paddingRight = "150px";
div2.style.paddingLeft = "0px";


const imgSecUno = document.createElement("img");
// agregamos la ruta de la imagen (svg) y las demas propiedades de la clase
imgSecUno.src = "./public/svg/inicioDuo.png";
imgSecUno.alt = "logo duolingo";
imgSecUno.style.width="60%";
imgSecUno.style.height= "60%";
div1.appendChild(imgSecUno);

const h1Section =  document.createElement("h1");
h1Section.className="centrado";
h1Section.innerHTML= "¡La forma divertida, efectiva y <br> gratis de aprender un idioma!";


stilosboton = {
    margin: "10px",
    width: "45%",
    backgroundColor: "#58CC02",
    color: "white",
    fontSize: "15px",
    border: "none",
    borderRadius: "10px",
    height: "50px",
    width: "300px",
    boxShadow: "inset 0px -3px 0px 0px #366115",
};

const btnEmpezar = crearButton(stilosboton);
btnEmpezar.id = "btnEmpezar";
btnEmpezar.textContent = "EMPIEZA AHORA";



stilosboton = {
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

const btnCuenta = crearButton(stilosboton);
btnCuenta.id = "btncuenta";
btnCuenta.textContent = "YA TENGO UNA CUENTA";


div2.appendChild(h1Section);
div2.appendChild(btnEmpezar);
div2.appendChild(btnCuenta);

divsContenedor.appendChild(div1);
divsContenedor.appendChild(div2);
//creamos los estilosdel secction como objeto para pasarlo como parametro
const estilosSection = {
    marginTop: "130px",
    flexDirection: "column",
    display: "flex",
    width: "99.3%",
    marginTop: "200px",
    height: "32rem",
    backgroundColor: "#FFFFF"
};
// crearemos un navbar debajo de los dos div  anteriores, y ste div contendra las imagenes de las banderas
// sera tipo carrousel

const navBanderas =  document.createElement("nav");
navBanderas.id = "NavBanderas";
// Crear la lista de imágenes y los botones
const listaImagenes = document.createElement('ul');
listaImagenes.id = 'lista-imagenes';
const botonAnterior = document.createElement('button');
botonAnterior.id = 'anterior';
botonAnterior.textContent = '<';
const botonSiguiente = document.createElement('button');
botonSiguiente.id = 'siguiente';
botonSiguiente.textContent = '>';

const imagenes = ['balemania.png', 'bbrazil.png', 'bCatalan.png', 
'bfrancia.png', 'bItalia.png','bRuso.png', 'bsueco.png', 'bUsa.png'];
const nombresImagenes = ['Alemania', 'Portuges', 'Catalan', 
'Frances', 'Italiano','Ruso', 'Sueco', 'Ingles'];

cargarImagenes();

botonAnterior.addEventListener('click', anteriorImagen);
botonSiguiente.addEventListener('click', siguienteImagen);
  navBanderas.appendChild(botonAnterior);
  navBanderas.appendChild(listaImagenes);
navBanderas.appendChild(botonSiguiente);
const secid = "section1";
const sectionduo1 = CrearSeccion([divsContenedor, navBanderas], estilosSection, secid);

function cargarImagenes() {
    // Vaciar la lista de imágenes
    listaImagenes.innerHTML = '';
  
    // Iterar sobre el array de imágenes
    for (let i = 0; i < imagenes.length; i++) {
      const imagen = imagenes[i];
      const nombre = nombresImagenes[i];
  
      // Crear el elemento <li> para la imagen
      const li = document.createElement('li');
  
      // Crear el elemento <img> y establecer su atributo src
      const img = document.createElement('img');
      img.src ="./public/img/" + imagen;
      
      // Crear el elemento <span> para el nombre de la imagen o bandera
      const span = document.createElement('span');
      span.textContent = nombre;
  
      // Agregar la imagen y el span al elemento <li>
      li.appendChild(img);
      li.appendChild(span);
  
      // Agregar el elemento <li> a la lista de imágenes
      listaImagenes.appendChild(li);
    }
  }

  function siguienteImagen() {
    listaImagenes.appendChild(listaImagenes.firstElementChild);
  }
  // Función para retroceder a la imagen anterior
  function anteriorImagen() {
    listaImagenes.prepend(listaImagenes.lastElementChild);
  }

return sectionduo1;
}