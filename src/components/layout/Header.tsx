'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { AnimatePresence, motion } from 'framer-motion'

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [mobileAccordions, setMobileAccordions] = useState<Record<number, boolean>>({})

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  const toggleAccordion = (index: number) => {
    setMobileAccordions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const navItems = [
    {
      labelKey: 'header.nav.insectControl',
      children: [
        { labelKey: 'features.items.mosquito.title', descKey: 'features.items.mosquito.desc', href: '#appointment' },
        { labelKey: 'features.items.spider.title', descKey: 'features.items.spider.desc', href: '#appointment' },
        { labelKey: 'features.items.fly.title', descKey: 'features.items.fly.desc', href: '#appointment' },
      ]
    },
    {
      labelKey: 'header.nav.mistCooling',
      children: [
        { labelKey: 'features.items.mist.title', descKey: 'features.items.mist.desc', href: '#appointment' },
      ]
    },
    {
      labelKey: 'header.nav.outdoorLiving',
      children: [
        { labelKey: 'features.items.heating.title', descKey: 'features.items.heating.desc', href: '#appointment' },
        { labelKey: 'features.items.lighting.title', descKey: 'features.items.lighting.desc', href: '#appointment' },
        { labelKey: 'features.items.turf.title', descKey: 'features.items.turf.desc', href: '#appointment' },
        { labelKey: 'features.items.kitchens.title', descKey: 'features.items.kitchens.desc', href: '#appointment' },
      ]
    },
    {
      labelKey: 'common.about',
      children: [
        { labelKey: 'header.nav.about', descKey: 'about.titleHighlight', href: '#about' },
        { labelKey: 'header.nav.financing', descKey: 'header.nav.financing', href: '#appointment' },
        { labelKey: 'header.nav.resources', descKey: 'header.nav.resources', href: '#testimonials' },
      ]
    },
    {
      labelKey: 'header.nav.contactUs',
      href: '#appointment'
    }
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md py-[1rem] shadow-sm">
      <div className="container flex items-center justify-between gap-[1.5rem]">
        {/* Logo Section */}
        <div className="flex shrink-0 items-center">
          <Link href="/" className="flex flex-col items-start select-none">
            <div className="text-[1.5rem] font-black italic tracking-tighter text-[#082135] flex items-center gap-[0.25rem] uppercase leading-[1.1]">
              <span className="text-[#e82536]">Mosquito</span>mex
            </div>
            <span className="text-[0.5625rem] font-bold uppercase tracking-[0.2em] text-[#082135]/60 mt-[0.25rem]">
              {t('header.subtitle')}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-[1.5rem] text-[0.8125rem] font-bold uppercase tracking-wider text-[#082135]">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative py-[0.5rem]"
              onMouseEnter={() => item.children && setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.children ? (
                <button className="flex items-center gap-[0.25rem] cursor-pointer hover:text-[#e82536] transition-colors leading-[1.2]">
                  {t(item.labelKey)}
                  <ChevronDown className={`size-[0.875rem] transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link href={item.href || '#'} className="hover:text-[#e82536] transition-colors leading-[1.2]">
                  {t(item.labelKey)}
                </Link>
              )}

              {/* Dropdown Panel */}
              <AnimatePresence>
                {activeDropdown === index && item.children && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-[0.5rem] w-[20rem] bg-white border border-gray-200 shadow-xl z-50 p-[1rem] flex flex-col gap-[0.75rem]"
                  >
                    {item.children.map((child, childIdx) => (
                      <Link
                        key={childIdx}
                        href={child.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex flex-col gap-[0.25rem] p-[0.5rem] hover:bg-gray-50 transition-colors"
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

        {/* Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-[1rem]">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-[0.5rem] font-black text-[0.8125rem] text-[#082135] hover:text-[#e82536]"
          >
            <Globe className="size-[1rem]" />
            <span>{language === 'es' ? 'EN' : 'ES'}</span>
          </Button>

          <Button variant="brand" size="default" className="hidden sm:inline-flex text-[0.8125rem] px-[1.5rem] font-bold tracking-wider uppercase">
            {t('common.bookConsultation')}
          </Button>

          {/* Mobile Menu Button - 44x44px target minimum */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-[2.75rem] h-[2.75rem] text-[#082135] hover:text-[#e82536] transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="size-[1.5rem]" /> : <Menu className="size-[1.5rem]" />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Sidebar Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-[20rem] bg-white z-50 p-[1.5rem] flex flex-col gap-[1.5rem] shadow-2xl lg:hidden overflow-y-auto"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-[1rem] border-b border-gray-100">
                <span className="text-[1.25rem] font-black uppercase text-[#082135] tracking-tight">
                  Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-[2.5rem] h-[2.5rem] text-[#082135] hover:text-[#e82536] transition-colors"
                >
                  <X className="size-[1.5rem]" />
                </button>
              </div>

              {/* Navigation Accordion List */}
              <div className="flex flex-col gap-[1rem] flex-1">
                {navItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-[0.75rem]">
                    {item.children ? (
                      <div className="flex flex-col">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="flex items-center justify-between w-full text-left font-black uppercase text-[0.875rem] text-[#082135] py-[0.75rem] hover:text-[#e82536] transition-colors"
                        >
                          <span>{t(item.labelKey)}</span>
                          <ChevronDown className={`size-[1rem] transition-transform duration-200 ${mobileAccordions[index] ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileAccordions[index] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-[0.75rem] mt-[0.5rem] flex flex-col gap-[0.5rem] border-l-2 border-gray-100"
                            >
                              {item.children.map((child, childIdx) => (
                                <Link
                                  key={childIdx}
                                  href={child.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="py-[0.75rem] text-[0.8125rem] font-bold text-[#082135] hover:text-[#e82536] transition-colors block uppercase"
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
                        className="block py-[0.75rem] font-black uppercase text-[0.875rem] text-[#082135] hover:text-[#e82536] transition-colors"
                      >
                        {t(item.labelKey)}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Actions inside drawer */}
              <div className="flex flex-col gap-[1rem] pt-[1rem] border-t border-gray-100">
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center gap-[0.5rem] font-black text-[0.875rem] text-[#082135]"
                >
                  <Globe className="size-[1rem]" />
                  <span>{language === 'es' ? 'English (EN)' : 'Español (ES)'}</span>
                </Button>
                <Button
                  variant="brand"
                  className="w-full text-[0.875rem] py-[0.75rem] font-black tracking-wider uppercase"
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
