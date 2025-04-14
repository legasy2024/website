"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import headerImg from './assets/header.png'
import talentImg from './assets/talentImg.png'

import { FaInstagram } from 'react-icons/fa';
import pricesImg from './assets/moneyImg.png'
import experienceImg from './assets/experinceImg.png'
import gastronomyImg from './assets/empanadas.png'

import caliImg from './assets/caliUno.jpg'
import salsaImg from './assets/partyImg.jpg'
import hygieneImg from './assets/imgDos.png'
import empanadasImg from './assets/empanadas.png'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ClientBlogDetail() {
  // Datos estáticos del post
  const post = {
    label: "Viajes",
    title: "7 Razones para Viajar a Colombia por tu Próximo Tatuaje",
    date: "22 de abril de 2025",
    image: "/img/blog/tatuajes-cali.png"
  };

  return (
    <section className="w-full m-auto px-5 py-16 md:py-28 bg-[#212121] text-white">
      <motion.div
        className="w-full max-w-[1200px] m-auto flex flex-col "
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.label
          className=" w-28 flex flex-col items-center place-self-center border border-[#C4C4C4] text-TextSecondary-100 py-1 px-3 rounded-full mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {post.label}
        </motion.label>

        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-2 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {post.title}
        </motion.h1>

        <motion.p
          className="text-sm text-center text-[#888] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {post.date}
        </motion.p>

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={headerImg}
            alt={post.title}
            loading="lazy"
            fill
            className="w-full  object-contain rounded-md"
      
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-y-8 text-base leading-7 text-[#e0e0e0]"
          variants={staggerChildren}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¡Vení a descubrir por qué Colombia se ha convertido en el destino que todos buscan para combinar turismo y tatuajes de calidad excepcional! Este blog te mostrará siete razones poderosas para considerar a Colombia como tu próximo destino de tatuaje, desde la alta calidad artística y precios accesibles hasta la riqueza cultural que inspira cada diseño.
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            1. Talento Artístico de Clase Mundial
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={talentImg}
              alt="Talento Artístico de Clase Mundial"
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Colombia está experimentando un auténtico renacimiento artístico, y el mundo del tatuaje no es la excepción. En los últimos cinco años, el país ha visto un crecimiento del 175% en estudios de tatuaje de primer nivel, mientras que más de 30 artistas colombianos han sido premiados en convenciones internacionales desde 2018. Este auge no es casualidad: combina la tradicional destreza manual colombiana con una nueva generación de artistas formados en las mejores escuelas de arte del país y el extranjero.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Según la revista International Tattoo Boom LATAM, Colombia se ha posicionado como el tercer destino emergente para tatuajes en Latinoamérica, solo detrás de Brasil y México. Los artistas colombianos se destacan particularmente por su dominio del color, con técnicas de saturación que logran mantener la vibración de los pigmentos incluso en tonos de piel más oscuros, y por su capacidad única para fusionar las tendencias globales con elementos de la rica iconografía precolombina, el arte callejero local y los vibrantes patrones de las culturas indígenas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Lo que verdaderamente distingue a los tatuadores colombianos es su enfoque multidisciplinario. Muchos comienzan sus carreras como ilustradores, muralistas o diseñadores gráficos, trayendo una perspectiva artística integral que se refleja en composiciones innovadoras y un sentido del espacio y la proporción excepcionales. Esta formación diversa, combinada con la calidez y dedicación del carácter colombiano, crea una experiencia de tatuaje que va más allá de la técnica para convertirse en un verdadero intercambio cultural y artístico.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            En Legassy Studio, encontrarás tatuadores que han perfeccionado estilos diversos como el puntillismo, realismo fotográfico, anime y línea fina. Cada artista aporta una visión única, permitiéndote acceder a un nivel de talento comparable con los mejores estudios del mundo, pero con un toque distintivamente colombiano.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            "Los artistas colombianos tienen ese don especial de combinar precisión técnica con alma y pasión en cada diseño. No solo tatúan piel; cuentan historias a través de su arte." — Revista Internacional de Arte Corporal
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hola!%20Vengo%20del%20blog,%20quisiera%20tener%20mas%20informacion%20sobre%20tatuajes" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Pedir una Asesoría Personalizada Gratis
            </Link>
          </motion.div>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            2. Precios vs Beneficio: Sorprendentemente Accesibles
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={pricesImg}
              alt="Precios vs Beneficio: Sorprendentemente Accesibles"
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Uno de los mayores atractivos para los turistas del tatuaje es la extraordinaria relación calidad-precio que ofrece Colombia. Las cifras hablan por sí solas: un tatuaje de calidad premium que costaría entre $200-300 USD por hora en ciudades como Nueva York, Los Ángeles o Londres, en Colombia oscila entre $70-120 USD por hora. Esta diferencia sustancial se debe principalmente al tipo de cambio favorable y al costo de vida más bajo, que permite a los estudios colombianos mantener precios accesibles sin comprometer la calidad artística.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            En términos concretos, una pieza de manga completa que podría costar entre $3,000-5,000 USD en Norteamérica, puede realizarse por aproximadamente $1,200-2,000 USD en Colombia, incluyendo sesiones más largas y detalladas. Esta ventaja económica está atrayendo a un creciente número de "tatuaje-turistas": según datos recientes del Ministerio de Turismo colombiano, más de 8,500 visitantes internacionales en 2023 mencionaron los tatuajes como una de las principales motivaciones de su viaje, con un incremento del 35% respecto al año anterior.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Legassy Studio ha perfeccionado un modelo de negocio que aprovecha esta ventaja económica para elevar la experiencia del cliente a niveles excepcionales:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Sesiones más extensas y relajadas: Mientras que en estudios internacionales muchas veces se trabaja contrarreloj debido a los altos costos operativos, en Legassy pueden dedicar sesiones completas de 6-8 horas cuando sea necesario, permitiendo un trabajo más detallado y meticuloso sin incrementos significativos en el precio final.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Materiales importados de primera línea: A diferencia de otros estudios locales, Legassy invierte en equipamiento de última generación y pigmentos premium importados de Italia, Estados Unidos y Japón. Utilizan exclusivamente agujas de grado médico Bishop Rotary, máquinas FK Irons y tintas Eternal Ink y World Famous, las mismas marcas preferidas por los estudios más renombrados internacionalmente.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Ratio artista-cliente personalizado: Cada sesión cuenta con un máximo de dos clientes por artista por día, en contraste con el modelo de alto volumen que prevalece en destinos más caros. Esto garantiza atención completamente personalizada y resultados impecables.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Servicios adicionales incluidos: El precio base incluye beneficios que en otros destinos representarían costos adicionales significativos: diseño personalizado, ajustes ilimitados previos a la sesión, fotografía profesional del proceso y resultado, kit premium de cuidado posterior, y consultas de seguimiento.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Como explicó Alejandro Navia, fundador de Legassy Studio: "Nuestro objetivo nunca ha sido competir por precio, sino aprovechar las ventajas económicas de operar en Colombia para ofrecer una experiencia incomparable. La diferencia de costos nos permite invertir más en tiempo de diseño, calidad de materiales y atención personalizada, elementos que en otros mercados elevarían el precio a niveles prohibitivos para muchos entusiastas del tatuaje."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Esta combinación de precios accesibles con servicios premium explica por qué el 70% de los clientes internacionales de Legassy Studio son referidos por clientes anteriores, y por qué el 40% regresa para realizar nuevas piezas en visitas subsecuentes a Colombia.
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hola!%20Vengo%20del%20blog,%20quisiera%20tener%20mas%20informacion%20sobre%20tatuajes" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Pedir una Asesoría Personalizada Gratis
            </Link>
          </motion.div>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            3. Experiencia Integral Más Allá del Tatuaje
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={experienceImg}
              alt="Experiencia Integral Más Allá del Tatuaje"
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>

          <motion.div
            className="-mt-6 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="https://www.instagram.com/legassystudio?igsh=ZWg5NXF1Nmd6eHJt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-medium py-2 px-6 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <FaInstagram size={18} />
              Ver Portafolio
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Viajar a Colombia para un tatuaje no se trata solo del arte corporal; es toda una experiencia que combina turismo, cultura y transformación personal. En Cali, sede de Legassy Studio, podés complementar tu experiencia de tatuaje con:
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-6 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Turismo cultural que inspira
          </motion.h3>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={caliImg}
              alt="Turismo cultural en Cali"
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            El entorno de Cali está lleno de espacios que alimentan la creatividad y pueden inspirar tu próximo diseño:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Barrio San Antonio:</strong> Este encantador barrio colonial es el corazón bohemio de Cali. Date una vuelta por sus calles empedradas donde cada esquina cuenta una historia. Sus casas coloniales de colores vibrantes con balcones de madera tallada te transportan a otra época. Los domingos, artistas locales exponen sus obras en la plazoleta, creando un ambiente perfecto para descubrir estilos únicos que podrían inspirar tu tatuaje. No te pierdas el Parque de los Poetas, donde la literatura y el arte se encuentran, o los numerosos cafés artísticos como "El Rincón de San Antonio" donde podés disfrutar de un café de origen mientras conversás con artistas locales.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Museo La Tertulia:</strong> Este no es un museo convencional; es un verdadero templo del arte contemporáneo del suroccidente colombiano. Con más de 1,300 obras de arte latinoamericano en su colección permanente, ofrece una inmersión en el lenguaje visual de la región. Sus exposiciones temporales rotan constantemente, trayendo lo mejor del arte nacional e internacional. El museo también cuenta con una cinemateca que proyecta cine independiente y una biblioteca especializada en arte. La arquitectura brutalista del edificio, diseñada por Manuel Lago y Jaime Sáenz, es en sí misma una obra de arte que dialoga con el paisaje del río Cali.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Mirador de Sebastián de Belalcázar:</strong> Subite a este punto panorámico donde la historia y las vistas se fusionan. La estatua del fundador de Cali señala hacia el valle, como invitándote a contemplar la vastedad del paisaje urbano y natural. Desde aquí, la paleta de colores que forma la ciudad contra el telón de fondo de las montañas andinas puede inspirar combinaciones cromáticas para tu tatuaje. Al atardecer, los tonos dorados y rojizos del cielo caleño crean un espectáculo visual único. Este lugar también tiene un significado especial para los caleños, siendo el punto donde muchos vienen a reflexionar, lo que añade una capa de profundidad emocional a tu visita.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>La Loma de la Cruz:</strong> Visitá este enclave cultural los viernes cuando se transforma con su tradicional feria artesanal. Más de 120 artesanos locales exponen trabajos en técnicas diversas como talla en madera, joyería en coco y semillas, tejidos indígenas y arte urbano contemporáneo. Cada pieza cuenta una historia de tradición y creatividad que podría inspirar elementos únicos para tu tatuaje. El lugar también ofrece presentaciones de música en vivo y danzas folklóricas que muestran la riqueza cultural de la región.
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-6 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Gastronomía única que alimenta cuerpo y espíritu
          </motion.h3>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={gastronomyImg}
              alt="Gastronomía única de Cali"
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            La experiencia culinaria caleña es una explosión de sabores que complementa perfectamente tu aventura de tatuaje:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Cholados bien montados:</strong> Esta es mucho más que una simple bebida refrescante; es una obra de arte comestible que refleja la creatividad y el amor por el color que caracteriza a los caleños. En el Parque del Perro o en los tradicionales puestos de Jamundí, te servirán estas montañas de hielo raspado cubierto con frutas tropicales (mango, piña, banano, guanábana), jarabes multicolores, leche condensada, crema de leche y coronado con una galleta wafer. La combinación de texturas y sabores es tan compleja y sorprendente como un buen tatuaje, ofreciendo capas de experiencia sensorial que se revelan con cada cucharada.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Luladas refrescantes:</strong> Elaboradas con lulo (Solanum quitoense), una fruta ácida de sabor incomparable que solo se encuentra en la región andina, esta bebida tiene propiedades antiinflamatorias que pueden ayudar en el proceso de recuperación de tu tatuaje. Los mejores puestos están en el centro histórico y en el Boulevard del Río, donde vendedores que llevan décadas perfeccionando sus recetas familiares te ofrecerán esta bebida con el punto exacto de dulzura y acidez. Algunos locales añaden hierbabuena o jengibre para realzar sus propiedades refrescantes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Sancocho valluno tradicional:</strong> Este contundente plato es una experiencia cultural en sí misma. En restaurantes tradicionales de las afueras como "El Rincón Vallecaucano" en Pance o "Doña Rosalba" en Rozo, podés disfrutar de esta sopa elaborada con gallina de campo, plátano, yuca, papa, mazorca, arracacha y aliños especiales. Servido con arroz blanco, aguacate, ají casero y patacones, este festín proporciona todos los nutrientes necesarios para recuperar energías entre sesiones de tatuaje. La preparación sigue recetas transmitidas por generaciones, y cada familia asegura tener el toque secreto que hace su versión la mejor.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Aborrajados y marranitas:</strong> Estos aperitivos típicos vallecaucanos son perfectos para un tentempié rápido. El aborrajado es plátano maduro relleno de queso y rebozado, mientras que las marranitas son bolitas crujientes de plátano verde y chicharrón. Ambos ofrecen esa mezcla de dulce y salado tan característica de la cocina local, y se encuentran en cualquier "fritanga" o puesto callejero de la ciudad.
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-6 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Música y baile: la salsa en las venas
          </motion.h3>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={salsaImg}
              alt="Música y baile: la salsa en las venas"
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            No podés visitar la Capital Mundial de la Salsa sin sumergirte en su ritmo más emblemático:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>La Topa Tolondra:</strong> Este legendario templo de la salsa es donde los verdaderos conocedores se reúnen. Los jueves son imperdibles con su "Jueves de Melómanos y Coleccionistas", donde los amantes de la música comparten vinilos raros y grabaciones históricas. El lugar tiene esa autenticidad que solo los locales conocen, con paredes cubiertas de afiches vintage y fotografías de leyendas de la salsa que han visitado el lugar. Los instructores locales ofrecen clases exprés antes de que comience la fiesta en serio, enseñándote pasos básicos para que puedas unirte a la pista de baile. La energía y el sudor compartido crean una experiencia catártica que complementa perfectamente la intensidad de una sesión de tatuaje.

          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Delirio:</strong> Si tu visita coincide con el último viernes del mes, tenés la oportunidad de presenciar uno de los espectáculos más impresionantes de Latinoamérica. Este show combina la destreza acrobática del circo, la precisión técnica del ballet clásico y la energía desenfrenada de la salsa caleña. Más de 200 artistas en escena crean un espectáculo que ha sido descrito como "el Cirque du Soleil con sabor a caña de azúcar". Las elaboradas coreografías, vestuarios fantásticos y efectos escénicos de nivel internacional hacen de esta experiencia algo verdaderamente único que redefine los límites del entretenimiento cultural.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Tin Tin Deo:</strong> Para una experiencia más íntima y auténtica, este club de salsa tradicional te transporta a la época dorada de los años 70 y 80. Frecuentado principalmente por bailarines locales y verdaderos conocedores, aquí podés apreciar el estilo caleño en su forma más pura. Los domingos por la tarde ofrecen sesiones especiales donde bailarines veteranos comparten sus conocimientos con las nuevas generaciones, creando un ambiente intergeneracional donde las historias y los pasos se transmiten como una valiosa herencia cultural.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Petronio Álvarez en agosto:</strong> Si planeás tu viaje de tatuaje para agosto, no podés perderte el Festival de Música del Pacífico "Petronio Álvarez", el mayor evento de música afrodescendiente de Latinoamérica. Durante cinco días, más de 100,000 asistentes celebran la herencia africana con ritmos como currulao, bunde y marimba. Además de los conciertos, el festival ofrece una experiencia sensorial completa con comidas tradicionales del Pacífico, bebidas ancestrales como el viche y el arrechón (conocido por sus propiedades afrodisíacas), y muestras de artesanía y moda étnica que podrían inspirar elementos únicos para tu tatuaje.
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hola!%20Vengo%20del%20blog,%20quisiera%20tener%20mas%20informacion%20sobre%20tatuajes" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Pedir una Asesoría Personalizada Gratis
            </Link>
          </motion.div>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            4. Innovación Técnica y Estándares de Higiene Impecables
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={hygieneImg}
              alt="Innovación Técnica y Estándares de Higiene"
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Colombia ha adoptado rápidamente las últimas tendencias y tecnologías en el mundo del tatuaje, combinándolas con rigurosos protocolos de higiene y seguridad que cumplen e incluso superan los estándares internacionales.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Legassy Studio se destaca por:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Equipos de última generación importados de los mejores fabricantes mundiales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Pigmentos premium que garantizan colores vibrantes y duraderos
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Protocolos de esterilización que exceden las normativas sanitarias
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Capacitación constante de sus artistas en las técnicas más innovadoras
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Esta combinación de innovación técnica y compromiso con la seguridad brinda tranquilidad a los clientes internacionales, asegurando una experiencia de tatuaje no solo estéticamente excepcional sino también segura.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            El boom del tatuaje en Colombia ha creado una comunidad vibrante donde artistas, entusiastas y clientes comparten su pasión por el arte corporal. Esta comunidad se nutre de convenciones, talleres y eventos que atraen talento internacional y promueven el intercambio de ideas y técnicas.
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-8 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Conclusión: Tu Próximo Tatuaje Te Espera en Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Viajar a Colombia para un tatuaje significa embarcarte en un viaje transformador que combina arte excepcional, cultura vibrante y una experiencia personal única. Legassy Studio en Cali representa lo mejor de esta experiencia, ofreciendo ese equilibrio perfecto entre talento artístico internacional, autenticidad colombiana y un servicio personalizado que te hará sentir como en casa.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ya sea que busques tu primer tatuaje o una nueva pieza para tu colección, Colombia te ofrece una combinación inigualable de calidad, buen precio, inspiración y esa hospitalidad que nos caracteriza. Tu piel merece arte que cuente una historia significativa, y no hay mejor lugar para crear esa historia que en el vibrante escenario del arte del tatuaje colombiano.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Listo para transformar tu piel con un toque caleño?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pedí una Asesoría Personalizada Gratuita y empezá a planificar tu viaje de tatuaje a Colombia con Legassy Studio. Nuestro equipo está esperándote para crear una experiencia inolvidable que va mucho más allá del arte corporal. ¡Vení a Cali y llevate más que un tatuaje... llevate una historia para toda la vida!
          </motion.p>

          <section className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <motion.div
              className="my-4 w-full flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="https://wa.me/573128717100?text=Hola!%20Vengo%20del%20blog,%20quisiera%20tener%20mas%20informacion%20sobre%20tatuajes" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Pedir una Asesoría Personalizada Gratis
              </Link>
            </motion.div>

            <motion.div
              className="mt-0 w-full flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="https://www.instagram.com/legassystudio?igsh=ZWg5NXF1Nmd6eHJt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-medium py-2 px-6 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <FaInstagram size={18} />
                Ver Instagram
              </Link>
            </motion.div>
          </section>



          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#2a2a2a] p-4 rounded-md mt-4"
          >
            <p className="font-medium mb-2">Información de contacto:</p>
            <p>Ubicación: Cali, Colombia</p>
            <p>Teléfono: +57 (312) 871-7100</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}