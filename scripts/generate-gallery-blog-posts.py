#!/usr/bin/env python3
"""Genera posts de blog tipo galería y copia imágenes del portafolio. Ejecutar desde la raíz del proyecto."""

from __future__ import annotations

import json
import re
import shutil
from pathlib import Path


def strip_html(html: str) -> str:
    text = re.sub(r"<[^>]+>", " ", html)
    return " ".join(text.split()).strip()


def truncate_plain(text: str, max_len: int) -> str:
    if len(text) <= max_len:
        return text
    cut = text[: max_len - 1].rsplit(" ", 1)[0]
    return (cut or text[: max_len]).rstrip(".,;:") + "…"

ROOT = Path(__file__).resolve().parents[1]
PORT = ROOT / "components/portfolio/assets"
PUB = ROOT / "public/img/portfolio-blog/galleries"
POSTS_DIR = ROOT / "content/blog/posts"

DATE_ES = "15 de abril de 2026"
DATE_EN = "April 15, 2026"

WA = "https://wa.me/573128717100?text="
IG = "https://www.instagram.com/legassystudio?igsh=ZWg5NXF1Nmd6eHJt"


def wa_url_es(text: str) -> str:
    from urllib.parse import quote

    return WA + quote(text, safe="")


def cta_block(es_msg: str, en_msg: str) -> dict:
    return {
        "whatsapp": {
            "text": "Pedir asesoría para mi tatuaje",
            "url": wa_url_es(es_msg),
        },
        "instagram": {"text": "Ver portafolio", "url": IG},
    }


def contact_es() -> dict:
    return {
        "title": "Información de contacto:",
        "location": "Ubicación: Cali, Colombia",
        "phone": "Teléfono: +57 (310) 311-0611",
    }


def contact_en() -> dict:
    return {
        "title": "Contact information:",
        "location": "Location: Cali, Colombia",
        "phone": "Phone: +57 (310) 311-0611",
    }


def copy_item(src_rel: str, dest: Path) -> None:
    src = PORT.parent / src_rel  # src_rel like realismo/realismo5.JPG under assets
    src = ROOT / "components/portfolio/assets" / src_rel.split("/", 1)[-1] if "/" in src_rel else PORT / src_rel
    # src_rel is "realismo/realismo5.JPG"
    src = ROOT / "components/portfolio/assets" / src_rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dest)


# Each entry: id, es_slug, en_slug, es_title, en_title, kw_es, kw_en, intro_es, intro_en,
# gallery_title_es, gallery_title_en, gallery_desc_es, gallery_desc_en,
# wa_es, list of (src_rel, fn, es_t, es_d, en_t, en_d, alt_es, alt_en)
DATA: list[tuple] = [
    (
        "gallery-tatuajes-para-hombres",
        "tatuajes-para-hombres-galeria",
        "mens-tattoos-gallery-inspiration",
        "Tatuajes para hombres: realismo, manga y piezas marcadas",
        "Men's tattoos: realism, sleeves and bold work",
        ["tatuajes para hombres", "ideas tatuajes hombre", "galeria tatuajes masculinos"],
        ["mens tattoos", "tattoo ideas for men", "male tattoo gallery"],
        '<p>Los <strong>tatuajes para hombres</strong> suelen ir hacia el realismo en negro y gris, mangas completas o piezas de gran formato con mucho contraste. Puedes plantearte retratos mitológicos o religiosos, animales, escenas de anime o composiciones con geometría y relojes, según la zona y el tiempo de sesión que quieras invertir.</p><p>Abajo tienes referencias reales del estudio: cada foto muestra el tatuaje terminado y la parte del cuerpo donde está, para que compares estilos antes de definir tu idea con un artista.</p>',
        "<p><strong>Men's tattoos</strong> often mean black-and-grey realism, full sleeves or large-scale pieces with strong contrast. Think myth or religious portraits, animals, anime scenes, or geometry and clockwork—depending on placement and how many sessions you want.</p><p>Below is real studio work: every photo shows the finished tattoo and the body area, so you can compare styles before you lock a design.</p>",
        "Ideas para tatuajes masculinos",
        "Men's tattoo ideas",
        "Cada tarjeta describe el tatuaje y la zona visible en la foto.",
        "Each card describes the tattoo and the visible placement.",
        "Hola! Vengo del blog, tatuajes para hombres, quiero asesoría",
        [
            ("realismo/realismo5.JPG", "01.jpg", "Dios griego en antebrazo", "Retrato masculino estilo escultura clásica en antebrazo interno; ojos sin pupila y barba con volumen.", "Greek god forearm", "Classical male bust on inner forearm; sculpted eyes and full beard shading.",
             "Tatuaje realista dios griego antebrazo", "Realistic Greek god inner forearm tattoo"),
            ("realismo/realismo17.jpg", "02.jpg", "Casco espartano y león", "Casco corintio, cruces y león en negro y gris; pieza vertical de alto contraste.", "Spartan helmet and lion", "Corinthian helmet, crosses and lion in black and grey.",
             "Tatuaje casco espartano y león", "Spartan helmet and lion tattoo"),
            ("realismo/realismo20.jpg", "03.jpg", "Arcángel y dragón", "Figura alada con espada sobre criatura; narrativa religiosa en antebrazo.", "Archangel and dragon", "Winged figure with sword over a beast; religious narrative on forearm.",
             "Tatuaje arcángel antebrazo", "Archangel forearm tattoo"),
            ("realismo/realismo22.JPEG", "04.jpg", "Manga guerrera", "Espartano en hombro y rostro con tocado de felino en la parte inferior; manga completa.", "Warrior sleeve", "Spartan on shoulder, feline headdress portrait below; full sleeve.",
             "Manga tatuaje realismo hombre", "Male realism full sleeve"),
            ("surrealismo/surrealismo6.JPG", "05.jpg", "León oriental y reloj", "León tipo foo dog, geometría y reloj de bolsillo en antebrazo.", "Oriental lion and clock", "Foo dog, sacred geometry and pocket watch on forearm.",
             "Tatuaje manga león y reloj", "Sleeve with lion and clock"),
            ("anime/anime6.JPEG", "06.jpg", "Shenron y esfera", "Dragon Ball: dragón Shenron con ojos rojos y esfera del dragón a color.", "Shenron and Dragon Ball", "Shenron with red eyes and glowing Dragon Ball.",
             "Tatuaje anime Shenron brazo", "Anime Shenron upper arm tattoo"),
        ],
    ),
    (
        "gallery-tatuajes-para-mujeres",
        "tatuajes-para-mujeres-galeria",
        "womens-tattoos-gallery-inspiration",
        "Tatuajes para mujeres: florales, línea fina y retratos",
        "Women's tattoos: florals, fine line and portraits",
        ["tatuajes para mujeres", "ideas tatuajes mujer", "galeria tatuajes femeninos"],
        ["womens tattoos", "tattoo ideas for women", "feminine tattoo gallery"],
        '<p>Los <strong>tatuajes para mujeres</strong> abren un abanico muy amplio: flores y naturaleza en acuarela o ilustrativo, línea fina con animales pequeños, retratos con microrealismo o piezas con puntillismo y sombras suaves. La elección depende de si buscas algo delicado y discreto o una composición más grande en brazo, muslo o espalda alta.</p><p>Las imágenes siguientes son trabajos reales; léelas como guía de estilos y tamaños posibles, siempre adaptando el diseño a tu piel y anatomía con el artista.</p>',
        "<p><strong>Women's tattoos</strong> cover a wide range: florals in watercolor or illustrative fine line, tiny animals, micro-realistic portraits, or dotwork with soft shading. You might want something subtle or a larger piece on arm, thigh or upper back.</p><p>The photos below are real work—use them as a style guide, then tailor the design to your skin and anatomy with your artist.</p>",
        "Referencias para tatuajes femeninos",
        "Reference work for women's tattoos",
        "Cada foto muestra el estilo y la zona tatuada tal como quedó.",
        "Each photo shows the style and placement as healed.",
        "Hola! Vengo del blog, tatuajes para mujeres, quiero asesoría",
        [
            ("surrealismo/surrealismo4.JPEG", "01.jpg", "Rostro y mariposa", "Perfil femenino con mariposa monarca sobre los ojos y rosas; brazo superior.", "Portrait and butterfly", "Female profile with monarch over eyes and roses on upper arm.",
             "Tatuaje mariposa y rostro mujer", "Butterfly portrait woman's arm"),
            ("puntillismo/punt5.jpg", "02.jpg", "Mano y corazón", "Mano con manga victoriana, corazón recortado y flor a color en muslo.", "Hand and heart", "Victorian hand, heart cutout and colored flower on thigh.",
             "Tatuaje ilustrativo muslo", "Illustrative thigh tattoo"),
            ("microrealismo/micro8.JPEG", "03.jpg", "Medusa", "Medusa con serpientes en parte posterior del brazo; realismo fino.", "Medusa", "Medusa and snakes on back of upper arm.",
             "Tatuaje Medusa brazo", "Medusa upper arm tattoo"),
            ("linea-fina/lineaFina11.jpg", "04.jpg", "Tortuga y olas", "Tortuga minimal con línea de agua y burbujas en brazo superior.", "Turtle and waves", "Minimal turtle with waterline and bubbles on upper arm.",
             "Tatuaje tortuga linea fina", "Fine line turtle tattoo"),
            ("libre/libre3.JPEG", "05.jpg", "Mariposa 3D", "Mariposa monarca con sombra tatuada; efecto volumétrico en antebrazo interno.", "3D butterfly", "Monarch with shadow; 3D effect on inner forearm.",
             "Tatuaje mariposa 3D", "3D butterfly inner forearm"),
            ("linea-fina/lineaFina21.jpg", "06.jpg", "Colibrí y tulipán", "Colibrí, tulipán y líneas finas en posterior del brazo.", "Hummingbird", "Hummingbird, tulip and geometric lines on back of upper arm.",
             "Tatuaje colibrí linea fina", "Fine line hummingbird tattoo"),
        ],
    ),
    (
        "gallery-tatuajes-cuello",
        "tatuajes-en-el-cuello-galeria",
        "neck-tattoos-gallery-inspiration",
        "Tatuajes en el cuello: línea fina y piezas pequeñas",
        "Neck tattoos: fine line and small pieces",
        ["tatuajes en el cuello", "ideas tatuaje cuello", "galeria cuello"],
        ["neck tattoos", "neck tattoo ideas", "neck tattoo gallery"],
        '<p>El <strong>cuello</strong> es una zona visible y que suele pedir trazos finos, poca tinta o motivos muy claros (símbolos, letras pequeñas, ornamentación). En muchos casos los mismos recursos de línea fina que ves en muñeca, esternón o detrás de la oreja se pueden adaptar al cuello con otro tamaño y composición.</p><p>Aquí reunimos piezas del portafolio en zonas cercanas; cada leyenda indica <em>dónde está realmente el tatuaje en la foto</em>, para que no confundamos inspiración con ubicación exacta.</p>',
        "<p>The <strong>neck</strong> is highly visible and usually calls for fine line, light ink or very readable motifs—small symbols, lettering or ornament. The same fine-line approaches you see on wrist or sternum can often be adapted to the neck with adjusted scale.</p><p>These portfolio shots are from nearby areas; each caption states the <em>actual placement</em> in the photo.</p>",
        "Inspiración (línea fina y zonas altas)",
        "Inspiration (fine line and upper body)",
        "Las leyendas indican la zona real de cada tatuaje en la imagen.",
        "Captions state the real body area in each image.",
        "Hola! Vengo del blog, tatuajes en el cuello, quiero asesoría",
        [
            ("linea-fina/lineaFina9.jpg", "01.jpg", "Estrella y luna en torso alto", "Tatuaje fino centrado en esternón (torso alto); motivos celestes.", "Star and moon on upper chest", "Fine-line sternum piece with celestial motifs.",
             "Tatuaje esternón celeste", "Sternum celestial fine-line"),
            ("linea-fina/lineaFina13.jpg", "02.jpg", "Sol y luna en brazo", "Composición vertical con sol, luna y puntillismo en brazo superior.", "Sun and moon on arm", "Vertical sun, moon and stippling on upper arm.",
             "Tatuaje brazo celestial", "Celestial upper arm tattoo"),
            ("linea-fina/lineaFina17.jpg", "03.jpg", "Palabra en muñeca", "Script fina \"now\" en muñeca interna.", "Wrist script", "Fine \"now\" script on inner wrist.",
             "Tatuaje muñeca minimal", "Minimal inner wrist tattoo"),
            ("linea-fina/lineaFina1.JPEG", "04.jpg", "Gracias en mano", "Texto \"Gracias\" con corazón en base del pulgar.", "Thanks on hand", "\"Gracias\" with tiny heart near thumb base.",
             "Tatuaje mano lettering", "Hand lettering tattoo"),
            ("linea-fina/lineaFina19.jpg", "05.jpg", "Cerebro y corazón", "Símbolo minimal de cerebro y corazón en bicep interno.", "Brain and heart", "Minimal brain/heart symbol on inner bicep.",
             "Tatuaje minimal brazo", "Minimal inner bicep tattoo"),
            ("linea-fina/lineaFina23.jpg", "06.jpg", "Frase en costilla", "Script \"no matter where\" en costado del torso.", "Phrase on ribs", "Fine script \"no matter where\" on side torso.",
             "Tatuaje costillas frase", "Rib script tattoo"),
        ],
    ),
    (
        "gallery-tatuajes-antebrazo",
        "tatuajes-en-el-antebrazo-galeria",
        "forearm-tattoos-gallery-inspiration",
        "Tatuajes en el antebrazo: realismo, anime y vertical",
        "Forearm tattoos: realism, anime and vertical layouts",
        ["tatuajes en el antebrazo", "ideas antebrazo", "galeria antebrazo"],
        ["forearm tattoos", "forearm tattoo ideas", "forearm gallery"],
        '<p>El <strong>antebrazo</strong> es uno de los lugares más versátiles: da buen espacio para retratos alargados, escenas religiosas, animales con textura, anime a color o piezas surrealistas con relojes y ojos. El flujo del músculo ayuda a componer en vertical y el área suele cicatrizar con lectura clara desde lejos.</p><p>Las referencias que ves son tatuajes reales en antebrazo; úsalas para imaginar escala, contraste y estilo antes de cerrar boceto.</p>',
        "<p>The <strong>forearm</strong> is versatile: room for tall portraits, religious scenes, textured animals, color anime or surreal work with clocks and eyes. Muscle flow supports vertical layouts and the area usually heals with strong readability.</p><p>These are real forearm tattoos—use them to gauge scale, contrast and style before you finalize a sketch.</p>",
        "Referencias en antebrazo",
        "Forearm references",
        "Todas las fotos son tatuajes ubicados en antebrazo.",
        "Every photo shows a forearm tattoo.",
        "Hola! Vengo del blog, tatuajes en el antebrazo, quiero asesoría",
        [
            ("realismo/realismo5.JPG", "01.jpg", "Dios griego", "Antebrazo interno con busto clásico y barba detallada.", "Greek god", "Inner forearm classical bust.",
             "Antebrazo realismo", "Inner forearm realism"),
            ("realismo/realismo19.jpg", "02.jpg", "Jesús y cruz", "Retrato vertical con escena de cruz cerca de la muñeca.", "Jesus and cross", "Vertical portrait with crucifixion near wrist.",
             "Tatuaje religioso antebrazo", "Religious forearm tattoo"),
            ("realismo/realismo13.JPG", "03.jpg", "Guerrera y runa", "Retrato con casco y runa vikinga en antebrazo interno.", "Warrior and rune", "Helmeted portrait and Norse rune on inner forearm.",
             "Tatuaje antebrazo guerrera", "Warrior inner forearm"),
            ("surrealismo/surrealismo12.jpg", "04.jpg", "Ojo surrealista", "Ojo, rostro y reloj en composición surrealista en antebrazo.", "Surreal eye", "Eye, face and clock surreal inner forearm.",
             "Tatuaje surrealista antebrazo", "Surreal forearm piece"),
            ("puntillismo/punt1.jpg", "05.jpg", "Naruto hermanos", "Anime Naruto: Itachi y Sasuke en antebrazo con color.", "Naruto brothers", "Itachi and Sasuke scene on forearm with color.",
             "Tatuaje anime antebrazo", "Anime forearm tattoo"),
            ("realismo/realismo3.JPG", "06.jpg", "León bajo piel", "León con efecto piel rasgada en antebrazo.", "Lion under skin", "Lion with ripped-skin effect on forearm.",
             "Tatuaje león antebrazo", "Lion forearm tattoo"),
        ],
    ),
    (
        "gallery-tatuajes-espalda",
        "tatuajes-en-la-espalda-galeria",
        "back-tattoos-gallery-inspiration",
        "Tatuajes en la espalda: piezas grandes y zona alta",
        "Back tattoos: large pieces and upper back",
        ["tatuajes en la espalda", "ideas espalda tatuaje", "galeria espalda"],
        ["back tattoos", "back tattoo ideas", "back tattoo gallery"],
        '<p>La <strong>espalda</strong> permite retratos amplios, animales, escenas completas o piezas centradas en la zona alta cerca de los hombros. También se combina a menudo con mangas que bajan por el brazo para unificar la composición. La piel aquí aguanta bien el sombreado y los diseños con fondo oscuro.</p><p>Esta selección mezcla espalda clara con mangas de referencia: fíjate en la leyenda de cada imagen para ver si el foco es espalda, brazo completo o ambos.</p>',
        "<p>The <strong>back</strong> fits large portraits, animals, full scenes or upper-back focal pieces near the shoulders. It often pairs with sleeves continuing down the arm. Skin here usually holds heavy shading and dark backgrounds well.</p><p>This mix includes clear upper-back work plus sleeve references—read each caption to see back, full arm or both.</p>",
        "Espalda y mangas de referencia",
        "Back and sleeve references",
        "Incluye espalda alta y piezas que conectan con manga.",
        "Includes upper back and pieces that flow into sleeves.",
        "Hola! Vengo del blog, tatuajes en la espalda, quiero asesoría",
        [
            ("microrealismo/micro9.JPEG", "01.jpg", "Husky y lirios", "Husky realista con ojos azules y lirios en espalda alta; se ve árbol \"Family\" cercano.", "Husky and lilies", "Realistic husky with blue eyes and lilies on upper back.",
             "Tatuaje espalda husky", "Upper back husky tattoo"),
            ("linea-fina/lineaFina12.jpg", "02.jpg", "Leo ornamental", "Símbolo Leo y ornamentación en esternón (zona frontal alta).", "Leo ornamental", "Leo zodiac sign on sternum ornamental.",
             "Tatuaje esternón Leo", "Sternum Leo tattoo"),
            ("realismo/realismo25.jpg", "03.jpg", "Manga religiosa", "Manga completa vista de perfil: ángel, cruz y figura.", "Religious sleeve", "Full sleeve profile: angel, cross and figure.",
             "Manga brazo completa", "Full sleeve tattoo"),
            ("realismo/realismo18.jpg", "04.jpg", "Manga ángel y Jesús", "Ángel en brazo y Jesús en antebrazo; pieza extensa.", "Angel sleeve", "Angel and Jesus full sleeve.",
             "Manga religiosa brazo", "Religious arm sleeve"),
            ("surrealismo/surrealismo5.JPEG", "05.jpg", "Manga ángel y brújula", "Ángel, guerrero, reloj y brújula en manga completa.", "Angel sleeve", "Angel, warrior, clock and compass sleeve.",
             "Manga tatuaje hombre", "Full sleeve male tattoo"),
            ("realismo/realismo12.JPEG", "06.jpg", "Oso y águila", "Manga con oso rugiendo y águila en antebrazo.", "Bear and eagle", "Sleeve with roaring bear and eagle forearm.",
             "Manga oso y águila", "Bear and eagle sleeve"),
        ],
    ),
    (
        "gallery-tatuajes-pareja",
        "tatuajes-en-pareja-galeria",
        "couple-tattoos-gallery-inspiration",
        "Tatuajes en pareja: matching y promesas",
        "Couple tattoos: matching art and promises",
        ["tatuajes en pareja", "tatuajes matching pareja", "galeria pareja"],
        ["couple tattoos", "matching tattoos", "couple tattoo gallery"],
        '<p>Los <strong>tatuajes en pareja</strong> pueden ser dos piezas idénticas, dos mitades que encajan, fechas o nombres, promesas de meñique o símbolos que solo cobran sentido juntos. Lo habitual es ubicarlos en manos, antebrazos o piernas para que ambos los vean a la misma altura al juntarse.</p><p>Abajo hay ejemplos reales de lettering compartido, acuarela y diseños gemelos; piensa en tamaño mínimo legible y en cómo envejecerá el trazo en cada uno.</p>',
        "<p><strong>Couple tattoos</strong> can be identical pieces, two halves, dates or names, pinky promises, or symbols that only make sense together. Hands, forearms or legs are common so they align when you join up.</p><p>Below are real examples—think minimum readable size and how line work will age on both of you.</p>",
        "Matching y diseños compartidos",
        "Matching and shared designs",
        "Letras gemelas, promesas y piezas que se complementan.",
        "Twin lettering, promises and complementary pieces.",
        "Hola! Vengo del blog, tatuajes en pareja, quiero asesoría",
        [
            ("linea-fina/lineaFina14.jpg", "01.jpg", "WHY NOT", "Dos manos con mismo texto \"WHY NOT\" entre pulgar e índice.", "WHY NOT", "Two hands matching WHY NOT on thenar area.",
             "Tatuajes manos pareja", "Matching hand tattoos"),
            ("linea-fina/lineaFina16.jpg", "02.jpg", "Meñique prometido", "Dos antebrazos con promesa de meñique y hilo.", "Pinky promise", "Two inner forearms with pinky promise and thread.",
             "Tatuajes pareja antebrazo", "Couple forearm tattoos"),
            ("linea-fina/lineaFina10.jpg", "03.jpg", "Brújulas en gemelo", "Dos piernas con brújula y montañas idénticas en pantorrilla.", "Compass calves", "Matching compass and mountains on calves.",
             "Tatuajes pareja pierna", "Matching leg tattoos"),
            ("libre/libre2.JPEG", "04.jpg", "Madre e hijo", "Dos antebrazos con silueta madre-hijo y acuarela.", "Mother and child", "Matching watercolor mother-child silhouettes on forearms.",
             "Tatuajes pareja familia", "Matching family forearms"),
            ("linea-fina/lineaFina18.jpg", "05.jpg", "Nombres y corazón", "Antebrazo con nombres Diego, Camilo, Steeven y corazón garabato.", "Names and heart", "Inner forearm with names in circle around sketched heart.",
             "Tatuaje nombres familia", "Family names forearm tattoo"),
            ("linea-fina/lineaFina14.jpg", "06.jpg", "WHY NOT (detalle)", "Mismo diseño de letras finas en ambas manos.", "WHY NOT detail", "Duplicate fine lettering pair.",
             "Manos tatuaje pareja", "Partner hand tattoos"),
        ],
    ),
]

# Fix duplicate in pareja - use lineaFina14 once and libre2 for 6th different - change last item
DATA[-1][-1][-1] = (
    "linea-fina/lineaFina23.jpg",
    "06.jpg",
    "Frase costilla",
    "Script \"no matter where\" en costado; a veces piezas de pareja complementarias.",
    "Rib phrase",
    "Side script; sometimes paired phrases.",
    "Tatuaje frase costillas",
    "Rib phrase tattoo",
)

# Append remaining posts
DATA.extend(
    [
        (
            "gallery-tatuajes-mujer-brazo",
            "tatuajes-para-mujer-en-el-brazo-galeria",
            "womens-arm-tattoos-gallery-inspiration",
            "Tatuajes para mujer en el brazo: línea fina y color",
            "Women's arm tattoos: fine line and color",
            ["tatuajes para mujer en el brazo", "tatuajes brazo mujer", "galeria brazo mujer"],
            ["womens arm tattoos", "arm tattoos for women", "female arm tattoo gallery"],
            '<p>En el <strong>brazo</strong> puedes llevar desde retratos y mitología en microrealismo hasta mariposas, flores en puntillismo o motivos celestes en línea fina. El brazo superior da espacio para composiciones redondas; el antebrazo favorece piezas alargadas y detalle cerca de la muñeca.</p><p>Estas fotos muestran trabajos reales en distintas alturas del brazo: revisa la leyenda para ver si es zona posterior, interior o antebrazo completo.</p>',
            "<p>The <strong>arm</strong> can hold micro-realistic portraits, mythology, dotwork butterflies, florals or celestial fine line. The upper arm suits round compositions; the outer or inner forearm suits vertical layouts and detail near the wrist.</p><p>These are real pieces at different arm heights—check each caption for outer, inner or back of arm.</p>",
            "Brazo femenino: estilos variados",
            "Women's arms: mixed styles",
            "Brazo superior, posterior del brazo y antebrazo según la imagen.",
            "Upper arm, back of arm or forearm per image.",
            "Hola! Vengo del blog, tatuajes mujer brazo, quiero asesoría",
            [
                ("microrealismo/micro8.JPEG", "01.jpg", "Medusa", "Medusa en posterior del brazo superior.", "Medusa", "Medusa on back of upper arm.",
                 "Medusa brazo mujer", "Medusa woman's arm"),
                ("surrealismo/surrealismo4.JPEG", "02.jpg", "Mariposa y rostro", "Brazo superior con retrato y mariposa.", "Butterfly portrait", "Upper arm portrait with butterfly.",
                 "Brazo mariposa mujer", "Butterfly arm woman"),
                ("puntillismo/punt8.jpg", "03.jpg", "Mariposa y flores", "Antebrazo exterior con mariposa y flores en puntillismo.", "Butterfly flowers", "Outer forearm butterfly and flowers dotwork.",
                 "Antebrazo flores mujer", "Forearm floral woman"),
                ("linea-fina/lineaFina11.jpg", "04.jpg", "Tortuga", "Brazo superior con tortuga minimal.", "Turtle", "Minimal turtle upper arm.",
                 "Tatuaje tortuga brazo", "Turtle arm tattoo"),
                ("linea-fina/lineaFina13.jpg", "05.jpg", "Celestial brazo", "Sol, luna y líneas en brazo superior.", "Celestial arm", "Sun, moon, lines on upper arm.",
                 "Tatuaje celestial brazo", "Celestial upper arm"),
                ("libre/libre3.JPEG", "06.jpg", "Mariposa 3D", "Antebrazo interno con mariposa monarca.", "3D butterfly", "Inner forearm monarch 3D butterfly.",
                 "Mariposa antebrazo mujer", "Woman forearm butterfly"),
            ],
        ),
        (
            "gallery-tatuajes-mano",
            "tatuajes-en-la-mano-galeria",
            "hand-tattoos-gallery-inspiration",
            "Tatuajes en la mano: lettering y símbolos",
            "Hand tattoos: lettering and symbols",
            ["tatuajes en la mano", "ideas tatuaje mano", "galeria mano"],
            ["hand tattoos", "hand tattoo ideas", "hand tattoo gallery"],
            '<p>La <strong>mano</strong> y la base del pulgar son zonas de alta exposición: suelen usarse palabras cortas, símbolos mínimos o microdetalle que se lea de un vistazo. La piel aquí se renueva rápido, así que el trazo fino requiere buen cuidado y, a veces, retoques con el tiempo.</p><p>Incluimos también antebrazo y muñeca cuando el diseño forma parte de la misma lectura visual que la mano.</p>',
            "<p>The <strong>hand</strong> and thenar area are high-visibility spots—short words, minimal symbols or micro detail that reads at a glance. Skin here turns over quickly, so fine line needs solid aftercare and sometimes touch-ups.</p><p>We also include forearm or wrist when the design reads together with the hand.</p>",
            "Mano y zonas contiguas",
            "Hands and adjacent areas",
            "Manos, muñeca y antebrazo en algunas referencias.",
            "Hands, wrist and forearm in some references.",
            "Hola! Vengo del blog, tatuajes en la mano, quiero asesoría",
            [
                ("linea-fina/lineaFina1.JPEG", "01.jpg", "Gracias", "Script \"Gracias\" con corazón en base del pulgar.", "Thanks", "Thanks with heart on thumb base.",
                 "Tatuaje mano gracias", "Hand thanks tattoo"),
                ("linea-fina/lineaFina14.jpg", "02.jpg", "WHY NOT", "Texto entre pulgar e índice en ambas manos.", "WHY NOT", "Text on thenar eminence.",
                 "Tatuaje mano WHY NOT", "WHY NOT hand tattoo"),
                ("linea-fina/lineaFina16.jpg", "03.jpg", "Promesa en antebrazo", "Manos de promesa: diseño en antebrazo (pareja).", "Pinky promise", "Pinky promise design on forearms.",
                 "Tatuaje promesa brazo", "Pinky promise tattoo"),
                ("linea-fina/lineaFina17.jpg", "04.jpg", "Muñeca now", "Script en muñeca interna (continuación mano-muñeca).", "Wrist now", "Inner wrist script near hand.",
                 "Tatuaje muñeca", "Inner wrist tattoo"),
                ("microrealismo/micro5.jpg", "05.jpg", "Perro Estrella", "Antebrazo con retrato; mano visible al borde.", "Dog Estrella", "Forearm dog portrait.",
                 "Tatuaje antebrazo perro", "Dog forearm"),
                ("linea-fina/lineaFina5.jpg", "06.jpg", "Perseverancia", "Script vertical en antebrazo interno masculino.", "Perseverance", "Vertical script inner forearm.",
                 "Tatuaje antebrazo frase", "Forearm script tattoo"),
            ],
        ),
        (
            "gallery-tatuajes-pequenos-hombres",
            "tatuajes-pequenos-para-hombres-galeria",
            "small-tattoos-for-men-gallery",
            "Tatuajes pequeños para hombres: frases y símbolos",
            "Small tattoos for men: words and symbols",
            ["tatuajes pequeños para hombres", "tatuajes pequeños hombre", "mini tatuajes hombre"],
            ["small tattoos for men", "small mens tattoos", "minimal tattoos men"],
            '<p>Los <strong>tatuajes pequeños para hombres</strong> funcionan muy bien como una palabra con significado, un animal en tamaño reducido, un retrato mini o un personaje de anime en vertical. Antebrazo interno y bíceps son zonas habituales porque el diseño se lee bien sin ocupar media manga.</p><p>Las referencias combinan lettering fino, realismo compacto y símbolos; piensa en contraste mínimo para que el diseño siga legible años después.</p>',
            "<p><strong>Small men's tattoos</strong> often mean a meaningful word, a tiny animal, a micro portrait or a vertical anime bust. Inner forearm and bicep are common because the design reads clearly without a full sleeve.</p><p>References mix fine lettering, compact realism and symbols—keep enough contrast for long-term readability.</p>",
            "Mini piezas masculinas",
            "Small-scale men's pieces",
            "Letras, iconos y retratos en formato reducido.",
            "Lettering, icons and portraits at small scale.",
            "Hola! Vengo del blog, tatuajes pequeños hombres, quiero asesoría",
            [
                ("linea-fina/lineaFina5.jpg", "01.jpg", "Perseverancia", "Palabra en cursiva fina en antebrazo.", "Perseverance", "Fine cursive script on forearm.",
                 "Pequeño frase antebrazo", "Small forearm word"),
                ("realismo/realismo3.JPG", "02.jpg", "León fragmentado", "León en sección visible (composición focal).", "Lion", "Lion focal section on forearm.",
                 "Tatuaje león", "Lion tattoo"),
                ("linea-fina/lineaFina19.jpg", "03.jpg", "Cerebro-corazón", "Símbolo pequeño en bicep.", "Brain-heart", "Small symbol inner bicep.",
                 "Minimal bicep", "Minimal bicep"),
                ("microrealismo/micro1.JPG", "04.jpg", "Bulldog", "Retrato pequeño de bulldog en antebrazo.", "Bulldog", "Small bulldog portrait forearm.",
                 "Micro retrato perro", "Small dog portrait"),
                ("linea-fina/lineaFina18.jpg", "05.jpg", "Nombres y corazón", "Círculo con nombres y corazón garabato.", "Names heart", "Names circle heart.",
                 "Tatuaje nombres pequeño", "Small names tattoo"),
                ("anime/anime2.JPG", "06.jpg", "Zoro", "Busto anime Zoro en pierna o antebrazo (formato vertical).", "Zoro", "Zoro bust anime vertical.",
                 "Tatuaje anime pequeño", "Small anime piece"),
            ],
        ),
        (
            "gallery-tatuajes-pequenos-mujer",
            "tatuajes-pequenos-para-mujer-galeria",
            "small-tattoos-for-women-gallery",
            "Tatuajes pequeños para mujer: delicados y discretos",
            "Small tattoos for women: delicate and discreet",
            ["tatuajes pequeños para mujer", "mini tatuajes mujer", "tatuajes discretos mujer"],
            ["small tattoos for women", "tiny tattoos women", "delicate womens tattoos"],
            '<p>Los <strong>tatuajes pequeños para mujer</strong> suelen ir en línea fina: escorpiones, tortugas, colibríes, palabras en muñeca o microretratos de mascotas. Son ideales para una primera pieza o para zonas que quieras cubrir con ropa cuando haga falta.</p><p>La selección muestra distintas escalas y ubicaciones (cadera, brazo, muñeca, costillas); elige con tu artista el tamaño mínimo viable para que el detalle no se pierda.</p>',
            "<p><strong>Small women's tattoos</strong> are often fine line—scorpions, turtles, hummingbirds, wrist words or pet micro-portraits. Great for a first tattoo or areas you can cover when needed.</p><p>The set shows different scales and placements—pick a minimum size with your artist so detail holds.</p>",
            "Mini tatuajes femeninos",
            "Small feminine tattoos",
            "Animales, frases y retratos en tamaño reducido.",
            "Animals, phrases and portraits at small size.",
            "Hola! Vengo del blog, tatuajes pequeños mujer, quiero asesoría",
            [
                ("linea-fina/lineaFina15.jpg", "01.jpg", "Escorpión", "Escorpión fino con corazón en cadera.", "Scorpion", "Fine scorpion with heart on hip.",
                 "Escorpión pequeño", "Small scorpion"),
                ("linea-fina/lineaFina11.jpg", "02.jpg", "Tortuga", "Tortuga pequeña en brazo superior.", "Turtle", "Small turtle upper arm.",
                 "Tortuga mini", "Mini turtle"),
                ("linea-fina/lineaFina21.jpg", "03.jpg", "Colibrí", "Colibrí pequeño en posterior del brazo.", "Hummingbird", "Small hummingbird on back of upper arm.",
                 "Colibrí mini brazo", "Mini hummingbird arm"),
                ("microrealismo/micro3.jpg", "04.jpg", "Toby perro", "Retrato pequeño de perro con nombre Toby.", "Toby dog", "Small dog portrait with name.",
                 "Micro perro", "Micro dog portrait"),
                ("linea-fina/lineaFina17.jpg", "05.jpg", "now", "Palabra fina en muñeca.", "now", "Fine word on wrist.",
                 "Muñeca mini", "Tiny wrist"),
                ("linea-fina/lineaFina23.jpg", "06.jpg", "no matter where", "Frase fina en costillas.", "no matter where", "Fine phrase on ribs.",
                 "Frase costilla", "Rib phrase"),
            ],
        ),
    ]
)

DATA.extend(
    [
        (
            "gallery-tatuajes-pierna",
            "tatuajes-en-la-pierna-galeria",
            "leg-tattoos-gallery-inspiration",
            "Tatuajes en la pierna: muslo, espinilla y tobillo",
            "Leg tattoos: thigh, shin and ankle",
            ["tatuajes en la pierna", "ideas tatuaje pierna", "galeria pierna"],
            ["leg tattoos", "leg tattoo ideas", "leg tattoo gallery"],
            '<p>La <strong>pierna</strong> ofrece muslo para composiciones amplias (orientales, retratos apilados, animales surrealistas), espinilla para piezas altas en vertical y zona del tobillo para diseños más acotados con curvas que siguen el hueso. El dolor y el tiempo de sesión cambian mucho entre muslo y espinilla.</p><p>Aquí hay realismo, anime, micro y piezas ilustrativas; cada leyenda indica si la foto es muslo, pierna completa, espinilla o tobillo.</p>',
            "<p>The <strong>leg</strong> offers the thigh for big compositions (Japanese work, stacked portraits, surreal animals), the shin for tall vertical pieces, and the ankle for smaller designs that follow bone curves. Pain and session length differ a lot by area.</p><p>You'll see realism, anime, micro and illustrative work—each caption notes thigh, full leg, shin or ankle.</p>",
            "Pierna: distintas alturas",
            "Leg: different placements",
            "Muslo, costado de pierna, espinilla y tobillo según imagen.",
            "Thigh, side of leg, shin or ankle per image.",
            "Hola! Vengo del blog, tatuajes en la pierna, quiero asesoría",
            [
                ("surrealismo/surrealismo1.jpg", "01.jpg", "Anubis y pirámides", "Dios Anubis con pirámides en pierna inferior.", "Anubis", "Anubis with pyramids on lower leg.",
                 "Tatuaje pierna Anubis", "Anubis leg tattoo"),
                ("realismo/realismo2.JPG", "02.jpg", "Pitbull en pierna", "Retrato de pitbull con arcos góticos en espinilla.", "Pitbull leg", "Pitbull portrait with gothic arches on shin.",
                 "Tatuaje pierna perro", "Dog portrait leg tattoo"),
                ("realismo/realismo11.JPEG", "03.jpg", "Retratos nativos", "Tres retratos apilados en costado de pierna.", "Native portraits", "Three stacked portraits on side of leg.",
                 "Tatuaje pierna retratos", "Leg portrait tattoo"),
                ("surrealismo/surrealismo2.JPEG", "04.jpg", "Polilla y cráneo", "Polilla grande con cráneo en el tórax; en muslo masculino.", "Moth skull", "Large moth with skull thorax on thigh.",
                 "Tatuaje muslo polilla", "Thigh moth tattoo"),
                ("anime/anime4.JPG", "05.jpg", "Dragón y máscara", "Dragón japonés, máscara kitsune y luna en muslo.", "Dragon kitsune", "Japanese dragon, fox mask and moon on thigh.",
                 "Tatuaje muslo anime", "Anime thigh tattoo"),
                ("microrealismo/micro6.JPG", "06.jpg", "Fénix en tobillo", "Fénix con acentos amarillo-naranja y palabra Renacer.", "Phoenix ankle", "Phoenix with orange accents and Renacer script.",
                 "Tatuaje tobillo fénix", "Ankle phoenix tattoo"),
            ],
        ),
        (
            "gallery-tatuajes-espalda-mujer",
            "tatuajes-en-la-espalda-para-mujer-galeria",
            "back-tattoos-for-women-gallery",
            "Tatuajes en la espalda para mujer: retratos y florales",
            "Back tattoos for women: portraits and florals",
            ["tatuajes en la espalda para mujer", "tatuajes espalda mujer", "galeria espalda femenina"],
            ["back tattoos for women", "womens back tattoos", "female back tattoo ideas"],
            '<p>La <strong>espalda femenina</strong> se presta a retratos de mascotas con flores, ornamentación en línea fina en la línea media o piezas que combinan simbolismo y delicadeza. También es habitual integrar el esternón o el brazo cuando quieres un conjunto más amplio.</p><p>Las imágenes incluyen espalda alta y otras zonas de referencia; lee la descripción de cada una para ubicar bien el diseño.</p>',
            "<p>The <strong>female back</strong> suits pet portraits with florals, fine-line center-line ornament, or symbolic delicate work. Sternum or arm can tie in when you want a bigger set.</p><p>Images include upper back and related areas—read each caption for placement.</p>",
            "Espalda y torso alto (mujer)",
            "Back and upper torso (women)",
            "Espalda alta, esternón y brazo en distintas referencias.",
            "Upper back, sternum and arm in different references.",
            "Hola! Vengo del blog, tatuajes espalda mujer, quiero asesoría",
            [
                ("microrealismo/micro9.JPEG", "01.jpg", "Husky y lirios", "Husky con ojos azules y lirios en espalda alta; tatuaje árbol Family.", "Husky back", "Husky with lilies on upper back near Family tree.",
                 "Espalda husky mujer", "Woman upper back husky"),
                ("linea-fina/lineaFina12.jpg", "02.jpg", "Leo ornamental", "Símbolo Leo con ornamentación en esternón.", "Leo sternum", "Zodiac Leo ornamental on sternum.",
                 "Tatuaje esternón mujer", "Woman sternum tattoo"),
                ("linea-fina/lineaFina9.jpg", "03.jpg", "Estrella y luna", "Motivos celestes en esternón (zona frontal alta).", "Star moon", "Celestial sternum piece.",
                 "Tatuaje torso alto", "Upper torso tattoo"),
                ("surrealismo/surrealismo4.JPEG", "04.jpg", "Mariposa en brazo", "Retrato con mariposa para composición femenina (brazo).", "Butterfly arm", "Female portrait with butterfly on arm.",
                 "Tatuaje brazo mujer", "Woman arm tattoo"),
                ("puntillismo/punt5.jpg", "05.jpg", "Mano y flor", "Ilustración en muslo femenino.", "Hand flower", "Illustrative thigh piece.",
                 "Tatuaje muslo mujer", "Woman thigh tattoo"),
                ("linea-fina/lineaFina7.JPEG", "06.jpg", "Self hug", "Torso abrazándose con flores en el cuello y frase \"we'll be alright.\" en bicep interno.", "Self hug", "Self-hugging torso with neck florals and \"we'll be alright.\" script on inner bicep.",
                 "Tatuaje brazo linea fina", "Fine line upper arm"),
            ],
        ),
        (
            "gallery-tatuajes-minimalistas",
            "tatuajes-minimalistas-galeria",
            "minimalist-tattoos-gallery-inspiration",
            "Tatuajes minimalistas: línea fina y pocos trazos",
            "Minimalist tattoos: fine line and simple marks",
            ["tatuajes minimalistas", "minimal tattoo", "tatuajes linea fina"],
            ["minimalist tattoos", "fine line tattoos", "minimal tattoo gallery"],
            '<p>Los <strong>tatuajes minimalistas</strong> se basan en trazos finos, siluetas sencillas, tipografía delicada o iconos pequeños con poco relleno. Funcionan en mano, muñeca, bíceps interno, costillas o antebrazo cuando buscas algo ligero visualmente pero bien definido en el dibujo.</p><p>Esta selección muestra lettering, símbolos y animales reducidos; el estilo exige precisión en la piel y buen cuidado para que el trazo no se difumine.</p>',
            "<p><strong>Minimalist tattoos</strong> rely on thin lines, simple silhouettes, delicate lettering or small icons with little fill. They work on hands, wrists, inner biceps, ribs or forearms when you want a light look with crisp drawing.</p><p>This set shows lettering, symbols and tiny creatures—precision and aftercare matter so lines stay sharp.</p>",
            "Minimal y línea fina",
            "Minimal and fine line",
            "Letras, iconos y frases con trazo reducido.",
            "Letters, icons and phrases with minimal ink.",
            "Hola! Vengo del blog, tatuajes minimalistas, quiero asesoría",
            [
                ("linea-fina/lineaFina1.JPEG", "01.jpg", "Gracias", "Script en mano.", "Thanks", "Hand script.",
                 "Minimal mano", "Minimal hand"),
                ("linea-fina/lineaFina17.jpg", "02.jpg", "now", "Palabra en muñeca.", "now", "Wrist word.",
                 "Minimal muñeca", "Minimal wrist"),
                ("linea-fina/lineaFina19.jpg", "03.jpg", "Cerebro-corazón", "Icono en bicep.", "Brain heart", "Inner bicep icon.",
                 "Minimal bicep", "Minimal bicep"),
                ("linea-fina/lineaFina11.jpg", "04.jpg", "Tortuga", "Tortuga pequeña con olas.", "Turtle", "Small turtle upper arm.",
                 "Minimal tortuga", "Minimal turtle"),
                ("linea-fina/lineaFina23.jpg", "05.jpg", "Frase costilla", "Script \"no matter where\".", "Rib phrase", "Side script.",
                 "Minimal costillas", "Minimal ribs"),
                ("linea-fina/lineaFina5.jpg", "06.jpg", "Perseverancia", "Script vertical antebrazo.", "Perseverance", "Vertical forearm script.",
                 "Minimal frase", "Minimal phrase"),
            ],
        ),
        (
            "gallery-tatuajes-cuello-hombres",
            "tatuajes-en-el-cuello-para-hombres-galeria",
            "neck-tattoos-for-men-gallery",
            "Tatuajes en el cuello para hombres: estilos y referencias",
            "Neck tattoos for men: styles and references",
            ["tatuajes en el cuello para hombres", "tatuajes cuello hombre", "ideas cuello masculino"],
            ["neck tattoos for men", "mens neck tattoos", "male neck tattoo ideas"],
            '<p>En el <strong>cuello masculino</strong> suele apostarse por frases cortas, ornamentación o piezas que conecten con barba y mandíbula; también se ve mucho el salto desde el antebrazo cuando el diseño sube hacia el hombro. La piel del cuello es sensible y el sol la castiga, así que el mantenimiento importa.</p><p>Las fotos siguientes muestran estilos afines en <strong>brazo y mano</strong> como referencia de trazo; la leyenda indica la zona real de cada tatuaje.</p>',
            "<p><strong>Men's neck</strong> work often means short phrases, ornament or pieces that tie into beard and jaw; designs can also climb from the forearm toward the shoulder. Neck skin is sensitive and sun-exposed—aftercare matters.</p><p>These photos show related styles on <strong>arm and hand</strong> as line-quality references—captions show actual placement.</p>",
            "Cuello: inspiración y trazo masculino",
            "Neck: inspiration and men's line work",
            "Referencias en brazo y mano; lee la ubicación en cada foto.",
            "Arm and hand references; read placement in each shot.",
            "Hola! Vengo del blog, tatuajes cuello hombres, quiero asesoría",
            [
                ("linea-fina/lineaFina5.jpg", "01.jpg", "Perseverancia", "Script fina en antebrazo masculino.", "Perseverance", "Fine script on male forearm.",
                 "Frase antebrazo hombre", "Male forearm script"),
                ("realismo/realismo7.JPEG", "02.jpg", "Espartano", "Guerrero con marco griego en antebrazo.", "Spartan", "Spartan warrior with Greek key border.",
                 "Antebrazo espartano", "Spartan forearm"),
                ("realismo/realismo3.JPG", "03.jpg", "León", "León con piel rasgada.", "Lion", "Lion ripped skin forearm.",
                 "León antebrazo", "Lion forearm"),
                ("puntillismo/punt2.JPG", "04.jpg", "Gyutaro", "Anime a color en antebrazo.", "Gyutaro", "Color anime forearm.",
                 "Anime antebrazo", "Anime forearm"),
                ("puntillismo/punt4.jpg", "05.jpg", "Douma", "Anime Demon Slayer en antebrazo.", "Douma", "Demon Slayer forearm.",
                 "Anime manga", "Anime forearm"),
                ("microrealismo/micro7.JPEG", "06.jpg", "Zorro auriculares", "Zorro con auriculares en brazo superior.", "Fox headphones", "Fox with headphones upper arm.",
                 "Ilustrativo brazo", "Illustrative upper arm"),
            ],
        ),
        (
            "gallery-tatuajes-hombres-pierna",
            "tatuajes-para-hombres-en-la-pierna-galeria",
            "mens-leg-tattoos-gallery-inspiration",
            "Tatuajes para hombres en la pierna: gran formato",
            "Men's leg tattoos: large-scale work",
            ["tatuajes para hombres en la pierna", "tatuajes pierna hombre", "galeria pierna masculina"],
            ["mens leg tattoos", "leg tattoos for men", "male leg tattoo gallery"],
            '<p>En la <strong>pierna masculina</strong> encajan temáticas mitológicas, retratos realistas de gran tamaño, animales surrealistas, mascotas con acuarela o anime en muslo y espinilla. La pierna aguanta sesiones largas y permite sombras profundas sin el mismo roce que el antebrazo en el día a día.</p><p>Las referencias cubren pierna inferior, muslo y piezas que ocupan varias regiones; revisa cada descripción para ver la extensión real.</p>',
            "<p><strong>Men's legs</strong> suit mythology, large realism, surreal animals, watercolor pets or anime on thigh and shin. Legs tolerate long sessions and deep shading with less daily abrasion than the forearm.</p><p>References span lower leg, thigh and multi-region pieces—check each description for coverage.</p>",
            "Pierna masculina: realismo y color",
            "Men's legs: realism and color",
            "Muslo, espinilla y pierna completa según la foto.",
            "Thigh, shin or full leg per photo.",
            "Hola! Vengo del blog, tatuajes hombres pierna, quiero asesoría",
            [
                ("surrealismo/surrealismo1.jpg", "01.jpg", "Anubis", "Egipto en pierna inferior.", "Anubis", "Anubis on lower leg.",
                 "Pierna Anubis", "Anubis leg"),
                ("realismo/realismo2.JPG", "02.jpg", "Pitbull", "Retrato grande en espinilla.", "Pitbull", "Large pitbull on shin.",
                 "Espinilla perro", "Dog shin tattoo"),
                ("surrealismo/surrealismo2.JPEG", "03.jpg", "Polilla", "Polilla y cráneo en muslo.", "Moth", "Moth skull thigh.",
                 "Muslo polilla", "Thigh moth"),
                ("realismo/realismo11.JPEG", "04.jpg", "Tres retratos", "Tres rostros en costado de pierna.", "Three portraits", "Three stacked portraits on leg side.",
                 "Pierna retratos", "Leg portraits"),
                ("microrealismo/micro4.jpg", "05.jpg", "Monti chihuahua", "Chihuahua con moño y acuarela en pierna.", "Monti", "Chihuahua with bow on leg.",
                 "Pierna mascota", "Pet leg tattoo"),
                ("anime/anime2.JPG", "06.jpg", "Zoro", "Busto Zoro en pierna o antebrazo.", "Zoro", "Zoro bust on leg/forearm.",
                 "Anime pierna", "Anime leg piece"),
            ],
        ),
        (
            "gallery-tatuajes-elegantes-mujeres",
            "tatuajes-elegantes-para-mujeres-galeria",
            "elegant-tattoos-for-women-gallery",
            "Tatuajes elegantes para mujeres: línea fina y ornamentación",
            "Elegant tattoos for women: fine line and ornament",
            ["tatuajes elegantes para mujeres", "tatuajes finos mujer", "tatuajes sofisticados mujer"],
            ["elegant tattoos for women", "sophisticated womens tattoos", "refined feminine tattoos"],
            '<p>Un <strong>tatuaje elegante para mujer</strong> suele combinar línea fina, simetría, detalle en florales o puntillismo suave y microrealismo en pequeño formato. El esternón, el interior del brazo y el antebrazo son zonas donde el diseño se ve refinado y proporcionado.</p><p>Estas piezas del portafolio muestran zodiacos ornamentales, mariposas, motivos celestes y retratos con serpientes; piensa en equilibrio entre espacio negativo y trazo.</p>',
            "<p><strong>Elegant women's tattoos</strong> often mix fine line, symmetry, soft florals or dotwork and small micro-realism. Sternum, inner arm and forearm read refined and well proportioned.</p><p>Portfolio pieces show ornamental zodiac, butterflies, celestial motifs and portraits with snakes—balance negative space and line.</p>",
            "Elegancia en piel",
            "Elegance on skin",
            "Ornamento, mariposas y retratos finos.",
            "Ornament, butterflies and fine portraits.",
            "Hola! Vengo del blog, tatuajes elegantes mujeres, quiero asesoría",
            [
                ("linea-fina/lineaFina12.jpg", "01.jpg", "Leo ornamental", "Símbolo Leo y ornamentación en esternón.", "Leo sternum", "Zodiac Leo ornamental sternum.",
                 "Tatuaje esternón elegante", "Elegant sternum"),
                ("linea-fina/lineaFina7.JPEG", "02.jpg", "Self hug", "Torso abrazándose con flores y texto \"we'll be alright.\" en bicep interno.", "Self hug", "Self-hugging torso with florals and \"we'll be alright.\" on inner bicep.",
                 "Linea fina brazo", "Fine line upper arm"),
                ("libre/libre3.JPEG", "03.jpg", "Mariposa 3D", "Mariposa monarca con sombra.", "3D butterfly", "Monarch 3D butterfly.",
                 "Mariposa elegante", "Elegant butterfly"),
                ("puntillismo/punt8.jpg", "04.jpg", "Mariposa floral", "Mariposa y flores en puntillismo.", "Butterfly floral", "Butterfly and flowers dotwork.",
                 "Antebrazo elegante", "Elegant forearm"),
                ("linea-fina/lineaFina13.jpg", "05.jpg", "Celestial brazo", "Sol, luna y líneas en brazo superior.", "Celestial", "Sun moon upper arm.",
                 "Celestial mujer", "Woman celestial"),
                ("microrealismo/micro8.JPEG", "06.jpg", "Medusa", "Medusa con serpientes en brazo.", "Medusa", "Medusa snakes upper arm.",
                 "Medusa elegante", "Elegant Medusa"),
            ],
        ),
        (
            "gallery-tatuajes-bonitos-mujer",
            "tatuajes-bonitos-para-mujer-galeria",
            "pretty-tattoos-for-women-gallery",
            "Tatuajes bonitos para mujer: animales y flores",
            "Pretty tattoos for women: animals and flowers",
            ["tatuajes bonitos para mujer", "tatuajes lindos mujer", "ideas tatuajes femeninos"],
            ["pretty tattoos for women", "cute tattoos women", "feminine tattoo ideas"],
            '<p>Los <strong>tatuajes bonitos para mujer</strong> suelen incluir animalitos, flores con color suave o acuarela, colibríes en línea fina y retratos de mascotas con nombre. Son piezas que transmiten cariño y suelen funcionar en brazo, antebrazo o zona baja del brazo cerca de la muñeca.</p><p>Aquí hay tortugas, colibríes, ramos ilustrativos y microretratos; el color puede ser puntual para que el diseño siga ligero.</p>',
            "<p><strong>Pretty women's tattoos</strong> often feature small creatures, soft florals or watercolor, fine-line hummingbirds and pet portraits with names. They read affectionate and work on arm, forearm or near the wrist.</p><p>You'll see turtles, hummingbirds, illustrative bouquets and micro portraits—color can stay accent-only for a light feel.</p>",
            "Motivos dulces y femeninos",
            "Sweet, feminine motifs",
            "Naturaleza, mascotas y color de acento.",
            "Nature, pets and accent color.",
            "Hola! Vengo del blog, tatuajes bonitos mujer, quiero asesoría",
            [
                ("linea-fina/lineaFina11.jpg", "01.jpg", "Tortuga", "Tortuga nadando con burbujas.", "Turtle", "Turtle swimming with bubbles.",
                 "Tortuga bonita", "Cute turtle"),
                ("linea-fina/lineaFina21.jpg", "02.jpg", "Colibrí", "Colibrí y tulipán finos.", "Hummingbird", "Hummingbird tulip.",
                 "Colibrí bonito", "Pretty hummingbird"),
                ("libre/libre1.JPEG", "03.jpg", "Flores acuarela", "Girasoles, orquídea, monstera y abejas en antebrazo; pequeña oveja lineal en muñeca.", "Watercolor flowers", "Sunflowers, orchid, monstera and bees on forearm; tiny line-art sheep on wrist.",
                 "Flores color antebrazo", "Color floral forearm"),
                ("microrealismo/micro3.jpg", "04.jpg", "Toby", "Perro pequeño con nombre Toby.", "Toby dog", "Small dog Toby.",
                 "Perro mini", "Mini dog portrait"),
                ("microrealismo/micro5.jpg", "05.jpg", "Estrella perro", "Perro con flores y nombre Estrella.", "Estrella dog", "Dog with flowers Estrella.",
                 "Pet retrato", "Pet portrait"),
                ("microrealismo/micro2.jpg", "06.jpg", "Peluzita gato", "Gato con nombre Peluzita.", "Peluzita cat", "Cat portrait Peluzita.",
                 "Gato bonito", "Pretty cat tattoo"),
            ],
        ),
        (
            "gallery-tatuajes-mujer-muneca",
            "tatuajes-para-mujer-en-la-muneca-galeria",
            "womens-wrist-tattoos-gallery-inspiration",
            "Tatuajes para mujer en la muñeca: palabras y símbolos",
            "Women's wrist tattoos: words and symbols",
            ["tatuajes para mujer en la muñeca", "tatuajes muñeca mujer", "ideas muñeca femenina"],
            ["womens wrist tattoos", "wrist tattoos for women", "female wrist tattoo ideas"],
            '<p>La <strong>muñeca</strong> es ideal para una palabra corta, una fecha, un latido con corazón, acuarela ligera o un símbolo mínimo que veas cada día. Al ser zona estrecha, el diseño debe ser legible en pocos centímetros y el trazo fino requiere cuidado al curar para no perder detalle.</p><p>Incluimos también mano, costillas o bíceps en escala parecida cuando sirven de referencia para tipografía o iconos pequeños.</p>',
            "<p>The <strong>wrist</strong> suits a short word, a date, a heartbeat line with heart, light watercolor or a minimal symbol you see daily. It's narrow—designs must read in centimeters and fine line needs careful healing.</p><p>We also include hand, ribs or inner bicep at similar scale when it helps reference tiny lettering or icons.</p>",
            "Muñeca femenina: mini piezas",
            "Women's wrists: tiny pieces",
            "Muñeca, mano y zonas pequeñas de apoyo.",
            "Wrist, hand and small supporting areas.",
            "Hola! Vengo del blog, tatuajes muñeca mujer, quiero asesoría",
            [
                ("linea-fina/lineaFina17.jpg", "01.jpg", "now", "Script \"now\" en muñeca interna.", "now", "Inner wrist now.",
                 "Muñeca now", "Wrist now"),
                ("linea-fina/lineaFina4.JPEG", "02.jpg", "Cruz, latido y corazón", "Cruz, línea de latido y corazón con manchas acuarela azul y rosa en muñeca interna.", "Cross EKG heart", "Cross, heartbeat line and heart with blue and pink watercolor on inner wrist.",
                 "Tatuaje muñeca acuarela", "Watercolor inner wrist tattoo"),
                ("linea-fina/lineaFina1.JPEG", "03.jpg", "Gracias", "Script en mano (zona cercana a muñeca).", "Thanks", "Hand script near wrist.",
                 "Mano gracias", "Hand thanks"),
                ("linea-fina/lineaFina23.jpg", "04.jpg", "Frase costilla", "Script lateral (referencia de tipografía fina).", "Rib phrase", "Fine side script (typography ref).",
                 "Script fina", "Fine script"),
                ("linea-fina/lineaFina19.jpg", "05.jpg", "Cerebro-corazón", "Símbolo pequeño en bicep (escala similar a muñeca).", "Brain heart", "Small inner bicep symbol.",
                 "Símbolo pequeño", "Small symbol"),
                ("linea-fina/lineaFina15.jpg", "06.jpg", "Escorpión", "Escorpión fino en cadera (escala pequeña).", "Scorpion", "Fine scorpion hip.",
                 "Mini escorpión", "Mini scorpion"),
            ],
        ),
        (
            "gallery-tatuajes-pequenos-amigas",
            "tatuajes-pequenos-para-amigas-galeria",
            "small-friendship-tattoos-gallery-inspiration",
            "Tatuajes pequeños para amigas: matching y recuerdos",
            "Small friendship tattoos: matching art and memories",
            ["tatuajes pequeños para amigas", "tatuajes amigas", "matching amigas"],
            ["small friendship tattoos", "best friend tattoos", "matching friend tattoos"],
            '<p>Los <strong>tatuajes para amigas</strong> suelen ser piezas gemelas en antebrazo, manos con la misma frase, brújulas en la pierna o siluetas que representen la historia compartida. Lo importante es que el tamaño sea sostenible para ambas y que el significado siga claro años después.</p><p>Estas referencias muestran promesas, nombres y símbolos repetidos; puedes adaptar el diseño a la zona que prefieran las dos.</p>',
            "<p><strong>Friendship tattoos</strong> are often twin pieces on forearms, matching hand phrases, leg compasses or silhouettes that tell your shared story. Size should work for both people and meaning should stay clear over time.</p><p>References show promises, names and repeated symbols—adapt placement to what both friends want.</p>",
            "Amigas: piezas gemelas",
            "Friends: twin pieces",
            "Manos, piernas y antebrazos con diseños compartidos.",
            "Hands, legs and forearms with shared designs.",
            "Hola! Vengo del blog, tatuajes amigas, quiero asesoría",
            [
                ("linea-fina/lineaFina16.jpg", "01.jpg", "Meñique prometido", "Dos antebrazos con promesa de meñique.", "Pinky promise", "Two forearms pinky promise.",
                 "Tatuajes amigas antebrazo", "Friend forearm tattoos"),
                ("linea-fina/lineaFina10.jpg", "02.jpg", "Brújulas", "Dos pantorrillas con brújula igual.", "Compasses", "Matching compass calves.",
                 "Amigas pierna", "Friend leg tattoos"),
                ("linea-fina/lineaFina14.jpg", "03.jpg", "WHY NOT", "Dos manos con mismo texto.", "WHY NOT", "Two hands WHY NOT.",
                 "Manos amigas", "Friend hand tattoos"),
                ("libre/libre2.JPEG", "04.jpg", "Madre e hijo", "Dos antebrazos acuarela.", "Mother child", "Two forearms watercolor.",
                 "Matching acuarela", "Matching watercolor"),
                ("linea-fina/lineaFina18.jpg", "05.jpg", "Nombres", "Círculo con nombres y corazón.", "Names", "Names circle heart.",
                 "Nombres familia", "Family names"),
                ("linea-fina/lineaFina23.jpg", "06.jpg", "no matter where", "Frase fina en costillas (parejas de frases).", "no matter where", "Rib phrase pair potential.",
                 "Frase pareja", "Phrase pair"),
            ],
        ),
        (
            "gallery-tatuajes-cuello-mujer",
            "tatuajes-en-el-cuello-para-mujer-galeria",
            "neck-tattoos-for-women-gallery",
            "Tatuajes en el cuello para mujer: línea fina y torso alto",
            "Neck tattoos for women: fine line and upper torso",
            ["tatuajes en el cuello para mujer", "tatuajes cuello mujer", "ideas cuello femenino"],
            ["neck tattoos for women", "womens neck tattoos", "female neck tattoo ideas"],
            '<p>El <strong>cuello femenino</strong> combina bien con motivos celestes, florales mini o frases muy finas que suben desde el esternón o el hombro. Por visibilidad, muchas personas empiezan con algo equivalente en muñeca o torso alto antes de subir el diseño.</p><p>Las fotos incluyen esternón, brazo y mano como referencia de estilo; la leyenda indica la zona real del tatuaje en cada caso.</p>',
            "<p>The <strong>women's neck</strong> pairs well with celestial motifs, tiny florals or very fine script rising from sternum or shoulder. For visibility, many people test a similar idea on wrist or upper torso first.</p><p>Photos include sternum, arm and hand as style references—captions show actual placement.</p>",
            "Cuello y torso alto (mujer)",
            "Neck and upper torso (women)",
            "Esternón, brazo y muñeca según la imagen.",
            "Sternum, arm or wrist per image.",
            "Hola! Vengo del blog, tatuajes cuello mujer, quiero asesoría",
            [
                ("linea-fina/lineaFina9.jpg", "01.jpg", "Estrella torso", "Estrella y luna en esternón (zona alta).", "Star torso", "Star moon sternum.",
                 "Tatuaje esternón mujer", "Woman sternum"),
                ("linea-fina/lineaFina13.jpg", "02.jpg", "Celestial brazo", "Sol y luna en brazo superior.", "Celestial arm", "Sun moon upper arm.",
                 "Brazo celestial", "Celestial arm"),
                ("linea-fina/lineaFina17.jpg", "03.jpg", "now", "Script en muñeca.", "now", "Wrist script.",
                 "Muñeca fina", "Fine wrist"),
                ("linea-fina/lineaFina1.JPEG", "04.jpg", "Gracias en mano", "Script en mano.", "Thanks hand", "Hand thanks.",
                 "Mano lettering", "Hand lettering"),
                ("linea-fina/lineaFina12.jpg", "05.jpg", "Leo", "Ornamento Leo en esternón.", "Leo", "Leo sternum.",
                 "Leo mujer", "Woman Leo"),
                ("linea-fina/lineaFina11.jpg", "06.jpg", "Tortuga", "Tortuga en brazo superior.", "Turtle", "Turtle upper arm.",
                 "Tortuga mujer", "Woman turtle"),
            ],
        ),
    ]
)


def build_json(post: tuple) -> dict:
    (
        pid,
        slug_es,
        slug_en,
        title_es,
        title_en,
        kw_es,
        kw_en,
        intro_es,
        intro_en,
        gt_es,
        gt_en,
        gd_es,
        gd_en,
        wa_es,
        items,
    ) = post
    thumb = f"/img/portfolio-blog/galleries/{pid}/01.jpg"
    plain_es = strip_html(intro_es)
    plain_en = strip_html(intro_en)
    base_url = "https://www.legassystudio.com"
    canonical_es = f"{base_url}/es/blog/{slug_es}"
    canonical_en = f"{base_url}/en/blog/{slug_en}"
    gallery_items = []
    for i, it in enumerate(items):
        src_rel, fn, es_t, es_d, en_t, en_d, alt_es, alt_en = it
        public_path = f"/img/portfolio-blog/galleries/{pid}/{fn}"
        gallery_items.append(
            {
                "image": public_path,
                "alt": alt_es,
                "title": es_t,
                "description": es_d,
            }
        )
    gallery_items_en = []
    for it in items:
        src_rel, fn, es_t, es_d, en_t, en_d, alt_es, alt_en = it
        public_path = f"/img/portfolio-blog/galleries/{pid}/{fn}"
        gallery_items_en.append(
            {
                "image": public_path,
                "alt": alt_en,
                "title": en_t,
                "description": en_d,
            }
        )
    return {
        "id": pid,
        "image": thumb,
        "translations": {
            "es": {
                "slug": slug_es,
                "title": title_es,
                "date": DATE_ES,
                "image": thumb,
                "hideHeroImage": True,
                "excerpt": truncate_plain(plain_es, 280),
                "seo": {
                    "title": f"{title_es} - Legassy Studio",
                    "description": truncate_plain(plain_es, 300),
                    "keywords": kw_es,
                    "canonical": canonical_es,
                },
                "contentHtml": intro_es,
                "gallery": {
                    "title": gt_es,
                    "description": gd_es,
                    "items": gallery_items,
                },
                "cta": cta_block(wa_es, "Hi from blog"),
                "contactInfo": contact_es(),
            },
            "en": {
                "slug": slug_en,
                "title": title_en,
                "date": DATE_EN,
                "image": thumb,
                "hideHeroImage": True,
                "excerpt": truncate_plain(plain_en, 280),
                "seo": {
                    "title": f"{title_en} - Legassy Studio",
                    "description": truncate_plain(plain_en, 300),
                    "keywords": kw_en,
                    "canonical": canonical_en,
                },
                "contentHtml": intro_en,
                "gallery": {
                    "title": gt_en,
                    "description": gd_en,
                    "items": gallery_items_en,
                },
                "cta": {
                    "whatsapp": {
                        "text": "Book a tattoo consultation",
                        "url": wa_url_es(wa_es.replace("Hola", "Hi")),
                    },
                    "instagram": {"text": "View portfolio", "url": IG},
                },
                "contactInfo": contact_en(),
            },
        },
    }


def main() -> None:
    for post in DATA:
        pid = post[0]
        items = post[-1]
        out_dir = PUB / pid
        out_dir.mkdir(parents=True, exist_ok=True)
        for it in items:
            src_rel, fn = it[0], it[1]
            src = ROOT / "components/portfolio/assets" / src_rel
            shutil.copy2(src, out_dir / fn)
        data = build_json(post)
        out_json = POSTS_DIR / f"{pid}.json"
        with open(out_json, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print("Wrote", out_json)
    print("Done", len(DATA), "posts")


if __name__ == "__main__":
    main()
