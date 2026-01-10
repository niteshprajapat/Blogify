/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.slingacademy.com",
                pathname: "/public/**",
            },
        ],
    },
};
export default nextConfig;
