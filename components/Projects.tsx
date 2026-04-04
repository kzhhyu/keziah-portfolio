'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    name: 'PALIHOG',
    desc: 'Designed end-to-end UI/UX for a campus-based mobile marketplace app.',
    tags: ['UI/UX', 'Figma', 'Mobile', 'Application','Marketplace'],
    thumbnail: '/thumbnails/project-01.jpg',
    gradient: 'linear-gradient(135deg, #ede9fe, #7742b8)',
    href: '/projects/palihog',
  },
  {
    name: 'DIOSys',
    desc: 'Designed end-to-end management system UI/UX for the Diosese of Butuan — a complex, multi-user platform for church administration and communication.',
    tags: ['UI/UX', 'Figma', 'Web','Management System'],
    thumbnail: '/thumbnails/project-02.jpg',
    gradient: 'linear-gradient(135deg, #f0f4ff, #6d3fad)',
    href: '/projects/diosys',
  },
  {
    name: 'Furever Home',
    desc: 'Designed a website for an animal shelter project — focused on warmth, approachability, and showcasing the animals up for adoption.',
    tags: ['UI/UX', 'Figma', 'Web'],
    thumbnail: '/thumbnails/project-03.jpg',
    gradient: 'linear-gradient(135deg, #faf0ff, #c084fc)',
    href: '/projects/furever-home',
  },
  {
    name: 'Apparel and Logo Designs',
    desc: 'Created apparel and logo designs for various clients, including a local coffee shop and a university organization — blending modern aesthetics with brand identity.',
    tags: ['Logo', 'Shirts', 'Graphic Design', 'Illustrator', 'Photoshop'],
    thumbnail: '/thumbnails/project-04.jpg',
    gradient: 'linear-gradient(135deg, #ede9fe, #7c3aed)',
    href: '/projects/apparel-logos',
  },
]

export default function Projects() {
  const headRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    if (headRef.current) observer.observe(headRef.current)
    cardRefs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 px-16 border-t border-[#e0e0e0] bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div ref={headRef} className="reveal mb-14">
          <p className="flex items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-[#7742b8] mb-4 before:content-[''] before:w-8 before:h-px before:bg-[#7742b8] font-semibold">
            Selected work
          </p>
          <h2
            className="leading-none text-[#0a0a0a] mb-4"
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            }}
          >
            Projects
          </h2>
          <p className="text-[0.95rem] font-light leading-relaxed text-[#666] max-w-lg">
            A selection of work that reflects how I think, what I care about, and the problems I love solving.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={project.name}
              ref={el => { cardRefs.current[i] = el }}
              href={project.href}
              className="reveal block rounded-2xl border border-[#e0e0e0] overflow-hidden no-underline transition-all duration-300 bg-white group"
              style={{ transitionDelay: `${i * 0.05}s` }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#c4b5fd'
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(155,93,229,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#e0e0e0'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Thumbnail */}
              <div
                className="h-85 flex items-center justify-center relative overflow-hidden"
                style={{ background: project.gradient }}
              >
                <div className="h-85 relative overflow-hidden"
                style={{ background: project.gradient }}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[0.6rem] font-medium tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border border-[#ede9fe] bg-[#f5f3ff] text-[#7742b8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="leading-snug mb-2 text-[#0a0a0a] transition-colors duration-300 group-hover:text-[#7742b8]"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {project.name}
                </h3>

                <p className="text-[0.85rem] font-light leading-relaxed text-[#666]">
                  {project.desc}
                </p>

                <span className="inline-flex items-center gap-1.5 mt-5 text-[0.8rem] font-medium text-[#7742b8] transition-all duration-200 group-hover:gap-2.5">
                  View project →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}