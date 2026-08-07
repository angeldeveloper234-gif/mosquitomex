import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone, AlertTriangle } from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { generatePageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/structured-data";
import { FAQ } from "@/components/sections/FAQ";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return generatePageMetadata({ title: "Servicio no encontrado", description: "", noIndex: true });
  }

  return generatePageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/servicios/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => s !== null);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faq),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
            { name: service.name, path: `/servicios/${service.slug}` },
          ]),
        ]}
      />

      {/* ── ENCABEZADO ─────────────────────────────────────── */}
      <section className="bg-[#111111] text-white section-padding">
        <div className="container max-w-4xl">
          {/* Migas de pan visibles: refuerzan el breadcrumb del schema */}
          <nav aria-label="Ruta de navegación" className="mb-6 text-[0.8125rem] font-bold text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{service.name}</span>
          </nav>

          <span className="text-5xl block mb-4" aria-hidden="true">{service.emoji}</span>

          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1] mb-5">
            {service.h1}
          </h1>
          <div className="w-24 h-1 bg-[#ce1126] mb-6" />

          <p className="text-white/85 text-[1.0625rem] md:text-[1.1875rem] leading-relaxed max-w-[65ch]">
            {service.intro}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Link
              href="/#appointment"
              className="inline-flex items-center justify-center gap-2.5 bg-[#ce1126] hover:bg-[#a60d1e] text-white font-black text-sm px-8 py-4 rounded shadow-lg transition-colors uppercase tracking-wider group"
            >
              <span>Solicitar cotización sin costo</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#006847] hover:bg-[#00543a] text-white font-black text-sm px-7 py-4 rounded transition-colors uppercase tracking-wide"
            >
              <Phone className="size-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── SEÑALES DE INFESTACIÓN ─────────────────────────── */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-5 leading-tight">
                {service.signsTitle}
              </h2>
              <ul className="space-y-3.5">
                {service.signs.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="size-5 text-[#006847] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[#5A6070] dark:text-slate-300 leading-relaxed">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F8F9FA] dark:bg-slate-900 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6 md:p-7 self-start">
              <div className="flex items-center gap-2.5 mb-4">
                <AlertTriangle className="size-5 text-[#ce1126]" aria-hidden="true" />
                <h2 className="text-lg font-black uppercase tracking-tight text-[#111111] dark:text-white">
                  {service.risksTitle}
                </h2>
              </div>
              <p className="text-[#5A6070] dark:text-slate-400 leading-relaxed">{service.risks}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESO ────────────────────────────────────────── */}
      <section className="section-padding bg-[#F8F9FA] dark:bg-slate-900 border-y border-[#E5E8EC] dark:border-slate-800">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-4">
              Cómo trabajamos
            </h2>
            <div className="w-24 h-1 bg-[#006847] mx-auto" />
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.process.map((step, i) => (
              <li
                key={i}
                className="bg-white dark:bg-slate-950 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6"
              >
                <span className="inline-flex items-center justify-center size-9 rounded bg-[#ce1126] text-white font-black text-sm mb-4">
                  {i + 1}
                </span>
                <h3 className="font-black uppercase tracking-tight text-[#111111] dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[#5A6070] dark:text-slate-400 text-[0.9375rem] leading-relaxed">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FAQ (con schema FAQPage inyectado arriba) ──────── */}
      <FAQ
        items={service.faq}
        title={`Preguntas sobre ${service.name}`}
        subtitle="Lo que más nos preguntan antes de contratar este servicio."
      />

      {/* ── SERVICIOS RELACIONADOS (enlazado interno) ──────── */}
      {related.length > 0 && (
        <section className="section-padding bg-[#F8F9FA] dark:bg-slate-900 border-t border-[#E5E8EC] dark:border-slate-800">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-8 text-center">
              Otros servicios
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/servicios/${r.slug}`}
                  className="group bg-white dark:bg-slate-950 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6 hover:border-[#ce1126] transition-colors"
                >
                  <span className="text-3xl block mb-3" aria-hidden="true">{r.emoji}</span>
                  <h3 className="font-black uppercase tracking-tight text-[#111111] dark:text-white mb-2 group-hover:text-[#ce1126] transition-colors">
                    {r.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[#006847] font-bold text-sm">
                    Ver servicio
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA FINAL ──────────────────────────────────────── */}
      <section className="section-padding bg-[#006847] text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-4 leading-tight">
            ¿Necesitas resolverlo ya?
          </h2>
          <p className="text-white/85 leading-relaxed mb-8 max-w-xl mx-auto">
            Cuéntanos qué está pasando y te damos una cotización sin costo. Atendemos hogares y
            empresas en todo México.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#appointment"
              className="inline-flex items-center justify-center gap-2.5 bg-[#ce1126] hover:bg-[#a60d1e] text-white font-black text-sm px-8 py-4 rounded shadow-lg transition-colors uppercase tracking-wider"
            >
              Solicitar cotización
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold text-sm px-7 py-4 rounded transition-colors"
            >
              <Phone className="size-4" />
              <span>{SITE.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
