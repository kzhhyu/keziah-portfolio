import Link from 'next/link'
import Image from "next/image";
import RevealInit from '@/components/RevealInit'

const skills = [
  { category: 'Design', items: ['UI/UX Design', 'Visual Design', 'Brand Identity', 'Design Systems', 'Wireframing & Prototyping'] },
  { category: 'Tools', items: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Adobe Lightroom', 'Canva'] },
  { category: 'Technical', items: ['Microsoft Excel', 'Microsoft Access', 'Records Management', 'VS Code', 'GitHub'] },
  { category: 'Soft Skills', items: ['Attention to Detail', 'Collaboration', 'Communication', 'Time Management', 'Problem Solving'] },
]

const certifications = [
  {
    title: 'Microsoft Office Specialist: Excel Associate',
    issuer: 'Microsoft',
    period: 'Nov 2025 – Nov 2030',
    code: 'MOS',
  },
  {
    title: 'Microsoft Office Specialist: Access Expert',
    issuer: 'Microsoft',
    period: 'Nov 2025 – Nov 2030',
    code: 'MOS',
  },
  {
    title: 'Certified Information Security and Data Privacy Practitioner',
    issuer: 'CISDP',
    period: '2024',
    code: 'CISDP',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]">
        <div className="max-w-5xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[0.8rem] tracking-[0.1em] uppercase text-[#666] no-underline hover:text-[#7742b8] transition-colors duration-200 font-semibold"
          >
            ← Back to home
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

      <div className="max-w-5xl mx-auto px-8 pt-32 pb-24">

        {/* Hero — Photo + Intro */}
        <div className="reveal grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-start mb-24">
          <div>
            <p className="flex items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-[#7742b8] mb-5 before:content-[''] before:w-8 before:h-px before:bg-[#7742b8] font-semibold">
              About me
            </p>
            <h1
              className="leading-none text-[#0a0a0a] mb-5"
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: 'clamp(3rem, 8vw, 4rem)',
              }}
            >
              Keziah Rane Mari <span className="text-[#7742b8]">Lonoy</span>
            </h1>
            <p className="text-[1rem] font-light leading-relaxed text-[#444] mb-6">
              I&apos;m a 4th-year Information Technology student at Father Saturnino Urios University
              with a passion for design that&apos;s as intentional as it is expressive. I thrive in
              collaborative environments — the kind where good ideas are built together, often
              over a cup of coffee.
            </p>
            <p className="text-[1rem] font-light leading-relaxed text-[#444]">
              Detail-oriented by nature, I care deeply about the craft behind every layout, design,
              and interaction. Whether I&apos;m designing a system interface or a shirt for a client,
              I bring the same level of care and curiosity — with a little personality sprinkled in.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 mt-10 font-semibold">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[0.75rem] tracking-[0.1em] uppercase px-5 py-2.5 bg-[#7742b8] text-white no-underline hover:bg-[#5c23ac] transition-all duration-200"
              >
                Resume
              </a>
              <a
                href="mailto:keziahlonoy27@gmail.com"
                className="flex items-center gap-2 text-[0.75rem] tracking-[0.1em] uppercase px-5 py-2.5 border border-[#e0e0e0] text-[#666] no-underline hover:border-[#7742b8] hover:text-[#7742b8] transition-all duration-200"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/keziah-lonoy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[0.75rem] tracking-[0.1em] uppercase px-5 py-2.5 border border-[#e0e0e0] text-[#666] no-underline hover:border-[#7742b8] hover:text-[#7742b8] transition-all duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://ph.jobstreet.com/profiles/keziah-lonoy-vcpKzq1Xz1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[0.75rem] tracking-[0.1em] uppercase px-5 py-2.5 border border-[#e0e0e0] text-[#666] no-underline hover:border-[#7742b8] hover:text-[#7742b8] transition-all duration-200"
              >
                JobStreet
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="reveal flex-shrink-0">
            <div className="relative w-64 overflow-hidden border border-[#e0e0e0]">
              <img
                src="/images/profile.jpg"
                alt="Keziah Lonoy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-[#7742b8]" />
            </div>
          </div>
        </div>

        {/* Education + Experience */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e0e0e0] mb-24">

          {/* Education */}
          <div className="bg-white p-10">
            <p className="text-[0.7rem] tracking-[0.2em] uppercase text-[#7742b8] mb-6 font-semibold">Education</p>
            <h2
              className="text-[#0a0a0a] mb-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem' }}
            >
              Academic Background
            </h2>
            <div className="flex flex-col gap-8">
            <div className="border-l-2 border-[#7742b8] pl-5">
                <p className="text-[0.75rem] tracking-[0.1em] uppercase text-[#7742b8] mb-1 font-semibold">July 2022 – May 2026</p>
                <p className="text-[1rem] font-medium text-[#0a0a0a] mb-1">Bachelor of Science in Information Technology</p>
                <p className="text-[0.9rem] font-light text-[#555]">Father Saturnino Urios University</p>
                <p className="text-[0.8rem] font-light text-[#888] mt-1">Butuan City, Philippines · 4th Year</p>
            </div>

            <div className="border-l-2 border-[#e0e0e0] pl-5">
                <p className="text-[0.75rem] tracking-[0.1em] uppercase text-[#7742b8] mb-1 font-semibold">2020 – 2022</p>
                <p className="text-[1rem] font-medium text-[#0a0a0a] mb-1">Senior High School — STEM Strand</p>
                <p className="text-[0.9rem] font-light text-[#555]">Agusan National High School - SHS</p>
                <p className="text-[0.8rem] font-light text-[#888] mt-1">Butuan City, Philippines</p>
            </div>

            <div className="border-l-2 border-[#7742b8] pl-5">
                <p className="text-[0.75rem] tracking-[0.1em] uppercase text-[#7742b8] mb-1 font-semibold">2016 – 2020</p>
                <p className="text-[1rem] font-medium text-[#0a0a0a] mb-1">Junior High School — Special Program in the Arts</p>
                <p className="text-[0.9rem] font-light text-[#555]">Agusan National High School</p>
                <p className="text-[0.8rem] font-light text-[#888] mt-1">Specialized in Media Arts</p>
            </div>
            </div>
          </div>

          {/* Experience */}
          <div className="reveal bg-[#f7f6f3] p-10">
            <p className="text-[0.7rem] tracking-[0.2em] uppercase text-[#7742b8] mb-6 font-semibold">Experience</p>
            <h2
              className="text-[#0a0a0a] mb-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem' }}
            >
              Work History
            </h2>

            <div className="flex flex-col gap-8">
            <div className="border-l-2 border-[#7742b8] pl-5">
                <p className="text-[0.75rem] tracking-[0.1em] uppercase text-[#7742b8] mb-1 font-semibold">Student Assistant · July 2022 – June 2026</p>
                <p className="text-[1rem] font-medium text-[#0a0a0a] mb-1">Father Saturnino Urios University</p>
                <p className="text-[0.9rem] font-light text-[#555] mb-3">4 Years · Butuan City, Philippines</p>
                <ul className="space-y-2">
                {[
                    'Provided academic and administrative support throughout the entirety of my college journey',
                    'Assisted faculty and staff with day-to-day tasks, documentation, and campus operations',
                    'Assigned at the Information Technology and Data Management - Data Center Office from July 2022 until January 2024, contributing to initiatives related to IT support, data management, and customer service for students and staff',
                    'Reassigned to the ITDM: Computer Center from January 2024 until June 2026, where I provided technical support, maintained computer systems, and assisted with IT-related projects and tasks across the university',
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[0.85rem] font-light text-[#555] leading-relaxed">
                    <span className="text-[#7742b8] mt-1 flex-shrink-0">›</span>
                    {item}
                    </li>
                ))}
                </ul>
            </div>

            <div className="border-l-2 border-[#e0e0e0] pl-5">
                <p className="text-[0.75rem] tracking-[0.1em] uppercase text-[#7742b8] mb-1 font-semibold">Internship · January 2026 – April 2026</p>
                <p className="text-[1rem] font-medium text-[#0a0a0a] mb-1">Office of Civil Defense CARAGA</p>
                <p className="text-[0.9rem] font-light text-[#555] mb-3">Records Management Unit</p>
                <ul className="space-y-2">
                {[
                    'Assisted with management of papers, documents, and official records',
                    'Contributed to improving the existing records management system — enhancing usability and operational efficiency',
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[0.85rem] font-light text-[#555] leading-relaxed">
                    <span className="text-[#7742b8] mt-1 flex-shrink-0">›</span>
                    {item}
                    </li>
                ))}
                </ul>
            </div>

            <div className="border-l-2 border-[#7742b8] pl-5">
                <p className="text-[0.75rem] tracking-[0.1em] uppercase text-[#7742b8] mb-1 font-semibold">UI Designer · January 2025 – May 2025</p>
                <p className="text-[1rem] font-medium text-[#0a0a0a] mb-1">Father Saturnino Urios University — IDEA Office</p>
                <p className="text-[0.9rem] font-light text-[#555] mb-3">Innovation, Data Empowerment & Analytics Office</p>
                <ul className="space-y-2">
                {[
                    'Designed the UI/UX for DIOSys — a project for a management system built for the Diocese of Butuan',
                    'Collaborated with the IDEA team to deliver a centralized platform for diocesan operations and administration',
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[0.85rem] font-light text-[#555] leading-relaxed">
                    <span className="text-[#7742b8] mt-1 flex-shrink-0">›</span>
                    {item}
                    </li>
                ))}
                </ul>
            </div>    

            </div>              

          </div>
        </div>

        {/* Skills */}
        <div className="reveal mb-24">
          <p className="flex items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-[#7742b8] mb-4 before:content-[''] before:w-8 before:h-px before:bg-[#7742b8] font-semibold">
            Skills
          </p>
          <h2
            className="text-[#0a0a0a] mb-12"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            What I bring to the table.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map(({ category, items }) => (
              <div key={category} className="border border-[#e0e0e0] p-6 hover:border-[#7742b8] transition-colors duration-300">
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#7742b8] mb-4 font-semibold">{category}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[0.85rem] font-light text-[#444]">
                      <span className="w-1 h-1 rounded-full bg-[#7742b8] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="reveal mb-24">
          <p className="flex items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-[#7742b8] mb-4 before:content-[''] before:w-8 before:h-px before:bg-[#7742b8] font-semibold">
            Certifications
          </p>
          <h2
            className="text-[#0a0a0a] mb-12"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Credentials.
          </h2>
          <div className="flex flex-col gap-px bg-[#e0e0e0]">
            {certifications.map(({ title, issuer, period, code }) => (
              <div
                key={title}
                className="bg-white px-8 py-6 grid grid-cols-[auto_1fr_auto] gap-6 items-center group hover:bg-[#f7f6f3] transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-[#f5f3ff] border border-[#ede9fe] flex items-center justify-center flex-shrink-0">
                  <span className="text-[0.55rem] font-semibold tracking-wider text-[#7742b8] text-center leading-tight">{code}</span>
                </div>
                <div>
                  <p className="text-[0.9rem] font-medium text-[#0a0a0a] mb-0.5">{title}</p>
                  <p className="text-[0.8rem] font-light text-[#666]">{issuer}</p>
                </div>
                <p className="text-[0.75rem] text-[#888] tracking-wide text-right">{period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal border-t border-[#e0e0e0] pt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h2
              className="text-[#0a0a0a] mb-2"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Want to work together?
            </h2>
            <p className="text-[0.9rem] font-light text-[#666]">I&apos;m open to freelance projects and collaborations.</p>
          </div>
          <Link
            href="/#contact"
            className="text-[0.8rem] tracking-[0.1em] uppercase px-8 py-4 bg-[#7742b8] text-white no-underline hover:bg-[#5c23ac] transition-colors duration-200 flex-shrink-0"
          >
            Get in touch →
          </Link>
        </div>

      </div>
      <RevealInit />
    </main>
  )
}