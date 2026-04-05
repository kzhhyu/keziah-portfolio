import Link from 'next/link'
import Image from 'next/image'
import RevealInit from '@/components/RevealInit'

export default function ApparelLogosPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]">
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
        <div className="reveal mb-16">
          <p className="flex items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-[#7742b8] mb-5 before:content-[''] before:w-8 before:h-px before:bg-[#7742b8] font-semibold">
            Graphic Design · Branding · Apparel
          </p>
          <h1
            className="leading-none text-[#0a0a0a] mb-6"
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            }}
          >
            Apparel &<br />Logo Designs
          </h1>
          <p className="text-[1.05rem] font-light leading-relaxed text-[#444] max-w-2xl">
            A collection of logo and apparel designs created for various clients — blending
            visual identity, brand personality, and wearable aesthetics into cohesive, 
            purposeful designs.
          </p>
        </div>

        {/* Meta info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e0e0e0] mb-20">
          {[
            { label: 'Role', value: 'Graphic Designer' },
            { label: 'Deliverables', value: 'Logos & Apparel' },
            { label: 'Tools', value: 'Illustrator · Photoshop' },
            { label: 'Clients', value: 'Various' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white px-6 py-5">
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#7742b8] mb-1 font-semibold">{label}</p>
              <p className="text-[0.9rem] font-medium text-[#0a0a0a]">{value}</p>
            </div>
          ))}
        </div>

        {/* Overview + Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2
              className="text-[#0a0a0a] mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: '2rem' }}
            >
              Overview
            </h2>
            <p className="text-[0.95rem] font-light leading-relaxed text-[#555]">
              These designs span different industries and purposes — from a vibrant food truck
              logo for a local taco business, to professional uniform designs for government
              and organizational clients. Each piece required a deep understanding of the
              client's brand, audience, and context.
            </p>
          </div>
          <div>
            <h2
              className="text-[#0a0a0a] mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: '2rem' }}
            >
              Approach
            </h2>
            <p className="text-[0.95rem] font-light leading-relaxed text-[#555]">
              Every design starts with understanding the brand's personality and purpose. For
              apparel, I balance aesthetics with practicality — ensuring the design works
              well on fabric, is readable at distance, and carries the right identity.
              For logos, I focus on distinctiveness, scalability, and meaning.
            </p>
          </div>
        </div>

        {/* Divider label — Logos */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-[#e0e0e0]" />
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#7742b8] font-semibold">Logo Design</span>
          <div className="flex-1 h-px bg-[#e0e0e0]" />
        </div>

        {/* l1 — Fonzo's Taco Logo */}
        <div className="mb-16">
          <div className="overflow-hidden rounded-2xl border border-[#e0e0e0]">
            <img
              src="/images/projects/apparel-logos/l1.png"
              alt="Fonzo's Taco — Logo Design"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-4">
            <p className="text-[0.9rem] font-medium text-[#0a0a0a] mb-1">Fonzo's Taco — Food Truck Logo</p>
            <p className="text-[0.8rem] font-light text-[#666] leading-relaxed">
              A bold, illustrative logo for a local taco food truck — featuring a vibrant cartoon
              food truck character with the brand name integrated into the design. Built to be
              eye-catching, fun, and instantly recognizable on signage and packaging.
            </p>
          </div>
        </div>

        {/* Divider label — Apparel */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-[#e0e0e0]" />
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#7742b8] font-semibold">Apparel Design</span>
          <div className="flex-1 h-px bg-[#e0e0e0]" />
        </div>

        {/* s1 — NSED 2026 Shirt */}
        <div className="mb-10">
          <div className="overflow-hidden rounded-2xl border border-[#e0e0e0]">
            <img
              src="/images/projects/apparel-logos/s1.png"
              alt="NSED 2026 — Chinese Collar Shirt Design"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-4">
            <p className="text-[0.9rem] font-medium text-[#0a0a0a] mb-1">NSED 2026 — Chinese-Collar Shirt</p>
            <p className="text-[0.8rem] font-light text-[#666] leading-relaxed">
              Uniform design for the Nationwide Simultaneous Earthquake Drill 2026 — a dynamic
              navy and orange colorway with a bold diagonal layout. Designed for Drill Evaluators
              with front branding and back role identification.
            </p>
          </div>
        </div>

        {/* s2 — Intern Polo Shirt */}
        <div className="mb-20">
          <div className="overflow-hidden rounded-2xl border border-[#e0e0e0]">
            <img
              src="/images/projects/apparel-logos/s2.png"
              alt="Intern — Polo Shirt Design"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-4">
            <p className="text-[0.9rem] font-medium text-[#0a0a0a] mb-1">OCD-FSUU Intern — Polo Shirt</p>
            <p className="text-[0.8rem] font-light text-[#666] leading-relaxed">
              Polo shirt design for OCD-FSUU interns — featuring a clean white and purple diagonal
              split with navy accents. The front carries organizational logos while the back
              displays the agency name and role for a professional, polished look.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-20">
          {['Logo Design', 'Apparel', 'Graphic Design', 'Illustrator', 'Photoshop', 'Branding', 'Uniform'].map(tag => (
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