'use client';

import Image from 'next/image';

export default function LandingPage() {
  const skills = [
    'Desarrollo Frontend',
    'Arquitectura y diseño de aplicaciones',
    'Liderazgo técnico (Tech Lead)',
    'Gestión de equipos',
  ];

  const teacherActivities = [
    'Talleres tecnológicos',
    'Innovación educativa',
    'Entornos virtuales',
    'Formación docente',
    'Proyecto Entre Pares',
  ];

  const studies = [
    { title: 'Maestría en Entornos Virtuales', subtitle: '(en curso)' },
    { title: 'Tecnología Educativa', subtitle: '— Docentes Digitales — MEDUCA' },
    { title: 'Gamificación para Docentes', subtitle: '' },
  ];

  const experiences = [
    {
      title: 'Soporte Técnico',
      date: '2025 — Presente',
      company: 'MEDUCA',
      description: 'Me desempeño en soporte técnico en el Ministerio de Educación (MEDUCA), brindando asistencia y mantenimiento tecnológico para garantizar el funcionamiento óptimo de los sistemas educativos.',
      tags: ['Soporte Técnico', 'Infraestructura TIC'],
    },
    {
      title: 'Proyecto Entre Pares',
      date: '2024 — Presente',
      company: 'Innovación',
      description: 'Participo en el Proyecto Entre Pares, iniciativa de colaboración docente que promueve el aprendizaje horizontal y el intercambio de buenas prácticas pedagógicas entre educadores.',
      tags: ['Colaboración Docente', 'Innovación'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white px-5 py-10 md:px-8">
      <div className="max-w-[800px] mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center gap-5 mb-8">
            <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px]">
              <Image
                src="/bore.png"
                alt="Logo"
                fill
                className="rounded-full object-cover shadow-xl"
              />
            </div>
            <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
              <Image
                src="/icoJp.png"
                alt="Icono"
                fill
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-[#e94560]">Boreman28</h1>
          <p className="text-xl text-gray-400 mb-5">Tecnología y Educación en Acción</p>
          <p className="text-gray-300 max-w-xl mx-auto">Integrando soluciones tecnológicas con innovación educativa.</p>
          
          <div className="mt-6">
            <span className="inline-block px-6 py-3 bg-[#e94560] rounded-full font-semibold">
              Disponible para proyectos
            </span>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-5 my-10 text-center">
          <div className="bg-white/10 rounded-2xl p-5">
            <div className="text-3xl font-bold text-[#e94560]">20+</div>
            <div className="text-gray-400 text-sm">Años experiencia</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-5">
            <div className="text-3xl font-bold text-[#e94560]">10K+</div>
            <div className="text-gray-400 text-sm">Alumnos impactados</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-5">
            <div className="text-3xl font-bold text-[#e94560]">900+</div>
            <div className="text-gray-400 text-sm">Docentes capacitados</div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-3xl mb-5 text-[#e94560] border-b-2 border-[#e94560] pb-3">Sobre mí</h2>
          <h3 className="text-xl font-semibold mb-4">Jorge Polanco Rodríguez</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Profesional con más de 20 años de trayectoria en el área tecnológica, liderando proyectos y optimizando procesos a través de la innovación.
          </p>
          <p className="font-semibold text-gray-200 mb-4">Enfoque profesional:</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#e94560]/20 rounded-full border border-[#e94560] text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl mb-5 text-[#e94560] border-b-2 border-[#e94560] pb-3">Docente</h2>
          <p className="font-semibold text-gray-200 mb-4">Actividades:</p>
          <ul className="space-y-3">
            {teacherActivities.map((activity, index) => (
              <li key={index} className="text-gray-300 pl-2 before:content-['✔'] before:text-[#e94560] before:mr-2">
                {activity}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl mb-5 text-[#e94560] border-b-2 border-[#e94560] pb-3">Estudios</h2>
          {studies.map((study, index) => (
            <div key={index} className="bg-white/5 p-4 rounded-xl mb-3">
              <span className="text-[#e94560] font-semibold">{study.title}</span>
              <span className="text-gray-400 text-sm"> {study.subtitle}</span>
            </div>
          ))}
        </section>

        <section className="mb-10">
          <h2 className="text-3xl mb-5 text-[#e94560] border-b-2 border-[#e94560] pb-3">Trayectoria profesional</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/5 p-5 rounded-2xl mb-5">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <span className="text-[#e94560] text-sm">{exp.date}</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">{exp.company}</p>
              <p className="text-gray-300 leading-relaxed mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-10">
          <h2 className="text-3xl mb-5 text-[#e94560] border-b-2 border-[#e94560] pb-3">Logros & Experiencia</h2>
          <div className="bg-gradient-to-br from-[#e94560] to-[#ff6b6b] p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Agosto 2020 — Capacitación Docente</h3>
            <p className="text-white/90 leading-relaxed mb-4">
              Desempeñé un papel crucial adaptando métodos de enseñanza al entorno virtual, capacitando a más de 900 docentes en Microsoft Teams y Office 365, desarrollando talleres interactivos y ofreciendo soporte continuo durante la pandemia.
            </p>
            <p className="font-semibold text-white">
              Más de 20 años integrando tecnología y educación, liderando proyectos que han impactado miles de docentes y estudiantes en Panamá y el mundo.
            </p>
          </div>
        </section>

        <a
          href="#"
          className="block text-center mt-10 py-4 px-10 bg-[#e94560] text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(233,69,96,0.4)]"
        >
          Contacto
        </a>
      </div>
    </div>
  );
}