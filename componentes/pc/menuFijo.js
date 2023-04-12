import { contenidoMenuFijo } from "../../assets/data/data.js";
import { contenidoInternoFijo } from "./menuFijo/contenidoInternoFijo.js";

export function menuFijo() {
  let div = document.createElement("div");
  div.className = "menu-fijo";

  contenidoMenuFijo.map((contenido) => {
    div.appendChild(contenidoInternoFijo(contenido));
  });

  return div;
}
