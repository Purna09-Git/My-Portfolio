"use client"
import { getAssetPath } from '../lib/utils';
const isProd = process.env.NODE_ENV === 'production';
const bPath = isProd ? '/My-Portfolio' : '';
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlassSurface from "@/components/glass-surface"
import { TypeAnimation } from 'react-type-animation';

export default function EnhancedHeroSection() {

  // Logic to scroll exactly one screen height down
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  // Function for the buttons to go to specific sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }; 
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <style jsx>{`
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        .animate-blob {
          animation: morph 8s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
           {/* FIX: Reduced minHeight from 520px to ~420px to match the removed content */}
<GlassSurface width={350} borderRadius={24} displace={10} className="w-full max-w-[350px]" style={{ minHeight: '420px' }}>
  <div className="flex flex-col items-center p-6 w-full h-full">
    <div className="relative mb-6">
      <div className="w-40 h-40 animate-blob overflow-hidden border-4 border-primary/30 shadow-xl backdrop-blur-sm bg-gradient-to-br from-primary/10 to-transparent transition-all duration-500">
        <img 
          src={getAssetPath("profile.jpg")} 
          alt="Purna Mummani" 
          className="w-full h-full object-cover object-top scale-110" 
        />
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
          'Software Engineer', 2000,
          'Java Developer', 2000,
          'Data Analyst', 2000,
          'AI Enthusiast', 2000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-primary font-bold"
      />
    </div>
    <div className="flex gap-3 mb-8">
      <a href="https://github.com/Purna09-Git" target="_blank" rel="noopener noreferrer">
        <Button size="icon" variant="outline" className="rounded-full bg-card/30 backdrop-blur-sm border-white/20 hover:bg-card/50">
          <Github className="w-5 h-5" />
        </Button>
      </a>
      <a href="https://www.linkedin.com/in/purna09/" target="_blank" rel="noopener noreferrer">
        <Button size="icon" variant="outline" className="rounded-full bg-card/30 backdrop-blur-sm border-white/20 hover:bg-card/50">
          <Linkedin className="w-5 h-5" />
        </Button>
      </a>
      <a href="mailto:purna.mummani12@gmail.com">
        <Button size="icon" variant="outline" className="rounded-full bg-card/30 backdrop-blur-sm border-white/20 hover:bg-card/50">
          <Mail className="w-5 h-5" />
        </Button>
      </a>
    </div>

    {/* FIX: Removed mt-auto so it sits right under the social icons */}
    <a href={getAssetPath("resume.pdf")} download className="w-full mb-2">
      <Button className="w-full gap-2 shadow-lg hover:scale-[1.02] transition-transform">
        <Download className="w-4 h-4" />
        Find My Resume Here
      </Button>
    </a>
  </div>
</GlassSurface>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
              <span className="block text-primary"></span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed text-justify text-pretty max-w-xl">
            I'm all about bridging complex backend architectures and high-performance user experiences. I'm especially drawn to Software Engineering and Generative AI, currently focused on architecting intelligent solutions using RAG pipelines, Gemini LLMs, and Pinecone to turn static data into human-centric insights. I invite you to explore my portfolio, where I showcase my work in data analytics, AI, cybersecurity, and full-stack development. With a strong focus on uncovering actionable insights from complex data, I strive to bridge the gap between technology and business.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" onClick={() => scrollToSection("contact")}>
                Contact
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">4</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
{/* --- REVISED SCROLL DOWN INDICATOR --- */}
<motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        // REVISED: Uses scrollDown function to go exactly to the next page/section
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-20 group"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-bold group-hover:text-primary transition-colors">
          Scroll Down
        </span>
        
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1.5 group-hover:border-primary/50 transition-colors">
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
              opacity: [1, 0, 1] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}