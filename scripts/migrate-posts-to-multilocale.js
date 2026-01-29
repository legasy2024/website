/**
 * Migra los posts de contenido de:
 *   content/blog/posts/<id>.es.json + <id>.en.json
 * a un solo archivo:
 *   content/blog/posts/<id>.json
 * con estructura:
 * {
 *   id,
 *   image,
 *   translations: { es: {...}, en: {...} }
 * }
 *
 * Solo se ejecuta una vez para hacer el cambio de formato.
 */

const fs = require("fs");
const path = require("path");

async function loadRegistry() {
  const mod = await import("../content/blog/posts-registry.js");
  return mod.blogPostsRegistry;
}

function readLocaleFile(id, locale) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "blog",
    "posts",
    `${id}.${locale}.json`
  );
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeCombinedFile(id, image, esData, enData) {
  const outPath = path.join(
    process.cwd(),
    "content",
    "blog",
    "posts",
    `${id}.json`
  );

  const combined = {
    id,
    image,
    translations: {
      es: esData,
      en: enData,
    },
  };

  fs.writeFileSync(outPath, JSON.stringify(combined, null, 2), "utf8");
  console.log(`✅ Migrado: ${id}.json`);
}

async function main() {
  console.log("🔄 Migrando posts a formato multilocale...\n");

  const registry = await loadRegistry();

  for (const post of registry) {
    const { id, image } = post;

    const esData = readLocaleFile(id, "es");
    const enData = readLocaleFile(id, "en");

    if (!esData || !enData) {
      console.warn(
        `⚠️  Saltando "${id}": faltan archivos ${id}.es.json o ${id}.en.json`
      );
      continue;
    }

    // Limpiamos campos duplicados a nivel root (id, image) para dejarlos solo donde tiene sentido
    const cleanEs = { ...esData };
    const cleanEn = { ...enData };
    delete cleanEs.id;
    delete cleanEn.id;

    writeCombinedFile(id, image || esData.image || enData.image, cleanEs, cleanEn);
  }

  console.log("\n✨ Migración completada.");
}

main().catch((err) => {
  console.error("❌ Error en migración:", err);
  process.exit(1);
});

