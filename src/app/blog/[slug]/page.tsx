import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { generatePageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return generatePageMetadata({ title: "Artículo no encontrado", description: "", noIndex: true });

  return generatePageMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.datePublished,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");
  const related = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="bg-white">
        {/* Hero */}
        <header className="relative w-full aspect-[21/9] max-h-[28rem] bg-slate-900">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container pb-[2rem]">
              <span className="inline-block bg-[#ce1126] text-white text-[0.6875rem] font-black uppercase tracking-widest px-[0.75rem] py-[0.375rem] mb-4">
                {post.category}
              </span>
              <h1 className="text-white font-black tracking-tighter uppercase leading-[1.05] text-[1.875rem] md:text-[2.75rem] max-w-[24ch]">
                {post.title}
              </h1>
            </div>
          </div>
        </header>

        {/* Cuerpo */}
        <div className="container py-[3rem] md:py-[4rem]">
          {/* Breadcrumb visible */}
          <nav aria-label="Ruta de navegación" className="mb-[2rem] text-[0.8125rem] font-bold uppercase tracking-wide text-gray-500">
            <Link href="/" className="hover:text-[#ce1126]">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#ce1126]">Blog</Link>
          </nav>

          <div className="max-w-[46rem]">
            <p className="text-[1.125rem] md:text-[1.25rem] text-[#111111] font-bold leading-relaxed mb-[2rem]">
              {post.summary}
            </p>
            <div className="text-[1rem] md:text-[1.0625rem] text-gray-700 leading-relaxed font-medium space-y-[1.25rem]">
              {paragraphs.map((paragraph, i) => (
                <p key={i} className="max-w-none">{paragraph}</p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-[3rem] border border-slate-200 bg-slate-50 p-[1.5rem] md:p-[2rem] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-[1.25rem] font-black uppercase tracking-tight text-[#111111]">
                  ¿Problemas con plagas?
                </h2>
                <p className="text-gray-600 text-[0.9375rem] mt-1">
                  Solicita una inspección y cotización sin costo.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-[#006847] hover:bg-[#00543a] text-white font-black text-[0.8125rem] px-5 py-3 uppercase tracking-wide transition-colors"
                >
                  <Phone className="size-4" /> Llamar
                </a>
                <Link
                  href="/#appointment"
                  className="inline-flex items-center justify-center gap-2 bg-[#ce1126] hover:bg-[#a60d1e] text-white font-black text-[0.8125rem] px-5 py-3 uppercase tracking-wide transition-colors"
                >
                  Cotizar <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="mt-[2.5rem]">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#111111] font-bold text-[0.8125rem] uppercase hover:text-[#ce1126] transition-colors"
              >
                <ArrowLeft className="size-4" /> Volver al blog
              </Link>
            </div>
          </div>

          {/* Artículos relacionados */}
          {related.length > 0 && (
            <div className="mt-[4rem] pt-[3rem] border-t border-slate-200">
              <h2 className="text-[1.5rem] font-black uppercase tracking-tight text-[#111111] mb-[1.5rem]">
                Artículos relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex flex-col bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-[1rem]">
                      <h3 className="text-[1rem] font-black uppercase tracking-tight text-[#111111] group-hover:text-[#ce1126] transition-colors leading-[1.25] line-clamp-2">
                        {r.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
