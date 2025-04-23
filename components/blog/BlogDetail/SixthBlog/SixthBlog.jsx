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
    label: "Precios",
    title: "Todo lo que Debes Saber sobre Precios de Tatuajes en Colombia vs. EE.UU.",
    date: "25 de abril de 2025",
    image: "/img/blog/tattoo-prices-comparison.png"
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
          En un mundo cada vez más globalizado, el arte del tatuaje ha transcendido fronteras, convirtiéndose en una expresión universal que atrae a viajeros de todo el planeta. Sin embargo, pocos conocen la extraordinaria ventaja que ofrece Colombia, y particularmente Cali, cuando se trata de combinar calidad artística excepcional con precios sorprendentemente accesibles. Este blog explorará en detalle la comparativa de precios entre Colombia y Estados Unidos, revelando por qué cada vez más extranjeros eligen nuestro país como destino para plasmar arte permanente en su piel. Descubrirás cómo Legassy Studio lidera esta revolución, ofreciendo tatuajes de nivel internacional a precios que desafían toda lógica del mercado global.
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          1. La Economía del Tatuaje: Una Comparativa Global
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[560px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={pricesImg}
            alt="La Economía del Tatuaje: Una Comparativa Global"
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
          La industria del tatuaje ha experimentado un crecimiento exponencial en la última década, evolucionando desde los márgenes culturales hasta convertirse en una forma de arte ampliamente aceptada y valorada. Sin embargo, el costo de acceder a este arte varía dramáticamente según la geografía:
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Factores que Determinan el Precio de un Tatuaje
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-5"
        >
          Antes de entrar en la comparativa directa, es importante entender qué elementos influyen en el precio final de un tatuaje:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}

        >
          • Experiencia y reconocimiento del artista: La trayectoria profesional y el renombre del tatuador
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Complejidad y tamaño del diseño: Detalle, dimensiones y tiempo requerido
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Técnicas y estilos empleados: Algunos estilos como el realismo o la acuarela requieren mayor experticia
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Ubicación geográfica del estudio: Los costos operativos varían significativamente según el país y la ciudad
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Materiales y equipamiento: La calidad de tintas, agujas y máquinas utilizadas
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="italic border-l-4 border-[#A14E05] pl-4 my-8 py-5"
        >
          "El arte del tatuaje es universal, pero su accesibilidad varía enormemente dependiendo de dónde te encuentres. Lo que en Nueva York sería un lujo, en Cali se convierte en una posibilidad real sin comprometer calidad." — Alejandro Navia, fundador de Legassy Studio
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Comparativa de Precios: Colombia vs. Estados Unidos
        </motion.h3>

        <motion.div
          className="overflow-x-auto my-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <table className="min-w-full bg-[#1a1a1a] rounded-lg overflow-hidden">
            <thead className="bg-[#333]">
              <tr>
                <th className="px-4 py-3 text-left">Ciudad</th>
                <th className="px-4 py-3 text-left">Precio Promedio por Hora (USD)</th>
                <th className="px-4 py-3 text-left">Precio Sesión Completa (Manga/Espalda)</th>
                <th className="px-4 py-3 text-left">Materiales Utilizados</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#444]">
              <tr>
                <td className="px-4 py-3">Cali</td>
                <td className="px-4 py-3">$70-120</td>
                <td className="px-4 py-3">$500-1,000</td>
                <td className="px-4 py-3">Premium importados</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bogotá</td>
                <td className="px-4 py-3">$80-150</td>
                <td className="px-4 py-3">$600-1,200</td>
                <td className="px-4 py-3">Premium importados</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Medellín</td>
                <td className="px-4 py-3">$90-180</td>
                <td className="px-4 py-3">$650-1,500</td>
                <td className="px-4 py-3">Premium importados</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Miami</td>
                <td className="px-4 py-3">$150-250</td>
                <td className="px-4 py-3">$1,200-3,000</td>
                <td className="px-4 py-3">Premium estándar</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Nueva York</td>
                <td className="px-4 py-3">$200-400</td>
                <td className="px-4 py-3">$1,800-5,000</td>
                <td className="px-4 py-3">Premium estándar</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Los Ángeles</td>
                <td className="px-4 py-3">$180-350</td>
                <td className="px-4 py-3">$1,500-4,500</td>
                <td className="px-4 py-3">Premium estándar</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Esta diferencia de precios resulta aún más sorprendente cuando se considera que muchos estudios colombianos de alto nivel, como Legassy Studio, utilizan exactamente los mismos materiales, equipamiento y técnicas que sus contrapartes estadounidenses.
        </motion.p>

        <motion.div
          className="my-4 w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoo%20prices" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
          2. El Fenómeno Colombiano: Alta Calidad a Precios Accesibles
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={imgTwo}
            alt="El Fenómeno Colombiano: Alta Calidad a Precios Accesibles"
            loading="lazy"
            fill
            className="object-cover rounded-md"
            sizes="100vw"
          />
        </motion.div>

        <motion.h3
          className="text-xl font-bold mt-4 py-5 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La Paradoja de la Calidad y el Precio
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-5"
        >
          Lo que hace verdaderamente excepcional el caso colombiano es que esta diferencia de precios no se traduce en una calidad inferior. Por el contrario, Colombia ha desarrollado una escena de tatuaje que compite directamente con los más altos estándares internacionales:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Formación internacional: Muchos artistas colombianos se han formado en el extranjero o con maestros internacionales
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Competencia técnica: Dominio de las técnicas más avanzadas y complejas
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Influencia artística diversa: Fusión única de influencias globales con identidad local
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Infraestructura y bioseguridad: Estudios que cumplen con estándares internacionales
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="italic border-l-4 border-[#A14E05] pl-4 pt-5 my-4"
        >
          "Lo que más sorprende a nuestros clientes extranjeros no es solo el precio, sino descubrir que están recibiendo un trabajo que supera incluso lo que encontrarían en estudios de renombre en sus países de origen." — Revista Internacional de Arte Corporal, 2024
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Desglose de Costos: ¿Por qué Esta Diferencia?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Para entender mejor esta disparidad de precios, analicemos los factores económicos que la hacen posible:
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Factores Económicos que Benefician al Cliente en Colombia:
        </motion.h3>

        <motion.h3
          className="text-lg font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          A. Costos operativos reducidos:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Alquileres comerciales significativamente más bajos
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Servicios públicos y costos administrativos menores
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Regulaciones menos onerosas financieramente
        </motion.p>

        <motion.h3
          className="text-lg font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          B. Economía de escala inversa:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Estudios que pueden dedicar más tiempo a cada cliente
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Menor presión por maximizar el número de clientes diarios
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Posibilidad de ofrecer consultas y diseños personalizados sin costos adicionales
        </motion.p>

        <motion.h3
          className="text-lg font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          C. Diferencial cambiario:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • El poder adquisitivo del dólar y el euro frente al peso colombiano
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Estabilidad de precios en moneda local que beneficia al visitante extranjero
        </motion.p>

        <motion.h3
          className="text-lg font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          D. Cadena de valor optimizada:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Importación directa de materiales premium
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Menores costos de intermediación
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Redes colaborativas entre artistas que reducen costos generales
        </motion.p>

        <motion.div
          className="my-4 w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoo%20prices" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
          3. La Experiencia Legassy: El Equilibrio Perfecto Entre Calidad y Precio
        </motion.h2>

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={imgThree}
            alt="La Experiencia Legassy: El Equilibrio Perfecto Entre Calidad y Precio"
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
          En el corazón de la escena caleña del tatuaje, Legassy Studio ha desarrollado un modelo que maximiza este diferencial económico en beneficio de sus clientes, sin comprometer la excelencia artística:
        </motion.p>

        <motion.h3
          className="text-xl font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Lo que Hace Única a la Experiencia Legassy:
        </motion.h3>

        <motion.h3
          className="text-lg font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          A. Metodología de Presupuesto Transparente:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Cotizaciones detalladas y sin costos ocultos
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Opciones flexibles adaptadas a diferentes presupuestos
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Claridad sobre el tiempo y las sesiones necesarias
        </motion.p>

        <motion.h3
          className="text-lg font-bold mt-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          B. Propuesta de Valor Elevada:
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Diseños exclusivos y personalizados sin costo adicional
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          • Sesiones de consulta preliminar gratuitas (incluso virtuales para clientes internacionales)
        </motion.p>

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
            • Servicio post-tatuaje integral incluido en el precio
          </motion.p>

          <motion.h3
            className="text-lg font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            C. Economías de Experiencia:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Eficiencia basada en experiencia que reduce tiempos sin sacrificar calidad
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Optimización de procesos que minimiza desperdicios de materiales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Rotación de artistas según especialidades que maximiza resultados
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "Nuestro objetivo nunca ha sido ser los más baratos, sino ofrecer la mejor relación calidad-precio del mercado. Queremos que nuestros clientes internacionales sientan que su viaje a Cali fue una inversión artística inteligente." — Equipo de Legassy Studio
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            4. Testimonios: La Experiencia de Clientes Internacionales
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[560px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={imgFour}
              alt="Testimonios: La Experiencia de Clientes Internacionales"
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
            La mejor manera de entender el valor excepcional que ofrece Colombia es a través de las experiencias de quienes han venido específicamente a tatuarse:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "Mi manga completa en Nueva York estaba presupuestada en más de $9,000 USD. En Legassy Studio pagué menos de $2,500 por un trabajo que mis amigos tatuadores en Estados Unidos consideran superior. Además, convertí el proceso en unas vacaciones memorables en Colombia." — Michael T., diseñador gráfico de Chicago
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "No solo ahorré dinero, sino que obtuve una pieza única con elementos de la cultura colombiana que hacen que mi tatuaje tenga una historia especial. En Berlín habría pagado el triple por algo genérico." — Sophia K., fotógrafa alemana
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "Me presupuestaron 12 horas de trabajo distribuidas en 4 sesiones. En mi ciudad eso significaría alrededor de $2,400. En Cali pagué $840 y además pude disfrutar de la ciudad entre sesiones. Es simplemente increíble la relación calidad-precio." — Jean P., ingeniero canadiense
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Aquí pueden ver algunos de los tatuajes de nuestros clientes internacionales:
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoo%20prices" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
            5. Guía Práctica para Aprovechar al Máximo el Diferencial de Precios
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={imgFive}
              alt="Guía Práctica para Aprovechar al Máximo el Diferencial de Precios"
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
            Para visitantes internacionales que desean capitalizar esta ventaja económica, ofrecemos algunos consejos prácticos:
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Planificación Financiera para tu Tatuaje en Colombia:
          </motion.h3>

          <motion.h3
            className="text-lg font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            A. Presupuesto Inteligente:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Calcula el costo total incluyendo vuelos y alojamiento
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Considera que para piezas grandes, el ahorro puede cubrir completamente el viaje
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Planifica sesiones múltiples aprovechando tu estadía (piezas diferentes o trabajo por etapas)
          </motion.p>

          <motion.h3
            className="text-lg font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            B. Métodos de Pago:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • La mayoría de estudios premium aceptan divisas y tarjetas internacionales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Considera el pago parcial adelantado para asegurar disponibilidad
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Algunos estudios ofrecen descuentos por pago en efectivo
          </motion.p>

          <motion.h3
            className="text-lg font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            C. Consideraciones Temporales:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Planifica tu viaje con suficiente tiempo para posibles sesiones adicionales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Reserva con al menos 3-4 semanas de anticipación (especialmente para artistas específicos)
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Contempla un día adicional para cada sesión grande (para descanso de la piel)
          </motion.p>

          <motion.h3
            className="text-lg font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            D. Programas Especiales para Visitantes Internacionales en Legassy Studio:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Conscientes del creciente turismo de tatuajes, hemos desarrollado paquetes específicos para visitantes internacionales:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Tatuaje + Experiencia Cultural: Incluye sesiones de tatuaje y tours por la escena artística local
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Programa de Referidos Internacional: Descuentos especiales para grupos de amigos que viajan juntos
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Paquete Multipieza: Tarifas reducidas para clientes que realizan múltiples trabajos durante su estancia
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Asesoría de Viaje Completa: Recomendaciones de hospedaje, transporte y actividades complementarias
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            6. Más Allá del Precio: El Valor Añadido del Tatuaje Colombiano
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={empanadasImg}
              alt="Más Allá del Precio: El Valor Añadido del Tatuaje Colombiano"
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
            Si bien el diferencial económico es atractivo, el verdadero valor de tatuarse en Colombia trasciende el aspecto monetario:
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            El Valor Cultural y Artístico:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Originalidad estética: Acceso a estilos y fusiones únicas del arte latinoamericano contemporáneo
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Conexión cultural: Integración de elementos culturales colombianos en los diseños
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Experiencia inmersiva: El proceso como parte de una experiencia cultural completa
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Narrativa personal: Tatuajes que cuentan la historia de un viaje transformador
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            "Un tatuaje realizado en Colombia no es solo una pieza artística excepcional a un precio accesible; es también un souvenir permanente que cuenta la historia de una conexión con nuestra cultura, nuestros paisajes y nuestra gente." — Revista Tattoo Arte Latinoamericano
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            7. El Futuro: Colombia como Epicentro del Turismo de Tatuajes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Los indicadores actuales sugieren que Colombia, y particularmente Cali, continuará consolidándose como un destino principal para el turismo de tatuajes:
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Crecimiento del 35% en visitas internacionales motivadas por tatuajes (2022-2024)
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Aumento de colaboraciones entre artistas colombianos y estudios internacionales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Mayor presencia de tatuadores colombianos en convenciones globales
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            • Desarrollo de infraestructura turística especializada alrededor de esta tendencia
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Para 2026, se proyecta que el turismo de tatuajes podría representar un segmento significativo del turismo cultural en ciudades como Cali, contribuyendo a transformar la percepción internacional de Colombia como un destino creativo de primer nivel.
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoo%20prices" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
            Conclusión: Una Inversión Artística Inteligente
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Elegir Colombia para tu próximo tatuaje representa mucho más que un ahorro significativo. Es una decisión que combina inteligencia financiera con una experiencia artística y cultural enriquecedora. En Legassy Studio entendemos que cada cliente internacional busca no solo un precio competitivo, sino una experiencia integral que justifique su viaje.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Al comparar los precios entre Colombia y Estados Unidos, queda claro que el diferencial económico es simplemente la puerta de entrada a un mundo de posibilidades artísticas. Lo que realmente hace extraordinaria esta oportunidad es la combinación imbatible de talento artístico excepcional, precios accesibles y un contexto cultural vibrante que enriquece cada diseño.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tu piel merece arte excepcional, y tu bolsillo agradecerá la inteligencia de tu decisión. ¿Estás listo para descubrir por qué cada vez más conocedores del tatuaje global están mirando hacia Colombia? Contacta con Legassy Studio hoy mismo para una asesoría personalizada gratuita y comienza a planificar una experiencia que transformará no solo tu piel, sino también tu conexión con Colombia.
          </motion.p>

          <section className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <motion.div
              className="my-4 w-full flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoo%20prices" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
            ¿Tienes preguntas específicas sobre precios de tatuajes en Colombia? ¡Déjalas en los comentarios y nuestro equipo te responderá en inglés o español!
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