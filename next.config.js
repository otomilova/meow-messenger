/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    // appDir: true,
        //swcPlugins: [["next-superjson-plugin", {}]]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',

            },
            {
                protocol: 'https',
                hostname:  'avatars.githubusercontent.com',
                pathname: '**',

            },
            {
                protocol: 'https',
                hostname:  'lh3.googleusercontent.com',
                pathname: '**',

            },
        ]
    }

}

module.exports = nextConfig
