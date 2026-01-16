"use client"

import { motion } from "framer-motion"

// Define the core competencies based on the image provided
const CORE_COMPETENCIES = [
  "Full-Stack Development",
  "Microservices Architecture",
  "Performance Optimization",
  "Security Best Practices",
  "Agile/Scrum Methodology",
  "CI/CD Pipelines",
  "Cloud Infrastructure",
  "API Design & Integration",
]

// Animation for the competence chips
const competenceVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
}

export default function CoreCompetenciesSection() {
  return (
    // The main section container, using a background similar to the image
    <section className="py-16 px-4 bg-gray-900/10 border-t border-b border-white/10">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-extrabold text-center mb-10 tracking-widest uppercase text-white"
        >
          Core Competencies
        </motion.h3>

        {/* Competency Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {CORE_COMPETENCIES.map((competency, index) => (
            <motion.div
              key={competency}
              custom={index}
              variants={competenceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                px-6 py-2 
                text-sm font-semibold text-white 
                border-2 border-primary/50 rounded-lg
                bg-card/70 backdrop-blur-sm 
                shadow-lg transition-colors duration-300
                hover:bg-primary hover:text-primary-foreground
              "
            >
              {competency}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}