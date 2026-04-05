import Link from 'next/link'
import Image from 'next/image'
import RevealInit from '@/components/RevealInit'

export default function FureverHomePage() {
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
          <a href="#hero" className="block w-10 h-10">
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

      <div className="reveal max-w-5xl mx-auto px-8 pt-32 pb-24">

        {/* Header */}
        <div className="mb-16">
          <p className="flex items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-[#7742b8] mb-5 before:content-[''] before:w-8 before:h-px before:bg-[#7742b8] font-semibold">
            UI/UX · Web · Branding · 2024
          </p>
          <h1
            className="leading-none text-[#0a0a0a] mb-6"
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
            }}
          >
            Furever Home
          </h1>
          <p className="text-[1.05rem] font-light leading-relaxed text-[#444] max-w-2xl">
            An adoption website for a local animal shelter that connects potential pet adopters
            with their perfect furry companions — providing detailed profiles, adoption resources,
            and a seamless application process to help more animals find loving homes.
          </p>
        </div>

        {/* Meta info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e0e0e0] mb-20">
          {[
            { label: 'Role', value: 'UI/UX Designer' },
            { label: 'Platform', value: 'Web' },
            { label: 'Tools', value: 'Figma' },
            { label: 'Type', value: 'Adoption Website' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white px-6 py-5">
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#7742b8] mb-1 font-semibold">{label}</p>
              <p className="text-[0.9rem] font-medium text-[#0a0a0a]">{value}</p>
            </div>
          ))}
        </div>

        {/* Overview + Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2
              className="text-[#0a0a0a] mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: '2rem' }}
            >
              Overview
            </h2>
            <p className="text-[0.95rem] font-light leading-relaxed text-[#555]">
              Furever Home was designed with warmth and approachability at its core. The platform
              helps users browse adoptable pets, learn about the adoption and fostering process,
              and connect with a local shelter — all in a visually friendly, easy-to-navigate
              experience that reflects the love and care behind animal rescue.
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
              I handled the full UI/UX design — brand identity, visual design system, and
              all high-fidelity screens. This included the landing page, authentication flows,
              pet browsing, adoption steps, community testimonials, FAQ, and the About page.
              The design balances playful personality with clear usability.
            </p>
          </div>
        </div>

        {/* f1 — Brand + Hero (laptop mockup) */}
        <div className="mb-8">
          <div className="overflow-hidden rounded-2xl border border-[#e0e0e0]">
            <img
              src="/images/projects/furever-home/f1.png"
              alt="Furever Home — Brand and Hero Screen"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* f3 — Full homepage */}
        <div className="mb-8">
          <div className="overflow-hidden rounded-2xl border border-[#e0e0e0]">
            <img
              src="/images/projects/furever-home/f2.png"
              alt="Furever Home — Homepage"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* f2 — Auth screens */}
        <div className="mb-8">
          <div className="overflow-hidden rounded-2xl border border-[#e0e0e0]">
            <img
              src="/images/projects/furever-home/f3.png"
              alt="Furever Home — Sign Up and Login Screens"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* f4 — Pet listings + Community + FAQ */}
        <div className="mb-8">
          <div className="overflow-hidden rounded-2xl border border-[#e0e0e0]">
            <img
              src="/images/projects/furever-home/f4.png"
              alt="Furever Home — Adoptable Pets, Community, and FAQ"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* f5 — About page */}
        <div className="mb-20">
          <div className="overflow-hidden rounded-2xl border border-[#e0e0e0]">
            <img
              src="/images/projects/furever-home/f5.png"
              alt="Furever Home — About Page"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-20">
          {['UI/UX', 'Figma', 'Web', 'Branding', 'Design System', 'Adoption', 'Non-profit'].map(tag => (
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