export function ventanaEmergente() {
  let div = document.createElement("div");
  div.className = "flotante cerrada";
  div.id = "flotante";

  let button = document.createElement("button");
  button.className = "boton-cerrar";
  button.innerHTML = "Cerrar";
  button.addEventListener("click", () => {
    document.getElementById("flotante").classList.toggle("cerrada");
    document.getElementById("flotante").classList.toggle("abierta");
  });

  div.appendChild(button);

  return div;
}
