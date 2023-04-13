export function vistaPost(post, i) {
  let div = document.createElement("div");
  div.className = "contenedor-post";

  let contenedorSuperior = document.createElement("div");
  contenedorSuperior.className = "contenedor-superior";

  let tituloPost = document.createElement("h3");
  tituloPost.innerHTML = post.titulo;

  let datosPost = document.createElement("p");
  datosPost.innerHTML = `${post.usuario} - ${post.fecha}`;

  contenedorSuperior.appendChild(tituloPost);
  contenedorSuperior.appendChild(datosPost);

  let contenedorInferior = document.createElement("div");
  contenedorInferior.className = "contenedor-inferior";

  let img = document.createElement("img");
  img.className = "imagen-portada";
  img.src = post.portada;

  let p = document.createElement("p");
  p.className = "texto-intro";
  p.innerHTML = post.intro;

  let divIntro = document.createElement("div");
  divIntro.className = "contenedor-intro";
  divIntro.appendChild(p);

  if (i % 2 == 1) {
    contenedorInferior.appendChild(img);
    contenedorInferior.appendChild(divIntro);
  } else {
    contenedorInferior.appendChild(divIntro);
    contenedorInferior.appendChild(img);
  }

  let botonVerMas = document.createElement("button");
  botonVerMas.className = "boton-ver-mas";
  botonVerMas.innerHTML = "Ver Más";
  botonVerMas.addEventListener("click", () => {
    document.getElementById("flotante").classList.toggle("cerrada");
    document.getElementById("flotante").classList.toggle("abierta");
    console.log(post);
  });

  if (post.post != "") divIntro.appendChild(botonVerMas);

  div.appendChild(contenedorSuperior);
  div.appendChild(contenedorInferior);

  return div;
}
