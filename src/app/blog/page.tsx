import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { generatePageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = generatePageMetadata({
  title: "Blog de Control de Plagas y Prevención",
  description:
    "Consejos, guías y novedades sobre control de mosquitos, fumigación y prevención de plagas para proteger tu hogar y negocio.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <section className="section-padding bg-slate-50 border-b border-gray-100">
        <div className="container">
          {/* Encabezado */}
          <div className="max-w-3xl mb-[3rem]">
            <p className="text-[0.75rem] font-black uppercase tracking-[0.2em] text-[#ce1126] mb-3">
              Blog MosquitoMEX
            </p>
            <h1 className="text-h1 font-black tracking-tighter uppercase leading-[1.1] text-[#111111]">
              Guías y consejos de <span className="text-[#ce1126]">control de plagas</span>
            </h1>
            <p className="mt-[1rem] text-gray-600 text-[1rem] md:text-[1.125rem] leading-relaxed">
              Todo lo que necesitas saber para mantener tu hogar y tu negocio libres de mosquitos y
              otras plagas durante todo el año.
            </p>
          </div>

          {/* Grid de artículos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-[0.75rem] left-[0.75rem] bg-[#ce1126] text-white text-[0.625rem] md:text-[0.6875rem] font-black uppercase tracking-widest px-[0.625rem] py-[0.25rem] select-none">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-col flex-grow p-[1.25rem] space-y-[0.75rem]">
                  <h2 className="text-[1.125rem] font-black text-[#111111] uppercase tracking-tight group-hover:text-[#ce1126] transition-colors leading-[1.25] line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-[0.875rem] text-gray-500 font-medium normal-case tracking-normal leading-relaxed line-clamp-3 flex-grow">
                    {post.summary}
                  </p>
                  <div className="pt-[0.5rem] flex items-center gap-[0.5rem] text-[0.75rem] font-bold text-[#ce1126] uppercase tracking-wider">
                    <span>Leer artículo</span>
                    <ArrowRight className="size-[0.875rem] transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
