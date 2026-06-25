import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/blog/lesionados-mundial-2026",
        destination: "/especial/mundial",
        permanent: true,
      },
      {
        source: "/pronosticos",
        destination: "/beneficios-recurrentes",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
