# TAREA — MEJORAR ANIMACIONES Y LAYOUT DEL TIMELINE
Solo modifica la sección #logros del page.tsx. No toques nada más.

═══════════════════════════════════════════════
PASO 1 — AGREGAR ESTILOS AL globals.css
═══════════════════════════════════════════════
Agrega estos estilos AL FINAL del globals.css existente:

/* ── TIMELINE MEJORADO ── */

/* Cards que entran desde afuera hacia el centro */
.tl-enter-left {
  opacity: 0;
  transform: translateX(-120px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.tl-enter-right {
  opacity: 0;
  transform: translateX(120px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.tl-enter-left.tl-visible,
.tl-enter-right.tl-visible {
  opacity: 1;
  transform: translateX(0) scale(1);
}

/* Punto de la línea */
.tl-dot {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.tl-dot:hover {
  transform: scale(1.6);
}

/* Línea central que crece hacia abajo */
.tl-line-inner {
  height: 0%;
  transition: height 1.5s ease;
}
.tl-line-inner.tl-visible {
  height: 100%;
}

/* Card hover */
.tl-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}
.tl-card:hover {
  transform: translateY(-5px) scale(1.01);
}

/* Mobile: entra desde abajo */
@media (max-width: 767px) {
  .tl-enter-left,
  .tl-enter-right {
    transform: translateY(50px) scale(0.97);
  }
  .tl-enter-left.tl-visible,
  .tl-enter-right.tl-visible {
    transform: translateY(0) scale(1);
  }
}

═══════════════════════════════════════════════
PASO 2 — REEMPLAZAR TODA LA SECCIÓN #logros EN page.tsx
═══════════════════════════════════════════════
Encuentra la sección id="logros" y reemplázala COMPLETA con esto:

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

═══════════════════════════════════════════════
PASO 3 — REEMPLAZAR EL OBSERVER DEL TIMELINE EN useEffect
═══════════════════════════════════════════════
Dentro del useEffect, encuentra el observer del timeline
(el que busca .timeline-card-wrap) y reemplázalo con esto:

    /* ── TIMELINE: entrada desde afuera hacia el centro ── */
    const tlObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('tl-visible')
          tlObs.unobserve(e.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.tl-item').forEach(el => tlObs.observe(el))

    /* ── TIMELINE: línea crece al entrar en vista ── */
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

En el cleanup (return () => { ... }) agrega:
    tlObs.disconnect()
    lineObs.disconnect()

═══════════════════════════════════════════════
PASO 4 — COMPORTAMIENTO ESPERADO
═══════════════════════════════════════════════

EFECTO DE ENTRADA:
  - Items pares (0,2,4...): entran desde la IZQUIERDA hacia el centro
  - Items impares (1,3,5...): entran desde la DERECHA hacia el centro
  - Cada item tiene un delay escalonado de 80ms entre sí
  - La línea central crece de arriba hacia abajo al llegar la sección
  - En mobile: todos entran desde abajo (translateY)

LAYOUT:
  - Cards ocupan 46% del ancho, pegadas al centro (no al borde)
  - El punto de la línea ocupa 8% en el centro, pegado a la card
  - Distancia card↔punto: 20px (md:pr-5 / md:pl-5)
  - Borde lateral de color en el lado que mira al centro:
    · Card izquierda: border-right de color
    · Card derecha:   border-left de color
  - El punto tiene doble glow (inner + outer) del color del item

HOVER:
  - Card sube 5px + glow de color del item
  - Punto de la línea crece scale(1.6)

═══════════════════════════════════════════════
PASO 5 — VERIFICAR Y SUBIR
═══════════════════════════════════════════════
  npm run dev

  Prueba haciendo scroll hasta la sección Logros:
    □ La línea crece hacia abajo al entrar la sección
    □ Cards pares entran desde la izquierda
    □ Cards impares entran desde la derecha
    □ Los puntos brillan con glow de su color
    □ Las cards están pegadas al centro, no al borde
    □ En mobile: todo entra desde abajo, sin scroll horizontal

  git add -A
  git commit -m "feat: timeline con entrada desde afuera al centro y layout compacto"
  git push origin main

═══════════════════════════════════════════════
RESTRICCIONES
═══════════════════════════════════════════════
  ✗ Solo modifica la sección #logros y el useEffect del timeline
  ✗ No toques Hero, Navbar, Perfil, Stack, Proyectos ni Contacto
  ✗ No instales framer-motion — todo en CSS transitions
  ✗ No cambies globals.css salvo para AGREGAR los nuevos estilos al final