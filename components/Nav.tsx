"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-6 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]"
          : "border-b border-transparent"
      }`}
    >
      <a href="#hero" className="block w-10 h-10">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </a>

      <ul className="flex gap-10 list-none">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="nav-link text-[0.8rem] tracking-[0.12em] uppercase text-[#666] no-underline hover:text-[#0a0a0a] font-semibold"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
