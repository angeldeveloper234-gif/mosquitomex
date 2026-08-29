import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { FotoServicio } from "@/components/ui/FotoServicio";
import type { SlotServicio } from "@/config/media-servicios";
import { generatePageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { SITE } from "@/lib/site";

export const metadata = generatePageMetadata({
  title: "Servicios de Control de Plagas y Fumigación",
  description:
    "Control de mosquitos, cucarachas, roedores, termitas y chinches para hogares y empresas. Manejo Integrado de Plagas con cobertura en todo México. Cotización sin costo.",
  path: "/servicios",
  keywords: [
    "servicios de control de plagas",
    "fumigación México",
    "empresa de fumigación",
    "control de plagas hogar",
    "control de plagas empresas",
    "manejo integrado de plagas",
  ],
});

export default function ServiciosPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Servicios de Control de Plagas",
            url: `${SITE.url}/servicios`,
            about: { "@id": `${SITE.url}/#business` },
            hasPart: SERVICES.map((s) => ({
              "@type": "Service",
              name: s.name,
              url: `${SITE.url}/servicios/${s.slug}`,
            })),
          },
        ]}
      />

      {/* ── ENCABEZADO ─────────────────────────────────────── */}
      <section className="bg-[#111111] text-white section-padding">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1] mb-5">
            Servicios de Control de Plagas
          </h1>
          <div className="w-32 h-1 bg-[#ce1126] mx-auto mb-6" />
          <p className="text-white/85 text-[1.0625rem] md:text-[1.1875rem] leading-relaxed max-w-[62ch] mx-auto">
            Atendemos hogares y empresas en todo México con programas de Manejo Integrado de
            Plagas: inspeccionamos, tratamos el foco del problema y corregimos las condiciones
            que lo provocan. Elige el servicio que necesitas.
          </p>
        </div>
      </section>

      {/* ── LISTADO DE SERVICIOS ───────────────────────────── */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="group flex flex-col bg-[#F8F9FA] dark:bg-slate-900 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6 hover:border-[#ce1126] hover:shadow-md transition-all"
              >
                {/*
                  La foto va arriba de la tarjeta, no un emoji. Mientras no
                  exista la foto real de esa operación se dibuja el cartel que
                  dice qué falta — nunca stock ni una imagen de IA haciéndose
                  pasar por su trabajo.
                */}
                <div className="-m-6 mb-4 overflow-hidden rounded-t-lg bg-[#F1F3F5]">
                  <FotoServicio
                    slot={service.slug as SlotServicio}
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
                <h2 className="font-black uppercase tracking-tight text-[#111111] dark:text-white mb-2.5 leading-snug group-hover:text-[#ce1126] transition-colors">
                  {service.name}
                </h2>
                <p className="text-[#5A6070] dark:text-slate-400 text-[0.9375rem] leading-relaxed flex-grow">
                  {service.metaDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#006847] font-bold text-sm mt-5">
                  Ver detalles
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="section-padding bg-[#006847] text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-4 leading-tight">
            ¿No sabes qué plaga tienes?
          </h2>
          <p className="text-white/85 leading-relaxed mb-8 max-w-xl mx-auto">
            No hace falta que lo sepas. Cuéntanos qué estás notando y la identificamos durante la
            inspección. La cotización es sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#appointment"
              className="inline-flex items-center justify-center gap-2.5 bg-[#ce1126] hover:bg-[#a60d1e] text-white font-black text-sm px-8 py-4 rounded shadow-lg transition-colors uppercase tracking-wider"
            >
              Solicitar cotización
            </Link>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold text-sm px-7 py-4 rounded transition-colors"
            >
              <Phone className="size-4" />
              <span>Escríbenos por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
