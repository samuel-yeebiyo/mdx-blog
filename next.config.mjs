/** @type {import('next').NextConfig} */

import nextMDX from '@next/mdx'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
})

export default withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
}, nextConfig)
