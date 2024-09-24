/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    images: {
        domains: ['th.bing.com', 'image.icons8.com', 'cdn-icons-png.flaticon.com', 'github.githubassets.com', 'github.com', 'upload.wikimedia.org', 'stc-zaloprofile.zdn.vn'],
    },

};

export default nextConfig;