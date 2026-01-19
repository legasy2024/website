/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com'],
        formats: ['image/avif',  'image/webp']
    }
};

export default nextConfig;
