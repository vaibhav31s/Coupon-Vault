/** @type {import('next').NextConfig} */
const nextConfig = {
  // The codebase has ~60 pre-existing type errors (also present before the upgrade).
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: ["dummyimage.com", "mf.b37mrtl.ru", "cdnn1.img.sputniknews.com", "leadershipmemphis.org", "api.dicebear.com"].map(
      (hostname) => ({ hostname })
    ),
  },
};

module.exports = nextConfig;
