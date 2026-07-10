'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown, Globe, Menu, X, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { AnimatePresence, motion } from 'framer-motion'

import { SITE } from '@/lib/site'

const PHONE = SITE.phone
const PHONE_HREF = SITE.phoneHref
const WA_HREF = SITE.whatsappHref

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [mobileAccordions, setMobileAccordions] = useState<Record<number, boolean>>({})

  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es')

  const toggleAccordion = (index: number) => {
    setMobileAccordions((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const PESTS_DROPDOWN = [
    { emoji: '🦟', label: language === 'es' ? 'Mosquitos'          : 'Mosquitoes',     href: '/#plagas' },
    { emoji: '🪳', label: language === 'es' ? 'Cucarachas'         : 'Cockroaches',    href: '/#plagas' },
    { emoji: '🕷️', label: language === 'es' ? 'Arañas'             : 'Spiders',        href: '/#plagas' },
    { emoji: '🪰', label: language === 'es' ? 'Moscas'             : 'Flies',          href: '/#plagas' },
    { emoji: '🐀', label: language === 'es' ? 'Ratas y Ratones'    : 'Rats & Mice',    href: '/#plagas' },
    { emoji: '🐜', label: language === 'es' ? 'Hormigas y Termitas': 'Ants & Termites',href: '/#plagas' },
    { emoji: '🐝', label: language === 'es' ? 'Abejas y Avispas'   : 'Bees & Wasps',   href: '/#plagas' },
  ]

  const navItems = [
    {
      labelKey: 'header.nav.solutions',
      children: [
        { labelKey: 'header.nav.autoSystem',  descKey: 'header.nav.autoSystemDesc',  href: '/#soluciones' },
        { labelKey: 'header.nav.treatment',   descKey: 'header.nav.treatmentDesc',   href: '/#soluciones' },
        { labelKey: 'header.nav.maintenance', descKey: 'header.nav.maintenanceDesc', href: '/#soluciones' },
        { labelKey: 'header.nav.commercial',  descKey: 'header.nav.commercialDesc',  href: '/#soluciones' },
      ],
    },
    { labelKey: 'header.nav.mcsSystem', href: '/#tecnologia' },
    {
      labelKey: 'header.nav.forYourSpace',
      children: [
        { labelKey: 'header.nav.residential', descKey: 'header.nav.residentialDesc', href: '/#espacios' },
        { labelKey: 'header.nav.events',      descKey: 'header.nav.eventsDesc',      href: '/#espacios' },
        { labelKey: 'header.nav.restaurants', descKey: 'header.nav.restaurantsDesc', href: '/#espacios' },
        { labelKey: 'header.nav.hotels',      descKey: 'header.nav.hotelsDesc',      href: '/#espacios' },
      ],
    },
    { labelKey: 'header.nav.blog',      href: '/blog' },
    { labelKey: 'header.nav.franchise', href: '/#franquicias' },
    { labelKey: 'header.nav.contactUs', href: '/#appointment' },
  ]


  return (
    <>
      {/* ── TOP BAR ─────────────────────────────────────────── */}
      <div className="w-full bg-[#111111]">
        <div className="container flex items-center justify-between py-2 gap-4">
          <span className="hidden md:block text-white/50 text-xs font-medium">
            {language === 'es'
              ? 'Expertos en control de plagas · Servicio en todo México'
              : 'Pest control experts · Service across Mexico'}
          </span>
          <div className="flex items-center gap-2 ml-auto md:ml-0">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-1.5 bg-[#006847] hover:bg-[#00543a] text-white font-black text-[0.7rem] px-3 py-1.5 rounded transition-colors"
            >
              <Phone className="size-3" />
              {PHONE}
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black text-[0.7rem] px-3 py-1.5 rounded transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── STICKY NAV ──────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md py-4 shadow-sm">
        <div className="container flex items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center select-none" aria-label="MosquitoMEX — Control de Plagas">
              <Image
                src="/mosquitos-mx.png"
                alt="MosquitoMEX — Control de Plagas"
                width={500}
                height={500}
                priority
                className="h-20 w-auto md:h-24"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[0.8125rem] font-bold uppercase tracking-wider text-[#111111]">
            {/* ── PLAGAS DROPDOWN ── */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown(99)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 cursor-pointer hover:text-[#ce1126] transition-colors leading-[1.2]">
                {language === 'es' ? 'Plagas' : 'Pests'}
                <ChevronDown className={`size-3.5 transition-transform duration-200 ${activeDropdown === 99 ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 99 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-52 bg-white border border-gray-200 shadow-xl z-50 py-2 flex flex-col"
                  >
                    {PESTS_DROPDOWN.map((pest, i) => (
                      <Link
                        key={i}
                        href={pest.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-center gap-3 px-4 py-2.5 hover:bg-[#fdeaea] transition-colors"
                      >
                        <span className="text-xl leading-none select-none">{pest.emoji}</span>
                        <span className="text-[0.8125rem] font-bold text-[#111111] group-hover:text-[#ce1126] transition-colors normal-case tracking-normal">
                          {pest.label}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative py-2"
                onMouseEnter={() => item.children && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 cursor-pointer hover:text-[#ce1126] transition-colors leading-[1.2]">
                    {t(item.labelKey)}
                    <ChevronDown className={`size-3.5 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link href={item.href || '#'} className="hover:text-[#ce1126] transition-colors leading-[1.2]">
                    {t(item.labelKey)}
                  </Link>
                )}

                <AnimatePresence>
                  {activeDropdown === index && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-80 bg-white border border-gray-200 shadow-xl z-50 p-4 flex flex-col gap-3"
                    >
                      {item.children.map((child, childIdx) => (
                        <Link
                          key={childIdx}
                          href={child.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group flex flex-col gap-1 p-2 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-[0.8125rem] font-black text-[#111111] group-hover:text-[#ce1126] transition-colors">
                            {t(child.labelKey)}
                          </span>
                          {child.descKey && (
                            <span className="text-[0.6875rem] text-gray-500 font-medium normal-case tracking-normal">
                              {t(child.descKey)}
                            </span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 font-black text-[0.8125rem] text-[#111111] hover:text-[#ce1126]"
            >
              <Globe className="size-4" />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </Button>

            <Button
              variant="brand"
              size="default"
              className="hidden sm:inline-flex text-[0.8125rem] px-6 font-bold tracking-wider uppercase"
            >
              {t('common.bookConsultation')}
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 text-[#111111] hover:text-[#ce1126] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ───────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-[20rem] bg-white z-50 p-6 flex flex-col gap-6 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <span className="text-xl font-black uppercase text-[#111111] tracking-tight">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-10 h-10 text-[#111111] hover:text-[#ce1126] transition-colors"
                >
                  <X className="size-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                {/* ── PLAGAS accordion en mobile ── */}
                <div className="border-b border-gray-100 pb-3">
                  <button
                    onClick={() => toggleAccordion(99)}
                    className="flex items-center justify-between w-full text-left font-black uppercase text-sm text-[#111111] py-3 hover:text-[#ce1126] transition-colors"
                  >
                    <span>{language === 'es' ? 'Plagas' : 'Pests'}</span>
                    <ChevronDown className={`size-4 transition-transform duration-200 ${mobileAccordions[99] ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileAccordions[99] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3 mt-2 flex flex-col gap-1 border-l-2 border-gray-100"
                      >
                        {PESTS_DROPDOWN.map((pest, i) => (
                          <Link
                            key={i}
                            href={pest.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="group flex items-center gap-3 py-2.5 text-[0.8125rem] font-bold text-[#111111] hover:text-[#ce1126] transition-colors"
                          >
                            <span className="text-lg leading-none select-none">{pest.emoji}</span>
                            <span>{pest.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3">
                    {item.children ? (
                      <div className="flex flex-col">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="flex items-center justify-between w-full text-left font-black uppercase text-sm text-[#111111] py-3 hover:text-[#ce1126] transition-colors"
                        >
                          <span>{t(item.labelKey)}</span>
                          <ChevronDown className={`size-4 transition-transform duration-200 ${mobileAccordions[index] ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileAccordions[index] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-3 mt-2 flex flex-col gap-2 border-l-2 border-gray-100"
                            >
                              {item.children.map((child, childIdx) => (
                                <Link
                                  key={childIdx}
                                  href={child.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="py-3 text-[0.8125rem] font-bold text-[#111111] hover:text-[#ce1126] transition-colors block uppercase"
                                >
                                  {t(child.labelKey)}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 font-black uppercase text-sm text-[#111111] hover:text-[#ce1126] transition-colors"
                      >
                        {t(item.labelKey)}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                {/* btn teléfono (verde = confianza/contacto) — siempre visible en mobile */}
                <a
                  href={PHONE_HREF}
                  className="w-full flex items-center justify-center gap-2 bg-[#006847] hover:bg-[#00543a] text-white font-black text-sm py-3 rounded transition-colors uppercase tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="size-4" />
                  {PHONE}
                </a>
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center gap-2 font-black text-sm text-[#111111]"
                >
                  <Globe className="size-4" />
                  <span>{language === 'es' ? 'English (EN)' : 'Español (ES)'}</span>
                </Button>
                <Button
                  variant="brand"
                  className="w-full text-sm py-3 font-black tracking-wider uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('common.bookConsultation')}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
