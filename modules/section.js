// Creamos la nueva funcion para crear el elemnto section
export function CrearSeccion(elementos, styles, id) {
  const section = document.createElement("section");
section.id = id;
  // Agregar estilos al elemento section
  Object.assign(section.style, styles);

  // Agregar los elementos HTML al section mediante un foreach
  elementos.forEach((elemento) => {
    section.appendChild(elemento);
  });

  return section;
}
