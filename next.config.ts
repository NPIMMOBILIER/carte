const isProd = process.env.NODE_ENV === 'production'
const repoName = 'carte'

const basePath = isProd ? `/${repoName}` : ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: { unoptimized: true },
}

export default nextConfig
