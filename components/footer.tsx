"use client" // Ensures onClick and window functions work

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react" 
import { Button } from "@/components/ui/button" 

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
    { icon: Mail, href: "mailto:saikiran.mummani09@gmail.com", label: "Email" },
  ]

  return (
    /* CHANGED: Removed top padding completely (pt-0) and minimized bottom padding (pb-4) */
    <footer className="bg-card border-t border-border pt-0 pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CHANGED: Replaced mt-8 with a tight mt-4 to keep the text right under the border line */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Copyright Info */}
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="text-primary/80">★</span> 
            &copy; {currentYear} Sai Kiran Mummani . Charlotte, NC
            <span className="text-primary/80">★</span>
          </p>
          
          {/* Right-aligned Actions Container */}
          <div className="flex items-center gap-6">
            
            {/* Social Buttons */}
            <div className="flex gap-4 items-center">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>

            {/* Vertical Divider line */}
            <div className="h-4 w-[1px] bg-border hidden sm:block"></div>

            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="ghost" 
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground hover:bg-transparent transition-colors p-0 h-auto font-medium"
            >
              <ArrowUp className="w-4 h-4" />
              BACK TO TOP
            </Button>

          </div>

        </div>
      </div>
    </footer>
  )
}