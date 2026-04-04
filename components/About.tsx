const stats = [
  { num: "3+", label: "Years of experience" },
  { num: "20+", label: "Projects completed" },
  { num: "UI", label: "Interface design" },
  { num: "BX", label: "Brand experience" },
];

export default function About() {
  return (
    <section id="about" className="px-16 py-28 border-t border-[#e0e0e0] bg-[#f7f6f3]">
      <p className="reveal flex items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-[#9b5de5] mb-6 before:content-[''] before:w-8 before:h-px before:bg-[#9b5de5] font-semibold">
        Who I am
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left — text */}
        <div className="reveal">
          <h2
            className="leading-none mb-10 text-[#0a0a0a]"
            style={{
              fontFamily: "var(--font-title)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
            }}
          >
            Hi !
            <br />
            I'm <strong className="text-[#7742b8] font-medium">Keziah</strong>
          </h2>

          <p className="text-[1.05rem] leading-[1.85] text-[#444] mb-6">
            An undergraduate Information Technology student with a creative edge, focusing on UI/UX design,
            graphic design, and layout artistry. I enjoy turning ideas into visually engaging and user-friendly
            designs that not only look good but feel intuitive to use.
          </p>
        </div>

        {/* Right — stats */}
        <div className="reveal grid grid-cols-2 gap-4">
          {stats.map(({ num, label }) => (
            <div
              key={label}
              className="stat-box relative border border-[#e0e0e0] bg-white p-8 overflow-hidden transition-colors duration-300 hover:border-[#9b5de5]"
            >
              <div
                className="leading-none text-[#9b5de5] mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3.5rem",
                }}
              >
                {num}
              </div>
              <div className="text-[0.75rem] tracking-[0.1em] uppercase text-[#666]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
