import { posts } from "../../assets/data/data.js";
import { vistaPost } from "./contenidoPC/vistaPost.js";

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
