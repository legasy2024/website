"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import headerImg from './assets/header.png'
import talentImg from './assets/talentImg.png'

import { FaInstagram } from 'react-icons/fa';

import experienceImg from './assets/experinceImg.png'
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
    label: "Inclusión",
    title: "Estudios de Tatuajes Inclusivos en Colombia: Guía LGBTQ+ y Accesibilidad",
    date: "25 de abril de 2025",
    image: "/img/blog/tattoo-inclusion-colombia.png"
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
            En un mundo donde el arte corporal se ha convertido en una poderosa herramienta de expresión personal y autoafirmación, encontrar espacios seguros para materializar estas expresiones se vuelve fundamental para muchas personas. Colombia, con su creciente escena de tatuajes, está experimentando una transformación significativa hacia entornos más inclusivos y conscientes. Este blog explora los estudios de tatuajes en Colombia que están liderando el cambio hacia una cultura de inclusión genuina, con especial atención a la comunidad LGBTQ+ y personas con necesidades de accesibilidad específicas. En este panorama, Legassy Studio destaca como un referente de inclusión en Cali, demostrando que el arte del tatuaje puede y debe ser una experiencia segura y enriquecedora para todos.
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            1. La Evolución de los Espacios Seguros en la Industria del Tatuaje
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[560px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={imgOne}
              alt="La Evolución de los Espacios Seguros en la Industria del Tatuaje"
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
            La industria del tatuaje ha experimentado una profunda transformación en las últimas décadas, evolucionando desde entornos tradicionalmente masculinizados hacia espacios que celebran la diversidad en todas sus formas. Colombia no ha sido ajena a esta revolución cultural:
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            De Subculturas a Espacios de Afirmación
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Históricamente, los estudios de tatuajes surgieron vinculados a subculturas específicas, creando a veces ambientes intimidantes para ciertos grupos. Hoy, sin embargo, estamos presenciando el surgimiento de una nueva generación de estudios que entienden su responsabilidad social:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • De espacios underground a entornos profesionales y acogedores
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Incorporación de valores de inclusión como parte integral de la identidad de marca
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Reconocimiento del tatuaje como herramienta de afirmación personal y visibilidad
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Factores que definen un estudio verdaderamente inclusivo:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Políticas explícitas contra la discriminación
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Personal consciente y capacitado en temas de diversidad
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Diseño físico accesible para diferentes necesidades
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Comunicación visual y verbal inclusiva
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "Los estudios de tatuajes tienen el potencial de ser mucho más que simples negocios; pueden convertirse en santuarios donde las personas encuentran validación y expresión auténtica a través del arte corporal. Esa ha sido nuestra filosofía desde el día uno." — Alejandro Navia, fundador de Legassy Studio
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20inclusive%20tattoo%20studios" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
            2. La Experiencia LGBTQ+ en Estudios de Tatuajes Colombianos
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={imgTwo}
              alt="La Experiencia LGBTQ+ en Estudios de Tatuajes Colombianos"
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
            Para muchas personas LGBTQ+, el proceso de tatuarse va más allá de lo estético – representa frecuentemente un acto de reclamación del propio cuerpo y expresión de identidad. Por ello, encontrar espacios seguros resulta particularmente significativo:
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Características de Estudios LGBTQ+ Friendly
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Los estudios verdaderamente inclusivos para la comunidad LGBTQ+ se distinguen por:
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-0 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            A. Ambiente libre de juicios:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Respeto por los pronombres y nombres elegidos
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Personal capacitado en lenguaje inclusivo
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Espacio seguro para discutir diseños relacionados con la identidad y experiencia LGBTQ+
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            B. Representación en el equipo:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Artistas y personal diverso
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Visibilidad LGBTQ+ en materiales promocionales y redes sociales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Participación en eventos comunitarios relevantes
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            C. Políticas claras:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Tolerancia cero hacia comentarios o comportamientos discriminatorios
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Procesos de retroalimentación y mejora continua
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Transparencia sobre valores y compromisos
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "Mi experiencia en Legassy Studio fue reveladora. Por primera vez, no tuve que explicar ni justificar el significado personal de mi tatuaje de orgullo. La artista no solo entendió inmediatamente la importancia simbólica, sino que aportó ideas que enriquecieron el diseño desde una perspectiva informada y respetuosa." — Santiago M., cliente de Bogotá
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20inclusive%20tattoo%20studios" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
            3. Directorio de Estudios LGBTQ+ Friendly en Colombia
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={imgThree}
              alt="Directorio de Estudios LGBTQ+ Friendly en Colombia"
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
            Estas son algunas de las opciones más destacadas en diferentes ciudades:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Cali - Legassy Studio: Especializado en neotradicional, acuarela y dotwork. Cuenta con equipo diverso, políticas explícitas, baños neutros y participación en eventos Pride.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Bogotá - Pure Love & Revolution: Destacado en blackwork e ilustrativo. Tiene artistas LGBTQ+, señalización inclusiva y colaboraciones con organizaciones locales.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Medellín - Secret Symbol Tatoo: Enfocado en realismo y geométrico. Ofrece talleres de tatuaje para comunidad trans, sistema de becas y personal capacitado.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Cartagena - Monkeys Tattoo Studio: Especialistas en neotradicional y puntillismo. Ofrecen sesiones privadas disponibles y materiales informativos inclusivos.
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimonios de la Comunidad
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "Como persona no binaria, siempre sentí ansiedad al momento de desvestirme parcialmente para un tatuaje. En Legassy Studio, me preguntaron discretamente mis preferencias para hacer el proceso más cómodo, desde quién estaría presente hasta cómo referirse a partes de mi cuerpo. Estos pequeños detalles hacen una diferencia enorme." — Alex R., cliente internacional
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "Mi tatuador en Legassy no solo creó un diseño hermoso, sino que también respetó completamente mi privacidad y límites personales. No tuve que 'salir del clóset' repetidamente como en otras experiencias previas; el ambiente ya estaba construido para que cualquier identidad fuera bienvenida." — Carolina T., residente de Cali
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            4. Accesibilidad Física y Sensorial: Un Tatuaje al Alcance de Todos
          </motion.h2>


          <motion.div
            className="relative w-full h-[200px] md:h-[560px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={imgFour}
              alt="Accesibilidad Física y Sensorial: Un Tatuaje al Alcance de Todos"
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
            La inclusión va más allá de la orientación sexual e identidad de género, abarcando también necesidades de accesibilidad física, sensorial y neurológica:
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Barreras Comunes y Soluciones Innovadoras
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Los estudios verdaderamente inclusivos están abordando activamente las barreras tradicionales:
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            A. Accesibilidad física:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Entradas y espacios adaptados para sillas de ruedas
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Camillas ajustables en altura
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Baños accesibles
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Señalización clara y visible
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            B. Consideraciones sensoriales:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Opciones para reducir estímulos (sesiones privadas, horarios especiales)
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Alternativas a la música alta tradicional de los estudios
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Iluminación adaptable
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Protocolos para personas con sensibilidades específicas al dolor
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            C. Comunicación accesible:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Material informativo en múltiples formatos
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Personal capacitado en lengua de señas colombiana (o acceso a interpretación)
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Procesos de consentimiento adaptados a diferentes necesidades
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "La accesibilidad no debería ser un lujo o una excepción, sino el estándar. En Legassy Studio hemos invertido en adaptar nuestro espacio y capacitar a nuestro equipo para asegurar que el arte del tatuaje sea una posibilidad real para personas con diversas necesidades." — Equipo de Legassy Studio
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20inclusive%20tattoo%20studios" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
            5. Legassy Studio: Un Modelo de Inclusión en Cali
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={imgFive}
              alt="Legassy Studio: Un Modelo de Inclusión en Cali"
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
            En el panorama de estudios inclusivos, Legassy Studio se ha posicionado como un referente gracias a su enfoque integral:
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pilares del Modelo Inclusivo de Legassy
          </motion.h3>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            A. Cultura organizacional consciente:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Capacitación continua del equipo en temas de diversidad e inclusión
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Procesos de contratación que valoran la diversidad de perspectivas
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Políticas internas que reflejan compromiso con la inclusión
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            B. Espacio físico adaptado:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Diseño universal que considera diversas necesidades
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Áreas privadas para sesiones que requieren mayor intimidad
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Señalización inclusiva y representativa
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            C. Proceso de tatuaje centrado en la persona:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Consultas preliminares detalladas que abordan necesidades específicas
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Formularios de ingreso con opciones inclusivas
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Protocolos adaptables según requerimientos individuales
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            D. Conexión comunitaria:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Participación activa en eventos LGBTQ+ y de accesibilidad
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Colaboraciones con organizaciones locales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Programas de tatuajes subsidiados para personas trans y sobrevivientes de violencia
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "Nuestro compromiso con la inclusión no es una estrategia de marketing, sino un valor fundamental que guía cada aspecto de nuestro trabajo. Creemos firmemente que el arte del tatuaje debe ser accesible para todas las personas que deseen expresarse a través de él." — Manifiesto de Inclusión de Legassy Studio
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20inclusive%20tattoo%20studios" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
            6. Guía Práctica: Cómo Identificar un Estudio Verdaderamente Inclusivo
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={talentImg}
              alt="Guía Práctica: Cómo Identificar un Estudio Verdaderamente Inclusivo"
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
            Para personas que buscan espacios seguros donde tatuarse, ofrecemos algunos consejos para evaluar el compromiso real con la inclusión:
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Señales de un Estudio Genuinamente Inclusivo
          </motion.h3>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            A. Presencia digital:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Lenguaje inclusivo en sitio web y redes sociales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Representación diversa en su portafolio
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Información explícita sobre accesibilidad e inclusión
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            B. Comunicación inicial:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Respuestas respetuosas a consultas sobre necesidades específicas
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Apertura a discutir adaptaciones o requerimientos especiales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Formularios de contacto con opciones inclusivas
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            C. Espacio físico:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Señalización inclusiva visible
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Accesibilidad básica para diversas necesidades
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Ambiente acogedor y profesional
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            D. Durante la consulta:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Preguntas sobre pronombres y preferencias
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Respeto por límites personales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Explicaciones claras y adaptadas a diferentes necesidades
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Opciones de privacidad
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "Un verdadero espacio seguro se reconoce no por cuántas banderas del arcoíris tiene en la pared, sino por cómo hace sentir a cada persona que cruza su puerta – respetada, valorada y comprendida en su singularidad." — Revista Colombiana de Arte Corporal, 2024
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-8 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Conclusión: Tatuajes que Transforman más que la Piel
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            En Colombia, y particularmente en ciudades como Cali, estamos presenciando el surgimiento de una nueva generación de estudios de tatuajes que entienden su potencial transformador. Estos espacios reconocen que el acto de tatuar va mucho más allá de la técnica artística – implica crear entornos donde cada persona pueda sentirse segura, respetada y celebrada en su singularidad.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Legassy Studio representa esta nueva visión del tatuaje como práctica inclusiva, demostrando que la excelencia artística y el compromiso social no solo son compatibles, sino mutuamente enriquecedores. A través de políticas conscientes, diseño accesible y una cultura organizacional centrada en el respeto, están estableciendo nuevos estándares para la industria.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Para quienes buscan plasmar su identidad, historia personal o simplemente belleza en su piel, encontrar un espacio verdaderamente inclusivo marca la diferencia entre una experiencia meramente comercial y un proceso profundamente afirmativo. Los estudios inclusivos están reconociendo el privilegio y la responsabilidad que implica participar en estos momentos significativos en la vida de sus clientes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Te invitamos a formar parte de esta transformación. Ya sea que pertenezcas a la comunidad LGBTQ+, tengas necesidades de accesibilidad específicas o simplemente valores los espacios que celebran la diversidad humana, tu elección de dónde tatuarte es también una declaración de valores. En Legassy Studio, encontrarás no solo artistas excepcionales, sino un equipo comprometido con crear una experiencia donde puedas expresarte auténticamente, sin barreras ni prejuicios.
          </motion.p>

          <section className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <motion.div
              className="my-4 w-full flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20inclusive%20tattoo%20studios" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
            ¿Tienes preguntas específicas sobre estudios de tatuajes inclusivos en Colombia? ¡Déjalas en los comentarios y nuestro equipo te responderá en inglés o español!
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
