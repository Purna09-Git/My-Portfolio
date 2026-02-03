"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SkillCardProps {
  name: string
  level: number
  icon: React.ReactNode
  delay?: number
}

export default function SkillCard({ name, icon, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative"
    >
      {/* Glass Card - Slim rectangular padding */}
      <div className="relative p-4 rounded-xl bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
        
        {/* Shine & Hover Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-transparent transition-all duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </div>

        {/* Content Area */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-3">
          {/* Icon Container */}
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-lg"
          >
            <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
          </motion.div>

          {/* Corrected Text Style: No uppercase, bold, and bright white */}
          <h3 className="text-sm md:text-base font-bold text-white group-hover:text-primary transition-colors tracking-normal">
            {name}
          </h3>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  )
}