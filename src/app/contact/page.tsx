'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setLoading(false)
    setSubmitted(true)
  }

  useEffect(() => {
    const initLucide = () => {
      if (typeof (window as any).lucide !== 'undefined') {
        ;(window as any).lucide.createIcons()
      } else {
        const t = setInterval(() => {
          if (typeof (window as any).lucide !== 'undefined') {
            ;(window as any).lucide.createIcons()
            clearInterval(t)
          }
        }, 100)
      }
    }
    initLucide()

    const navbar = document.getElementById('navbar')
    const onScroll = () => {
      if (window.scrollY > 50) navbar?.classList.add('nav-blur')
      else navbar?.classList.remove('nav-blur')
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="text-white min-h-screen overflow-x-hidden"
      style={{ background: 'linear-gradient(180deg,#0a0a0a 0%,#111118 50%,#0a0a0a 100%)' }}>
      
      <div className="glow" style={{ position: 'fixed', left: '33%', top: 0, transform: 'translateX(-50%)', zIndex: -1 }} />
      <div className="glow" style={{ position: 'fixed', right: 0, bottom: '33%', transform: 'translateX(50%)', zIndex: -1 }} />

      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex gap-2">
              <span className="mac-dot mac-dot-red" />
              <span className="mac-dot mac-dot-yellow" />
              <span className="mac-dot mac-dot-green" />
            </div>
            <span className="ml-3 text-sm font-medium">Boreman28</span>
          </Link>
          <Link href="/" className="text-xs text-gray-400 hover:text-white transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </nav>

      <section className="min-h-screen pt-32 pb-16 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 w-full">
          
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Contacto</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Hablemos <span className="gradient-text">ahora</span>
            </h1>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
              ¿Tienes un proyecto en mente o quieres colaborar? 
              Completa el formulario y te contacto pronto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
            <div className="animate-left">
              <div className="glass-card p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <i data-lucide="message-circle" className="w-6 h-6 text-indigo-400" />
                  Otras formas de contacto
                </h3>
                
                <div className="space-y-6">
                  <a 
                    href="https://wa.me/50765360544" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.149.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371.025-.52-.075-.149-.661-1.611-1.904-2.207-.372-.149-1.495-.149-1.921-.149-.421 0-.746.074-.992.146-.249.075-.448.249-.644.454l-1.612 1.195Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-green-400 transition-colors">WhatsApp</div>
                      <div className="text-sm text-gray-400">+507 6536-0544</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center">
                      <i data-lucide="mail" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-sm text-gray-400">jorgepolanco28@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                      <i data-lucide="map-pin" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Ubicación</div>
                      <div className="text-sm text-gray-400">Panamá</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-4">También puedes encontrarme en:</p>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-500/20 hover:border-indigo-500/50 border border-white/10 transition-all">
                      <i data-lucide="github" className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 border border-white/10 transition-all">
                      <i data-lucide="linkedin" className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500/50 border border-white/10 transition-all">
                      <i data-lucide="instagram" className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-right">
              {submitted ? (
                <div className="glass-card p-8 rounded-2xl text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <i data-lucide="check" className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">¡Mensaje enviado!</h3>
                  <p className="text-gray-400 mb-6">
                    Gracias por contactarme. Te responderé lo antes posible.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-primary px-6 py-3 rounded-full text-sm font-semibold"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-2xl space-y-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <i data-lucide="send" className="w-6 h-6 text-indigo-400" />
                    Envíame un mensaje
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Nombre completo</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Correo electrónico</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Asunto</label>
                      <input 
                        type="text" 
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                        placeholder="¿Sobre qué quieres hablar?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Mensaje</label>
                      <textarea 
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                        placeholder="Tu mensaje..."
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="btn-primary w-full px-8 py-4 rounded-xl text-lg font-semibold hover:scale-[1.02] transition flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <i data-lucide="send" className="w-5 h-5" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 border-t border-white/10">
        © 2026 Boreman28
      </footer>
    </div>
  )
}