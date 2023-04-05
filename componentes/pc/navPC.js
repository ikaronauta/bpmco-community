export function navPC() {
  let navPC = document.createElement("nav");
  navPC.className = "nav-pc menu-cerrado";

  let icono = document.createElement("img");
  icono.className = "open";

  icono.addEventListener("click", () => openClose(icono, navPC));

  let contenedorInternoNavPC = document.createElement("nav");
  contenedorInternoNavPC.className = "contenedor-interno-navPC";

  contenedorInternoNavPC.appendChild(cajonRecuerdos());
  contenedorInternoNavPC.appendChild(cajonMemes());

  navPC.appendChild(icono);
  navPC.appendChild(contenedorInternoNavPC);

  setTimeout(() => pulsacionesNavPC(navPC), 5000);
  setInterval(() => pulsacionesNavPC(navPC), 60000);

  return navPC;
}

function openClose(icono, navPC) {
  icono.classList.toggle("open");
  icono.classList.toggle("close");

  navPC.classList.toggle("menu-abierto");
  navPC.classList.toggle("menu-cerrado");
}

function pulsacionesNavPC(item) {
  item.classList.add("pulsacionNavPC");
  setTimeout(() => {
    item.classList.remove("pulsacionNavPC");

    //Espera
    setTimeout(() => {
      item.classList.add("pulsacionNavPC");

      //Nueva espera
      setTimeout(() => item.classList.remove("pulsacionNavPC"), 100);
    }, 250);
  }, 500);
}

function cajonRecuerdos() {
  let div = document.createElement("div");
  div.className = "cajon-recuerdos";

  return div;
}

function cajonMemes() {
  let div = document.createElement("div");
  div.className = "cajon-memes";

  return div;
}
