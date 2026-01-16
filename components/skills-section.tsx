"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/glass-card"
import { skills, getSkillsByCategory } from "@/lib/skills-data"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "frontend" | "backend" | "tools">("all")

  const categories = [
    { label: "All Skills", value: "all" as const },
    { label: "Frontend", value: "frontend" as const },
    { label: "Backend", value: "backend" as const },
    { label: "Tools & DevOps", value: "tools" as const },
  ]

  const filteredSkills = selectedCategory === "all" ? skills : getSkillsByCategory(selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            A comprehensive toolkit of technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className="px-6"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <GlassCard className="group h-full hover:border-primary transition-all duration-300 hover:scale-105">
                <div className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="text-4xl">{skill.icon}</div>
                  <h4 className="font-semibold text-foreground text-sm">{skill.name}</h4>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <GlassCard variant="frosted" className="max-w-3xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Always Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                The tech landscape is constantly evolving, and so am I. I'm always exploring new technologies,
                frameworks, and best practices to stay at the forefront of web development. Currently diving deeper into
                AI/ML integration, Web3 technologies, and advanced performance optimization techniques.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
