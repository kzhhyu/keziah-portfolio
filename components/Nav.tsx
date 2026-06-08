"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Tools", href: "/#tools" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-8 md:px-16 py-4 sm:py-6 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]"
            : "border-b border-transparent"
        }`}
      >
        <a href="#hero" className="block w-8 h-8 sm:w-10 sm:h-10">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </a>
        
        {/* Desktop Menu - hidden on mobile */}
        <ul className="hidden md:flex gap-6 lg:gap-10 list-none">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="nav-link text-[0.75rem] lg:text-[0.8rem] tracking-[0.12em] uppercase text-[#666] no-underline hover:text-[#0a0a0a] font-semibold whitespace-nowrap"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#666] hover:text-[#7742b8] transition-colors z-50"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-40 bg-white transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={handleLinkClick}
              className="text-[1.2rem] tracking-[0.12em] uppercase text-[#666] hover:text-[#7742b8] font-semibold transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}