'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

/* ── DATOS DEL TIMELINE ── */
const timelineItems = [
  {
    id: '1',
    period: '2025 — Presente',
    role: 'Soporte Técnico — MEDUCA',
    type: 'Trabajo',
    color: '#22d3ee',
    border: '2px solid rgba(34,211,238,0.5)',
    glow: 'rgba(34,211,238,0.25)',
    dot: '#22d3ee',
    description: 'Me desempeño en soporte técnico en el Ministerio de Educación (MEDUCA), brindando asistencia y mantenimiento tecnológico para garantizar el funcionamiento óptimo de los sistemas educativos.',
    tags: ['MEDUCA', 'Soporte Técnico', 'Infraestructura TIC'],
  },
  {
    id: '2',
    period: '2024 — Presente',
    role: 'Proyecto Entre Pares',
    type: 'Proyecto',
    color: '#a78bfa',
    border: '2px solid rgba(167,139,250,0.5)',
    glow: 'rgba(167,139,250,0.25)',
    dot: '#a78bfa',
    description: 'Participo en el Proyecto Entre Pares, iniciativa de colaboración docente que promueve el aprendizaje horizontal y el intercambio de buenas prácticas pedagógicas entre educadores.',
    tags: ['Entre Pares', 'Colaboración Docente', 'Innovación'],
  },
  {
    id: '3',
    period: 'Agosto 2020',
    role: 'Capacitación Docente — Pandemia COVID-19',
    type: 'Logro',
    color: '#4ade80',
    border: '2px solid rgba(74,222,128,0.5)',
    glow: 'rgba(74,222,128,0.25)',
    dot: '#4ade80',
    description: 'Desempeñé un papel crucial adaptando métodos de enseñanza al entorno virtual, capacitando a más de 900 docentes en Microsoft Teams y Office 365, desarrollando talleres interactivos y ofreciendo soporte continuo durante la pandemia.',
    tags: ['Microsoft Teams', 'Office 365', '+900 Docentes', 'Virtual'],
  },
  {
    id: '4',
    period: '2019 — 2023',
    role: 'Proyecto ProFuturo — Chiriquí',
    type: 'Proyecto',
    color: '#a78bfa',
    border: '2px solid rgba(167,139,250,0.5)',
    glow: 'rgba(167,139,250,0.25)',
    dot: '#a78bfa',
    description: 'Lideré el proyecto de Soluciones de ProFuturo en Chiriquí, impactando positivamente a aproximadamente 10,285 alumnos y 465 docentes con tecnología educativa de vanguardia.',
    tags: ['ProFuturo', '+10,285 Alumnos', '+465 Docentes', 'Liderazgo'],
  },
  {
    id: '5',
    period: '2018 — 2023',
    role: 'Docentes Digitales & Gamificación',
    type: 'Logro',
    color: '#4ade80',
    border: '2px solid rgba(74,222,128,0.5)',
    glow: 'rgba(74,222,128,0.25)',
    dot: '#4ade80',
    description: 'Capacité a más de 900 educadores en programas reconocidos por MEDUCA: Docentes Digitales y Gamificación para Docentes, transformando las metodologías pedagógicas en la región.',
    tags: ['MEDUCA', 'Gamificación', '+900 Educadores', 'Certificado'],
  },
  {
    id: '6',
    period: '2015 — 2017',
    role: 'Talleres de Competencias Digitales',
    type: 'Logro',
    color: '#4ade80',
    border: '2px solid rgba(74,222,128,0.5)',
    glow: 'rgba(74,222,128,0.25)',
    dot: '#4ade80',
    description: 'Impartí talleres presenciales avalados por MEDUCA sobre Competencias Digitales y Aprendizaje Basado en Proyectos, desarrollando habilidades digitales en docentes y estudiantes.',
    tags: ['Competencias Digitales', 'ABP', 'MEDUCA', 'Presencial'],
  },
  {
    id: '7',
    period: '2010 — 2014',
    role: 'Aulas Digitales & Aula Móvil',
    type: 'Proyecto',
    color: '#a78bfa',
    border: '2px solid rgba(167,139,250,0.5)',
    glow: 'rgba(167,139,250,0.25)',
    dot: '#a78bfa',
    description: 'Lideré iniciativas educativas en 9 escuelas de riesgo social a través de los programas "Aulas Digitales" y "Aula Móvil", capacitando al personal docente en uso de equipos tecnológicos y herramientas TIC.',
    tags: ['Aulas Digitales', 'Aula Móvil', '9 Escuelas', 'Riesgo Social'],
  },
  {
    id: '8',
    period: '2010',
    role: '🏆 2° Lugar Microsoft & MEDUCA — Foro Mundial Sudáfrica',
    type: 'Premio',
    color: '#facc15',
    border: '2px solid rgba(250,204,21,0.6)',
    glow: 'rgba(250,204,21,0.3)',
    dot: '#facc15',
    description: 'Obtuvimos el segundo lugar en el concurso de Docentes Innovadores de Microsoft y MEDUCA, representando a Panamá en el Foro Mundial de Innovación Educativa en Ciudad del Cabo, Sudáfrica.',
    tags: ['Microsoft', 'MEDUCA', 'Panamá', 'Ciudad del Cabo', 'Sudáfrica'],
  },
]

/* ── TECH STACK COMPLETO ── */
const techStack = [
  {
    title: 'Lenguajes',
    icon: 'code-2',
    color: 'text-blue-400',
    items: ['JavaScript', 'TypeScript', 'Java', 'PHP']
  },
  {
    title: 'Frontend',
    icon: 'layout',
    color: 'text-pink-400',
    items: ['HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'Bootstrap', 'React', 'Angular']
  },
  {
    title: 'Backend',
    icon: 'server',
    color: 'text-green-400',
    items: ['Node.js', 'Laravel', 'Spring']
  },
  {
    title: 'Bases de datos',
    icon: 'database',
    color: 'text-yellow-400',
    items: ['MySQL', 'MariaDB', 'SQLite']
  },
  {
    title: 'Infraestructura & Seguridad',
    icon: 'shield-check',
    color: 'text-purple-400',
    items: ['Docker', 'Apache', 'JWT']
  },
  {
    title: 'Herramientas',
    icon: 'wrench',
    color: 'text-orange-400',
    items: ['NPM', 'jQuery']
  },
  {
    label: 'Autoría E-Learning',
    icon: 'book-open',
    color: '#f472b6',
    techs: [
      { name: 'iSpring Suite', icon: 'play-circle', color: '#f472b6' },
      { name: 'Articulate 360', icon: 'layers', color: '#fb923c' },
      { name: 'Iseazy', icon: 'sparkles', color: '#34d399' },
      { name: 'Genially', icon: 'star', color: '#fbbf24' },
      { name: 'Adobe Captivate', icon: 'video', color: '#f87171' },
      { name: 'EXeLearning', icon: 'book', color: '#60a5fa' },
    ],
  }
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim().length < 2) {
      setSearchResults([])
      setShowResults(false)
      return
    }

    const results: any[] = []
    const lowerQuery = query.toLowerCase()

    timelineItems.forEach(item => {
      if (item.role.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery) ||
          item.tags.some((tag: string) => tag.toLowerCase().includes(lowerQuery))) {
        results.push({ type: 'logro', ...item })
      }
    })

    techStack.forEach(cat => {
      const title = cat.title || cat.label || ''
      if (title.toLowerCase().includes(lowerQuery)) {
        results.push({ type: 'skill', title, category: cat })
      }
      if (cat.items) {
        cat.items.forEach((item: string) => {
          if (item.toLowerCase().includes(lowerQuery)) {
            results.push({ type: 'skill-item', title: item, category: cat.title || cat.label })
          }
        })
      }
      if (cat.techs) {
        cat.techs.forEach((tech: any) => {
          if (tech.name.toLowerCase().includes(lowerQuery)) {
            results.push({ type: 'skill-item', title: tech.name, category: cat.label })
          }
        })
      }
    })

    setSearchResults(results)
    setShowResults(true)
  }

  useEffect(() => {

    /* 1. Lucide icons con reintentos */
    const initLucide = () => {
      if (typeof (window as any).lucide !== 'undefined') {
        ; (window as any).lucide.createIcons()
      } else {
        const t = setInterval(() => {
          if (typeof (window as any).lucide !== 'undefined') {
            ; (window as any).lucide.createIcons()
            clearInterval(t)
          }
        }, 100)
      }
    }
    initLucide()

    /* 2. Spotlight de fondo que sigue el mouse (sin cursor ring) */
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    let raf: number
    const spotlight = document.getElementById('mouse-spotlight')
    let sX = window.innerWidth / 2, sY = window.innerHeight / 2
    let tX = sX, tY = sY, sRaf: number
    let spotCleanup: (() => void) | null = null
    if (!isTouch && spotlight) {
      const onSpot = (e: MouseEvent) => {
        tX = e.clientX; tY = e.clientY
        spotlight.style.opacity = '1'
      }
      document.addEventListener('mousemove', onSpot)
      const spotTick = () => {
        sX += (tX - sX) * 0.06; sY += (tY - sY) * 0.06
        spotlight.style.background =
          `radial-gradient(700px circle at ${sX}px ${sY}px, rgba(99,102,241,0.09) 0%, rgba(168,85,247,0.04) 45%, transparent 70%)`
        sRaf = requestAnimationFrame(spotTick)
      }
      spotTick()
      spotCleanup = () => {
        document.removeEventListener('mousemove', onSpot)
        if (sRaf) cancelAnimationFrame(sRaf)
      }
    }

    /* 3. Navbar scroll + Hero parallax */
    const navbar = document.getElementById('navbar')
    const heroContent = document.getElementById('hero-content')
    const onScroll = () => {
      if (window.scrollY > 50) navbar?.classList.add('nav-blur')
      else navbar?.classList.remove('nav-blur')
      if (heroContent && window.scrollY < 300) {
        const s = 1 + window.scrollY / 3000
        const y = -(window.scrollY / 3000) * 80
        heroContent.style.transform = `scale(${s}) translateY(${y}px)`
      }
    }
    window.addEventListener('scroll', onScroll)

    /* 4. Hero title animación char por char */
    const heroTitle = document.getElementById('hero-title')
    if (heroTitle) {
      heroTitle.innerHTML = ''
      const txt = 'Tecnología y Educación en Acción'
      txt.split('').forEach((char, i) => {
        const span = document.createElement('span')
        span.textContent = char === ' ' ? '\u00A0' : char
        if (i >= 23) span.classList.add('gradient-text')
        span.classList.add('hero-char')
        span.style.animationDelay = `${i * 0.02}s`
        heroTitle.appendChild(span)
      })
    }

    /* 5. IntersectionObserver — scroll animations */
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' })
    document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right')
      .forEach(el => {
        // If already in viewport on load, make visible immediately
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible')
        } else {
          obs.observe(el)
        }
      })

    /* 6. Timeline: entrada desde afuera hacia el centro */
    const tlObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('tl-visible')
          tlObs.unobserve(e.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.tl-item').forEach(el => tlObs.observe(el))

    /* 7. Timeline: línea crece al entrar en vista */
    const lineObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.getElementById('tl-line')?.classList.add('tl-visible')
          lineObs.disconnect()
        }
      })
    }, { threshold: 0.1 })

    const tlSection = document.getElementById('logros')
    if (tlSection) lineObs.observe(tlSection)

    /* 7. Smooth scroll */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault()
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
        if (href) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      })
    })

    /* 8. Tech cards magnet effect */
    document.querySelectorAll<HTMLElement>('.tech-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect()
        const x = e.clientX - r.left - r.width / 2
        const y = e.clientY - r.top - r.height / 2
        card.style.transform = `translate(${x / 25}px,${y / 25}px) scale(1.25)`
      })
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translate(0,0) scale(1)'
      })
    })

    /* 9. Mobile menu */
    const toggle = document.getElementById('menu-toggle')
    const close = document.getElementById('menu-close')
    const menu = document.getElementById('mobile-menu')
    toggle?.addEventListener('click', () => menu?.classList.add('open'))
    close?.addEventListener('click', () => menu?.classList.remove('open'))
    document.querySelectorAll('.mobile-link').forEach(l => {
      l.addEventListener('click', () => menu?.classList.remove('open'))
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      obs.disconnect()
      tlObs.disconnect()
      spotCleanup?.()
    }
  }, [])

  return (
    <div className="text-white min-h-screen overflow-x-hidden"
      style={{ background: 'linear-gradient(180deg,#0a0a0a 0%,#111118 50%,#0a0a0a 100%)' }}>

      <div id="cursor-trail" className="cursor-trail" />
      <div id="mouse-spotlight" className="fixed inset-0 pointer-events-none" style={{ zIndex: 0, opacity: 0, transition: 'opacity 0.6s ease' }} />
      <div className="glow" style={{ position: 'fixed', left: '33%', top: 0, transform: 'translateX(-50%)', zIndex: -1 }} />
      <div className="glow" style={{ position: 'fixed', right: 0, bottom: '33%', transform: 'translateX(50%)', zIndex: -1 }} />

      {/* ── NAVBAR ── */}
<nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <a href="#inicio" className="mac-dot mac-dot-red" />
              <a href="#inicio" className="mac-dot mac-dot-yellow" />
              <a href="#inicio" className="mac-dot mac-dot-green" />
            </div>
            <span className="ml-3 text-sm font-medium">Boreman28</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchResults.length > 0 && setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 200)}
                className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 w-32 focus:w-48 transition-all"
              />
              <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full mt-2 right-0 w-72 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 max-h-80 overflow-y-auto">
                  {searchResults.map((result, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        if (result.type === 'logro') document.getElementById('logros')?.scrollIntoView({ behavior: 'smooth' })
                        else document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' })
                        setShowResults(false)
                        setSearchQuery('')
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="text-sm text-white">{result.type === 'logro' ? result.role : result.title}</div>
                      <div className="text-xs text-gray-500">{result.type === 'logro' ? result.period : result.category}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            {[['#perfil', 'Perfil'], ['#logros', 'Logros'],
            ['#stack', 'Skills'], ['#proyectos', 'Proyectos'], ['/contact', 'Contacto']
            ].map(([href, label]) => (
              <a key={href} href={href} className="text-xs text-gray-400 hover:text-white transition-colors">{label}</a>
            ))}
          </div>
          <button id="menu-toggle" className="md:hidden p-2 text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div id="mobile-menu" className="mobile-menu fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden">
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {[['#perfil', 'Perfil'], ['#logros', 'Logros'],
          ['#stack', 'Skills'], ['#proyectos', 'Proyectos'], ['#contacto', 'Contacto']
          ].map(([href, label]) => (
            <a key={href} href={href} className="mobile-link text-2xl text-gray-400 hover:text-white">{label}</a>
          ))}
          <a href="#perfil" className="mobile-link flex items-center gap-2 text-xl text-gray-300 hover:text-white">
            <i data-lucide="user" className="w-5 h-5" />
            Mi Perfil
          </a>
          <button id="menu-close" className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── HERO ── */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <div id="hero-content" className="transition-transform duration-300">
            
            {/* HEADER CON LOGOS DEL HTML */}
            <div className="mb-8 flex justify-center gap-6">
              <div className="relative" style={{ width: 100, height: 100 }}>
                <img src="/bore.png" alt="Logo" className="w-full h-full rounded-full shadow-lg object-cover" />
              </div>
              <div className="relative" style={{ width: 80, height: 80 }}>
                <img src="/icoJp.png" alt="Icono" className="w-full h-full rounded-2xl shadow-lg object-cover" />
              </div>
            </div>

            <div className="mb-6 inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Disponible para proyectos</span>
            </div>
            <h1 id="hero-title"
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ minHeight: '1.2em' }} />
            <p className="text-lg md:text-xl text-gray-400 mb-4">
              Integrando soluciones tecnológicas con innovación educativa.
            </p>
            <p className="text-base md:text-lg text-gray-500 mb-8">
              Disponible para proyectos
            </p>
            <a href="#contacto" className="btn-primary px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition gap-3 inline-flex items-center">
              Explorar
            </a>
            <a href="#perfil" className="btn-secondary ml-4 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition gap-3 inline-flex items-center">
              Learn More
            </a>
            <div className="mt-12 flex flex-col items-center gap-4 text-gray-500 md:flex-row md:justify-center md:gap-8">
              {[['20+', 'Años experiencia'], ['10K+', 'Alumnos impactados'], ['900+', 'Docentes capacitados']].flatMap(([v, l], i, arr) => {
                const items = [
                  <div key={v} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">{v}</div>
                    <div className="text-xs md:text-sm">{l}</div>
                  </div>
                ]
                if (i < arr.length - 1) {
                  items.push(<div key={`sep-${i}`} className="hidden md:block w-px h-12 bg-gray-800" />)
                }
                return items
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTES / COLABORADORES SLIDER ── */}
      <section className="py-12 md:py-20 bg-white/5 overflow-hidden">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold">
            Organizaciones con las que he <span className="gradient-text">Colaborado</span>
          </h2>
        </div>
        
        <div className="relative">
          {/* Gradientes laterales */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          
          {/* Track infinito */}
          <div className="flex gap-8 md:gap-12 animate-scroll">
            {[
              { name: 'MEDUCA', color: '#3b82f6' },
              { name: 'ProFuturo', color: '#8b5cf6' },
              { name: 'Microsoft', color: '#10b981' },
              { name: 'UNESCO', color: '#f59e0b' },
              { name: 'SENACYT', color: '#06b6d4' },
              { name: 'UNESCO', color: '#f59e0b' },
              { name: 'SENACYT', color: '#06b6d4' },
            ].map((org, i) => (
              <div key={i} className="flex-shrink-0 flex items-center gap-3 glass-card px-6 py-4 rounded-xl hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: org.color + '20' }}>
                  <span className="text-lg font-bold" style={{ color: org.color }}>{org.name.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium text-gray-300 whitespace-nowrap">{org.name}</span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ── PERFIL UNIFICADO (Docente + Soporte) ── */}
      <section id="perfil" className="py-16 md:py-32 relative bg-white/5 overflow-hidden">

        {/* Glow decorativo */}
        <div
          className="absolute left-0 top-1/2 pointer-events-none"
          style={{
            width: 'min(400px,60vw)', height: 'min(400px,60vw)',
            transform: 'translateY(-50%)',
            background: 'radial-gradient(circle,rgba(99,102,241,0.08) 0%,transparent 70%)',
            zIndex: 0,
          }}
        />

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">

          {/* Encabezado */}
          <div className="text-center mb-10 md:mb-14 animate-on-scroll">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Sobre mí</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold">
              Perfil <span className="gradient-text">Profesional</span>
            </h2>
          </div>

          {/* Layout principal: foto + contenido */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">

            {/* ── FOTO DE PERFIL con anillo giratorio ── */}
            <div className="flex-shrink-0 animate-on-scroll flex flex-col items-center gap-6">

              {/* Foto principal con anillo */}
              <div className="relative" style={{ width: 200, height: 200 }}>
                <div className="profile-glow" />
                <div className="profile-ring" style={{ width: 200, height: 200 }}>
                  <img
                    src="/bore.png"
                    alt="Jorge Polanco Rodríguez"
                    width={200}
                    height={200}
                    style={{ width: 200, height: 200, objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Badge disponible */}
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-300">Disponible para proyectos</span>
              </div>

              {/* Mini stats verticales */}
              <div className="glass-card rounded-2xl p-4 w-full text-center space-y-3">
                {[
                  { v: '20+', l: 'Años experiencia', c: '#818cf8' },
                  { v: '10K+', l: 'Alumnos', c: '#a78bfa' },
                  { v: '900+', l: 'Docentes', c: '#4ade80' },
                ].map(s => (
                  <div key={s.v}>
                    <div className="font-bold text-xl" style={{ color: s.c }}>{s.v}</div>
                    <div className="text-xs text-gray-500">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CONTENIDO CON TABS ── */}
            <div className="flex-1 w-full">

              {/* Presentación */}
              <div className="animate-right mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Jorge Polanco Rodríguez
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                  Profesional con <strong className="text-white">más de 20 años de trayectoria en el área tecnológica</strong>, liderando proyectos y optimizando procesos a través de la innovación.
                </p>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Enfoque profesional:</h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400 text-xs">◆</span> Desarrollo Frontend
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400 text-xs">◆</span> Arquitectura y diseño de aplicaciones
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400 text-xs">◆</span> Liderazgo técnico (Tech Lead) y gestión de equipos
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tabs Docente / Técnico */}
              <div className="animate-left">

                {/* Botones de tab */}
                <div className="flex gap-4 mb-6 border-b border-white/10">
                  <button
                    id="tab-docente"
                    className="profile-tab active pb-3 text-sm md:text-base font-semibold text-gray-400 flex items-center gap-2"
                    onClick={() => {
                      document.getElementById('tab-docente')?.classList.add('active')
                      document.getElementById('tab-soporte')?.classList.remove('active')
                      document.getElementById('content-docente')?.classList.add('active')
                      document.getElementById('content-soporte')?.classList.remove('active')
                    }}
                  >
                    <i data-lucide="graduation-cap" className="w-4 h-4 text-blue-400" />
                    Docente
                  </button>
                  <button
                    id="tab-soporte"
                    className="profile-tab pb-3 text-sm md:text-base font-semibold text-gray-400 flex items-center gap-2"
                    onClick={() => {
                      document.getElementById('tab-soporte')?.classList.add('active')
                      document.getElementById('tab-docente')?.classList.remove('active')
                      document.getElementById('content-soporte')?.classList.add('active')
                      document.getElementById('content-docente')?.classList.remove('active')
                    }}
                  >
                    <i data-lucide="wrench" className="w-4 h-4 text-green-400" />
                    Técnico
                  </button>
                </div>

                {/* Contenido tab Docente */}
                <div id="content-docente" className="profile-tab-content active">
                  <div className="grid sm:grid-cols-2 gap-4">

                    <div className="glass-card-animated p-5 rounded-2xl">
                      <h4 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                        <i data-lucide="list-checks" className="w-4 h-4" />
                        Actividades
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        {['Talleres tecnológicos', 'Innovación educativa', 'Entornos virtuales', 'Formación docente', 'Proyecto Entre Pares'].map(a => (
                          <li key={a} className="flex items-center gap-2">
                            <span className="text-green-400 text-xs">✔</span> {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="glass-card-animated p-5 rounded-2xl">
                      <h4 className="text-sm font-semibold text-purple-400 mb-3 flex items-center gap-2">
                        <i data-lucide="book-open" className="w-4 h-4" />
                        Estudios
                      </h4>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li><strong>Maestría en Entornos Virtuales</strong> <span className="text-xs text-gray-600">(en curso)</span></li>
                        <li><strong>Tecnología Educativa</strong></li>
                        <li><strong>Docentes Digitales</strong> — MEDUCA</li>
                        <li><strong>Gamificación para Docentes</strong></li>
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Contenido tab Técnico */}
                <div id="content-soporte" className="profile-tab-content">
                  <div className="grid sm:grid-cols-2 gap-4">

                    <div className="glass-card-animated p-5 rounded-2xl">
                      <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
                        <i data-lucide="list-checks" className="w-4 h-4" />
                        Actividades
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        {['Soporte técnico MEDUCA', 'Reparación de equipos', 'Windows / Linux', 'Redes básicas', 'Optimización de sistemas'].map(a => (
                          <li key={a} className="flex items-center gap-2">
                            <span className="text-green-400 text-xs">✔</span> {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="glass-card-animated p-5 rounded-2xl">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                        <i data-lucide="award" className="w-4 h-4" />
                        Certificaciones
                      </h4>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Formación técnica en informática</li>
                        <li>Certificaciones en soporte</li>
                        <li>Redes y conectividad</li>
                        <li>Microsoft Office 365</li>
                      </ul>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

{/* ── TIMELINE DE LOGROS ── */}
      <section id="logros" className="py-16 md:py-32 relative overflow-hidden bg-white/5">

        {/* Glow fondo */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)',
        }} />

        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">

          {/* Encabezado */}
          <div className="text-center mb-12 md:mb-20 animate-on-scroll">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
              <span style={{ color:'#facc15' }}>★</span>
              <span className="text-sm text-gray-300">Trayectoria profesional</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Logros & <span className="gradient-text">Experiencia</span>
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
              Más de 25 años integrando tecnología y educación en Panamá y el mundo.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Línea central vertical — solo desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 pointer-events-none"
              style={{ left: '50%', transform: 'translateX(-50%)', width: 2, background: 'rgba(255,255,255,0.05)' }}>
              <div id="tl-line" className="tl-line-inner w-full rounded-full"
                style={{ background: 'linear-gradient(180deg, transparent 0%, #6366f1 15%, #a855f7 50%, #6366f1 85%, transparent 100%)' }} />
            </div>

            <div className="flex flex-col gap-4 md:gap-0">
              {timelineItems.map((item, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div
                    key={item.id}
                    className={`tl-item relative flex flex-col md:items-center md:mb-6 ${isLeft ? 'tl-enter-left' : 'tl-enter-right'}`}
                    style={{ transitionDelay: `${index * 0.08}s` }}
                  >
                    {/* Layout desktop: card + punto + espacio vacío */}
                    <div className={`flex w-full items-center gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                      {/* Card — ocupa casi la mitad, pegada al centro */}
                      <div className={`w-full md:w-[46%] ${isLeft ? 'md:pr-5' : 'md:pl-5'}`}>
                        <div
                          className="tl-card p-4 md:p-5 rounded-xl"
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            borderLeft: isLeft ? `3px solid ${item.dot}` : '3px solid transparent',
                            borderRight: !isLeft ? `3px solid ${item.dot}` : '3px solid transparent',
                            borderTop: '1px solid rgba(255,255,255,0.07)',
                            borderBottom: '1px solid rgba(255,255,255,0.07)',
                          }}
                          onMouseEnter={e => {
                            const el = e.currentTarget as HTMLElement
                            el.style.boxShadow = `0 16px 40px -8px ${item.glow}`
                            el.style.background = 'rgba(255,255,255,0.06)'
                          }}
                          onMouseLeave={e => {
                            const el = e.currentTarget as HTMLElement
                            el.style.boxShadow = 'none'
                            el.style.background = 'rgba(255,255,255,0.03)'
                          }}
                        >
                          {/* Tipo + período en misma línea */}
                          <div className={`flex items-center gap-2 mb-1 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/5"
                              style={{ color: item.color }}>
                              {item.type}
                            </span>
                            <span className="text-xs text-gray-500">{item.period}</span>
                          </div>

                          {/* Rol */}
                          <h3 className={`text-sm md:text-base font-bold text-white mb-1.5 ${!isLeft ? 'md:text-right' : ''}`}>
                            {item.role}
                          </h3>

                          {/* Descripción */}
                          <p className={`text-xs text-gray-400 leading-relaxed mb-3 ${!isLeft ? 'md:text-right' : ''}`}>
                            {item.description}
                          </p>

                          {/* Tags */}
                          <div className={`flex flex-wrap gap-1 ${!isLeft ? 'md:justify-end' : ''}`}>
                            {item.tags.map(tag => (
                              <span key={tag}
                                className="text-xs px-1.5 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/8">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Punto central — solo desktop, pegado a la línea */}
                      <div className="hidden md:flex w-[8%] justify-center items-center relative z-20">
                        <div
                          className="tl-dot w-3 h-3 rounded-full border-2 bg-[#0a0a0a]"
                          style={{
                            borderColor: item.dot,
                            boxShadow: `0 0 10px ${item.glow}, 0 0 20px ${item.glow}`,
                          }}
                        />
                      </div>

                      {/* Columna vacía del lado opuesto */}
                      <div className="hidden md:block md:w-[46%]" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Resumen de impacto */}
          <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 animate-on-scroll">
            {[
              { v:'25+',  l:'Años de experiencia',    c:'#818cf8' },
              { v:'10K+', l:'Alumnos impactados',     c:'#a78bfa' },
              { v:'900+', l:'Docentes capacitados',   c:'#4ade80' },
              { v:'9',    l:'Escuelas transformadas', c:'#22d3ee' },
            ].map(s => (
              <div key={s.v} className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: s.c }}>{s.v}</div>
                <div className="text-xs text-gray-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section id="stack" className="py-16 md:py-32 bg-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14 animate-on-scroll">
            <h2 className="text-2xl md:text-4xl font-bold">
              Tecnologías y <span className="gradient-text">Herramientas</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((category: any) => (
              <div key={category.title || category.label} className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform animate-on-scroll">
                <div className="flex items-center gap-3 mb-4">
                  <i data-lucide={category.icon} className={`w-6 h-6 ${category.color.startsWith('#') ? '' : category.color}`} style={{ color: category.color.startsWith('#') ? category.color : undefined }} />
                  <h3 className="text-lg font-bold text-white">{category.title || category.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(category.items || []).map((item: string) => (
                    <span key={item} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300">
                      {item}
                    </span>
                  ))}
                  {(category.techs || []).map((tech: any) => (
                    <span key={tech.name} className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300">
                      <i data-lucide={tech.icon} className="w-3 h-3" style={{ color: tech.color }} />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className="py-16 md:py-32 px-4 md:px-6 relative">
        <h2 className="text-2xl md:text-4xl text-center mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {[
            'from-blue-500/20 via-purple-500/20 to-pink-500/20',
            'from-green-500/20 via-teal-500/20 to-cyan-500/20',
            'from-orange-500/20 via-red-500/20 to-pink-500/20',
          ].map((g, i) => (
            <div key={i} className="glass-card-animated group p-6 rounded-xl cursor-pointer">
              <div className={`h-40 bg-gradient-to-br ${g} rounded-lg mb-4 group-hover:scale-105 transition-transform`} />
              <h4 className="font-bold">Proyecto {i + 1}</h4>
              <p className="text-sm text-gray-400">Descripción breve del proyecto</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-16 md:py-32 text-center relative bg-white/5">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Contacto</h2>
          <p className="text-sm md:text-base text-gray-400 mb-4">¿Tienes un proyecto en mente? Hablemos.</p>
          <a href="https://wa.me/50765360544"
            className="btn-primary px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition gap-3 inline-flex items-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.149.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371.025-.52-.075-.149-.661-1.611-1.904-2.207-.372-.149-1.495-.149-1.921-.149-.421 0-.746.074-.992.146-.249.075-.448.249-.644.454l-1.612 1.195Z" />
            </svg>
            Escribirme por WhatsApp
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-6 text-center text-gray-500 border-t border-white/10">
        © 2026 Boreman28
      </footer>

      {/* ── WHATSAPP FLOTANTE ── */}
      <a href="https://wa.me/50765360544"
        className="floating-whatsapp w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg">
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.149.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371.025-.52-.075-.149-.661-1.611-1.904-2.207-.372-.149-1.495-.149-1.921-.149-.421 0-.746.074-.992.146-.249.075-.448.249-.644.454l-1.612 1.195Z" />
        </svg>
      </a>

    </div>
  )
}