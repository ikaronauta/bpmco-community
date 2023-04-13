import { menuLateralMovil } from "./componentes/movil/menuLateralMovil.js";
import { contenidoPC } from "./componentes/pc/contenidoPC.js";
import { menuFijo } from "./componentes/pc/menuFijo.js";
import { navPC } from "./componentes/pc/navPC.js";
import { ventanaEmergente } from "./componentes/pc/ventanaEmergente.js";

let root = document.getElementById("container-principal");

function inicio() {
  if (screen.width > 720) {
    root.appendChild(menuFijo());
    root.appendChild(contenidoPC());
    root.appendChild(navPC());
    root.appendChild(ventanaEmergente());
  } else {
    menuLateralMovil();
  }
}

inicio();
