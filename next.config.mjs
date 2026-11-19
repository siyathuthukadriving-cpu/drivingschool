// Remote images (quiz pictures, page images) are served from this project's public storage.
const supabaseHost = process.env.NEXT_PUBLIC_SUPABASE_URL ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname : 'localhost'

// The Vercel production alias serves the same pages as the custom domain, so send visitors and
// crawlers to the one canonical host. /api/ and /auth/ stay reachable on the alias because payment
// webhooks, the cron job and Supabase auth callbacks may still be configured with it.
const VERCEL_ALIAS = 'drivingschool-mauve.vercel.app'
const CANONICAL_ORIGIN = 'https://www.sathuthuka.co.za'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: supabaseHost,
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  async redirects() {
    const has = [{ type: 'host', value: VERCEL_ALIAS }]
    return [
      { source: '/', has, destination: `${CANONICAL_ORIGIN}/`, statusCode: 301 },
      { source: '/:path((?!api/|auth/).+)', has, destination: `${CANONICAL_ORIGIN}/:path`, statusCode: 301 },
    ]
  },
}

export default nextConfig;
