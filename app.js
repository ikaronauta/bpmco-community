import { menuLateralMovil } from "./componentes/movil/menuLateralMovil.js";
import { contenidoPC } from "./componentes/pc/contenidoPC.js";
import { navPC } from "./componentes/pc/navPC.js";

let root = document.getElementById("container-principal");

function inicio() {
  if (screen.width > 720) {
    root.appendChild(contenidoPC());
    root.appendChild(navPC());
  } else {
    menuLateralMovil();
  }
}

inicio();
