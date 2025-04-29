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

import imgOne from './assets/1.png'
import imgTwo from './assets/2.png'
import imgThree from './assets/3.png'
import imgFour from './assets/4.png'
import imgFive from './assets/5.png'

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
    label: "Historia",
    title: "Tatuajes en Colombia: Fusión de Historia y Modernidad",
    date: "30 de abril de 2025",
    image: "/img/blog/tattoo-history.png"
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
            className="w-full object-contain rounded-md"
          />
        </motion.div>
        <motion.p 
        className="py-10"
        >
          El arte del tatuaje en Colombia es mucho más que una simple tendencia estética contemporánea, ¡es todo un recorrido ancestral! Estamos hablando de un fascinante viaje a través del tiempo que conecta las prácticas indígenas de nuestros antepasados con las técnicas más innovadoras de la actualidad. Esta evolución ha creado un parche artístico único donde el arte tradicional del tatuaje colombiano se mezcla con influencias globales, generando un lenguaje visual propio que está captando miradas de todo el planeta. En esta travesía por la historia y actualidad del tatuaje colombiano, te vamos a mostrar cómo los artistas de hoy están reinterpretando este legado cultural para crear obras que van mucho más allá de la simple modificación corporal. ¡Prepárate para descubrir por qué el tatuaje colombiano está conquistando el mundo!
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          1. Raíces Ancestrales: El Tatuaje en las Culturas Indígenas Colombianas
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[560px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={imgOne}
            alt="Raíces Ancestrales: El Tatuaje en las Culturas Indígenas Colombianas"
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
          Mucho antes de las máquinas eléctricas y las tintas sintéticas, nuestros antepasados indígenas ya tenían toda una cultura de modificación corporal. Varias etnias colombianas desarrollaron técnicas propias para decorar y marcar la piel, cada una con su propio significado:
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Los Embera y la jagua:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Los Embera, que habitan las regiones del Pacífico colombiano, utilizaban tintes naturales de la jagua (Genipa americana) para crear elaborados diseños faciales y corporales. Algunos eran temporales, pero otros se volvían permanentes mediante técnicas de escarificación. ¡Toda una innovación para la época!
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Amazonas y sus técnicas con espinas:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Las comunidades indígenas del Amazonas desarrollaron métodos de tatuaje usando espinas de palmera y pigmentos vegetales. Creaban diseños geométricos y zoomorfos que representaban su conexión con la naturaleza y sus deidades. Nada de agujas desechables, ¡pura creatividad natural!
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Los Zenú y sus patrones geométricos:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Asentados en las llanuras del Caribe colombiano, los Zenú empleaban patrones geométricos complejos inspirados en su entorno y cosmogonía, similares a los que plasmaban en su orfebrería y cerámica. Su estética era tan avanzada que sigue inspirando diseños contemporáneos.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-5"
        >
          ¿Sabías que estos diseños no eran simples decoraciones? Cumplían funciones sociales y espirituales super importantes:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Marcaban etapas de la vida, desde la pubertad hasta el matrimonio
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Ofrecían protección espiritual contra enfermedades y malos espíritus
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Identificaban a los miembros de diferentes grupos étnicos
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Establecían conexiones con la naturaleza y las deidades
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="italic border-l-4 border-[#A14E05] pl-4 my-8 py-5"
        >
          "En las culturas indígenas colombianas, el tatuaje no era vanidad sino identidad. Cada marca contaba una historia, cada diseño era un lenguaje que conectaba al individuo con su comunidad y con el cosmos." — Antropólogo Juan Carlos Orrego, investigador de arte corporal indígena
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          2. La Interrupción Colonial y su Impacto
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={imgTwo}
            alt="La Interrupción Colonial y su Impacto"
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
          Con la llegada de los españoles, estas prácticas ancestrales se vieron bruscamente interrumpidas. La imposición del cristianismo y los valores europeos estigmatizó el arte corporal indígena, asociándolo con lo pagano y lo "salvaje" (¡qué falta de visión!). Durante siglos, estas tradiciones fueron suprimidas y marginadas, sobreviviendo únicamente en las comunidades más apartadas que pudieron mantener sus costumbres lejos de la influencia colonial.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Esta supresión creó una discontinuidad en la transmisión de conocimientos y técnicas, generando un vacío cultural que solo comenzaría a recuperarse siglos después. Fue un oscuro paréntesis en nuestra historia que, afortunadamente, no logró borrar por completo este legado ancestral.
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          3. El Resurgimiento: Evolución de los Estilos de Tatuajes Colombianos
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={talentImg}
            alt="El Resurgimiento: Evolución de los Estilos de Tatuajes Colombianos"
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
          Tras décadas de estigmatización, el tatuaje comenzó a renacer en Colombia a partir de la segunda mitad del siglo XX, inicialmente como una práctica contracultural y marginada, pero poco a poco ganando aceptación en todos los estratos sociales. La evolución ha sido impresionante:
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          De la marginalidad al mainstream:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Años 70-80: Surgió principalmente en contextos urbanos marginales y entre marineros en ciudades portuarias como Cartagena. Era un arte rudimentario con equipos improvisados.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Años 90: Comenzó la profesionalización con la llegada de las primeras máquinas profesionales y la apertura de estudios formales en las grandes ciudades. La influencia extranjera era predominante.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • 2000-2010: Se produjo un boom de interés con la globalización. Surgieron las primeras convenciones de tatuaje en el país y empezó a formarse una identidad propia.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • 2010-presente: Consolidación de una escena vibrante con artistas reconocidos internacionalmente y un consciente proceso de recuperación de la iconografía tradicional colombiana.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Estilos distintivos del tatuaje colombiano actual:
        </motion.h3>

        <motion.h4
          className="text-lg font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Neo-precolombino:
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Este estilo fusiona la iconografía de culturas como la Muisca, Tayrona, Quimbaya y Zenú con técnicas modernas. Predomina el blackwork con patrones geométricos complejos y elementos zoomorfos adaptados a la anatomía contemporánea. ¡Una verdadera joya visual que conecta pasado y presente!
        </motion.p>

        <motion.h4
          className="text-lg font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tropical-urbano:
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Refleja nuestra exuberante biodiversidad en combinación con elementos de la vida urbana moderna. Presenta flora y fauna nativa con colores vibrantes, fusionándolos con componentes urbanos. Este estilo captura perfectamente la dualidad colombiana, donde la naturaleza megadiversa convive con ciudades en rápida modernización.
        </motion.p>

        <motion.h4
          className="text-lg font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Realismo social colombiano:
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Un enfoque que documenta nuestra compleja realidad social a través de retratos y escenas hiperrealistas. Incluye personajes icónicos de la cultura colombiana, escenas de la vida cotidiana y representaciones de oficios tradicionales. Es casi como llevar un pedacito de historia colombiana en la piel.
        </motion.p>

        <motion.h4
          className="text-lg font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experimental-ancestral:
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La vanguardia más tesa del tatuaje colombiano, donde lo ancestral se fusiona con lo experimental. Utiliza técnicas como hand-poke y tapping que recuperan métodos tradicionales indígenas, experimenta con pigmentos naturales y crea composiciones que evocan estados de conciencia alterada relacionados con plantas medicinales tradicionales. ¡Toda una experiencia sensorial!
        </motion.p>

        <motion.div
          className="my-4 w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20traditional%20colombian%20tattoos" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Consulta sobre Tatuajes con Inspiración Tradicional
          </Link>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          4. Mejores Lugares para Tatuarse en Colombia: Epicentros de la Innovación
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={caliImg}
            alt="Mejores Lugares para Tatuarse en Colombia: Epicentros de la Innovación"
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
          La geografía del tatuaje en Colombia presenta varios focos creativos, cada uno con su propia personalidad y enfoque artístico:
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Bogotá: El Laboratorio de Fusiones
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Como capital cosmopolita, Bogotá se ha convertido en un crisol donde convergen influencias nacionales e internacionales. En barrios como Chapinero y La Soledad encontrarás estudios independientes donde predomina la experimentación, mientras que en la Zona T y Usaquén están los espacios de alta gama para una clientela internacional. Los artistas bogotanos suelen tener un enfoque más intelectual y conceptual, muchos con formación académica en artes visuales.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Medellín: La Capital de la Innovación Técnica
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La ciudad de la eterna primavera ha desarrollado una reputación por su rigurosidad técnica y apertura a la innovación. En El Poblado encontrarás estudios con equipamiento de vanguardia especializados en hiperrealismo, mientras que en Laureles están los artistas que han desarrollado técnicas específicas para pieles latinas. Los paisas destacan por su meticulosidad y perfeccionismo técnico.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Cali: El Epicentro de la Preservación y Renovación Cultural
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La sultana del Valle se ha convertido en el epicentro de la reinterpretación del patrimonio cultural nacional. En barrio Granada encontrarás estudios especializados en motivos precolombinos contemporáneos, mientras que en San Antonio convergen artistas que fusionan tradición con influencias globales. En Ciudad Jardín se ubican estudios premium como Legassy Studio, que han establecido nuevos estándares de calidad y personalización.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Los estudios caleños han logrado un equilibrio único entre la preservación de tradiciones artísticas locales y la incorporación de innovaciones técnicas internacionales. Legassy Studio, en particular, se ha distinguido por su compromiso con la investigación histórica y su aplicación en creaciones contemporáneas, convirtiéndose en referente de la fusión entre tradición e innovación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="italic border-l-4 border-[#A14E05] pl-4 my-8 py-5"
        >
          "Cali tiene algo especial cuando se trata de tatuajes. Hay un respeto por las raíces culturales pero al mismo tiempo una audacia creativa que no ves en otras ciudades. Los artistas caleños no solo dominan la técnica, sino que entienden profundamente el significado cultural detrás de cada símbolo que plasman." — Ricardo Martínez, crítico de arte corporal
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          5. Convenciones de Tatuaje en Colombia: Espacios de Intercambio y Evolución
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={imgFour}
            alt="Convenciones de Tatuaje en Colombia: Espacios de Intercambio y Evolución"
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
          Las convenciones de tatuaje han sido fundamentales para el desarrollo y legitimación de estaLas convenciones de tatuaje han sido fundamentales para el desarrollo y legitimación de esta forma artística en Colombia. Estos eventos no son solo mercados donde artistas y clientes se encuentran, ¡son verdaderos laboratorios culturales donde nacen nuevas tendencias y colaboraciones!
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          De la clandestinidad a los centros de convenciones:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La evolución de estos eventos refleja cómo el tatuaje ha pasado de ser un arte marginal a ser reconocido como una expresión artística legítima:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Primera etapa (1995-2005): Pequeños eventos en locales alternativos, principalmente locales y con un enfoque contracultural.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Segunda etapa (2006-2015): Crecimiento en escala y organización, comenzando a atraer artistas internacionales y patrocinadores.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Tercera etapa (2016-presente): Profesionalización total con estándares internacionales, participación de artistas de élite global y reconocimiento institucional.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Principales convenciones y su impacto:
        </motion.h3>

        <motion.h4
          className="text-lg font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Expotatuaje Bogotá:
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La más antigua y extensa del país, ha evolucionado hasta convertirse en un referente latinoamericano. Destaca por su categoría específica dedicada al arte tradicional de tatuaje colombiano, conferencias sobre historia precolombina y colaboraciones entre tatuadores urbanos y artesanos indígenas.
        </motion.p>

        <motion.h4
          className="text-lg font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Cali Tattoo Festival:
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sobresale por su enfoque en la fusión entre lo tradicional y lo contemporáneo. Incluye exhibiciones de arte precolombino junto con tatuajes inspirados en estas piezas, un programa académico con antropólogos y la competencia "Nuevas Raíces" que premia las interpretaciones más innovadoras de motivos tradicionales.
        </motion.p>

        <motion.h4
          className="text-lg font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Medellín Tattoo Expo:
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Reconocida por su enfoque técnico y educativo, con demostraciones de técnicas tradicionales por miembros de comunidades indígenas, talleres sobre producción de pigmentos naturales y simposios sobre seguridad adaptados a las características de la piel latinoamericana.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Estos eventos han sido cruciales para documentar y difundir el conocimiento sobre el arte tradicional del tatuaje colombiano, construyendo puentes entre nuestro pasado ancestral y la práctica contemporánea.
        </motion.p>

        <motion.div
          className="my-4 w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20traditional%20colombian%20tattoos" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Consulta sobre Tatuajes con Inspiración Tradicional
          </Link>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          6. Legassy Studio: Un Caso de Estudio en Fusión Cultural
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={imgFive}
            alt="Legassy Studio: Un Caso de Estudio en Fusión Cultural"
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
          Entre los numerosos grandes lugares para tatuarse en Colombia, Legassy Studio en Cali representa un ejemplo perfecto de cómo un estudio contemporáneo puede honrar el legado ancestral mientras impulsa la evolución del arte del tatuaje. Su aproximación integra varios aspectos:
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Investigación y documentación:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          El estudio ha desarrollado un programa formal de investigación en colaboración con antropólogos y museos locales, creando un archivo digital de motivos precolombinos, documentando técnicas tradicionales de preparación de pigmentos y manteniendo un catálogo de interpretaciones contemporáneas de diseños ancestrales.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Formación continua:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Han implementado un sistema de formación para sus artistas que integra el conocimiento tradicional, con talleres regulares con artesanos indígenas, visitas a sitios arqueológicos para inspiración directa y intercambios con estudios internacionales.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Enfoque personalizado:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Su metodología de trabajo con clientes incorpora la dimensión cultural e histórica, ofreciendo consultas educativas donde se explica el significado original de los símbolos tradicionales, diseños personalizados que conectan la historia personal del cliente con elementos de la cosmogonía tradicional colombiana y documentación detallada sobre referencias culturales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="italic border-l-4 border-[#A14E05] pl-4 my-8 py-5"
        >
          "En Legassy no solo buscamos crear tatuajes estéticamente atractivos, sino piezas que tengan alma, que cuenten una historia conectada con nuestras raíces. Cada diseño de inspiración tradicional viene con una investigación sobre su significado original y una adaptación contemporánea que respeta ese legado." — Equipo creativo de Legassy Studio
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          7. El Futuro del Tatuaje Colombiano: Tendencias Emergentes
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={imgThree}
            alt="El Futuro del Tatuaje Colombiano: Tendencias Emergentes"
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
          El panorama actual sugiere varias direcciones en las que los estilos de tatuaje colombiano continuarán evolucionando:
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sostenibilidad y biocompatibilidad:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Inspirados en las prácticas ancestrales, varios estudios están investigando el desarrollo de tintas orgánicas basadas en fórmulas tradicionales, técnicas de bajo impacto inspiradas en métodos indígenas y prácticas sostenibles que minimizan el uso de plásticos y químicos agresivos.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tecnología al servicio de la tradición:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La integración de nuevas tecnologías está abriendo posibilidades fascinantes como el escaneo 3D de artefactos precolombinos para adaptarlos a la anatomía contemporánea, realidad aumentada que visualiza capas adicionales de información cultural sobre los tatuajes y sistemas de mapeo corporal que optimizan la adaptación de diseños a diferentes anatomías.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Diálogo intercultural:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          El tatuaje colombiano está estableciendo puentes con tradiciones de otras culturas indígenas globales, mediante colaboraciones con maestros del tatuaje tradicional polinesio, japonés y maorí, intercambio de conocimientos sobre técnicas manuales ancestrales y exploración de paralelismos simbólicos entre cosmogonías indígenas de diferentes continentes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Estos intercambios están enriqueciendo el vocabulario visual del tatuaje colombiano mientras refuerzan su identidad distintiva en un contexto global.
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          8. La Experiencia del Tatuaje Colombiano: Más Allá de la Estética
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Para comprender plenamente la dimensión cultural del tatuaje en Colombia, es fundamental reconocer que este trasciende lo puramente decorativo para convertirse en una experiencia transformadora que conecta al individuo con múltiples capas de significado.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ritual contemporáneo:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Los mejores estudios colombianos, como Legassy Studio, han recuperado la dimensión ritual del tatuaje ancestral, adaptándola a la sensibilidad contemporánea con procesos de consulta profundos, ambientación significativa, incorporación de música tradicional y momentos de reflexión que marcan la finalización del proceso.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Esta aproximación recupera la función transformativa que el tatuaje cumplía en las sociedades tradicionales, donde no era meramente un adorno sino un marcador de transiciones vitales y conexiones espirituales.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          El turismo del tatuaje en Colombia:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          El reconocimiento internacional del talento local ha generado un fenómeno creciente de turismo especializado, con viajeros que planifican sus vacaciones específicamente para trabajar con artistas colombianos, programas que combinan la experiencia del tatuaje con inmersiones culturales y visitantes que buscan llevar en su piel un fragmento auténtico de nuestra rica historia visual.
        </motion.p>

        <motion.div
          className="my-4 w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20traditional%20colombian%20tattoos" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Consulta sobre Tatuajes con Inspiración Tradicional
          </Link>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          9. La Responsabilidad Cultural en el Tatuaje Colombiano
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La creciente popularidad del arte tradicional del tatuaje colombiano ha planteado importantes reflexiones sobre apropiación cultural y uso respetuoso del patrimonio ancestral:
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Apropiación vs. apreciación:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Existe un delicado equilibrio entre la legítima reinterpretación creativa y la apropiación irrespetuosa. Los estudios más responsables, como Legassy Studio, establecen protocolos para determinar cuándo un símbolo tradicional puede ser utilizado, promueven la comprensión del significado original antes de la adaptación contemporánea y establecen conexiones con comunidades indígenas vivas.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Retribución a las comunidades originarias:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Emerge una conciencia sobre la necesidad de reciprocidad con las fuentes de inspiración, mediante programas donde un porcentaje de los ingresos por tatuajes con motivos tradicionales se destina a proyectos de preservación cultural, colaboraciones directas con artistas indígenas contemporáneos y talleres gratuitos para jóvenes de comunidades indígenas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Estas prácticas contribuyen a una relación más ética y equilibrada entre el tatuaje comercial contemporáneo y las tradiciones que lo inspiran.
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          10. Estilos de Tatuajes Colombianos en el Panorama Global
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={hygieneImg}
            alt="Estilos de Tatuajes Colombianos en el Panorama Global"
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
          La singularidad del enfoque colombiano no ha pasado desapercibida en la escena internacional del tatuaje:
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Reconocimiento en plataformas globales:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Los artistas colombianos están logrando posiciones destacadas en publicaciones especializadas internacionales, festivales y convenciones de élite en Europa, América del Norte y Asia, y competiciones globales donde la categoría de reinterpretación contemporánea de motivos ancestrales frecuentemente ve ganadores colombianos.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Influencia en tendencias globales:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Los elementos distintivos del tatuaje colombiano están siendo adoptados e interpretados por artistas de otros países, como la paleta cromática inspirada en textiles indígenas, los sistemas de composición basados en la orfebrería precolombina y las técnicas de saturación de color desarrolladas específicamente para pieles latinas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Esta influencia bidireccional enriquece el panorama global mientras consolida la identidad del tatuaje colombiano en el escenario internacional.
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Conclusión: El Tatuaje como Puente Temporal en Colombia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          El arte del tatuaje en Colombia representa uno de los ejemplos más fascinantes de cómo una práctica ancestral puede renacer, reinventarse y prosperar en un contexto contemporáneo sin perder su esencia cultural. Lo que comenzó como una tradición marginalizada durante siglos ha emergido como una poderosa expresión artística que conecta generaciones y trasciende fronteras.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Los grandes lugares para tatuarse en Colombia, con Legassy Studio como ejemplo destacado, no son simplemente negocios o espacios artísticos, sino verdaderos laboratorios culturales donde el pasado dialoga con el presente y se proyecta hacia el futuro. En estos espacios, el acto de tatuar recupera su dimensión transformativa original, permitiendo a las personas conectar con capas profundas de significado cultural mientras participan activamente en la evolución de una tradición viva.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Las convenciones de tatuaje en Colombia han evolucionado para convertirse en foros donde este diálogo se amplifica, creando comunidades de práctica donde artistas, académicos y entusiastas colaboran en la preservación, documentación y evolución del arte tradicional del tatuaje colombiano.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Para aquellos que buscan un tatuaje que trascienda lo meramente estético, Colombia ofrece una experiencia inigualable: la oportunidad de llevar en la piel un fragmento vivo de historia, reinterpretado con maestría técnica y profundo respeto cultural. En cada línea, en cada sombra, late el pulso de una tradición ancestral que ha encontrado nuevas formas de expresión en las manos talentosas de los artistas contemporáneos que mantienen vivo el legado del arte tradicional del tatuaje colombiano.
        </motion.p>
      </motion.div>
    </section>
  );
}