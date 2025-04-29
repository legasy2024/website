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
    label: "Proceso",
    title: "¿Tatuarse en Colombia? Proceso de Trabajo con Artistas Colombianos a Distancia desde EEUU",
    date: "29 de abril de 2025",
    image: "/img/blog/tattoo-process.png"
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
          ¡Qué más pues, parceros del arte corporal! En los últimos años, Colombia se ha convertido en toda una sensación para los amantes del tatuaje a nivel mundial. Nuestros talentosos artistas colombianos están rompiendo esquemas con su creatividad, técnica y ese toque único que solo nosotros sabemos darle. Esta fiebre del tatuaje colombiano ha generado un interés tremendo, especialmente desde Estados Unidos, con gente que quiere dejarse tatuar por nuestras manos caleñas, paisas y rolos. Pero, ¿cómo funciona exactamente este proceso cuando hay miles de kilómetros de por medio? En este blog, te vamos a contar todito el paso a paso de cómo colaborar a distancia con los mejores tatuadores de Colombia, desde el primer mensaje hasta el momento de sentarte en la silla para recibir tu tatuaje. ¡Prepárate para descubrir por qué somos la sensación del momento!
        </motion.p>


        <motion.h2
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          1. El Boom de los Tattoo Artists en Colombia
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[560px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={talentImg}
            alt="El Boom de los Tattoo Artists en Colombia"
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
          Colombia ha vivido una verdadera revolución en el mundo del tatuaje durante la última década. Lo que antes era visto medio raro o "de ñeros", hoy se ha transformado en todo un arte respetado y admirado. Este cambio radical ha permitido el florecimiento de un parche vibrante de tatuadores que brillan por:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Una formación técnica bien tesa combinada con toda la herencia cultural de nuestro país
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • La mezcla de tendencias artísticas internacionales pero con ese saborcito colombiano
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Esa berraquera para innovar y experimentar con estilos nuevos
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • La creación de comunidades creativas donde todos aprenden de todos
        </motion.p>
        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          2. Contacto Inicial y Consulta Virtual
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Una vez seleccionado el artista que te gusta, toca establecer la comunicación:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • La mayoría de los estudios pro como Legassy Studio tienen formularios de contacto en sus sitios web
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Da información clara sobre tu idea, tamaño aproximado, ubicación en el cuerpo y cualquier referencia visual que pueda ayudar
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Pide una consulta virtual por videollamada para discutir los detalles del proyecto
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}

        >
          • Pregunta sobre disponibilidad en las fechas que estás pensando viajar
        </motion.p>

        <br />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Durante la consulta virtual, aprovecha para:
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Evaluar cómo es la comunicación con el artista y si entiende bien tu idea
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Hablar de aspectos técnicos como tiempo estimado de sesión, número de sesiones necesarias y proceso de recuperación
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Aclarar dudas sobre los métodos de pago y depósitos requeridos
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Conocer las instalaciones del estudio a través de un tour virtual
        </motion.p>


        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          3. Desarrollo del Diseño Personalizado
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Esta fase es crucial y puede extenderse por semanas o incluso meses para proyectos más tesos:
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • El artista desarrollará bocetos preliminares basados en tu idea
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Se harán ajustes según tus comentarios y preferencias
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Para proyectos grandes o complejos, pueden necesitarse varias rondas de revisión
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • La tecnología nos permite compartir y discutir los diseños en tiempo real a pesar de la distancia
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Los mejores estudios, como Legassy Studio, tienen metodologías específicas para este proceso a distancia, usando herramientas digitales que facilitan la colaboración y aseguran que el diseño final cumpla exactamente con tus expectativas antes de tu viaje.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
          className="italic border-l-4 border-[#A14E05] pl-4 my-8 py-5"
        >
          "La parte más emocionante del proceso es cuando el cliente ve por primera vez el diseño finalizado. Esa reacción, incluso a través de una pantalla, es lo que más valoramos como artistas." — Equipo de Legassy Studio
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          4. Reserva y Depósito
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Una vez que le diste el visto bueno al diseño final, llega el momento de formalizar la reserva:
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • La mayoría de los appointment-only tattoo studios in Colombia piden un depósito para asegurar tu fecha
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Este depósito suele ser entre el 20% y el 50% del costo total estimado
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Las opciones de pago internacional varían, pero generalmente incluyen transferencias bancarias y plataformas digitales como PayPal
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Al hacer el depósito, recibirás una confirmación oficial con la fecha y hora de tu cita
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Es súper importante revisar a fondo las políticas de cancelación y reprogramación, especialmente considerando las posibles complicaciones que pueden surgir con los viajes internacionales.
        </motion.p>


        <motion.h3
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          5. Preparación para el Viaje
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          La planificación adecuada te garantizará una experiencia sin contratiempos:
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Coordina tu itinerario para llegar a Colombia al menos un día antes de tu cita
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Considera factores como el jet lag y la aclimatación
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Elige alojamiento cercano al estudio para minimizar desplazamientos
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Investiga requisitos de entrada a Colombia (visados, vacunas, etc.)
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Planifica tiempo adicional en el país por si se requieren ajustes o sesiones adicionales
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Algunos estudios premium como Legassy Studio ofrecen asistencia con recomendaciones de alojamiento, transporte e incluso pueden coordinar servicios de recogida en el aeropuerto para sus clientes internacionales.
        </motion.p>
        <br />
        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          6. La Sesión de Tatuaje
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Finalmente, después de toda la preparación, llega el momento de materializar el diseño:
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Presenta identificación válida al llegar al estudio
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Revisa el diseño final aplicado a tu piel (stencil) antes de iniciar
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Comunica cualquier inquietud o ajuste necesario antes de empezar
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Sigue las indicaciones del artista durante la sesión
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Recibe instrucciones detalladas para el cuidado posterior
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          La mayoría de los award-winning tattoo artists in Colombia hacen un seguimiento post-sesión, especialmente con clientes internacionales, para asegurarse que el proceso de cicatrización va por buen camino.
        </motion.p>
        <br />
        <motion.div
          className="my-4 w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoo%20process" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Consulta Gratis sobre tu Próximo Tatuaje
          </Link>
        </motion.div>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
          className="font-semibold text-2xl mt-10 mb-4"
        >
          7. Ventajas del Proceso a Distancia con Artistas Colombianos
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[560px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={imgThree}
            alt="Ventajas del Proceso a Distancia con Artistas Colombianos"
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
          clas
        >
          Esta modalidad de trabajo, que puede parecer complicada al principio, ofrece unas ventajas brutales:
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Acceso a talento exclusivo:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Colaborar con los mejores tattoo artists Cali Colombia sin importar dónde estés.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Tiempo para pensar bien las cosas:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          El proceso extendido te da chance de madurar la idea y hacer ajustes antes del compromiso final.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Personalización a otro nivel:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          La comunicación detallada durante semanas o meses resulta en diseños perfectamente alineados con lo que quieres.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Experiencia cultural completica:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Combinar la experiencia del tatuaje con un viaje cultural enriquecedor a Colombia. ¡Salsa, empanadas y tatuajes!
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Valor excepcional:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Acceder a trabajo artístico de primer nivel a precios mucho más competitivos que en Estados Unidos.
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Planificación óptima:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Organizar cada detalle con anticipación para una experiencia sin estrés.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
          className="italic border-l-4 border-[#A14E05] pl-4 my-8 py-5"
        >
          "Viajé desde Seattle específicamente para tatuarme en Legassy Studio y fue la mejor decisión que pude tomar. No solo obtuve una manga increíble a mitad del precio que me costaría en casa, sino que además disfruté de una semana en Cali que cambió mi perspectiva sobre Colombia. ¡La experiencia completa fue inolvidable!" — Michael T., cliente de Estados Unidos
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          8. Legassy Studio: Liderando la Experiencia de Tatuaje a Distancia
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={imgFive}
            alt="Legassy Studio: Liderando la Experiencia de Tatuaje a Distancia"
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
          clas
        >
          Entre los diversos appointment-only tattoo studios in Colombia, Legassy Studio ha desarrollado un sistema especialmente refinado para clientes internacionales. Su enfoque se distingue por:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Comunicación multilingüe: Personal capacitado para atender clientes en inglés, español y otros idiomas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Plataforma digital dedicada: Sistema propio para el seguimiento de proyectos y comunicación con clientes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Asistencia integral: Apoyo en aspectos logísticos del viaje además del proceso creativo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Experiencia comprobada: Historial extenso de clientes internacionales satisfechos, especialmente provenientes de Estados Unidos.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Estándares internacionales: Protocolos de higiene y seguridad que cumplen o exceden las normativas estadounidenses.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Su equipo de award-winning tattoo artists ha perfeccionado el arte de traducir ideas y expectativas a través de la distancia, garantizando que cuando finalmente llegues a su estudio en Cali, la experiencia cumpla o supere tus expectativas más exigentes.
        </motion.p>

        <motion.div
          className="my-4 w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoo%20process" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Consulta Gratis sobre tu Próximo Tatuaje
          </Link>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          9. Sabores de Cali: La Experiencia Gastronómica que Acompaña tu Tatuaje
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={empanadasImg}
            alt="Sabores de Cali: La Experiencia Gastronómica que Acompaña tu Tatuaje"
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
          clas
        >
          Tu viaje para tatuarte en Cali no estaría completo sin probar la deliciosa gastronomía local. Entre sesiones de tatuaje, te recomendamos disfrutar de:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Aborrajados: Plátanos maduros rellenos de queso y fritos, ¡una delicia caleña!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Empanadas vallunas: Pequeñas delicias de masa de maíz rellenas de carne y papa
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Sancocho de gallina: Una sopa robusta perfecta para recuperar energías
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Cholado: Un refrescante postre de hielo raspado con frutas y dulces para los días calurosos
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Lulada: Bebida típica hecha con la fruta lulo, perfecta para hidratarte después de una sesión
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Nuestro equipo estará encantado de recomendarte los mejores lugares para comer cerca del estudio. ¡Parte de la experiencia completa de tatuarse en Cali incluye sus sabores únicos!
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          10. Moviendo el Cuerpo: Cali, Capital Mundial de la Salsa
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={salsaImg}
            alt="Moviendo el Cuerpo: Cali, Capital Mundial de la Salsa"
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
          clas
        >
          Durante tu recuperación entre sesiones, no puedes perderte la experiencia de la salsa caleña. Aunque no recomendamos bailar intensamente justo después de tatuarte, puedes:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Visitar uno de los icónicos bares de salsa como Tin Tin Deo o La Topa Tolondra
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Disfrutar de presentaciones de bailarines profesionales
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Tomar una clase básica de salsa (dependiendo de la ubicación de tu tatuaje)
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          • Comprar música local como souvenir
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Recuerda que los tatuajes recién hechos necesitan cuidados especiales, así que consulta con tu artista qué actividades son seguras durante tu proceso de sanación. ¡Pero definitivamente disfruta del ritmo y la energía que hace única a nuestra ciudad!
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Consideraciones Finales
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          El proceso de colaboración a distancia con tattoo artists in Colombia representa una fusión perfecta entre la planificación cuidadosa y la aventura creativa. Para quienes valoran el arte corporal como una expresión significativa y personal, este enfoque ofrece la oportunidad de acceder a algunos de los talentos más destacados del panorama internacional.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          Si estás contemplando embarcarte en este viaje artístico, recuerda que la comunicación clara, la paciencia y la confianza en el proceso son elementos fundamentales para su éxito. Los mejores estudios, como Legassy Studio, han desarrollado metodologías probadas que minimizan los riesgos y maximizan la satisfacción, convirtiendo cada proyecto en una experiencia transformadora que trasciende fronteras.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          La combinación de talento artístico excepcional, precios competitivos y la cálida hospitalidad colombiana hace que este enfoque sea cada vez más popular entre los entusiastas del tatuaje en Estados Unidos. Más que un simple procedimiento estético, se convierte en un viaje cultural y artístico que culmina en una obra personal e intransferible que llevarás contigo para siempre, recordándote no solo el arte, sino también la experiencia única de conectar con la vibrante escena del tatuaje colombiano.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          clas
        >
          ¿Estás listo para iniciar tu colaboración a distancia con los tattoo artists Cali Colombia? El primer paso es tan simple como una búsqueda exhaustiva, seguida de ese primer mensaje que pondrá en marcha una de las experiencias más memorables en tu camino por el mundo del arte corporal.
        </motion.p>


        <section className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            clas
          >
            <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoo%20process" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Consulta Gratis sobre tu Próximo Tatuaje
            </Link>
          </motion.div>

          <motion.div
            className="mt-0 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            clas
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
          clas
          className="mt-8 text-[#888] italic"
        >
          ¿Tienes preguntas específicas sobre el proceso de tatuaje a distancia? ¡Déjalas en los comentarios y nuestro equipo te responderá en inglés o español!
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
    </section>
  );
}

