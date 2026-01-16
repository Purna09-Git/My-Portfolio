"use client"

import { motion } from "framer-motion"
import GlassIcons from "@/components/glass-icons"
import { Code2, Database, Palette, Smartphone, Cloud, GitBranch, Terminal, Box, Zap, Layout } from "lucide-react"

export default function GlassSkillsSection() {
  const skillsData = [
    { icon: <Code2 />, color: "blue", label: "React" },
    { icon: <Terminal />, color: "green", label: "Node.js" },
    { icon: <Database />, color: "purple", label: "Database" },
    { icon: <Layout />, color: "indigo", label: "Next.js" },
    { icon: <Palette />, color: "red", label: "UI/UX" },
    { icon: <Smartphone />, color: "orange", label: "Mobile" },
    { icon: <Cloud />, color: "blue", label: "Cloud" },
    { icon: <GitBranch />, color: "purple", label: "Git" },
    { icon: <Box />, color: "green", label: "Docker" },
    { icon: <Zap />, color: "orange", label: "Fast Dev" },
  ]

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital products
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <GlassIcons items={skillsData} className="max-w-4xl" />
        </motion.div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">Frontend</div>
            <p className="text-sm text-muted-foreground">React, Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">Backend</div>
            <p className="text-sm text-muted-foreground">Node.js, Express, PostgreSQL, MongoDB, Redis</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">Tools</div>
            <p className="text-sm text-muted-foreground">Git, Docker, AWS, Vercel, Figma, VS Code</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
