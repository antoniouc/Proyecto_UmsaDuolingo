// creamos una funcion donde se va a crear un boton esta funcion va a recibir parametros de estilo
// y el texto que queremos mostrar en este boton.
export function crearButton(styles, id) {
  const btn = document.createElement("button");
  btn.id = id;
  Object.assign(btn.style, styles);
  return btn;
}