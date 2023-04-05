import { posts } from "../../assets/data/data.js";

export function contenidoPC() {
  let i = 0;
  let contenidoPC = document.createElement("div");
  contenidoPC.className = "contenido-pc";

  posts.reverse().map((post) => {
    i++;
    contenidoPC.appendChild(vistaPost(post, i));
  });

  return contenidoPC;
}

function vistaPost(post, i) {
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
  p.className = "texto-post";
  p.innerHTML = post.post;

  contenedorInferior.appendChild(img);
  contenedorInferior.appendChild(p);

  div.appendChild(contenedorSuperior);
  div.appendChild(contenedorInferior);

  return div;
}
