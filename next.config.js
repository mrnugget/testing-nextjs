const withMDX = require('@next/mdx')()
const withMarkdoc = require('@markdoc/next.js')({ schemaPath: './src/markdoc' })

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

module.exports = withMarkdoc(withMDX(nextConfig))
