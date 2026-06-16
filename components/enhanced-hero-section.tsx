"use client"

import { getAssetPath } from '../lib/utils';
const isProd = process.env.NODE_ENV === 'production';
const bPath = isProd ? '/My-Portfolio' : '';
import { motion } from "framer-motion"
import { Download, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlassSurface from "@/components/glass-surface"
import { TypeAnimation } from 'react-type-animation';

export default function EnhancedHeroSection() {

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }; 
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden select-none">
      
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

      <div className="container mx-auto max-w-6xl z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Profile Card (FIXED container transparency) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end lg:pr-4"
          >
            {/* Removed the background style overrides that were causing the dark backing block shadow */}
            <GlassSurface 
              width={380} 
              borderRadius={24} 
              displace={10} 
              className="w-full max-w-[360px] md:max-w-[380px]" 
              style={{ minHeight: '340px' }}
            >
              <div className="flex flex-col items-center p-6 w-full h-full justify-center">
                <div className="relative mb-6">
                  <div className="w-40 h-40 animate-blob overflow-hidden border-4 border-primary/30 shadow-xl backdrop-blur-sm bg-gradient-to-br from-primary/10 to-transparent transition-all duration-500">
                    <img 
                      src={getAssetPath("profile.jpg")} 
                      alt="Sai Kiran Mummani" 
                      className="w-full h-full object-cover object-top scale-110 pointer-events-none" 
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg select-none">
                    <span className="text-2xl">👋</span>
                  </div>
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-300 mb-2.5 text-center px-1">
                  Hi, I'm Sai Kiran
                </h2>
                
                <div className="text-muted-foreground font-mono text-sm uppercase tracking-wider h-8 flex items-center justify-center">
                  <span className="mr-2 text-zinc-500">// I am a</span>
                  <TypeAnimation
                    sequence={[
                      'Software Engineer', 2000,
                      'Full-Stack Developer', 2000,
                      'AI Enthusiast', 2000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-primary font-bold tracking-normal normal-case text-[15px]"
                  />
                </div>
              </div>
            </GlassSurface>
          </motion.div>

          {/* RIGHT COLUMN: Content Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="space-y-6 flex flex-col items-center lg:items-start text-left lg:pl-4"
          >
            <h1 className="hidden text-5xl md:text-7xl font-bold mb-4 text-balance">
              <span className="block text-primary"></span>
            </h1>

            <div className="w-full max-w-xl text-left">
              <p className="text-base md:text-[17px] text-zinc-400 font-normal leading-relaxed text-justify tracking-normal whitespace-normal break-words">
                 MS in Computer Science @ UNCC. I sit at the intersection of full-stack engineering and scalable AI architectures - building production-grade applications, autonomous agents, and intelligent RAG pipelines. With deep expertise across cloud-native environments, backend microservices, and modern UI frameworks, I architect end-to-end solutions designed for high reliability and performance. My focus centers on fine-tuning transformer models, optimizing developer workflows, and building secure systems that solve real business problems at scale.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 w-full justify-center lg:justify-start">
              <Button size="lg" className="gap-2 font-medium tracking-wide shadow-md shadow-primary/10 px-7" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900/40 transition-all px-7" onClick={() => scrollToSection("contact")}>
                Let's Connect
              </Button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Downward Page Traversal Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 cursor-pointer z-20 group"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-mono font-bold group-hover:text-primary transition-colors duration-300">
          Scroll Down
        </span>
        
        <div className="w-6 h-10 border-2 border-muted-foreground/20 rounded-full flex justify-center p-1.5 group-hover:border-primary/40 transition-colors duration-300">
          <motion.div 
            animate={{ 
              y: [0, 14, 0],
              opacity: [1, 0.3, 1] 
            }}
            transition={{ 
              duration: 2.2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}