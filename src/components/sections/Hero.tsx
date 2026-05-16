'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, CheckCircle2 } from 'lucide-react'
import { Youtube } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'
import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'

// Custom SVG YouTube Icon to prevent Lucide-React version compilation errors
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width="1em"
      height="1em"
    >
      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.522 3.5 12 3.5 12 3.5s-7.522 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.03 0 12 0 12s0 3.97-.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.478 20.5 12 20.5 12 20.5s7.522 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function Hero() {
  const { t, language } = useLanguage()

  // --- CONFIGURATION ---
  const layoutMode = 'background' as 'split' | 'background'
  const videoType = 'youtube' as 'youtube' | 'local'

  const [isPlayingInline, setIsPlayingInline] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Demo URLs (Replace these with the actual MosquitoMex video assets)
  const youtubeUrl = 'https://www.youtube.com/embed/qRC2kE065JY' // User provided YouTube video
  const localVideoUrl = '/videos/mosquito-control.mp4' // Local video fallback

  // Extract YouTube ID for loop playback in background mode
  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : 'qRC2kE065JY'
  }
  const youtubeId = getYoutubeId(youtubeUrl)

  // Localized bullet benefits
  const benefits = language === 'es'
    ? [
        'Protección Automática 24/7',
        'Fórmula Orgánica Aprobada EPA',
        'Resultados Garantizados al 100%'
      ]
    : [
        '24/7 Automatic Protection',
        'EPA-Approved Organic Formula',
        '100% Guaranteed Results'
      ]

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center section-padding overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-border transition-colors duration-300">
      
      {/* ========================================================================= */}
      {/* LAYOUT OPTION A: FULL-BLEED BACKGROUND VIDEO LOOP                         */}
      {/* ========================================================================= */}
      {layoutMode === 'background' && (
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none">
          {videoType === 'youtube' ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&enablejsapi=1&playsinline=1&iv_load_policy=3&modestbranding=1`}
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.15]"
              allow="autoplay; encrypted-media"
              frameBorder="0"
            />
          ) : (
            <video
              src={localVideoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // If local file is missing, print developer instruction in console
                console.warn('Local video file not found. Place your video in public/videos/mosquito-control.mp4');
              }}
            />
          )}
          {/* Brand Overlay Tint - Generates optimal contrast ratio (> 4.5:1) for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#082135]/95 via-[#082135]/85 to-[#082135]/60 dark:from-slate-950/95 dark:via-slate-950/85 dark:to-slate-950/65 mix-blend-multiply" />
        </div>
      )}

      {/* ========================================================================= */}
      {/* HERO CONTENT AND GRID WRAPPER                                            */}
      {/* ========================================================================= */}
      <div className="container relative z-10 w-full">
        {layoutMode === 'split' ? (
          // --- SPLIT-SCREEN LAYOUT (PREMIUM ENGAGING CARD) ---
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[3rem] items-center">
            
            {/* Left side text columns (7 columns) */}
            <div className="lg:col-span-7 flex flex-col space-y-[1.5rem]">
              <FadeUp>
                <div className="inline-flex items-center gap-[0.5rem] bg-[#e82536]/10 text-[#e82536] dark:bg-[#e82536]/20 px-[0.75rem] py-[0.375rem] text-[0.8rem] font-bold uppercase tracking-wider rounded-none self-start border border-[#e82536]/20">
                  <span className="inline-block size-2 bg-[#e82536] animate-pulse rounded-none" />
                  {t('header.subtitle')}
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="leading-[1.1] tracking-tighter text-[#082135] dark:text-slate-100 uppercase font-black text-[clamp(2.5rem,7vw,4.5rem)]">
                  {t('hero.titlePre')}
                  <span className="text-[#e82536] italic block sm:inline">{t('hero.titleItalic')}</span>
                  {t('hero.titlePost')}
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-[#082135]/80 dark:text-slate-300 font-medium max-w-[60ch] text-[1.125rem] leading-[1.6]">
                  {t('hero.description')}
                </p>
              </FadeUp>

              {/* Unique selling points / Benefit Checkmarks */}
              <FadeUp delay={0.25}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[0.75rem] pt-[0.5rem]">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-[0.5rem] text-[0.95rem] font-bold uppercase text-[#082135] dark:text-slate-200">
                      <CheckCircle2 className="size-[1.25rem] text-[#e82536] shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-[1rem] pt-[1rem]">
                  <Button 
                    variant="brand" 
                    size="lg"
                    className="w-full sm:w-auto rounded-none tracking-wide text-center"
                  >
                    {t('common.bookConsultationLong')}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto rounded-none border-2 border-[#082135] dark:border-slate-300 font-bold uppercase tracking-wide text-[#082135] dark:text-slate-100 hover:bg-[#082135]/5 dark:hover:bg-white/5 active:scale-[0.98] transition-transform"
                    onClick={() => {
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {t('common.ourServices')}
                  </Button>
                </div>
              </FadeUp>
            </div>

            {/* Right side interactive video container (5 columns) */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <FadeUp delay={0.35}>
                <div className="relative w-full max-w-[32rem] aspect-video bg-[#082135] shadow-2xl overflow-hidden border border-border/80 group">
                  
                  {/* Decorative background glow for card */}
                  <div className="absolute -inset-[0.5rem] bg-[#e82536]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Inline playback mechanism */}
                  {isPlayingInline ? (
                    <div className="relative w-full h-full z-10">
                      {videoType === 'youtube' ? (
                        <iframe
                          src={`${youtubeUrl}?autoplay=1&rel=0&modestbranding=1`}
                          className="w-full h-full absolute inset-0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          frameBorder="0"
                        />
                      ) : (
                        <video
                          src={localVideoUrl}
                          autoPlay
                          controls
                          className="w-full h-full absolute inset-0 object-cover"
                        />
                      )}
                      <button
                        onClick={() => setIsPlayingInline(false)}
                        className="absolute top-3 right-3 z-20 size-8 flex items-center justify-center bg-black/60 text-white rounded-none border border-white/20 hover:bg-[#e82536] hover:border-[#e82536] transition-colors"
                        title="Close video"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  ) : (
                    // Preview card with play button
                    <div className="relative w-full h-full flex flex-col justify-end p-[1.5rem] overflow-hidden cursor-pointer" onClick={() => setIsModalOpen(true)}>
                      
                      {/* Image Poster */}
                      <img 
                        src="/hero_video_poster.png" 
                        alt="Mosquito Control Action" 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Premium gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity group-hover:opacity-90" />

                      {/* Interactive play button trigger */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="relative flex items-center justify-center">
                          {/* Pulse wave effects */}
                          <span className="absolute inline-flex h-20 w-20 rounded-none bg-[#e82536]/30 animate-ping" />
                          <span className="absolute inline-flex h-16 w-16 rounded-none bg-[#e82536]/40 opacity-75" />
                          
                          <div className="relative size-[4.5rem] bg-[#e82536] text-white rounded-none border-2 border-white flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-all duration-300">
                            <Play className="size-[2rem] fill-white ml-[0.25rem] group-hover:text-slate-100 transition-colors" />
                          </div>
                        </div>
                      </div>

                      {/* Video info card overlay */}
                      <div className="relative z-10 select-none text-left">
                        <p className="text-[0.75rem] font-black uppercase tracking-wider text-[#e82536] drop-shadow-md">
                          {videoType === 'youtube' ? 'YouTube Showreel' : 'Downloaded Stock Video'}
                        </p>
                        <h3 className="text-[1.25rem] font-black text-white leading-tight drop-shadow-md">
                          {language === 'es' ? 'Ver Sistema de Nebulización' : 'Watch Misting System In Action'}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </FadeUp>
            </div>
            
          </div>
        ) : (
          // --- FULL-BLEED CENTERED CONTENT (BACKGROUND LOOP MODE) ---
          <div className="max-w-[50rem] mx-auto text-center flex flex-col items-center space-y-[1.5rem]">
            <FadeUp>
              <div className="inline-flex items-center gap-[0.5rem] bg-[#e82536]/20 text-[#e82536] dark:bg-[#e82536]/30 px-[1rem] py-[0.5rem] text-[0.85rem] font-bold uppercase tracking-wider rounded-none border border-[#e82536]/30 backdrop-blur-sm">
                <span className="inline-block size-2 bg-[#e82536] animate-pulse rounded-none" />
                {t('header.subtitle')}
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="leading-[1.1] tracking-tighter text-white uppercase font-black text-[clamp(2.5rem,8vw,5.5rem)] drop-shadow-lg">
                {t('hero.titlePre')}
                <span className="text-[#e82536] italic block sm:inline">{t('hero.titleItalic')}</span>
                {t('hero.titlePost')}
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-slate-200 font-medium max-w-[65ch] text-[1.125rem] md:text-[1.25rem] leading-[1.6] drop-shadow-md">
                {t('hero.description')}
              </p>
            </FadeUp>

            {/* Unique benefits center columns */}
            <FadeUp delay={0.25}>
              <div className="flex flex-wrap justify-center gap-x-[2rem] gap-y-[0.75rem] pt-[0.5rem]">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-[0.5rem] text-[0.95rem] font-bold uppercase text-slate-100 drop-shadow-sm">
                    <CheckCircle2 className="size-[1.25rem] text-[#e82536] shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-[1rem] pt-[1.5rem] w-full max-w-[32rem]">
                <Button 
                  variant="brand" 
                  size="lg"
                  className="w-full sm:w-auto min-w-[14rem] rounded-none tracking-wide text-center"
                >
                  {t('common.bookConsultationLong')}
                </Button>
                
                {/* Secondary Button styled with high contrast to background video */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto min-w-[14rem] rounded-none border-2 border-white/80 hover:border-white text-white bg-white/10 hover:bg-white/20 font-bold uppercase tracking-wide backdrop-blur-xs active:scale-[0.98] transition-transform"
                  onClick={() => {
                    // Triggers lightbox modal to play full detailed video
                    setIsModalOpen(true)
                  }}
                >
                  {language === 'es' ? 'Ver Video Completo' : 'Watch Full Video'}
                </Button>
              </div>
            </FadeUp>
          </div>
        )}
      </div>

      {/* Subtle Background decoration for split mode */}
      {layoutMode === 'split' && (
        <div className="absolute inset-0 -z-0 opacity-20 dark:opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_120%,rgba(232,37,54,0.12),transparent)]" />
      )}

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL: SCREEN-FILLING HIGH-END PLAYER OVERLAY                    */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl aspect-video bg-[#082135] border-2 border-white/10 shadow-2xl rounded-none overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-50 size-10 flex items-center justify-center bg-black/60 hover:bg-[#e82536] text-white border border-white/20 transition-all rounded-none outline-none focus-visible:ring-2 focus-visible:ring-[#e82536]"
                title="Close"
              >
                <X className="size-5" />
              </button>

              {/* Video Player Frame */}
              <div className="w-full h-full relative">
                {videoType === 'youtube' ? (
                  <iframe
                    src={`${youtubeUrl}?autoplay=1&rel=0&modestbranding=1`}
                    className="w-full h-full absolute inset-0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                  />
                ) : (
                  <video
                    src={localVideoUrl}
                    autoPlay
                    controls
                    className="w-full h-full absolute inset-0 object-cover"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



    </section>
  )
}
