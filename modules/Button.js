// creamos una funcion donde se va a crear un boton esta funcion va a recibir parametros de estilo
// y el texto que queremos mostrar en este boton.
export function crearButton(styles) {
  const btn = document.createElement("button");
  Object.assign(btn.style, styles);
  return btn;
}