import { CrearSeccion } from "./section.js";
import { crearButton } from "./Button.js";
export function Section7 () {

    let stilosboton;
    const divsContenedor = document.createElement('div');
divsContenedor.classList.add("divs-contenedor");
divsContenedor.style.flexDirection=" row" ;

const div1 =  document.createElement("div");
div1.classList.add("divContenedorDiv");

const imgSecUno = document.createElement("img");
// agregamos la ruta de la imagen (svg) y las demas propiedades de la clase
imgSecUno.src = "./public/img/superduo.png";
imgSecUno.alt = "logo duolingo";
imgSecUno.style.width="100%";
imgSecUno.style.height= "100%";
div1.appendChild(imgSecUno);

const div2 = document.createElement('div');
div2.classList.add("divContenedorDiv");
div2.style.display = "flex";
div2.style.flexDirection= "column";
const imgsuper = document.createElement("img");
// agregamos la ruta de la imagen (svg) y las demas propiedades de la clase
imgsuper.src = "./public/svg/superduo.svg";
imgsuper.alt = "logo duolingo";
imgsuper.style.width="100%";
imgsuper.style.height= "50%";

stilosboton = {
    margin:"10px",
    width: "45%",
    backgroundColor: "#ffff",
    color: "#00043C",
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
btnCuenta.textContent = "PRUEBA 2 SEMANAS GRATIS";

div2.appendChild(imgsuper);
div2.appendChild(btnCuenta);


const estilosSection = {
   
    display: "flex",
    width: "99.3%",
    height: "50rem",
    backgroundColor: "#100F3E",
}

divsContenedor.appendChild(div1);
divsContenedor.appendChild(div2);
const secId = "sectionSeis"
const sectionduo = CrearSeccion([divsContenedor], estilosSection,  secId);

return sectionduo;

}