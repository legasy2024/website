/**
 * Helper para convertir estructuras JSON complejas a HTML
 * Útil para migrar posts que tienen estructuras anidadas
 */

/**
 * Escapa caracteres HTML especiales
 */
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Convierte el contenido de firstblog.json a HTML
 * @param {Object} content - Objeto con la estructura de firstblog.json
 * @returns {string} - HTML generado
 */
export function convertFirstBlogToHtml(content) {
  let html = '';

  // Intro
  if (content.intro && Array.isArray(content.intro)) {
    content.intro.forEach(paragraph => {
      html += `<p>${escapeHtml(paragraph)}</p>`;
    });
  }

  // Sección 1
  if (content.section_1_title) {
    html += `<h2>${escapeHtml(content.section_1_title)}</h2>`;
  }

  if (content.section_1_paragraphs && Array.isArray(content.section_1_paragraphs)) {
    content.section_1_paragraphs.forEach(paragraph => {
      html += `<p>${escapeHtml(paragraph)}</p>`;
    });
  }

  // Sección 2 - Estudios
  if (content.section_2_title) {
    html += `<h2>${escapeHtml(content.section_2_title)}</h2>`;
  }

  if (content.studios && Array.isArray(content.studios)) {
    content.studios.forEach((studio, index) => {
      html += `<h3>${index + 1}. ${escapeHtml(studio.name)}</h3>`;
      if (studio.description && Array.isArray(studio.description)) {
        studio.description.forEach(desc => {
          html += `<p>${escapeHtml(desc)}</p>`;
        });
      }
    });
  }

  // Sección 3
  if (content.section_3_title) {
    html += `<h2>${escapeHtml(content.section_3_title)}</h2>`;
  }
  if (content.section_3_paragraph) {
    html += `<p>${escapeHtml(content.section_3_paragraph)}</p>`;
  }

  // Sección 4 - Experiencias
  if (content.section_4_title) {
    html += `<h2>${escapeHtml(content.section_4_title)}</h2>`;
  }
  if (content.section_4_paragraph) {
    html += `<p>${escapeHtml(content.section_4_paragraph)}</p>`;
  }

  if (content.experiences) {
    // Nature
    if (content.experiences.nature) {
      html += `<h3>${escapeHtml(content.experiences.nature.title)}</h3>`;
      if (content.experiences.nature.items && Array.isArray(content.experiences.nature.items)) {
        content.experiences.nature.items.forEach(item => {
          html += `<p><strong>${escapeHtml(item.name)}</strong> ${escapeHtml(item.text)}</p>`;
        });
      }
    }

    // Culture
    if (content.experiences.culture) {
      html += `<h3>${escapeHtml(content.experiences.culture.title)}</h3>`;
      if (content.experiences.culture.items && Array.isArray(content.experiences.culture.items)) {
        content.experiences.culture.items.forEach(item => {
          html += `<p><strong>${escapeHtml(item.name)}</strong> ${escapeHtml(item.text)}</p>`;
        });
      }
    }

    // Nightlife
    if (content.experiences.nightlife) {
      html += `<h3>${escapeHtml(content.experiences.nightlife.title)}</h3>`;
      if (content.experiences.nightlife.items && Array.isArray(content.experiences.nightlife.items)) {
        content.experiences.nightlife.items.forEach(item => {
          html += `<p><strong>${escapeHtml(item.name)}</strong> ${escapeHtml(item.text)}</p>`;
        });
      }
    }

    // Food
    if (content.experiences.food) {
      html += `<h3>${escapeHtml(content.experiences.food.title)}</h3>`;
      if (content.experiences.food.items && Array.isArray(content.experiences.food.items)) {
        content.experiences.food.items.forEach(item => {
          html += `<p><strong>${escapeHtml(item.name)}</strong> ${escapeHtml(item.text)}</p>`;
        });
      }
    }
  }

  // Footer
  if (content.footer_cta) {
    html += `<h2>${escapeHtml(content.footer_cta)}</h2>`;
  }
  if (content.footer_paragraph) {
    html += `<p>${escapeHtml(content.footer_paragraph)}</p>`;
  }

  return html;
}

/**
 * Convierte el contenido de secondblog.json a HTML
 * @param {Object} content - Objeto con la estructura de secondblog.json
 * @returns {string} - HTML generado
 */
export function convertSecondBlogToHtml(content) {
  let html = '';

  // Intro
  if (content.intro) {
    html += `<p>${escapeHtml(content.intro)}</p>`;
  }

  // Reasons
  if (content.reasons && Array.isArray(content.reasons)) {
    content.reasons.forEach(reason => {
      if (reason.title) {
        html += `<h2>${escapeHtml(reason.title)}</h2>`;
      }
      if (reason.subtitle) {
        html += `<h3>${escapeHtml(reason.subtitle)}</h3>`;
      }
      if (reason.paragraphs && Array.isArray(reason.paragraphs)) {
        reason.paragraphs.forEach(paragraph => {
          if (typeof paragraph === 'string') {
            // Verificar si empieza con bullet point
            if (paragraph.trim().startsWith('•')) {
              html += `<p>${escapeHtml(paragraph)}</p>`;
            } else {
              html += `<p>${escapeHtml(paragraph)}</p>`;
            }
          } else if (paragraph.strong && paragraph.text) {
            html += `<p><strong>${escapeHtml(paragraph.strong)}</strong> ${escapeHtml(paragraph.text)}</p>`;
          }
        });
      }
    });
  }

  // Conclusion
  if (content.conclusion_title) {
    html += `<h2>${escapeHtml(content.conclusion_title)}</h2>`;
  }
  if (content.conclusion_paragraphs && Array.isArray(content.conclusion_paragraphs)) {
    content.conclusion_paragraphs.forEach(paragraph => {
      html += `<p>${escapeHtml(paragraph)}</p>`;
    });
  }

  return html;
}
