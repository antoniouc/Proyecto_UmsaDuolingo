//crearemos una funcion que crea un section
// Módulo para crear una sección con estilos CSS
export function CrearSeccion() {
  // Crear un elemento <section>
  const sectionElement = document.createElement("section");

  // Agregar contenido al elemento (puedes modificar esto según tus necesidades)
  const h1 = document.createElement("h1");
  h1.textContent = "Esta es la Sección";
  sectionElement.appendChild(h1);
  // Agregar estilos CSS al elemento
  sectionElement.style.width = "100%";
  sectionElement.style.marginTop = "95px";
  sectionElement.style.height = "88vh";
  sectionElement.style.backgroundColor = "#f0f0f0f0";

  // Agregar la sección al documento (puedes cambiar el selector según tu estructura HTML)
  return sectionElement;
}

// Llamar a la función para crear la sección
