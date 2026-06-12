'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FadeUp } from '@/components/animations/FadeUp'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/context/LanguageContext'
import { CheckCircle2, Building2, Home as HomeIcon, Check, ArrowRight, ArrowLeft } from 'lucide-react'

const PEST_OPTIONS = {
  es: [
    { id: 'mosquitos', label: 'Mosquitos' },
    { id: 'general', label: 'Fumigación General' },
    { id: 'cucarachas', label: 'Cucarachas' },
    { id: 'aranas', label: 'Arañas' },
    { id: 'hormigas_termitas', label: 'Hormigas y Termitas' },
    { id: 'roedores', label: 'Ratas y Ratones' },
    { id: 'alacranes', label: 'Alacranes' },
    { id: 'chinches', label: 'Chinches' },
  ],
  en: [
    { id: 'mosquitos', label: 'Mosquitoes' },
    { id: 'general', label: 'General Pest Control' },
    { id: 'cucarachas', label: 'Cockroaches' },
    { id: 'aranas', label: 'Spiders' },
    { id: 'hormigas_termitas', label: 'Ants & Termites' },
    { id: 'roedores', label: 'Rats & Mice' },
    { id: 'alacranes', label: 'Scorpions' },
    { id: 'chinches', label: 'Bed Bugs' },
  ]
}

export function Appointment() {
  const { language } = useLanguage()
  const isES = language === 'es'
  const pestList = PEST_OPTIONS[language as 'es' | 'en'] ?? PEST_OPTIONS.es

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Form State
  const [propertyType, setPropertyType] = useState<'residencial' | 'comercial' | null>(null)
  const [selectedPests, setSelectedPests] = useState<string[]>([])
  const [address, setAddress] = useState({
    street: '',
    colonia: '',
    city: '',
    state: '',
    zipCode: ''
  })
  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  // Error validations
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handlePestToggle = (id: string) => {
    setSelectedPests(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
    if (errors.pests) {
      setErrors(prev => {
        const next = { ...prev }
        delete next.pests
        return next
      })
    }
  }

  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!propertyType) {
        newErrors.propertyType = isES ? 'Selecciona una opción' : 'Select an option'
      }
      if (selectedPests.length === 0) {
        newErrors.pests = isES ? 'Selecciona al menos una plaga' : 'Select at least one pest'
      }
    } else if (step === 2) {
      if (!address.street.trim()) {
        newErrors.street = isES ? 'Ingresa la calle y número' : 'Enter street and number'
      }
      if (!address.colonia.trim()) {
        newErrors.colonia = isES ? 'Ingresa la colonia' : 'Enter neighborhood'
      }
      if (!address.city.trim()) {
        newErrors.city = isES ? 'Ingresa la delegación / municipio' : 'Enter municipality/city'
      }
      if (!address.state.trim()) {
        newErrors.state = isES ? 'Ingresa el estado' : 'Enter state'
      }
      if (!address.zipCode.trim()) {
        newErrors.zipCode = isES ? 'Ingresa el código postal' : 'Enter ZIP code'
      }
    } else if (step === 3) {
      if (!contact.name.trim()) {
        newErrors.name = isES ? 'Ingresa tu nombre' : 'Enter your name'
      }
      if (!contact.phone.trim() || contact.phone.replace(/\D/g, '').length < 10) {
        newErrors.phone = isES ? 'Ingresa un teléfono válido de 10 dígitos' : 'Enter a valid 10-digit phone number'
      }
      if (!contact.email.trim() || !/\S+@\S+\.\S+/.test(contact.email)) {
        newErrors.email = isES ? 'Ingresa un correo electrónico válido' : 'Enter a valid email'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    setStep(prev => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep()) {
      setIsSubmitting(true)
      // Simulate API Submission
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSuccess(true)
      }, 1500)
    }
  }

  return (
    <section id="appointment" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-gray-100">
      <div className="container max-w-6xl">
        <div className="bg-white dark:bg-black border border-gray-200/50 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
          
          {/* Info Panel */}
          <div className="md:col-span-4 p-8 md:p-12 bg-[#e82536] text-white flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-white/70 text-xs font-black uppercase tracking-widest">
                {isES ? 'Cotización Rápida' : 'Quick Quote'}
              </span>
              <h2 className="text-3xl font-black tracking-tighter uppercase leading-[1.1]">
                {isES ? '¿Comenzamos con tu cotización?' : 'Shall we start your quote?'}
              </h2>
              <p className="text-white/95 text-sm leading-relaxed">
                {isES 
                  ? 'Obtén un presupuesto a la medida para erradicar cualquier tipo de plaga en tu hogar o negocio en solo 3 simples pasos.' 
                  : 'Get a tailored budget to eradicate any type of pest in your home or business in just 3 simple steps.'}
              </p>
            </div>

            {/* Step Indicators */}
            <div className="mt-8 space-y-4 pt-6 border-t border-white/20">
              {[
                { num: 1, labelEs: 'Servicio y Plaga', labelEn: 'Service & Pest' },
                { num: 2, labelEs: 'Dirección del Servicio', labelEn: 'Service Address' },
                { num: 3, labelEs: 'Información de Contacto', labelEn: 'Contact Info' }
              ].map(s => (
                <div key={s.num} className="flex items-center gap-3">
                  <div className={`h-8 w-8 flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    step === s.num 
                      ? 'bg-white text-[#e82536] border-white' 
                      : step > s.num 
                        ? 'bg-white/20 text-white border-transparent' 
                        : 'border-white/30 text-white/50'
                  }`}>
                    {step > s.num ? <Check className="size-4" /> : <span className="font-black text-sm">{s.num}</span>}
                  </div>
                  <p className={`text-xs font-black uppercase tracking-wide transition-colors duration-300 ${
                    step === s.num ? 'text-white' : 'text-white/60'
                  }`}>
                    {isES ? s.labelEs : s.labelEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Panel */}
          <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-black relative">
            {isSuccess ? (
              <FadeUp>
                <div className="text-center py-12 flex flex-col items-center justify-center gap-4">
                  <div className="size-16 bg-green-100 dark:bg-green-950 text-green-600 rounded flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <h3 className="text-2xl font-black text-[#082135] dark:text-white uppercase tracking-tight">
                    {isES ? '¡Solicitud Recibida!' : 'Request Received!'}
                  </h3>
                  <p className="text-[#5A6070] text-sm max-w-[40ch] leading-relaxed">
                    {isES 
                      ? 'Nos pondremos en contacto contigo en los próximos minutos para brindarte tu cotización personalizada.' 
                      : 'We will contact you in the next few minutes to provide your personalized quote.'}
                  </p>
                  <Button 
                    variant="brand" 
                    onClick={() => {
                      setStep(1)
                      setIsSuccess(false)
                      setPropertyType(null)
                      setSelectedPests([])
                      setAddress({ street: '', colonia: '', city: '', state: '', zipCode: '' })
                      setContact({ name: '', phone: '', email: '', message: '' })
                    }}
                    className="mt-4 text-xs tracking-wider uppercase font-black px-6"
                  >
                    {isES ? 'Volver a Empezar' : 'Start Over'}
                  </Button>
                </div>
              </FadeUp>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between gap-8">
                
                {/* Step 1 */}
                {step === 1 && (
                  <FadeUp>
                    <div className="space-y-6">
                      {/* Property Type */}
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-wider text-[#082135] dark:text-slate-300">
                          {isES ? '1. ¿Dónde necesitas el servicio?' : '1. Where do you need the service?'}
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => {
                              setPropertyType('residencial')
                              if (errors.propertyType) {
                                setErrors(prev => {
                                  const next = { ...prev }
                                  delete next.propertyType
                                  return next
                                })
                              }
                            }}
                            className={`flex flex-col items-center justify-center p-6 border transition-all duration-200 gap-3 group rounded ${
                              propertyType === 'residencial'
                                ? 'border-[#e82536] bg-[#fdeaec]/10 text-[#e82536]'
                                : 'border-gray-200 dark:border-slate-800 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <HomeIcon className="size-6 transition-transform duration-200 group-hover:scale-110" />
                            <span className="text-sm font-bold uppercase tracking-wide">
                              {isES ? 'Casa / Residencial' : 'Home / Residential'}
                            </span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setPropertyType('comercial')
                              if (errors.propertyType) {
                                setErrors(prev => {
                                  const next = { ...prev }
                                  delete next.propertyType
                                  return next
                                })
                              }
                            }}
                            className={`flex flex-col items-center justify-center p-6 border transition-all duration-200 gap-3 group rounded ${
                              propertyType === 'comercial'
                                ? 'border-[#e82536] bg-[#fdeaec]/10 text-[#e82536]'
                                : 'border-gray-200 dark:border-slate-800 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <Building2 className="size-6 transition-transform duration-200 group-hover:scale-110" />
                            <span className="text-sm font-bold uppercase tracking-wide">
                              {isES ? 'Negocio / Comercial' : 'Business / Commercial'}
                            </span>
                          </button>
                        </div>
                        {errors.propertyType && <p className="text-red-500 text-xs font-bold mt-1">{errors.propertyType}</p>}
                      </div>

                      {/* Pest Selection */}
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-wider text-[#082135] dark:text-slate-300">
                          {isES ? '2. ¿Con qué plaga podemos ayudarte?' : '2. What pest can we help you with?'}
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {pestList.map(pest => {
                            const isSelected = selectedPests.includes(pest.id)
                            return (
                              <button
                                key={pest.id}
                                type="button"
                                onClick={() => handlePestToggle(pest.id)}
                                className={`py-3 px-2 border text-xs font-bold uppercase tracking-wide rounded transition-all duration-150 ${
                                  isSelected
                                    ? 'bg-[#e82536] text-white border-transparent'
                                    : 'bg-white dark:bg-slate-950 border-gray-200 dark:border-slate-800 text-[#082135] dark:text-slate-300 hover:bg-gray-50'
                                }`}
                              >
                                {pest.label}
                              </button>
                            )
                          })}
                        </div>
                        {errors.pests && <p className="text-red-500 text-xs font-bold mt-1">{errors.pests}</p>}
                      </div>
                    </div>
                  </FadeUp>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <FadeUp>
                    <div className="space-y-4">
                      <label className="text-xs font-black uppercase tracking-wider text-[#082135] dark:text-slate-300 block mb-2">
                        {isES ? '¿Cuál es la dirección del servicio?' : 'What is the service address?'}
                      </label>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="text-[0.6875rem] font-black uppercase text-[#082135] dark:text-slate-400 block mb-1">
                            {isES ? 'Calle y Número' : 'Street Address'}
                          </label>
                          <Input
                            placeholder={isES ? 'Ej. Av. Reforma 123' : 'e.g. 123 Reform Ave'}
                            value={address.street}
                            onChange={e => setAddress({ ...address, street: e.target.value })}
                            className="h-11 rounded"
                          />
                          {errors.street && <p className="text-red-500 text-[0.6875rem] font-bold mt-1">{errors.street}</p>}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="text-[0.6875rem] font-black uppercase text-[#082135] dark:text-slate-400 block mb-1">
                              {isES ? 'Colonia' : 'Neighborhood'}
                            </label>
                            <Input
                              placeholder={isES ? 'Ej. Juárez' : 'e.g. Juarez'}
                              value={address.colonia}
                              onChange={e => setAddress({ ...address, colonia: e.target.value })}
                              className="h-11 rounded"
                            />
                            {errors.colonia && <p className="text-red-500 text-[0.6875rem] font-bold mt-1">{errors.colonia}</p>}
                          </div>
                          
                          <div>
                            <label className="text-[0.6875rem] font-black uppercase text-[#082135] dark:text-slate-400 block mb-1">
                              {isES ? 'Delegación o Municipio' : 'Municipality / City'}
                            </label>
                            <Input
                              placeholder={isES ? 'Ej. Cuauhtémoc' : 'e.g. Cuauhtemoc'}
                              value={address.city}
                              onChange={e => setAddress({ ...address, city: e.target.value })}
                              className="h-11 rounded"
                            />
                            {errors.city && <p className="text-red-500 text-[0.6875rem] font-bold mt-1">{errors.city}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-[0.6875rem] font-black uppercase text-[#082135] dark:text-slate-400 block mb-1">
                              {isES ? 'Estado' : 'State'}
                            </label>
                            <Input
                              placeholder={isES ? 'Ej. CDMX' : 'e.g. CDMX'}
                              value={address.state}
                              onChange={e => setAddress({ ...address, state: e.target.value })}
                              className="h-11 rounded"
                            />
                            {errors.state && <p className="text-red-500 text-[0.6875rem] font-bold mt-1">{errors.state}</p>}
                          </div>
                          
                          <div>
                            <label className="text-[0.6875rem] font-black uppercase text-[#082135] dark:text-slate-400 block mb-1">
                              {isES ? 'Código Postal' : 'ZIP / Postal Code'}
                            </label>
                            <Input
                              placeholder="Ej. 06600"
                              value={address.zipCode}
                              onChange={e => setAddress({ ...address, zipCode: e.target.value.replace(/\D/g, '') })}
                              maxLength={5}
                              className="h-11 rounded"
                            />
                            {errors.zipCode && <p className="text-red-500 text-[0.6875rem] font-bold mt-1">{errors.zipCode}</p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <FadeUp>
                    <div className="space-y-4">
                      <label className="text-xs font-black uppercase tracking-wider text-[#082135] dark:text-slate-300 block mb-2">
                        {isES ? '¿Cómo te contactamos?' : 'How do we contact you?'}
                      </label>

                      <div className="space-y-3">
                        <div>
                          <label className="text-[0.6875rem] font-black uppercase text-[#082135] dark:text-slate-400 block mb-1">
                            {isES ? 'Nombre Completo' : 'Full Name'}
                          </label>
                          <Input
                            placeholder={isES ? 'Ej. Juan Pérez' : 'e.g. John Doe'}
                            value={contact.name}
                            onChange={e => setContact({ ...contact, name: e.target.value })}
                            className="h-11 rounded"
                          />
                          {errors.name && <p className="text-red-500 text-[0.6875rem] font-bold mt-1">{errors.name}</p>}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="text-[0.6875rem] font-black uppercase text-[#082135] dark:text-slate-400 block mb-1">
                              {isES ? 'Teléfono (10 dígitos)' : 'Phone Number'}
                            </label>
                            <Input
                              placeholder="Ej. 5512345678"
                              value={contact.phone}
                              onChange={e => setContact({ ...contact, phone: e.target.value.replace(/\D/g, '') })}
                              maxLength={10}
                              className="h-11 rounded"
                            />
                            {errors.phone && <p className="text-red-500 text-[0.6875rem] font-bold mt-1">{errors.phone}</p>}
                          </div>

                          <div>
                            <label className="text-[0.6875rem] font-black uppercase text-[#082135] dark:text-slate-400 block mb-1">
                              {isES ? 'Correo Electrónico' : 'Email Address'}
                            </label>
                            <Input
                              type="email"
                              placeholder="Ej. juan@correo.com"
                              value={contact.email}
                              onChange={e => setContact({ ...contact, email: e.target.value })}
                              className="h-11 rounded"
                            />
                            {errors.email && <p className="text-red-500 text-[0.6875rem] font-bold mt-1">{errors.email}</p>}
                          </div>
                        </div>

                        <div>
                          <label className="text-[0.6875rem] font-black uppercase text-[#082135] dark:text-slate-400 block mb-1">
                            {isES ? 'Mensaje o Detalles Adicionales (Opcional)' : 'Message / Details (Optional)'}
                          </label>
                          <Textarea
                            placeholder={isES ? 'Ej. El problema se concentra en el jardín trasero...' : 'e.g. Issue is in the backyard...'}
                            value={contact.message}
                            onChange={e => setContact({ ...contact, message: e.target.value })}
                            className="min-h-[70px] rounded resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                )}

                {/* Footer Controls */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 text-[#082135] dark:text-white font-bold text-xs uppercase hover:text-[#e82536] transition-colors"
                    >
                      <ArrowLeft className="size-4" />
                      {isES ? 'Anterior' : 'Back'}
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      variant="brand"
                      className="text-xs font-black tracking-wider uppercase h-11 px-6 flex items-center gap-2"
                    >
                      {isES ? 'Siguiente' : 'Next'}
                      <ArrowRight className="size-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="brand"
                      disabled={isSubmitting}
                      className="text-xs font-black tracking-wider uppercase h-11 px-8 min-w-[140px]"
                    >
                      {isSubmitting 
                        ? (isES ? 'Enviando...' : 'Sending...') 
                        : (isES ? 'Enviar Solicitud' : 'Submit Request')}
                    </Button>
                  )}
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
