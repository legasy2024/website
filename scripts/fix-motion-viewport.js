/**
 * Script para corregir viewport en componentes legacy de blog
 * Reemplaza viewport={{ once: true }} por viewport={{ once: true, margin: "-50px" }}
 * para evitar errores de removeChild
 */

const fs = require('fs');
const path = require('path');

const blogDetailComponents = [
  'ThirdBlog',
  'SixthBlog',
  'SevenBlog',
  'EightBlog',
  'FifithBlog',
  'ForthBlog'
];

function fixViewportInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Reemplazar viewport={{ once: true }} por viewport={{ once: true, margin: "-50px" }}
    const oldPattern = /viewport=\{\{\s*once:\s*true\s*\}\}/g;
    const newPattern = 'viewport={{ once: true, margin: "-50px" }}';
    
    if (oldPattern.test(content)) {
      content = content.replace(oldPattern, newPattern);
      modified = true;
    }
    
    // También reemplazar viewport={{once:true}} (sin espacios)
    const oldPattern2 = /viewport=\{\{\s*once:\s*true\s*\}\}/g;
    if (oldPattern2.test(content)) {
      content = content.replace(oldPattern2, newPattern);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error procesando ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔧 Corrigiendo viewport en componentes legacy...\n');
  
  let fixedCount = 0;
  
  for (const componentName of blogDetailComponents) {
    const filePath = path.join(
      __dirname,
      `../components/blog/BlogDetail/${componentName}/${componentName}.jsx`
    );
    
    if (fs.existsSync(filePath)) {
      if (fixViewportInFile(filePath)) {
        console.log(`✅ Corregido: ${componentName}.jsx`);
        fixedCount++;
      } else {
        console.log(`⏭️  Sin cambios: ${componentName}.jsx`);
      }
    } else {
      console.log(`⚠️  No encontrado: ${filePath}`);
    }
  }
  
  console.log(`\n✨ Proceso completado. ${fixedCount} archivos modificados.`);
}

main();
