import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF antes que WebP: pesa menos y mejora el LCP en móvil.
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      // Los dos artículos de confort exterior se reescribieron con contenido de
      // control de plagas y cambiaron de slug. Se redirige de forma permanente
      // para no perder ningún enlace externo que ya apuntara a las URLs viejas.
      {
        source: "/blog/mist-cooling",
        destination: "/blog/como-eliminar-cucarachas",
        permanent: true,
      },
      {
        source: "/blog/outdoor-heating",
        destination: "/blog/senales-de-roedores-en-casa",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
