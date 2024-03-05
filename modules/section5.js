import { CrearSeccion } from "./section.js";
export function Section5 () {
    const divsContenedor = document.createElement('div');
divsContenedor.classList.add("divs-contenedor");

const div1 =  document.createElement("div");

div1.style.paddingLeft = "150px";
div1.style.paddingRight = "0px";
div1.classList.add("divContenedorDiv");

const div2 = document.createElement('div');
div2.style.display = "flex";
div2.style.flexDirection= "column";
div2.classList.add("divContenedorDiv");
div2.style.paddingRight = "150px";
div2.style.paddingLeft = "0px";


const imgSecUno = document.createElement("img");
// agregamos la ruta de la imagen (svg) y las demas propiedades de la clase
imgSecUno.src = "./public/svg/section5.svg";
imgSecUno.alt = "logo duolingo";
imgSecUno.style.width="100%";
imgSecUno.style.height= "100%";
div1.appendChild(imgSecUno);

const h1Section =  document.createElement("h1");
h1Section.className="centrado";
h1Section.textContent= "aprendizaje personalizado";
h1Section.style.color = "#58CC02";
h1Section.style.fontFamily ="cursive";
h1Section.style.fontSize = "3em";

const p = document.createElement("p");
p.style.color= "#777777" ;
p.style.textAlign = "justify";
p.style.maxWidth = "400px";
p.style.fontFamily = "cursive";
p.style.fontsize= "20px";
p.style.lineHeight=  "24px";
p.innerHTML =`Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan según tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.`;

div2.appendChild(h1Section);
div2.appendChild(p);

const estilosSection = {
    flexDirection: "column",
    display: "flex",
    width: "99.3%",
    marginTop: "200px",
    height: "32rem",
    backgroundColor: "#FFFFF"
};
divsContenedor.appendChild(div1);
divsContenedor.appendChild(div2);
const secId = "sectionCinco"
const sectionduo = CrearSeccion([divsContenedor], estilosSection, secId);

return sectionduo;

}