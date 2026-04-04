"use client";

const tools = [
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg',
  },
  {
    name: 'Adobe InDesign',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobeindesign.svg',
  },
  {
    name: 'Adobe Illustrator',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobeillustrator.svg',
  },
  {
    name: 'Adobe Photoshop',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobephotoshop.svg',
  },
  {
    name: 'Adobe Lightroom',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobelightroom.svg',
  },
  {
    name: 'Canva',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/canva.svg',
  },
  {
    name: 'Wondershare Filmora',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wondershare.svg',
  },
  {
    name: 'CapCut',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/capcut.svg',
  },
  {
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visualstudiocode.svg',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg',
  },
]

export default function Tools() {
  return (
    <section id="tools" className="px-16 py-28 border-t border-[#e0e0e0] bg-[#f7f6f3]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <p className="reveal flex items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-[#7742b8] mb-6 before:content-[''] before:w-8 before:h-px before:bg-[#7742b8] font-semibold">
          My toolkit
        </p>
        <h2
          className="reveal leading-none text-[#0a0a0a] mb-4"
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          }}
        >
          Tools I <span className="text-[#7742b8]">use</span>
        </h2>
        <p className="reveal text-[0.95rem] font-light leading-relaxed text-[#666] max-w-lg mb-14">
          Software and applications I rely on to design, edit, and build.
        </p>

        {/* Grid */}
        <div className="reveal grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-3 p-5 bg-white border border-[#e0e0e0] rounded-2xl transition-all duration-300 hover:border-[#7742b8] hover:shadow-[0_8px_30px_rgba(119,66,184,0.1)] hover:-translate-y-1"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                  style={{ filter: 'invert(0%) brightness(0.3)' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </div>
              <span className="text-[0.7rem] font-medium tracking-wide text-center text-[#444] group-hover:text-[#7742b8] transition-colors duration-300 leading-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}