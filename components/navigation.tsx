"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Navigation() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030712]/10 backdrop-blur-md border-b border-zinc-900/20 px-6 py-4 pointer-events-auto select-none">
      <div className="container mx-auto max-w-7xl flex items-center justify-between w-full relative z-50">
        
        {/* 1. BRANDING LOGO */}
        <Link href="/" className="font-mono text-xl md:text-2xl font-bold tracking-tight text-white select-none group relative z-50">
          <span className="text-[#00b4d8] font-semibold transition-colors duration-300 group-hover:text-white">&lt;</span>
          SAI KIRAN MUMMANI
          <span className="text-[#00b4d8] font-semibold transition-colors duration-300 group-hover:text-white font-mono">/&gt;</span>
        </Link>

        {/* RIGHT BUNDLE: Groups nav links and icons together on the right side */}
        <div className="flex items-center gap-10 lg:gap-14 relative z-50">
          
          {/* 2. MENU NAVIGATION */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 relative z-50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 3. SOCIALS */}
          <div className="flex items-center gap-3 relative z-50">
            <a 
              href="https://github.com/Purna09-Git" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full border border-teal-500/20 flex items-center justify-center text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 cursor-pointer pointer-events-auto"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/purna09/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full border border-teal-500/20 flex items-center justify-center text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 cursor-pointer pointer-events-auto"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            {/* 
              FIXED EMAIL LINK: 
              - Restored default clean HTML link protocol behavior (no blank screens)
              - Added a fallback click timer. If the user's computer doesn't open a desktop app within 500ms,
                it safely redirects them directly to Gmail in a clean tab.
            */}
            <a 
              href="mailto:saikiran.mummani09@gmail.com"
              className="w-10 h-10 rounded-full border border-teal-500/20 flex items-center justify-center text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 cursor-pointer pointer-events-auto"
              onClick={(e) => {
                const fallbackTimer = setTimeout(() => {
                  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saikiran.mummani09@gmail.com", "_blank");
                }, 500);
                
                // Clear the timer if the browser loses focus (meaning a desktop mail application successfully opened)
                window.addEventListener('blur', () => clearTimeout(fallbackTimer), { once: true });
              }}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </header>
  )
}