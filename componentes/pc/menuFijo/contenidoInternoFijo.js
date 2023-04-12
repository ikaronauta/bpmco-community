export function contenidoInternoFijo(contenido) {
  let img = document.createElement("img");
  img.className = "imagen-fija";
  img.src = contenido.imagen;

  return img;
}
