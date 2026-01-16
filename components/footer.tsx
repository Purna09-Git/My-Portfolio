// File: src/components/footer.tsx

"use client" // <--- CRITICAL FIX: Ensures onClick and window functions work

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react" 
import { Button } from "@/components/ui/button" // <-- Ensure this path is correct

// Helper function for smooth scrolling
const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/Purna09-Git", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/purna09/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:purna.mummani12@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Highlighted Summary */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              <span className="text-primary">{"<"}</span>
              Purna Mummani
              <span className="text-primary">{"/>"}</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Architecting scalable Microservices and Cloud-Native systems on AWS to integrating Generative Al and Machine Learning models into full-stack applications.
            </p>
            
            {/* 1. ADDED: Highlighted Job Availability Line */}
            <p className="italic font-semibold text-sm inline-block px-2 py-1 rounded-sm mt-3 
               bg-primary/20 text-primary border border-primary/40 shadow-md">
              Available for immediate hire
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["Home", "About", "Education", "Experience", "Projects", "Skills", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* MODIFIED: Copyright, Stars, and Back to Top Row */}
        <div className="mt-8 pt-8 border-t border-border flex justify-between items-center">
          
          {/* 2. MODIFIED: Copyright with Star Symbols */}
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="text-primary/80">★</span> 
            &copy; {currentYear} Purna Mummani. All rights reserved.
            <span className="text-primary/80">★</span>
          </p>
          
          {/* 3. ADDED: Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="ghost" 
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground hover:bg-transparent transition-colors p-0 h-auto"
          >
            <ArrowUp className="w-4 h-4" />
            BACK TO TOP
          </Button>
        </div>
      </div>
    </footer>
  )
}