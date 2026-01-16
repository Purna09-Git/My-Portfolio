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
          I’m a passionate Full Stack Developer with specialized expertise in architecting scalable Microservices and Cloud-Native systems on AWS. By seamlessly integrating Generative AI and Machine Learning models into full-stack applications, I build intelligent, future-ready digital experiences that solve complex real-world problems.
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
                <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                My path began with a fascination for how data connects the physical and digital worlds, leading me to lead research projects in IoT and Machine Learning during my undergraduate studies. This technical curiosity evolved into a deep specialization in Data Science and Algorithms during my Master's program.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                Today, I leverage that rigorous background to architect cloud-native systems, moving beyond simple web development to build intelligent, scalable ecosystems that power the next generation of software.
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
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Architect and deploy scalable Microservices and Serverless solutions on AWS to ensure high availability, fault tolerance, and massive scale.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Engineer intelligent full-stack applications by integrating Generative AI (LLMs) and predictive Machine Learning models to drive automation and smarter user experiences.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Develop robust, secure web platforms using React, Next.js, and JavaScript, optimizing heavily for performance, security, and maintainability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Collaborate with teams to transform ideas into production-ready products</span>
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
    {/* 1. Increased height from 220 to 320 to fit the text description.
      2. If GlassSurface supports "auto" height, that is preferred, but assuming 
         it requires a number for the canvas render, 320 is safer.
    */}
    <GlassSurface 
      width="100%" 
      height={320} 
      borderRadius={16} 
      displace={3} 
      className="h-full"
    >
      {/* Added flex-col and justify-between to balance spacing if text lengths vary */}
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
