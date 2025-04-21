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
    label: "Turismo",
    title: "Tatuajes en Colombia: Cali, El Auge de una Ciudad Creativa para Extranjeros",
    date: "25 de abril de 2025",
    image: "/img/blog/tatuajes-cali-english.png"
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
            En los últimos años, Colombia ha emergido como un destino internacional para los amantes del arte corporal, con ciudades como Bogotá y Medellín tradicionalmente liderando la escena. Sin embargo, es Cali la que está experimentando una verdadera revolución creativa, posicionándose rápidamente como el nuevo epicentro del tatuaje en el país. Este blog explorará el crecimiento artístico y cultural de Cali como un nuevo foco del tatuaje en Colombia, destacando cómo la ciudad combina talento emergente, influencia internacional y una identidad visual vibrante. En este contexto, Legassy Studio se destaca como uno de los estudios más representativos de esta nueva ola, ofreciendo una experiencia de tatuaje que fusiona arte de alto nivel, atención personalizada y una visión moderna que pone a Cali en el mapa global del tatuaje.
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            1. El Renacimiento Artístico de Cali en el Mundo del Tatuaje
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[560px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={talentImg}
              alt="El Renacimiento Artístico de Cali en el Mundo del Tatuaje"
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
            La escena del tatuaje en Colombia ha evolucionado dramáticamente en la última década, transformándose de una práctica underground a una expresión artística ampliamente reconocida y respetada. Mientras Bogotá y Medellín fueron pioneras en esta transformación, Cali está escribiendo su propio capítulo con características únicas:
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            La Tríada del Tatuaje Colombiano: Cali, Bogotá y Medellín
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Cada ciudad colombiana ha desarrollado su propia personalidad en el mundo del tatuaje:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Cali: Emergiendo con fuerza como el nuevo hub creativo, destacándose por la fusión de estilos tradicionales con elementos culturales afrocolombianos y una distintiva vibración tropical. Los artistas caleños son reconocidos por su habilidad para incorporar elementos rítmicos y dinámicos en sus diseños, reflejando la identidad de la capital mundial de la salsa.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Bogotá: La capital ha sido tradicionalmente el centro de experimentación y vanguardia, con una fuerte influencia del arte contemporáneo y las tendencias europeas. Sus estudios tienden a especializarse en blackwork, neotradicional y realismo abstracto.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Medellín: Conocida por la precisión técnica y el realismo fotográfico, Medellín ha cultivado una reputación de excelencia en trabajos detallados y a gran escala, beneficiándose de su exposición internacional y la influencia norteamericana en sus estilos.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "Lo que hace única a la escena caleña es su capacidad de absorber influencias globales mientras mantiene un lenguaje visual profundamente arraigado en sus raíces culturales. No es solo técnica, es una expresión auténtica de la identidad vallecaucana traducida a la piel." — Revista Internacional de Arte Corporal, 2023
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoos" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
            2. Guía para Extranjeros: Cómo Navegar la Escena del Tatuaje en Cali
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={salsaImg}
              alt="Guía para Extranjeros: Cómo Navegar la Escena del Tatuaje en Cali"
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>

          <motion.h3
            className="text-xl font-bold mt-0 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            A. Planificación y Reserva
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Para turistas internacionales interesados en llevarse un recuerdo permanente de Colombia:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Tiempo óptimo: Contacta al estudio al menos 2-3 semanas antes de tu viaje para diseños personalizados
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Investigación previa: Explora los portafolios online de diferentes estudios caleños para identificar el estilo que buscas
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Consulta virtual: La mayoría de los estudios premium ofrecen sesiones de consulta por videollamada
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Depósito: Prepárate para pagar un depósito para asegurar tu cita (generalmente 20-30% del precio estimado)
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            B. Estudios Recomendados en Cali
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Además de Legassy Studio, otros estudios notables incluyen:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Inkpulso Tattoo: Especializado en neotradicional y japonés
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Kali Art Studio: Destacado por acuarela y dotwork
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Ritual Tattoo Collective: Enfocado en blackwork y geometría sagrada
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • La Tinta Roja: Especialistas en realismo y retratos
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            C. Consideraciones Culturales y Artísticas
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Inspiración local: Considera incorporar elementos colombianos en tu diseño para una pieza verdaderamente única
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Comunicación clara: Muchos artistas hablan inglés básico, pero es recomendable llevar referencias visuales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Flexibilidad creativa: Los mejores resultados suelen surgir cuando permites al artista aportar su visión al diseño
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Documentación: Asegúrate de obtener fotos profesionales de tu tatuaje terminado y datos de contacto para seguimiento
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoos" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
          3. El Impacto Económico y Cultural del Turismo de Tatuajes
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={caliImg}
              alt="El Impacto Económico y Cultural del Turismo de Tatuajes"
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
            El creciente fenómeno del turismo de tatuajes está teniendo un impacto significativo en la economía local:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Más de 8,500 visitantes internacionales mencionaron los tatuajes como motivación principal de su viaje a Colombia en 2023
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • El gasto promedio en tatuajes por turista extranjero supera los $600 USD
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • El 40% de los turistas que se tatúan en Colombia regresan para nuevas piezas
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Este segmento genera estadías más largas (promedio de 8 días) que el turista convencional
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Más allá del aspecto económico, esta tendencia está contribuyendo a cambiar la narrativa internacional sobre Colombia, posicionando al país como un destino cultural y artístico de primer nivel.
          </motion.p>


       

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            4. La Experiencia Integral: Más Allá del Tatuaje
          </motion.h2>


          <motion.div
            className="relative w-full h-[200px] md:h-[560px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={experienceImg}
              alt="El Impacto Económico y Cultural del Turismo de Tatuajes"
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
            Lo que hace verdaderamente especial tatuarse en Cali es la experiencia cultural integral que lo acompaña. Legassy Studio y otros estudios de primer nivel han comprendido que para los extranjeros, un tatuaje en Colombia representa mucho más que arte corporal – es una inmersión cultural:
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Complementos Culturales a la Experiencia de Tatuaje
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Tours artísticos: Recorridos por barrios emblemáticos como San Antonio para absorber la estética local
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Experiencias gastronómicas: Degustación de platos típicos vallecaucanos durante los descansos de sesiones largas
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Clases de salsa: Algunos estudios incluyen lecciones básicas de baile como parte del paquete de tatuaje
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Conexión con artistas locales: Introducción a la vibrante comunidad creativa de la ciudad
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "Mi tatuaje en Cali no fue solo una sesión de estudio - fue una inmersión completa en la cultura colombiana. Desde la música que sonaba durante la sesión, hasta la comida que compartimos, y las historias detrás de los elementos de mi diseño... llevé de vuelta mucho más que tinta en mi piel." — Jason K., turista de Chicago
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            5. El Futuro: Cali en el Mapa Global del Tatuaje
          </motion.h2>


          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={hygieneImg}
              alt="El Impacto Económico y Cultural del Turismo de Tatuajes"
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
            Todos los indicadores apuntan a que el auge de Cali como destino de tatuaje continuará creciendo:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Aumento de la presencia de artistas caleños en convenciones internacionales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Creciente cobertura en publicaciones especializadas globales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Desarrollo de una convención internacional de tatuaje en la ciudad
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Programas de residencia artística que atraen talento internacional
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Para 2025, se proyecta que Cali podría consolidarse como uno de los cinco destinos más importantes para el turismo de tatuajes en América Latina, compitiendo directamente con São Paulo, Ciudad de México y Buenos Aires.
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoos" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Pedir una Asesoría Personalizada Gratis
            </Link>
          </motion.div>

          <motion.h2
            className="text-2xl font-bold mt-8 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Conclusión: Más que Tinta, una Experiencia Transformadora
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tatuarse en Cali representa una confluencia única de factores: talento artístico excepcional, precios accesibles, un contexto cultural vibrante y una hospitalidad característica que hace que cada visitante se sienta como en casa. Los estudios como Legassy están redefiniendo lo que significa el turismo de tatuajes, elevándolo de una simple transacción comercial a una experiencia transformadora y culturalmente enriquecedora.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Para el extranjero que busca más que un souvenir convencional, un tatuaje creado en Cali ofrece una conexión permanente con Colombia, una obra de arte única que lleva consigo la esencia de esta ciudad creativa en constante evolución. No se trata solo de decorar la piel, sino de llevar un pedazo del alma caleña plasmada en un diseño irrepetible, creado en un momento y lugar específicos que permanecerá como testigo de la transformación cultural de una ciudad que está reescribiendo su narrativa a través del arte.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Estás listo para ser parte de esta revolución creativa? Contacta con Legassy Studio para una asesoría personalizada gratuita y comienza a planificar tu experiencia de tatuaje en Cali, una ciudad que está redefiniendo el panorama del arte corporal en Latinoamérica.
          </motion.p>

          <section className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <motion.div
              className="my-4 w-full flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoos" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 text-[#888] italic"
          >
            ¿Tienes preguntas específicas sobre tatuarse en Colombia? ¡Déjalas en los comentarios y nuestro equipo te responderá en inglés o español!
          </motion.p>

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
