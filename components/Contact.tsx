const links = [
  { label: "Send an email", href: "mailto:keziahlonoy27@gmail.com", primary: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/keziah-lonoy", primary: false },
  { label: "Jobstreet", href: "https://ph.jobstreet.com/profiles/keziah-lonoy-vcpKzq1Xz1", primary: false },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-16 py-28 border-t border-[#e0e0e0] bg-[#f7f6f3] text-center"
    >
      <p className="reveal flex items-center justify-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-[#7742b8] mb-6 before:content-[''] before:w-8 before:h-px before:bg-[#7742b8] after:content-[''] after:w-8 after:h-px after:bg-[#7742b8] font-semibold">
        Get in touch
      </p>

      <h2
        className="reveal leading-none mb-8 text-[#0a0a0a]"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 9vw, 8rem)",
        }}
      >
        LET&apos;S 
        <br />
        <span className="text-[#7742b8]">WORK.</span>
      </h2>

      <p className="reveal text-[1rem] text-[#2e2e2e] mb-12">
        Available for freelance projects and collaborations.
      </p>

      <div className="reveal flex justify-center flex-wrap gap-4">
        {links.map(({ label, href, primary }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`text-[0.75rem] tracking-[0.15em] uppercase px-10 py-4 no-underline transition-all duration-300 ${
              primary
                ? "bg-[#7742b8] text-white hover:bg-[#6d3fad] font-semibold"
                : "border border-[#cccccc] text-[#666] hover:border-[#7742b8] hover:text-[#7742b8] font-semibold"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
