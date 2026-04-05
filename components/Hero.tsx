export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-16 pb-20 pt-24 overflow-hidden bg-white"
    >
      {/* Subtle purple glow top-right */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 85% 10%, rgba(155,93,229,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Main layout: name left, image right */}
      <div className="relative z-10 flex items-end justify-between gap-10">

        {/* Left — text content */}
        <div className="flex flex-col">
          <p className="anim-fade-up-1 text-[0.75rem] tracking-[0.2em] uppercase text-[#7742b8] font-semibold mb-4">
            Portfolio — 2026
          </p>

          <h1
            className="anim-fade-up-2 leading-[0.9] tracking-[0.02em] text-[#0a0a0a]"
            style={{
              fontFamily: "var(--font-title)",
              fontSize: "clamp(3.5rem, 13vw, 7rem)",
            }}
          >
            Hi !
            <br />
            I'm <span className="text-[#7742b8]">Keziah</span>
          </h1>

          <p className="anim-fade-up-3 mt-8 text-[1rem] font-light text-[#292929] max-w-screen-sm leading-relaxed">
            An undergraduate Information Technology student with a creative edge, focusing on UI/UX design,
            graphic design, and layout artistry. I enjoy turning ideas into visually engaging and user-friendly
            designs that not only look good but feel intuitive to use.
          </p>

          <div className="anim-fade-up-4 flex flex-wrap gap-3 mt-8 font-semibold">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[0.75rem] tracking-[0.1em] uppercase px-5 py-2.5 bg-[#7742b8] text-white no-underline hover:bg-[#5c23ac] transition-all duration-200"
            >
              Download Resume
            </a>
            <a
              href="/about"
              className="text-[0.75rem] tracking-[0.1em] uppercase px-6 py-3 border border-[#cccccc] text-[#666] no-underline hover:border-[#7742b8] hover:text-[#7742b8] transition-all duration-200"
            >
              About me
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="anim-fade-up-2 flex-shrink-0 self-end">
          <div className="relative overflow-hidden">
            <img
              src="/images/hero-photo.png"
              alt="Keziah Lonoy"
              className="max-h-[55vh] w-auto object-contain"
            />
            {/* Fallback placeholder shown when no image */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <span
                className="text-[#e0e0e0]"
                style={{ fontFamily: "var(--font-display)", fontSize: "5rem" }}
              >
                KL
              </span>
            </div>
            {/* Purple accent corner */}
            <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#7742b8]" />
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="anim-fade-up-4 absolute right-16 bottom-20 flex flex-col items-center gap-2 text-[0.7rem] tracking-[0.15em] uppercase text-[#666] z-10">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}