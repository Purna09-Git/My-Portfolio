"use client"

import { motion } from "framer-motion"
import { Code2, Lightbulb, Rocket, Users } from "lucide-react"
import GlassSurface from "@/components/glass-surface"

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Engineering Excellence",
      description: "Architecting fault-tolerant microservices and secure systems built for scale and long-term production stability",
    },
    {
      icon: Lightbulb,
      title: "Strategic Solutions",
      description: "Translating business needs into robust technical roadmaps and high-performance architectures.",
    },
    {
      icon: Rocket,
      title: "Continuous Innovation",
      description:
        "Integrating cutting-edge Generative AI and Cloud-Native patterns to drive technical advantage and stay ahead of the curve",
    },
    {
      icon: Users,
      title: "Collaborative Leadership",
      description: "Bridging the gap between engineering and business goals, to foster technical ownership and deliver high-impact products",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">About Me</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
    
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassSurface width="100%" height={280} borderRadius={20} displace={5} className="h-full">
              <div className="p-8 text-left w-full h-full overflow-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">Who am I?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-white font-semibold">Hi, I'm Sai Kiran.</strong> A Computer Science graduate student at UNCC with a deep specialization in full-stack architecture and scalable AI systems, driven to engineer intelligent applications that turn complex data into human-centric solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I spent 2 years at Accenture as a Software Engineer, working across high-stakes engineering problems that demanded both technical precision and clear communication to solve.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  That experience taught me how to turn software complexity into clarity — and how great architectural decisions only matter when they are seamlessly connected to final user and product goals.
                </p>
              </div>
            </GlassSurface>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassSurface width="100%" height={280} borderRadius={20} displace={5} className="h-full">
              <div className="p-8 text-left w-full h-full overflow-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">What I Do</h3>
                {/* Restored the clean ul layout with the primary color caret bullets */}
                <ul className="space-y-3 text-muted-foreground text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">▸</span>
                    <span>I bridge full-stack engineering and cloud-native AI architectures by deploying fault-tolerant microservices and global containerized platforms across AWS, Azure, and GCP.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">▸</span>
                    <span>Centering on Generative AI, I design domain-specific LLM applications, construct robust RAG pipelines, and deploy agents that turn complex datasets into human-centric solutions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">▸</span>
                    <span>From fine-tuning transformer models to optimizing streaming systems with Kafka, I engineer end-to-end software built for production stability, speed, and measurable scale.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">▸</span>
                    <span>By connecting robust cloud infrastructure with intelligent ML workflows, I take full ownership to quickly transform intricate software complexities into production-ready features.</span>
                  </li>
                </ul>
              </div>
            </GlassSurface>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight) => (
            <motion.div key={highlight.title} variants={itemVariants} className="h-full">
              <GlassSurface 
                width="100%" 
                height={320} 
                borderRadius={16} 
                displace={3} 
                className="h-full"
              >
                <div className="p-6 text-center w-full h-full flex flex-col items-center">
                  <div className="flex justify-center mb-4 shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <highlight.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-3 shrink-0">
                    {highlight.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </GlassSurface>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}