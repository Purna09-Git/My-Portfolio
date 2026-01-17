"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlassSurface from "@/components/glass-surface"
import { TypeAnimation } from 'react-type-animation';

export default function EnhancedHeroSection() {

  // 👇 1. ADD THIS SCROLL HELPER FUNCTION
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <GlassSurface width={350} height={500} borderRadius={24} displace={10} className="w-full max-w-[350px]">
              <div className="flex flex-col items-center p-8 w-full h-full">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl backdrop-blur-sm bg-gradient-to-br from-primary/10 to-transparent">
                    <img src="/My-Portfolio/profile.jpg" alt="Purna Mummani" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                    <span className="text-2xl">👋</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-2 text-center">Hi, I am Purna Mummani</h2>
                
                <div className="text-primary font-semibold mb-4 text-lg h-8 flex items-center">
                  <span className="mr-2 text-foreground">I am a</span>
                  <TypeAnimation
                    sequence={[
                      'Software Engineer',
                      2000,
                      'Java Developer',
                      2000,
                      'Full Stack Developer',
                      2000,
                      'Data Enthusiast',
                      2000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-primary font-bold"
                  />
                </div>

                <div className="flex flex-col gap-2 mb-6 w-full">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Charlotte, NC</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    <span>Available for Opportunities</span>
                  </div>
                </div>

                <div className="flex gap-3 mb-6">
                  <a href="https://github.com/Purna09-Git" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full bg-card/30 backdrop-blur-sm border-white/20 hover:bg-card/50"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/purna09/" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full bg-card/30 backdrop-blur-sm border-white/20 hover:bg-card/50"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="mailto:pmummani@charlotte.edu">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full bg-card/30 backdrop-blur-sm border-white/20 hover:bg-card/50"
                    >
                      <Mail className="w-5 h-5" />
                    </Button>
                  </a>
                </div>

                <a href="/My-Portfolio/resume.pdf" download className="w-full">
                  <Button className="w-full gap-2 shadow-lg">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </GlassSurface>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
                <span className="block text-primary"></span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed text-justify text-pretty max-w-xl"
            >
              I enjoy building and deploying clean, scalable, full-stack systems that solve real-world problems and continuously drive business value. My expertise covers the entire development spectrum: from crafting responsive user experiences in React and Next.js to building and securing the back-end services with Spring Boot, Java, Python and AWS. I am currently seeking full-time roles where I can apply my blend of technical agility and creative insight to continuously learn, build, and deliver high-impact digital products that are functional and visually outstanding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {/* 👇 2. UPDATED BUTTON: Links to Projects */}
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>

              {/* 👇 3. UPDATED BUTTON: Links to Contact */}
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">2+</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">4</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}