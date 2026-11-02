import fs from "fs";
import path from "path";

/**
 * Devuelve la miniatura de una portada del blog (generada por `npm run optimize:images`)
 * o la imagen original si aún no existe. Solo servidor.
 *   /img/blog/post2.png -> /img/thumbs/blog/post2.jpg
 */
export function getThumbSrc(src) {
  if (!src?.startsWith("/img/")) return src;
  const thumb = src.replace(/^\/img\//, "/img/thumbs/").replace(/\.(png|jpe?g)$/i, ".jpg");
  return fs.existsSync(path.join(process.cwd(), "public", thumb)) ? thumb : src;
}
