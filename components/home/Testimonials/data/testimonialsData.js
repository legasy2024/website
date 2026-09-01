// Reseñas reales extraídas de la ficha de Google de Legassy Tattoo Studio
// https://share.google/xggX6QWlARhNdq5z7
// Extraídas con Apify (compass/Google-Maps-Reviews-Scraper) el 2026-08-31.
// Cada reseña conserva el texto original del cliente (sin editar) y su idioma de origen.
// Solo se incluyen clientes cuya foto de perfil de Google NO es el avatar genérico de iniciales.

import fernandaMarin1 from "../assets/reviewPhotos/fernanda-marin-1.jpg";
import fernandaMarin2 from "../assets/reviewPhotos/fernanda-marin-2.jpg";
import davidEchavarria1 from "../assets/reviewPhotos/david-echavarria-1.jpg";
import davidEchavarria2 from "../assets/reviewPhotos/david-echavarria-2.jpg";
import davidEchavarria3 from "../assets/reviewPhotos/david-echavarria-3.jpg";
import samuelMotta1 from "../assets/reviewPhotos/samuel-motta-1.jpg";
import javierGallego1 from "../assets/reviewPhotos/javier-gallego-1.jpg";
import javierGallego2 from "../assets/reviewPhotos/javier-gallego-2.jpg";
import julianDuque1 from "../assets/reviewPhotos/julian-duque-1.jpg";
import nolanSnyder1 from "../assets/reviewPhotos/nolan-snyder-1.jpg";

import avatarNolanSnyder from "../assets/avatars/nolan-snyder.png";
import avatarJhonnerDonoso from "../assets/avatars/jhonner-donoso.png";
import avatarFelipeRodriguez from "../assets/avatars/felipe-rodriguez.png";
import avatarFernandaMarin from "../assets/avatars/fernanda-marin.png";
import avatarDavidEchavarria from "../assets/avatars/david-echavarria.png";
import avatarSamuelMotta from "../assets/avatars/samuel-motta.png";
import avatarJuanDavid from "../assets/avatars/juan-david.png";
import avatarMariaCamila from "../assets/avatars/maria-camila-clavijo-bueno.png";
import avatarLuisaPescador from "../assets/avatars/luisa-pescador.png";
import avatarJasminBrisson from "../assets/avatars/jasmin-brisson.png";
import avatarJavierGallego from "../assets/avatars/javier-gallego.png";
import avatarJulianDuque from "../assets/avatars/julian-duque.png";

const GOOGLE_LISTING_URL = "https://share.google/xggX6QWlARhNdq5z7";

export const testimonialsDataEs = [
    {
        id: "david-echavarria",
        avatar: avatarDavidEchavarria,
        name: "David Echavarria",
        rating: 5,
        review: "Una de las mejores experiencias que he tenido tatuándome. El equipo de Legassy Tattoo es excelente, desde Paola que está pendiente de tus citas y tu recuperación, hasta los tatuadores. En esta ocasión trabajé con Natalia, ella fue súper profesional y me ayudó mucho con el diseño y las ideas que tenía para organizar el tatuaje. Definitivamente volvería a Legassy Tattoo 👍🏻",
        date: "marzo de 2025",
        googleUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUNJb3FPcjhRRRAB!2m1!1s0x0:0xd2a4746403b31719!3m1!1s2@1:CIHM0ogKEICAgMCIoqOr8QE%7C%7C?hl=es",
        photos: [davidEchavarria1, davidEchavarria2, davidEchavarria3],
        lang: "es"
    },
    {
        id: "fernanda-marin",
        avatar: avatarFernandaMarin,
        name: "Fernanda Marín",
        rating: 5,
        review: "Viajé a Colombia de vacaciones y había visto en redes sociales muchos de los tatuajes realizados en Legassy, así que no podía perder la oportunidad de tatuarme. Quedé super contenta después de mis tatuajes, super recomendado.",
        date: "diciembre de 2025",
        googleUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25CTGJrSlFiVVJ3Y25GQ05IbE9VVE5CYkRsRmVVRRAB!2m1!1s0x0:0xd2a4746403b31719!3m1!1s2@1:CAIQACodChtycF9oOnBLbkJQbURwcnFCNHlOUTNBbDlFeUE%7C%7C?hl=es",
        photos: [fernandaMarin1, fernandaMarin2],
        lang: "es"
    },
    {
        id: "juan-david",
        avatar: avatarJuanDavid,
        name: "Juan David",
        rating: 5,
        review: "Excelente atención, te dan la confianza suficiente para hacerse un tatuaje. En mi caso era mi primer tatuaje y sentí la tranquilidad para hacérmelo, estuvieron pendientes de cómo iba cicatrizando. Los siguientes tatuajes que me haré, sin duda será con ellos, con Ángel que es un excelente tatuador.",
        date: "enero de 2026",
        googleUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT210RlgyWlpWMVJSTUVGc1ZtcGFkRVJWU1Roa2NVRRAB!2m1!1s0x0:0xd2a4746403b31719!3m1!1s2@1:CAIQACodChtycF9oOmtFX2ZZV1RRMEFsVmpadERVSThkcUE%7C%7C?hl=es",
        lang: "es"
    },
    {
        id: "samuel-motta",
        avatar: avatarSamuelMotta,
        name: "Samuel Motta",
        rating: 5,
        review: "Excelente estudio, muy amables y te asesoran con todo. Y todos sus tatuadores trabajan excelente.",
        date: "diciembre de 2025",
        googleUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xWNGIyNVNVRmhNWHpoUFp6Rm1kbk5GUTA1TGQwRRAB!2m1!1s0x0:0xd2a4746403b31719!3m1!1s2@1:CAIQACodChtycF9oOlV4b25SUFhMXzhPZzFmdnNFQ05Ld0E%7C%7C?hl=es",
        photos: [samuelMotta1],
        lang: "es"
    },
    {
        id: "maria-camila-clavijo-bueno",
        avatar: avatarMariaCamila,
        name: "María Camila Clavijo",
        rating: 5,
        review: "Excelente servicio, las instalaciones son cómodas, te brindan una excelente atención y te asesoran de la mejor manera, para que quedes 100% a gusto con tu tatuaje.",
        date: "enero de 2025",
        googleUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNfNE9LMVdnEAE!2m1!1s0x0:0xd2a4746403b31719!3m1!1s2@1:CIHM0ogKEICAgIC_4OK1Wg%7C%7C?hl=es",
        lang: "es"
    },
    {
        id: "luisa-pescador",
        avatar: avatarLuisaPescador,
        name: "Luisa Pescador",
        rating: 5,
        review: "El estudio es muy cómodo, los diseños son únicos y el profesionalismo de los artistas en Legassy hacen que quiera volver a tatuarme 🫶🏻",
        date: "diciembre de 2025",
        googleUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25STVNVRmtOMjkzWVUwMlpXUjNaa0pOTWxFeFoyYxAB!2m1!1s0x0:0xd2a4746403b31719!3m1!1s2@1:CAIQACodChtycF9oOnRMSUFkN293YU02ZWR3ZkJNMlExZ2c%7C%7C?hl=es",
        lang: "es"
    }
];

export const testimonialsDataEn = [
    {
        id: "jasmin-brisson",
        avatar: avatarJasminBrisson,
        name: "Jasmin Brisson",
        rating: 5,
        review: "Legassy studio has helped me since the first day I sent them a message on Google! They took good care of me for designing and listening to what I wanted. I'm from Canada and I came all the way here to have my tattoo at this place! I really love their team and their artists! I even had the chance to meet the owner, and now we've developed a good friendship. I trust this place like family — looking forward to being back again.",
        date: "August 2026",
        googleUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25waExUUnBWV0V0T1RWNU5FcFhaalp0Y0RWSFJXYxAB!2m1!1s0x0:0xd2a4746403b31719!3m1!1s2@1:CAIQACodChtycF9oOnphLTRpVWEtOTV5NEpXZjZtcDVHRWc%7C%7C?hl=es",
        lang: "en"
    },
    {
        id: "javier-gallego",
        avatar: avatarJavierGallego,
        name: "Javier Gallego",
        rating: 5,
        review: "From the start to the end, this studio had everything one could ever need. Having started out with a virtual appointment to propose my idea for my tattoo, I was able to ask questions and get set up with the right artist for my project. Jeff is an absolute talented artist who is passionate about every project he does. There's no better studio in Cali than this one.",
        date: "February 2026",
        googleUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pod1FsQTNWWGRwTlhKRldHdFJjRkJHZWs1Q2MzYxAB!2m1!1s0x0:0xd2a4746403b31719!3m1!1s2@1:CAIQACodChtycF9oOjhwQlA3VXdpNXJFWGtRcFBGek5Cc3c%7C%7C?hl=es",
        photos: [javierGallego1, javierGallego2],
        lang: "en"
    },
    {
        id: "julian-duque",
        avatar: avatarJulianDuque,
        name: "Julian Duque",
        rating: 5,
        review: "I got tattooed by Alejandro Navia and he did an excellent job on this piece, like always. He's been doing both of my sleeves over the past 2 years and I love the outcome so far. Would recommend him to all my friends or anyone that wants to get a tattoo.",
        date: "November 2024",
        googleUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMzcF9qV3hBRRAB!2m1!1s0x0:0xd2a4746403b31719!3m1!1s2@1:CIHM0ogKEICAgIC3p_jWxAE%7C%7C?hl=es",
        photos: [julianDuque1],
        lang: "en"
    },
    {
        id: "nolan-snyder",
        avatar: avatarNolanSnyder,
        name: "Nolan Snyder",
        rating: 5,
        review: "Nothing bad to say! Great job. Great place. Referred 3 others already. All great tattoos. Will be going back asap.",
        date: "May 2025",
        googleUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VQZmNyNS1CcXN6cHBBRRAB!2m1!1s0x0:0xd2a4746403b31719!3m1!1s2@1:CIHM0ogKEPfcr5-BqszppAE%7C%7C?hl=es",
        photos: [nolanSnyder1],
        lang: "en"
    },
    {
        id: "jhonner-donoso",
        avatar: avatarJhonnerDonoso,
        name: "Jhonner Donoso",
        rating: 5,
        review: "This place is top notch. Miguel Raigoza is an outstanding artist and they work with you every step of the way. At Legassy, they actually work with you to get the best result with whatever idea you have.",
        date: "August 2025",
        googleUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21sTU16UllRa2RPZGtOdlpWQTJlakJJVTFjdFkyYxAB!2m1!1s0x0:0xd2a4746403b31719!3m1!1s2@1:CAIQACodChtycF9oOmlMMzRYQkdOdkNvZVA2ejBIU1ctY2c%7C%7C?hl=es",
        lang: "en"
    },
    {
        id: "felipe-rodriguez",
        avatar: avatarFelipeRodriguez,
        name: "Felipe Rodriguez",
        rating: 5,
        review: "Very professional, his artwork is outstanding, keeps all hygiene measures at top priority and has excellent customer service, would go again no doubt. Thank you for sharing your art gift, surely will travel again back to get another art design.",
        date: "October 2024",
        googleUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURueEpuSVFREAE!2m1!1s0x0:0xd2a4746403b31719!3m1!1s2@1:CIHM0ogKEICAgIDnxJnIQQ%7C%7C?hl=es",
        lang: "en"
    }
];

export const GOOGLE_REVIEWS_URL = GOOGLE_LISTING_URL;
