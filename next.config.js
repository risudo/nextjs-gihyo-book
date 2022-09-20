/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: (() => {
    let compilerConfig = {
      // styledComponentsの有効化
      styledComponents: true,
    }
  }

module.exports = nextConfig
