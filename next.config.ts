import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF antes que WebP: pesa menos y mejora el LCP en móvil.
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      // El sitio también responde en mosquitomex.netlify.app con contenido
      // idéntico. Aunque el canonical apunta al dominio real, es mejor que ese
      // subdominio redirija: así todas las señales de rastreo e indexación se
      // concentran en mosquitomex.com en vez de repartirse en dos hosts.
      {
        source: "/:path*",
        has: [{ type: "host", value: "mosquitomex.netlify.app" }],
        destination: "https://mosquitomex.com/:path*",
        permanent: true,
      },
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
