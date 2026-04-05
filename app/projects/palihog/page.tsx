import Link from 'next/link'
import Image from 'next/image'
import RevealInit from '@/components/RevealInit'

export default function PalihogPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Back nav */}
      <div className="reveal fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]">
        <div className="max-w-5xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-[0.8rem] tracking-[0.1em] uppercase text-[#666] no-underline hover:text-[#7742b8] transition-colors duration-200 font-semibold"
          >
            ← Back to projects
          </Link>
            <a href="#" className="block w-10 h-10">
                <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
                />
           </a>
        </div>
      </div>

      <div className=" reveal max-w-5xl mx-auto px-8 pt-32 pb-24">

        {/* Header */}
        <div className="mb-16">
          <p className="flex items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-[#7742b8] mb-5 before:content-[''] before:w-8 before:h-px before:bg-[#7742b8] font-semibold">
            UI/UX · Mobile · 2025
          </p>
          <h1
            className="leading-none text-[#0a0a0a] mb-6"
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
            }}
          >
            PALIHOG
          </h1>
          <p className="text-[1.05rem] font-light leading-relaxed text-[#444] max-w-2xl">
            A student-centered service and marketplace app that allows users to request or offer
            help through features like <em>pabili</em>, <em>patulong</em>, <em>padala</em>, and <em>pakuha</em> —
            promoting convenience, trust, and community within the campus.
          </p>
        </div>

        {/* Meta info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e0e0e0] mb-20 font-semibold">
          {[
            { label: 'Role', value: 'UI/UX Designer' },
            { label: 'Platform', value: 'Mobile' },
            { label: 'Tools', value: 'Figma' },
            { label: 'Type', value: 'Marketplace App' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white px-6 py-5">
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#7742b8] mb-1">{label}</p>
              <p className="text-[0.9rem] font-medium text-[#0a0a0a]">{value}</p>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2
              className="text-[#0a0a0a] mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: '2rem' }}
            >
              Overview
            </h2>
            <p className="text-[0.95rem] font-light leading-relaxed text-[#555]">
              PALIHOG was designed to address a common pain point among students — the need to
              request small errands or services from fellow students within campus. The app creates
              a trusted micro-economy where students can post tasks and others can earn by
              completing them.
            </p>
          </div>
          <div>
            <h2
              className="text-[#0a0a0a] mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: '2rem' }}
            >
              My Role
            </h2>
            <p className="text-[0.95rem] font-light leading-relaxed text-[#555]">
              I was responsible for the full UI/UX design process — from initial research and
              wireframing to high-fidelity screens and prototyping. I designed the complete design
              system, user flows, and all screens across onboarding, home, requests, messaging,
              and profile.
            </p>
          </div>
        </div>

        {/* Image 1 — Hero/Branding shot */}
        <div className="mb-6">
          <div className="overflow-hidden rounded-2xl border border-[#e0e0e0]">
            <img
              src="/images/projects/palihog/p1.png"
              alt="PALIHOG App — Brand Overview"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Image 2 — Onboarding/Auth screens */}
        <div className="mb-6">
          <div className="overflow-hidden rounded-2xl border border-[#e0e0e0]">
            <img
              src="/images/projects/palihog/p2.png"
              alt="PALIHOG App — Onboarding and Auth Screens"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Image 3 — Core app screens */}
        <div className="mb-6">
          <div className="overflow-hidden rounded-2xl border border-[#e0e0e0]">
            <img
              src="/images/projects/palihog/p3.png"
              alt="PALIHOG App — Home, Requests and Forms"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Image 4 — Messaging and Profile */}
        <div className="mb-20">
          <div className="overflow-hidden rounded-2xl border border-[#e0e0e0]">
            <img
              src="/images/projects/palihog/p4.png"
              alt="PALIHOG App — Messaging and Profile"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-20">
          {['UI/UX', 'Figma', 'Mobile', 'Application', 'Marketplace', 'Design System'].map(tag => (
            <span
              key={tag}
              className="text-[0.65rem] font-medium tracking-[0.12em] uppercase px-3 py-1.5 rounded-full border border-[#ede9fe] bg-[#f5f3ff] text-[#7742b8]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Navigation footer */}
        <div className="border-t border-[#e0e0e0] pt-10 flex justify-between items-center">
          <Link
            href="/#projects"
            className="text-[0.8rem] tracking-[0.1em] uppercase text-[#666] no-underline hover:text-[#7742b8] transition-colors duration-200"
          >
            ← All projects
          </Link>
          <Link
            href="/#contact"
            className="text-[0.8rem] tracking-[0.1em] uppercase px-6 py-3 bg-[#7742b8] text-white no-underline hover:bg-[#5c23ac] transition-colors duration-200"
          >
            Work with me →
          </Link>
        </div>

      </div>
      <RevealInit />
    </main>
  )
}