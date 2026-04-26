'use client'
import { useEffect } from 'react'

/* ── DATOS DEL TIMELINE ── */
const timelineItems = [
  {
    id: '1',
    period: '2024 — Presente',
    role: 'Soporte Técnico — MEDUCA',
    type: 'Trabajo',
    color: '#22d3ee',
    border: '2px solid rgba(34,211,238,0.5)',
    glow: 'rgba(34,211,238,0.25)',
    dot: '#22d3ee',
    description: 'Me desempeño en soporte técnico en el Ministerio de Educación (MEDUCA), brindando asistencia y mantenimiento tecnológico para garantizar el funcionamiento óptimo de los sistemas educativos.',
    tags: ['MEDUCA','Soporte Técnico','Infraestructura TIC'],
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
    tags: ['Entre Pares','Colaboración Docente','Innovación'],
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
    tags: ['Microsoft Teams','Office 365','+900 Docentes','Virtual'],
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
    tags: ['ProFuturo','+10,285 Alumnos','+465 Docentes','Liderazgo'],
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
    tags: ['MEDUCA','Gamificación','+900 Educadores','Certificado'],
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
    tags: ['Competencias Digitales','ABP','MEDUCA','Presencial'],
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
    tags: ['Aulas Digitales','Aula Móvil','9 Escuelas','Riesgo Social'],
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
    tags: ['Microsoft','MEDUCA','Panamá','Ciudad del Cabo','Sudáfrica'],
  },
]

export default function Home() {

  useEffect(() => {

    /* Lucide icons */
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

    /* Cursor trail */
    const cursor = document.getElementById('cursor-trail')
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    let mX = 0, mY = 0, cX = 0, cY = 0, raf: number

    if (!isTouch && cursor) {
      cursor.style.display = 'block'
      document.body.style.cursor = 'none'
      const onMove = (e: MouseEvent) => { mX = e.clientX; mY = e.clientY }
      document.addEventListener('mousemove', onMove)
      const tick = () => {
        cX += (mX - cX) * 0.15; cY += (mY - cY) * 0.15
        cursor.style.left = cX + 'px'; cursor.style.top = cY + 'px'
        raf = requestAnimationFrame(tick)
      }
      tick()
      document.querySelectorAll('a, button, .glass-card-animated, .tech-card, .skill-card, .timeline-card')
        .forEach(el => {
          el.addEventListener('mouseenter', () => cursor.classList.add('active'))
          el.addEventListener('mouseleave', () => cursor.classList.remove('active'))
        })
    }

    /* Navbar scroll + Hero parallax */
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

    /* Hero title animación char por char */
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

    /* Scroll animations (IntersectionObserver) */
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right')
      .forEach(el => obs.observe(el))

    /* Timeline cards animación al entrar en viewport */
    const tlObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.timeline-card-wrap').forEach(el => tlObs.observe(el))

    /* Smooth scroll */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault()
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
        if (href) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      })
    })

    /* Tech cards magnet effect */
    document.querySelectorAll<HTMLElement>('.tech-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect()
        const x = e.clientX - r.left - r.width / 2
        const y = e.clientY - r.top - r.height / 2
        card.style.transform = `translate(${x/25}px,${y/25}px) scale(1.25)`
      })
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translate(0,0) scale(1)'
      })
    })

    /* Mobile menu */
    const toggle = document.getElementById('menu-toggle')
    const close  = document.getElementById('menu-close')
    const menu   = document.getElementById('mobile-menu')
    toggle?.addEventListener('click', () => menu?.classList.add('open'))
    close?.addEventListener('click',  () => menu?.classList.remove('open'))
    document.querySelectorAll('.mobile-link').forEach(l => {
      l.addEventListener('click', () => menu?.classList.remove('open'))
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      obs.disconnect(); tlObs.disconnect()
      if (raf) cancelAnimationFrame(raf)
      document.body.style.cursor = ''
    }
  }, [])

  return (
    <div className="text-white min-h-screen overflow-x-hidden"
      style={{ background: 'linear-gradient(180deg,#0a0a0a 0%,#111118 50%,#0a0a0a 100%)' }}>

      <div id="cursor-trail" className="cursor-trail" />
      <div className="glow" style={{ position:'fixed', left:'33%', top:0, transform:'translateX(-50%)', zIndex:-1 }} />
      <div className="glow" style={{ position:'fixed', right:0, bottom:'33%', transform:'translateX(50%)', zIndex:-1 }} />

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
          <div className="hidden md:flex items-center gap-6">
            {[['#docente','Docente'],['#soporte','Soporte'],['#logros','Logros'],
              ['#stack','Skills'],['#proyectos','Proyectos'],['#contacto','Contacto']
            ].map(([href,label]) => (
              <a key={href} href={href} className="text-xs text-gray-400 hover:text-white transition-colors">{label}</a>
            ))}
          </div>
          <button id="menu-toggle" className="md:hidden p-2 text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div id="mobile-menu" className="mobile-menu fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden">
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {[['#docente','Docente'],['#soporte','Soporte'],['#logros','Logros'],
            ['#stack','Skills'],['#proyectos','Proyectos'],['#contacto','Contacto']
          ].map(([href,label]) => (
            <a key={href} href={href} className="mobile-link text-2xl text-gray-400 hover:text-white">{label}</a>
          ))}
          <button id="menu-close" className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── HERO ── */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <div id="hero-content" className="transition-transform duration-300">
            <div className="mb-6 inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Disponible para proyectos</span>
            </div>
            <h1 id="hero-title"
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ minHeight:'1.2em' }} />
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Integrando soluciones tecnológicas con innovación educativa.
            </p>
            <a href="#contacto" className="btn-primary px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition gap-3">
              Explorar
            </a>
            <div className="mt-12 flex flex-col items-center gap-4 text-gray-500 md:flex-row md:justify-center md:gap-8">
              {[['25+','Años experiencia'],['10K+','Alumnos impactados'],['900+','Docentes capacitados']].flatMap(([v,l], i, arr) => {
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

      {/* ── DOCENTE ── */}
      <section id="docente" className="py-16 md:py-32 relative bg-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-10 flex items-center gap-3">
            <i data-lucide="graduation-cap" className="text-blue-400 w-8 h-8" />
            Perfil Docente
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="animate-right flex justify-center md:justify-start">
              <img src="/bore.png" alt="Jorge Polanco Rodríguez"
                className="glass-card-animated w-full max-w-sm p-4 rounded-2xl object-cover" />
            </div>
            <div className="animate-left">
              <p className="text-sm md:text-base text-gray-400 mb-4">
                <strong>Jorge Polanco Rodríguez</strong> es un profesional en tecnología educativa
                con amplia experiencia en el Ministerio de Educación (MEDUCA). Actualmente trabaja
                en el departamento de informática y forma parte del proyecto{' '}
                <strong>Entre Pares</strong>, promoviendo la innovación pedagógica con herramientas digitales.
              </p>
              <div className="glass-card-animated p-6 md:p-8 rounded-2xl mt-4">
                <h3 className="text-lg md:text-xl font-semibold mb-4">Actividades</h3>
                <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                  {['Talleres tecnológicos','Innovación educativa','Entornos virtuales','Formación docente'].map(a => (
                    <li key={a} className="flex items-center gap-2"><span className="text-green-400">✔</span> {a}</li>
                  ))}
                </ul>
              </div>
              <div className="text-sm text-gray-500 p-4 glass rounded-xl mt-4">
                <h4 className="font-semibold mb-2 text-gray-300">Estudios</h4>
                <p>Maestría en Entornos Virtuales (en curso)</p>
                <p>Formación en tecnología educativa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOPORTE ── */}
      <section id="soporte" className="py-16 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-10 flex items-center gap-3">
            <i data-lucide="wrench" className="text-green-400 w-8 h-8" />
            Perfil Técnico
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="animate-left">
              <p className="text-sm md:text-base text-gray-400 mb-6">
                Soporte, mantenimiento, instalación de sistemas y optimización de equipos.
              </p>
              <div className="text-sm text-gray-500 p-4 glass rounded-xl">
                <h4 className="font-semibold mb-2 text-gray-300">Estudios</h4>
                <p>Formación técnica en informática</p>
                <p>Certificaciones en soporte y redes</p>
              </div>
            </div>
            <div className="glass-card-animated animate-right p-6 md:p-8 rounded-2xl">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Actividades</h3>
              <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                {['Reparación de equipos','Windows / Linux','Redes básicas','Optimización'].map(a => (
                  <li key={a} className="flex items-center gap-2"><span className="text-green-400">✔</span> {a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE DE LOGROS ── */}
      <section id="logros" className="py-16 md:py-32 relative overflow-hidden bg-white/5">
        <div
          className="absolute right-0 top-1/2 pointer-events-none"
          style={{ width:'min(400px,60vw)', height:'min(400px,60vw)', transform:'translateY(-50%)',
            background:'radial-gradient(circle,rgba(99,102,241,0.08) 0%,transparent 70%)', zIndex:0 }}
        />
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">

          {/* Encabezado */}
          <div className="text-center mb-12 md:mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
              <span style={{ color:'#facc15' }}>★</span>
              <span className="text-sm text-gray-300">Trayectoria profesional</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Logros &{' '}
              <span className="gradient-text">Experiencia</span>
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Más de 25 años integrando tecnología y educación, liderando proyectos que han
              impactado miles de docentes y estudiantes en Panamá y el mundo.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Línea central — solo desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-px timeline-line" />

            <div className="flex flex-col gap-6 md:gap-0">
              {timelineItems.map((item, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div key={item.id}
                    className="timeline-card-wrap"
                    style={{
                      opacity: 0,
                      transform: 'translateY(30px)',
                      transition: `all 0.7s cubic-bezier(0.4,0,0.2,1) ${index * 0.1}s`,
                    }}>
                    <div className={`relative flex flex-col md:flex-row ${isLeft ? '' : 'md:flex-row-reverse'} items-start md:mb-10`}>

                      {/* Card */}
                      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
                        <div
                          className="timeline-card p-4 md:p-6 rounded-xl md:rounded-2xl cursor-default"
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            backdropFilter: 'blur(10px)',
                            border: item.border,
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={e => {
                            const el = e.currentTarget as HTMLElement
                            el.style.boxShadow = `0 20px 40px -10px ${item.glow}`
                            el.style.background = 'rgba(255,255,255,0.06)'
                          }}
                          onMouseLeave={e => {
                            const el = e.currentTarget as HTMLElement
                            el.style.boxShadow = 'none'
                            el.style.background = 'rgba(255,255,255,0.03)'
                          }}
                        >
                          {/* Badge tipo */}
                          <span className="inline-block text-xs font-medium px-2 py-1 rounded-full mb-2 bg-white/5"
                            style={{ color: item.color }}>
                            {item.type}
                          </span>

                          {/* Período */}
                          <div className="text-xs md:text-sm font-semibold mb-1" style={{ color: item.color }}>
                            {item.period}
                          </div>

                          {/* Rol */}
                          <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-2 md:mb-3">
                            {item.role}
                          </h3>

                          {/* Descripción */}
                          <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-3 md:mb-4">
                            {item.description}
                          </p>

                          {/* Tags */}
                          <div className={`flex flex-wrap gap-1 md:gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                            {item.tags.map(tag => (
                              <span key={tag}
                                className="text-xs px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-gray-400">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Punto en la línea — solo desktop */}
                      <div className="hidden md:flex w-2/12 justify-center items-start pt-5 relative z-10">
                        <div
                          className="timeline-dot w-4 h-4 rounded-full border-2 bg-[#0a0a0a]"
                          style={{
                            borderColor: item.dot,
                            boxShadow: `0 0 12px ${item.glow}`,
                          }}
                        />
                      </div>

                      {/* Columna opuesta vacía */}
                      <div className="hidden md:block w-5/12" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Resumen de impacto */}
          <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 animate-on-scroll">
            {[
              { v:'25+',  l:'Años de experiencia',     c:'#818cf8' },
              { v:'10K+', l:'Alumnos impactados',      c:'#a78bfa' },
              { v:'900+', l:'Docentes capacitados',    c:'#4ade80' },
              { v:'9',    l:'Escuelas transformadas',  c:'#22d3ee' },
            ].map(s => (
              <div key={s.v} className="glass-card p-4 md:p-6 rounded-xl text-center">
                <div className="text-2xl md:text-4xl font-bold mb-1" style={{ color: s.c }}>{s.v}</div>
                <div className="text-xs md:text-sm text-gray-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section id="stack" className="py-16 md:py-32 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10">Tecnologías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto px-4">
          {[
            { icon:'code',      name:'HTML',        color:'text-orange-500' },
            { icon:'file-code', name:'CSS',         color:'text-blue-500'   },
            { icon:'zap',       name:'JavaScript',  color:'text-yellow-500' },
            { icon:'atom',      name:'Astro',       color:'text-purple-500' },
            { icon:'monitor',   name:'Frontend',    color:'text-cyan-500'   },
            { icon:'wifi',      name:'Redes',       color:'text-green-500'  },
          ].map(({ icon, name, color }) => (
            <div key={name} className="skill-card tech-card glass-card group p-6 rounded-2xl flex flex-col items-center gap-3">
              <i data-lucide={icon} className={`w-8 h-8 ${color}`} />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className="py-16 md:py-32 px-4 md:px-6 relative bg-white/5">
        <h2 className="text-2xl md:text-4xl text-center mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {[
            'from-blue-500/20 via-purple-500/20 to-pink-500/20',
            'from-green-500/20 via-teal-500/20 to-cyan-500/20',
            'from-orange-500/20 via-red-500/20 to-pink-500/20',
          ].map((g, i) => (
            <div key={i} className="glass-card-animated group p-6 rounded-xl cursor-pointer">
              <div className={`h-40 bg-gradient-to-br ${g} rounded-lg mb-4 group-hover:scale-105 transition-transform`} />
              <h4 className="font-bold">Proyecto {i+1}</h4>
              <p className="text-sm text-gray-400">Descripción breve del proyecto</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-16 md:py-32 text-center relative">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Contacto</h2>
          <p className="text-sm md:text-base text-gray-400 mb-10">¿Tienes un proyecto en mente? Hablemos.</p>
          <a href="https://wa.me/50765360544"
            className="btn-primary px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.149.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371.025-.52-.075-.149-.661-1.611-1.904-2.207-.372-.149-1.495-.149-1.921-.149-.421 0-.746.074-.992.146-.249.075-.448.249-.644.454l-1.612 1.195Z"/>
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
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.149.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371.025-.52-.075-.149-.661-1.611-1.904-2.207-.372-.149-1.495-.149-1.921-.149-.421 0-.746.074-.992.146-.249.075-.448.249-.644.454l-1.612 1.195Z"/>
        </svg>
      </a>

    </div>
  )
}