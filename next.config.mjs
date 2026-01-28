/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com'],
        formats: ['image/avif',  'image/webp']
    },
    async rewrites() {
        return [
            // Mapeo de slugs en español a carpetas en inglés
            {
                source: '/es/blog/guia-definitiva-donde-tatuarse-en-cali',
                destination: '/es/blog/definitive-guide-on-where-to-tattoo-en-cali'
            },
            {
                source: '/es/blog/razones-para-viajar-a-colombia-por-tu-proximo-tatuaje',
                destination: '/es/blog/reason-to-travel-to-colombia-for-your-next-tattoo'
            },
            {
                source: '/es/blog/artistas-de-tatuajes-que-hablan-ingles-en-cali',
                destination: '/es/blog/english-speaking-tattoo-artists-in-cali-colombia'
            },
            {
                source: '/es/blog/cali-el-auge-de-una-ciudad-creativa-para-extranjeros',
                destination: '/es/blog/cali-tattoo-scene-for-foreigners'
            },
            {
                source: '/es/blog/precios-de-tatuajes-en-colombia-vs-eeuu',
                destination: '/es/blog/tattoo-prices-colombia-vs-usa'
            },
            {
                source: '/es/blog/estudios-de-tatuajes-inclusivos-en-colombia',
                destination: '/es/blog/inclusive-tattoo-studios-in-colombia'
            },
            {
                source: '/es/blog/proceso-de-trabajo-con-artistas-colombianos-a-distancia',
                destination: '/es/blog/remote-tattoo-process-colombia-from-usa'
            },
            {
                source: '/es/blog/historia-del-arte-del-tatuaje-en-colombia',
                destination: '/es/blog/history-of-tattoo-art-in-colombia'
            }
        ];
    }
};

export default nextConfig;
