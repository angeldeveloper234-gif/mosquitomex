import type { Metadata } from "next";
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
  title: {
    default: "Control de Plagas y Fumigación en México | MosquitoMEX",
    template: "%s | MosquitoMEX",
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
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
    title: "Control de Plagas y Fumigación en México | MosquitoMEX",
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Control de Plagas y Fumigación en México | MosquitoMEX",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  category: "Pest Control",
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
