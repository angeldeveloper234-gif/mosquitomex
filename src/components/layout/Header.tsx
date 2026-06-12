'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown, Globe, Menu, X, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { AnimatePresence, motion } from 'framer-motion'

const PHONE = '+52 55 1234-5678'
const PHONE_HREF = 'tel:+525512345678'

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [mobileAccordions, setMobileAccordions] = useState<Record<number, boolean>>({})

  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es')

  const toggleAccordion = (index: number) => {
    setMobileAccordions((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const navItems = [
    {
      labelKey: 'header.nav.solutions',
      children: [
        { labelKey: 'header.nav.autoSystem',  descKey: 'header.nav.autoSystemDesc',  href: '#soluciones' },
        { labelKey: 'header.nav.treatment',   descKey: 'header.nav.treatmentDesc',   href: '#soluciones' },
        { labelKey: 'header.nav.maintenance', descKey: 'header.nav.maintenanceDesc', href: '#soluciones' },
        { labelKey: 'header.nav.commercial',  descKey: 'header.nav.commercialDesc',  href: '#soluciones' },
      ],
    },
    { labelKey: 'header.nav.mcsSystem', href: '#tecnologia' },
    {
      labelKey: 'header.nav.forYourSpace',
      children: [
        { labelKey: 'header.nav.residential', descKey: 'header.nav.residentialDesc', href: '#espacios' },
        { labelKey: 'header.nav.events',      descKey: 'header.nav.eventsDesc',      href: '#espacios' },
        { labelKey: 'header.nav.restaurants', descKey: 'header.nav.restaurantsDesc', href: '#espacios' },
        { labelKey: 'header.nav.hotels',      descKey: 'header.nav.hotelsDesc',      href: '#espacios' },
      ],
    },
    { labelKey: 'header.nav.blog',      href: '#blog' },
    { labelKey: 'header.nav.contactUs', href: '#appointment' },
  ]

  return (
    <>
      {/* ── TOP BAR ─────────────────────────────────────────── */}
      <div className="w-full bg-[#082135]">
        <div className="container flex items-center justify-between py-2 gap-4">
          <span className="hidden md:block text-white/50 text-xs font-medium">
            {language === 'es'
              ? 'Expertos en control de plagas · Servicio en todo México'
              : 'Pest control experts · Service across Mexico'}
          </span>
          <div className="flex items-center gap-3 ml-auto md:ml-0">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-1.5 bg-[#F5A623] hover:bg-[#C8861B] text-[#082135] font-black text-[0.7rem] px-3 py-1.5 rounded transition-colors"
            >
              <Phone className="size-3" />
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* ── STICKY NAV ──────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md py-4 shadow-sm">
        <div className="container flex items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex flex-col items-start select-none">
              <div className="text-2xl font-black italic tracking-tighter text-[#082135] flex items-center gap-1 uppercase leading-[1.1]">
                <span className="text-[#e82536]">Mosquito</span>mex
              </div>
              <span className="text-[0.5625rem] font-bold uppercase tracking-[0.2em] text-[#082135]/60 mt-1">
                {t('header.subtitle')}
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[0.8125rem] font-bold uppercase tracking-wider text-[#082135]">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative py-2"
                onMouseEnter={() => item.children && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 cursor-pointer hover:text-[#e82536] transition-colors leading-[1.2]">
                    {t(item.labelKey)}
                    <ChevronDown className={`size-3.5 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link href={item.href || '#'} className="hover:text-[#e82536] transition-colors leading-[1.2]">
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
                          <span className="text-[0.8125rem] font-black text-[#082135] group-hover:text-[#e82536] transition-colors">
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
              className="flex items-center gap-2 font-black text-[0.8125rem] text-[#082135] hover:text-[#e82536]"
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
              className="lg:hidden flex items-center justify-center w-11 h-11 text-[#082135] hover:text-[#e82536] transition-colors focus:outline-none"
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
                <span className="text-xl font-black uppercase text-[#082135] tracking-tight">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-10 h-10 text-[#082135] hover:text-[#e82536] transition-colors"
                >
                  <X className="size-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                {navItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3">
                    {item.children ? (
                      <div className="flex flex-col">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="flex items-center justify-between w-full text-left font-black uppercase text-sm text-[#082135] py-3 hover:text-[#e82536] transition-colors"
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
                                  className="py-3 text-[0.8125rem] font-bold text-[#082135] hover:text-[#e82536] transition-colors block uppercase"
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
                        className="block py-3 font-black uppercase text-sm text-[#082135] hover:text-[#e82536] transition-colors"
                      >
                        {t(item.labelKey)}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                {/* btn-amber — teléfono, siempre visible en mobile */}
                <a
                  href={PHONE_HREF}
                  className="w-full flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#C8861B] text-[#082135] font-black text-sm py-3 rounded transition-colors uppercase tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="size-4" />
                  {PHONE}
                </a>
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center gap-2 font-black text-sm text-[#082135]"
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
