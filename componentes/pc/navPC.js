export function navPC() {
  let navPC = document.createElement("nav");
  navPC.className = "nav-pc";

  let icono = document.createElement("img");
  icono.className = "open";

  icono.addEventListener("click", () => openClose(icono));

  navPC.appendChild(icono);

  return navPC;
}

function openClose(icono) {
  icono.classList.toggle("open");
  icono.classList.toggle("close");
}
