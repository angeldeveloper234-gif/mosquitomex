'use client'

import { useState } from 'react'
import { FadeUp } from '@/components/animations/FadeUp'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/context/LanguageContext'
import { SITE } from '@/lib/site'
import { submitLead } from '@/lib/submit-lead'
import { CheckCircle2, Send, Loader2 } from 'lucide-react'

type FormState = {
  name: string
  email: string
  phone: string
  city: string
  state: string
  capital: string
  timeline: string
  dedication: string
  bizExperience: string
  pestExperience: string
  hasLocation: string
  message: string
}

const EMPTY: FormState = {
  name: '', email: '', phone: '', city: '', state: '',
  capital: '', timeline: '', dedication: '',
  bizExperience: '', pestExperience: '', hasLocation: '', message: '',
}

export function FranchiseForm() {
  const { language } = useLanguage()
  const isES = language === 'es'

  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const set = (key: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: false }))
  }

  // Opciones (bilingües)
  const capitalOptions = isES
    ? ['Menos de $250,000 MXN', '$250,000 – $500,000 MXN', '$500,000 – $1,000,000 MXN', 'Más de $1,000,000 MXN']
    : ['Under $250,000 MXN', '$250,000 – $500,000 MXN', '$500,000 – $1,000,000 MXN', 'Over $1,000,000 MXN']
  const timelineOptions = isES
    ? ['De inmediato', 'En 1 a 3 meses', 'En 3 a 6 meses', 'En más de 6 meses']
    : ['Immediately', 'In 1–3 months', 'In 3–6 months', 'In more than 6 months']
  const dedicationOptions = isES
    ? ['Tiempo completo', 'Medio tiempo', 'Como inversionista (socio operador)']
    : ['Full time', 'Part time', 'As an investor (operating partner)']

  const t = (es: string, en: string) => (isES ? es : en)

  const validate = () => {
    const required: (keyof FormState)[] = ['name', 'email', 'phone', 'city', 'state', 'capital', 'timeline', 'dedication']
    const next: Partial<Record<keyof FormState, boolean>> = {}
    required.forEach(k => { if (!form[k].trim()) next[k] = true })
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = true
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const L = (es: string, en: string) => (isES ? es : en)
    const fields: Record<string, string> = {
      [L('Nombre', 'Name')]: form.name,
      [L('Correo', 'Email')]: form.email,
      [L('Teléfono/WhatsApp', 'Phone/WhatsApp')]: form.phone,
      [L('Ciudad de interés', 'City of interest')]: form.city,
      [L('Estado', 'State')]: form.state,
      [L('Capital de inversión', 'Investment capital')]: form.capital,
      [L('Cuándo desea iniciar', 'Desired start')]: form.timeline,
      [L('Dedicación', 'Dedication')]: form.dedication,
      [L('¿Experiencia empresarial?', 'Business experience?')]: form.bizExperience || '—',
      [L('¿Experiencia en control de plagas?', 'Pest control experience?')]: form.pestExperience || '—',
      [L('¿Cuenta con local u oficina?', 'Has a location/office?')]: form.hasLocation || '—',
      [L('Mensaje', 'Message')]: form.message || '—',
    }
    const subject = L(
      `Solicitud de Franquicia MosquitoMEX – ${form.city}, ${form.state}`,
      `MosquitoMEX Franchise Application – ${form.city}, ${form.state}`
    )

    setSubmitError(false)
    setIsSubmitting(true)
    try {
      const { ok } = await submitLead(fields, {
        subject,
        replyTo: form.email,
        accessKey: SITE.franchiseAccessKey,
        toEmail: SITE.franchiseEmail,
      })
      if (ok) setIsSuccess(true)
      else setSubmitError(true)
    } catch {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const labelCls = 'text-[0.6875rem] font-black uppercase tracking-wide text-[#111111] dark:text-slate-300 block mb-1.5'
  const selectCls = 'h-8 w-full rounded-none border border-input bg-transparent px-2.5 text-base outline-none focus-visible:border-[#006847] focus-visible:ring-3 focus-visible:ring-[#006847]/30 transition-colors'
  const errCls = 'text-[#ce1126] text-[0.6875rem] font-bold mt-1'

  if (isSuccess) {
    return (
      <section id="franchise-form" className="section-padding bg-[#F8F9FA] dark:bg-slate-950">
        <div className="container max-w-2xl">
          <FadeUp>
            <div className="text-center py-12 flex flex-col items-center gap-4 bg-white dark:bg-slate-900 border border-[#E5E8EC] dark:border-slate-800 p-8 md:p-12 rounded-lg shadow-sm">
              <div className="size-16 bg-[#006847]/10 text-[#006847] rounded-full flex items-center justify-center">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#111111] dark:text-white">
                {t('¡Solicitud enviada!', 'Application sent!')}
              </h3>
              <p className="text-[#5A6070] dark:text-slate-400 max-w-md leading-relaxed">
                {t('Se abrió tu correo con la solicitud lista para enviar. Si no se abrió, escríbenos directamente a ',
                  'Your email opened with the application ready to send. If it didn’t open, write to us directly at ')}
                <a href={`mailto:${SITE.franchiseEmail}`} className="text-[#006847] font-bold underline underline-offset-2">{SITE.franchiseEmail}</a>.
              </p>
              <p className="text-[#5A6070] dark:text-slate-400 text-sm">
                {t('Nuestro equipo de expansión te contactará a la brevedad.',
                  'Our expansion team will contact you shortly.')}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    )
  }

  return (
    <section id="franchise-form" className="section-padding bg-[#F8F9FA] dark:bg-slate-950">
      <div className="container max-w-2xl">
        <FadeUp>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-3">
              {t('Solicita tu Franquicia', 'Apply for a Franchise')}
            </h2>
            <div className="w-24 h-1 bg-[#006847] mx-auto mb-4" />
            <p className="text-[#5A6070] dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
              {t('Completa el formulario y nuestro equipo de expansión evaluará tu solicitud. Todos los campos con * son obligatorios.',
                'Fill out the form and our expansion team will review your application. Fields marked * are required.')}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-900 border border-[#E5E8EC] dark:border-slate-800 rounded-lg shadow-sm p-6 md:p-8 space-y-8"
          >
            {/* Datos de contacto */}
            <fieldset className="space-y-4">
              <legend className="text-[0.75rem] font-black uppercase tracking-[0.15em] text-[#006847] mb-3">
                {t('1. Datos de Contacto', '1. Contact Details')}
              </legend>
              <div>
                <label className={labelCls}>{t('Nombre completo', 'Full name')} *</label>
                <Input value={form.name} onChange={e => set('name', e.target.value)} aria-invalid={!!errors.name}
                  placeholder={t('Tu nombre', 'Your name')} />
                {errors.name && <p className={errCls}>{t('Requerido', 'Required')}</p>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>{t('Correo electrónico', 'Email')} *</label>
                  <Input type="email" value={form.email} onChange={e => set('email', e.target.value)} aria-invalid={!!errors.email}
                    placeholder="tucorreo@ejemplo.com" />
                  {errors.email && <p className={errCls}>{t('Correo válido requerido', 'Valid email required')}</p>}
                </div>
                <div>
                  <label className={labelCls}>{t('Teléfono / WhatsApp', 'Phone / WhatsApp')} *</label>
                  <Input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} aria-invalid={!!errors.phone}
                    placeholder="+52 ..." />
                  {errors.phone && <p className={errCls}>{t('Requerido', 'Required')}</p>}
                </div>
              </div>
            </fieldset>

            {/* Zona de interés */}
            <fieldset className="space-y-4">
              <legend className="text-[0.75rem] font-black uppercase tracking-[0.15em] text-[#006847] mb-3">
                {t('2. Zona de Interés', '2. Area of Interest')}
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>{t('Ciudad de interés', 'City of interest')} *</label>
                  <Input value={form.city} onChange={e => set('city', e.target.value)} aria-invalid={!!errors.city}
                    placeholder={t('Ej. Monterrey', 'e.g. Monterrey')} />
                  {errors.city && <p className={errCls}>{t('Requerido', 'Required')}</p>}
                </div>
                <div>
                  <label className={labelCls}>{t('Estado', 'State')} *</label>
                  <Input value={form.state} onChange={e => set('state', e.target.value)} aria-invalid={!!errors.state}
                    placeholder={t('Ej. Nuevo León', 'e.g. Nuevo León')} />
                  {errors.state && <p className={errCls}>{t('Requerido', 'Required')}</p>}
                </div>
              </div>
            </fieldset>

            {/* Perfil de inversión */}
            <fieldset className="space-y-4">
              <legend className="text-[0.75rem] font-black uppercase tracking-[0.15em] text-[#006847] mb-3">
                {t('3. Perfil de Inversión', '3. Investment Profile')}
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>{t('Capital disponible', 'Available capital')} *</label>
                  <select className={selectCls} value={form.capital} onChange={e => set('capital', e.target.value)} aria-invalid={!!errors.capital}>
                    <option value="">{t('Selecciona…', 'Select…')}</option>
                    {capitalOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  {errors.capital && <p className={errCls}>{t('Requerido', 'Required')}</p>}
                </div>
                <div>
                  <label className={labelCls}>{t('¿Cuándo deseas iniciar?', 'When do you want to start?')} *</label>
                  <select className={selectCls} value={form.timeline} onChange={e => set('timeline', e.target.value)} aria-invalid={!!errors.timeline}>
                    <option value="">{t('Selecciona…', 'Select…')}</option>
                    {timelineOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  {errors.timeline && <p className={errCls}>{t('Requerido', 'Required')}</p>}
                </div>
              </div>
              <div>
                <label className={labelCls}>{t('Dedicación al negocio', 'Dedication to the business')} *</label>
                <select className={selectCls} value={form.dedication} onChange={e => set('dedication', e.target.value)} aria-invalid={!!errors.dedication}>
                  <option value="">{t('Selecciona…', 'Select…')}</option>
                  {dedicationOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                {errors.dedication && <p className={errCls}>{t('Requerido', 'Required')}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <YesNo label={t('¿Experiencia empresarial?', 'Business experience?')} value={form.bizExperience} onChange={v => set('bizExperience', v)} isES={isES} labelCls={labelCls} />
                <YesNo label={t('¿Experiencia en plagas?', 'Pest control experience?')} value={form.pestExperience} onChange={v => set('pestExperience', v)} isES={isES} labelCls={labelCls} />
                <YesNo label={t('¿Cuentas con local?', 'Have a location?')} value={form.hasLocation} onChange={v => set('hasLocation', v)} isES={isES} labelCls={labelCls} />
              </div>
            </fieldset>

            {/* Mensaje */}
            <fieldset>
              <legend className="text-[0.75rem] font-black uppercase tracking-[0.15em] text-[#006847] mb-3">
                {t('4. Cuéntanos más', '4. Tell us more')}
              </legend>
              <label className={labelCls}>{t('¿Por qué te interesa MosquitoMEX? (opcional)', 'Why are you interested in MosquitoMEX? (optional)')}</label>
              <Textarea rows={4} value={form.message} onChange={e => set('message', e.target.value)}
                placeholder={t('Escribe tu mensaje…', 'Write your message…')} />
            </fieldset>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#006847] hover:bg-[#00543a] disabled:opacity-70 disabled:cursor-not-allowed text-white font-black text-sm px-8 py-4 rounded shadow-lg transition-all duration-200 uppercase tracking-wider group"
            >
              {isSubmitting ? (
                <><Loader2 className="size-4 animate-spin" /><span>{t('Enviando…', 'Sending…')}</span></>
              ) : (
                <><Send className="size-4" /><span>{t('Enviar Solicitud', 'Submit Application')}</span></>
              )}
            </button>
            {submitError && (
              <p className="text-center text-[0.8125rem] text-[#ce1126] font-bold">
                {t('No se pudo enviar. Inténtalo de nuevo o escríbenos a ', 'Could not send. Please try again or write to us at ')}
                <a href={`mailto:${SITE.franchiseEmail}`} className="underline">{SITE.franchiseEmail}</a>.
              </p>
            )}
            <p className="text-center text-[0.6875rem] text-[#5A6070] dark:text-slate-500">
              {t('Tus datos se envían directamente a nuestro equipo de expansión.', 'Your details are sent directly to our expansion team.')}
            </p>
          </form>
        </FadeUp>
      </div>
    </section>
  )
}

function YesNo({ label, value, onChange, isES, labelCls }: {
  label: string; value: string; onChange: (v: string) => void; isES: boolean; labelCls: string
}) {
  const opts = [
    { v: isES ? 'Sí' : 'Yes', l: isES ? 'Sí' : 'Yes' },
    { v: 'No', l: 'No' },
  ]
  return (
    <div>
      <span className={labelCls}>{label}</span>
      <div className="flex gap-2">
        {opts.map(o => (
          <button
            key={o.v}
            type="button"
            onClick={() => onChange(o.v)}
            className={`flex-1 h-9 border text-sm font-bold rounded transition-colors ${
              value === o.v
                ? 'bg-[#006847] border-[#006847] text-white'
                : 'bg-transparent border-input text-[#5A6070] hover:border-[#006847]'
            }`}
          >
            {o.l}
          </button>
        ))}
      </div>
    </div>
  )
}
