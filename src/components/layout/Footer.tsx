'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Facebook, Instagram, Twitter } from '@/components/ui/icons'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full border-t border-[#082135]/10 bg-[#082135] text-white">
      <div className="container py-[3rem] md:py-[4rem]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[2rem]">
          <div className="space-y-[1rem]">
            <h3 className="text-[1.5rem] font-black italic tracking-tighter uppercase">
              <span className="text-[#e82536]">Mosquito</span>mex
            </h3>
            <p className="text-[1rem] text-slate-300 font-medium leading-relaxed max-w-[65ch]">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-[1rem]">
              <Link href="#" className="text-white hover:text-[#e82536] transition-colors">
                <Facebook className="size-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#e82536] transition-colors">
                <Instagram className="size-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#e82536] transition-colors">
                <Twitter className="size-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-[1rem]">
            <h4 className="text-[0.75rem] font-black uppercase tracking-[0.2em] text-[#e82536]">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-[0.5rem] text-[0.875rem] font-bold uppercase">
              <li><Link href="/" className="text-slate-300 hover:text-white transition-colors">{t('common.home')}</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white transition-colors">{t('common.services')}</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white transition-colors">{t('common.about')}</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white transition-colors">{t('common.contact')}</Link></li>
            </ul>
          </div>
          <div className="space-y-[1rem]">
            <h4 className="text-[0.75rem] font-black uppercase tracking-[0.2em] text-[#e82536]">
              {t('footer.ourServices')}
            </h4>
            <ul className="space-y-[0.5rem] text-[0.875rem] font-bold uppercase">
              <li><Link href="#" className="text-slate-300 hover:text-white transition-colors">{t('footer.servicesList.misting')}</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white transition-colors">{t('footer.servicesList.spiderFly')}</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white transition-colors">{t('footer.servicesList.heating')}</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-white transition-colors">{t('footer.servicesList.patioDesign')}</Link></li>
            </ul>
          </div>
          <div className="space-y-[1rem]">
            <h4 className="text-[0.75rem] font-black uppercase tracking-[0.2em] text-[#e82536]">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-[0.75rem] text-[0.875rem] font-bold">
              <li className="flex items-center gap-[0.5rem] text-slate-300">
                <Phone className="size-4 text-[#e82536]" /> <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-center gap-[0.5rem] text-slate-300">
                <Mail className="size-4 text-[#e82536]" /> <span>contacto@mosquitomex.com</span>
              </li>
              <li className="flex items-start gap-[0.5rem] text-slate-300">
                <MapPin className="size-4 text-[#e82536] mt-[0.25rem] flex-shrink-0" />
                <span className="leading-relaxed">{t('footer.contactInfo.address')}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[3rem] border-t border-white/10 pt-[2rem] flex flex-col md:flex-row justify-between items-center gap-[1rem]">
          <p className="text-[0.75rem] uppercase font-bold tracking-widest text-slate-400">
            &copy; {new Date().getFullYear()} Mosquitomex. {t('footer.copyright')}
          </p>
          <p className="text-[0.75rem] uppercase font-bold tracking-widest text-slate-400">
            {t('footer.madeBy')} <Link href="https://www.angelstudio.design/" className="hover:text-white underline underline-offset-4">Angel Design Studio</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

