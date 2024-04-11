/** @type {import('next').NextConfig} */
const { withServiceWorker } = require('next-sw');

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: false,
  aggressiveFrontEndNavCaching: false,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});

const nextConfig = withServiceWorker({
  reactStrictMode: true,
  serviceWorker: {
    name: 'firebase-messaging-sw.js',
    entry: 'src/config/firebase-messaging-sw.js',
    livereload: true
  },
  swcMinify: true,      // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
})


// Export the combined configuration for Next.js with PWA support
module.exports = withPWA(nextConfig);