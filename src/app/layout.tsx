import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/structured-data";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  // Sin "en México": este es el titulo POR DEFECTO, el que hereda cualquier
  // pagina que no defina el suyo. Hoy todas lo definen, asi que no se ve —
  // pero dejarlo con el pais encasillado significaba que la proxima pagina
  // nueva naceria contradiciendo el reposicionamiento de marca.
  // El SEO local no se pierde: cada pagina lleva su geografia en su propio
  // titulo, y el home nombra CDMX, Monterrey y Mexico.
  title: {
    default: "Control de Plagas y Fumigación | MosquitoMEX",
    template: "%s | MosquitoMEX",
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  // Verificación de Google Search Console (método alternativo al DNS).
  // Poner el código en NEXT_PUBLIC_GSC_VERIFICATION (Netlify → Environment variables).
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: "Control de Plagas y Fumigación | MosquitoMEX",
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Control de Plagas y Fumigación | MosquitoMEX",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  category: "Pest Control",
};

export const viewport: Viewport = {
  themeColor: "#006847",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`antialiased scroll-smooth ${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <JsonLd data={[websiteSchema(), localBusinessSchema()]} />
        <LanguageProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
