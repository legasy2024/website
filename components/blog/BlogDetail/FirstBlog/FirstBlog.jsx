"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import headerImg from './assets/header.png'
import imgOne from './assets/imgOne.png'
import imgTwo from './assets/imgDos.png'
import imgThree from './assets/imgTres.png'
import imgFour from './assets/imgCuatro.png'

import { FaInstagram } from 'react-icons/fa';
import tattosImg from './assets/tattos.png'

import caliImg from './assets/caliUno.jpg'
import caliUnoImg from './assets/partyImg.jpg'
import cirstoReyImg from './assets/cristoReyImg.png'
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
    label: "Guía Local",
    title: "Guía Definitiva: Dónde Tatuarse en Cali, Colombia — Top 5 Estudios",
    date: "08 de abril de 2025",
    image: "/img/blog/tatuajes-cali.png"
  };

  return (
    <section className="w-full m-auto px-5 py-16 md:py-28  bg-[#212121] text-white">
      <motion.div
        className="w-full max-w-[1200px] m-auto flex flex-col"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.label
          className="inline-block w-28 place-self-center border border-[#C4C4C4] text-TextSecondary-100 py-1 px-3 rounded-full mb-4"
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
            className="object-cover rounded-md"
            sizes="100vw"
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
            Cali se ha consolidado como un referente nacional en el mundo del arte del tatuaje, y no es para menos. Esta vibrante ciudad no solo es famosa por su energía contagiosa y rica cultura, sino también por su creciente escena artística, donde artistas de tattoo destacan por su innovación y maestría. En Cali, la diversidad de estilos y la calidad de sus artistas han convertido a la ciudad en un imán para aquellos que buscan llevar su arte corporal al siguiente nivel.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Este artículo te ofrece una comparativa honesta de los mejore tattoo shops en Cali Colombia, donde la excelencia y el compromiso con la experiencia del cliente marcan la diferencia.
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            El origen y transformación del arte del Tatuaje en Cali
          </motion.h2>


          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={caliImg}
              alt={post.title}
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
            Durante las últimas décadas, el tatuaje en Cali ha experimentado una notable transformación. Inicialmente vinculado a la contracultura y a subculturas urbanas, la práctica se introdujo en la ciudad a finales del siglo XX, influenciada por movimientos globales como el rock, el skate y el hip-hop. Estos elementos culturales abrieron la puerta a técnicas y estilos internacionales, que poco a poco se fusionaron con la rica herencia cultural local, permitiendo que el tatuaje dejara de ser un símbolo marginal para convertirse en una forma de expresión artística reconocida y respetada.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Con el tiempo, la evolución del tatuaje en Cali se vio marcada por la innovación y la creatividad de artistas locales, quienes comenzaron a desarrollar estilos únicos que reflejan la identidad caleña. Esta evolución se tradujo en el surgimiento de estudios de alta calidad, donde se integran técnicas modernas con toques de tradición y estética colombiana. Hoy en día, Cali se consolida como uno de los epicentros del arte del tatuaje en Colombia, destacándose no solo por su diversidad de estilos, sino también por el compromiso de sus artistas en transformar cada trazo en una experiencia cultural y personal inigualable.
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Top 5 Estudios de Tatuajes en Cali
          </motion.h2>

          <motion.h3
            className="text-xl font-bold mt-2 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            1. Legassy Studio
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Legassy Studio se posiciona en el frente del arte del tatuaje en Cali, ofreciendo una experiencia única y exclusiva. Desde el primer contacto, el estudio se distingue por su atención personalizada de alto nivel, asegurando que cada cliente reciba una consulta previa detallada y un asesoramiento post-tatuaje inigualable. Los artistas de Legassy Studio cuentan con una visión internacional, fusionando técnicas globales con la esencia única del Colombian traditional tattoo art, lo que permite crear piezas que trascienden modas y tendencias.
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hola!%20Vengo%20del%20blog%20XGIYHXPQU2JMA1,%20quisiera%20tener%20mas%20informacion%20sobre%20tatuajes" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Pedir una Asesoría Personalizada Gratis
            </Link>
          </motion.div>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={imgFour}
              alt={post.title}
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
            Nuestro equipo de artistas domina diversas especialidades para satisfacer todos los gustos y visiones creativas. Destacamos por nuestra maestría en puntillismo, creando diseños de extraordinaria precisión y textura a través de miles de puntos meticulosamente colocados. En el ámbito del realismo, nuestros tatuadores logran reproducciones sorprendentemente vívidas, capturando cada detalle y profundidad con un dominio excepcional de luces y sombras.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Para los amantes del anime y manga, ofrecemos interpretaciones auténticas de este estilo japonés, respetando sus características distintivas mientras adaptamos cada diseño a la personalidad del cliente. Nuestra técnica de línea fina es ideal para quienes buscan elegancia y delicadeza, creando tatuajes minimalistas pero de gran impacto visual con líneas precisas y sutiles.
          </motion.p>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={tattosImg}
              alt={post.title}
              loading="lazy"
              fill
              className="object-contain h-96 rounded-md"

            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Las instalaciones del estudio son impecables y privadas, ofreciendo un ambiente sofisticado que incluye detalles como café o té de cortesía, una playlist curada para cada sesión, y promociones exclusivas para clientes internacionales o de otras ciudades. Si buscas no solo un tatuaje, sino una experiencia transformadora, Legassy Studio es tu mejor elección.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-2 font-medium"
          >
            ¿Quieres ver más? Conoce todo el portafolio aquí
          </motion.p>

          <motion.div
            className="my-2 w-full flex justify-center"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#2a2a2a] p-4 rounded-md mt-2"
          >
            <p className="font-medium mb-2">Información de contacto:</p>
            <p>Ubicación: Cali, Colombia</p>
            <p>Teléfono: +57 (312) 871-7100</p>
          </motion.div>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hola!%20Vengo%20del%20blog%20XGIYHXPQU2JMA1,%20quisiera%20tener%20mas%20informacion%20sobre%20tatuajes" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Pedir una Asesoría Personalizada Gratis
            </Link>
          </motion.div>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={imgThree}
              alt={post.title}
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"

            />
          </motion.div>

          <motion.h3
            className="text-xl font-bold mt-6 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            2. Ink Life Cali
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ink Life Cali destaca por su buena variedad de estilos y la incorporación de artistas emergentes que aportan frescura y originalidad a cada diseño.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Este estudio se orienta especialmente a un público joven, que busca experimentar con propuestas innovadoras sin renunciar a la calidad técnica. En Ink Life Cali se valora la diversidad, permitiendo a los clientes elegir entre un amplio abanico de opciones que van desde diseños minimalistas hasta obras de arte complejas. Además, su ambiente relajado y moderno invita a vivir la experiencia del tatuaje de una manera auténtica y cercana, haciendo de cada sesión un momento especial de autoexpresión.
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-6 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            3. Arte Sagrado Tattoo
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Arte Sagrado Tattoo se especializa en tatuajes tradicionales y de inspiración religiosa, creando piezas que cuentan historias y simbolizan creencias profundas. Este estudio se caracteriza por una estética clásica, donde cada diseño es meticulosamente elaborado para resaltar la belleza y el significado del tatuaje.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Los artistas de Arte Sagrado combinan la precisión técnica con un enfoque artístico que respeta las raíces culturales del Colombian traditional tattoo art. Ideal para quienes buscan un tatuaje que vaya más allá de la simple imagen, este estudio ofrece una experiencia que conecta con lo espiritual y lo ancestral, haciendo de cada obra una verdadera pieza de arte corporal.
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-6 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            4. Black Point Tattoo
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Especializado en el realismo y el sombreado, Black Point Tattoo se ha ganado una reputación por su excelente manejo de retratos y detalles precisos. Este estudio es perfecto para quienes desean inmortalizar imágenes o rostros en su piel, gracias a la habilidad de sus artistas para capturar cada matiz y emoción. Con un enfoque técnico muy depurado, Black Point Tattoo ofrece una experiencia que se basa en la precisión y la calidad, destacándose en la escena local como uno de los referentes en el realismo tatuado. Si buscas un tatuaje que narre tu historia a través de un retrato detallado, este estudio es la opción ideal.
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-6 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            5. The Old School Tattoo
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Old School Tattoo ofrece un ambiente relajado y tradicional, ideal para los amantes del estilo clásico americano. Este estudio evoca la nostalgia de los tatuajes vintage, combinando la técnica tradicional con un toque moderno. En The Old School Tattoo, cada sesión es una celebración del arte clásico, donde la pasión por el detalle y la calidad se reflejan en cada diseño. Es el lugar perfecto para quienes desean un tatuaje que rinda homenaje a las raíces del tatuaje, conservando la autenticidad y la esencia del old school en cada trazo.
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-8 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Agenda tu cita en Legassy Studio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            No dejés pasar la oportunidad de transformar tu cuerpo en una obra de arte. Agendá tu cita en Legassy Studio y viví una experiencia que va más allá de un simple tatuaje. Descubre cómo un diseño bien ejecutado puede convertirse en un recuerdo de por vida, lleno de estilo, significado y la pasión de los mejores artistas de Cali. ¡Atrévete a llevar tu historia a la piel y disfruta de la excelencia del arte corporal en su máxima expresión!
          </motion.p>

          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hola!%20Vengo%20del%20blog%20XGIYHXPQU2JMA1,%20quisiera%20tener%20mas%20informacion%20sobre%20tatuajes" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
            ¿Qué hacer en Cali antes o después de tatuarte?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Si venís a Cali por un tattoo en Legassy Studio, tenés que aprovechar la experiencia completica. La Sucursal del Cielo no solo es la capital mundial de la salsa, sino un paraíso lleno de sabor, color y experiencias únicas que complementarán tu visita. Te contamos qué hacer pa' que tu viaje sea inolvidable, ¡tan bacano como tu nuevo tatuaje!
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-6 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pa' los amantes del paisaje y la buena vista
          </motion.h3>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={cirstoReyImg}
              alt="Paisajes de Cali"
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
            <strong>Mirador de Sebastián de Belalcázar:</strong> Subite a este punto icónico de la ciudad donde podrás apreciar Cali en todo su esplendor. Desde aquí, con el monumento del fundador de la ciudad a tus espaldas, podés capturar fotos espectaculares de tu nuevo tatuaje con el Valle del Cauca como telón de fondo. La vista del atardecer es una chimba total, con esos tonos naranjas y rojos que pintan el cielo caleño.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Cristo Rey:</strong> Si te animás a una aventura más lejos, esta estatua gigante de Cristo (similar al de Río de Janeiro pero con su propio estilo vallecaucano) te ofrece una panorámica de 360 grados de Cali. El viaje hasta allá es toda una experiencia en sí misma, atravesando barrios tradicionales y viendo cómo la ciudad se extiende entre las montañas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Río Pance:</strong> Pa' refrescarte después de tu sesión de tatuaje, nada mejor que las aguas cristalinas del río Pance. Los domingos, los caleños le dicen "ir a Pance" como una tradición sagrada. Llevate un buen sancocho de río en alguno de los restaurantes a la orilla - ¡pero ojo! Protegé bien tu tatuaje nuevo del agua durante los primeros días.
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-6 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pa' nutrir el espíritu cultural
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Barrio San Antonio:</strong> Perdete entre las callejuelas empedradas de este barrio colonial con casas de colores vibrantes y balcones llenos de flores. Es un parche donde encontrarás cafecitos tradicionales como "El Zaguan de San Antonio" donde podés probar un café de origen mientras conversás con locales. Las galerías de arte callejero te pueden inspirar pa' tu próximo tatuaje.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>La Loma de la Cruz:</strong> Visitá este lugar los viernes pa' disfrutar de la feria artesanal donde artistas locales exponen sus creaciones. Aquí podés encontrar joyería, ropa y souvenirs únicos para llevar como recuerdo junto con tu nuevo tattoo. Mientras recorrés los puestos, disfrutá de presentaciones de música en vivo y bailes espontáneos.
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-6 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pa' mover el esqueleto y sentir el sabor caleño
          </motion.h3>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={caliUnoImg}
              alt="Paisajes de Cali"
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
            <strong>La Topa Tolondra:</strong> No te podés ir de Cali sin visitar este templo de la salsa. Acá los jueves son legendarios, y no importa si no sabés bailar - los caleños te enseñarán con una sonrisa. Celebrá tu nuevo tatuaje moviendo la cintura al ritmo de las mejores orquestas. ¡Pero no sudés mucho si tu tattoo es reciente, parcero!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Delirio:</strong> Si tu visita coincide con el último viernes del mes, no te perdás este espectáculo único que combina circo, salsa y teatro. Es como un Cirque du Soleil pero con sabor caleño y mucho más sabrosura. Reservá con tiempo porque las entradas se agotan rapidito.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Petronio Álvarez:</strong> Si venís en agosto, tenes la suerte de vivir el Festival de Música del Pacífico, donde la música, gastronomía y cultura afrodescendiente se toman la ciudad. Probá un "arrechón" (bebida afrodisíaca tradicional) o un "viche" mientras escuchás los ritmos de marimba y currulao.
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-6 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pa' consentir el paladar con comida valluna
          </motion.h3>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={empanadasImg}
              alt="Gastronomía caleña"
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
            <strong>Cholado en el Parque del Perro:</strong> Después de tu sesión de tatuaje, refrescate con esta delicia típica caleña: hielo raspado, frutas tropicales, leche condensada, crema de leche y jarabes de colores. El Parque del Perro también es un punto de encuentro nocturno con bares y restaurantes pa' todos los gustos.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Lulada en el centro:</strong> Esta bebida refrescante hecha con lulo (fruta típica colombiana) es perfecta pa' el calor caleño. Encontrala en los puestos callejeros del centro mientras recorrés el boulevard del río.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong>Sancocho de gallina en las afueras:</strong> Si tenés tiempo, escapate a Jamundí o Rozo para probar un verdadero sancocho valluno, servido con aguacate, arroz blanco y ají casero. Una delicia que te dará energías después de tu sesión de tatuaje.
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-8 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Agenda tu cita en Legassy Studio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            No dejés pasar la oportunidad de transformar tu cuerpo en una obra de arte. Agendá tu cita en Legassy Studio y viví una experiencia que va más allá de un simple tatuaje. Descubre cómo un diseño bien ejecutado puede convertirse en un recuerdo de por vida, lleno de estilo, significado y la pasión de los mejores artistas de Cali. ¡Atrévete a llevar tu historia a la piel y disfruta de la excelencia del arte corporal en su máxima expresión!
          </motion.p>

          <motion.div
            className="mt-6 mb-10 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="https://wa.me/573128717100?text=Hola!%20Vengo%20del%20blog%20XGIYHXPQU2JMA1,%20quisiera%20tener%20mas%20informacion%20sobre%20tatuajes" className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Pedir una Asesoría Personalizada Gratis
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}