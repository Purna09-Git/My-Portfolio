"use client"

import React from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react"
import GlassSurface from "@/components/glass-surface"
import Image from "next/image"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  type: string
  description: string
  logoPath: string
}

const experienceData: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "IBM",
    location: "Remote, NC",
    period: "Jun 2025 - Current",
    type: "Full-time",
    logoPath: "/ibm.svg",
    description:
      "Designing an-critical platforms serving millions of users globally. Working across backend APIs, cloud infrastructure, and CI/CD pipelines while integrating AI-powered features to enhance product capabilities and system reliability. Led the development of a scalable microservice architecture for a key product, resulting in a 40% improvement in system performance and a 30% reduction in deployment times. Implemented AI-driven monitoring solutions that proactively identified and resolved system issues, reducing downtime by 25%. Collaborated with cross-functional teams to integrate AI features into existing applications, enhancing user experience and functionality.",
  },
  {
    title: "Graduate Research Assistant",
    company: "University of North Carolina at Charlotte",
    location: "Charlotte, NC",
    period: "May 2024 - April 2025",
    type: "Part-time",
    logoPath: "/Uncc.jpeg",
    description:
      "Conducting applied AI/ML research benchmarking LLM capabilities across code translation and test generation tasks. From building Vision Transformer models for classification to engineering containerized inference pipelines on cloud infrastructure, bridging the gap between cutting-edge research and production-ready AI systems. Engineered a containerized inference pipeline deployed, enabling scalable and efficient model serving for real-time applications.",
  },
  {
    title: "Software Engineer",
    company: "Accenture",
    location: "Hyderabad, India",
    period: "Jan 2022 - Dec 2023",
    type: "Full-time",
    logoPath: "/ACC logo.png",
    description:
      "Developing and enhancing enterprise web applications for global clients, reducing application downtime by ~28% through modular microservice architecture. From modernizing legacy systems and optimizing database performance to exploring AI-driven approaches for system monitoring, turning monolithic platforms into scalable, intelligent solutions. Led the development of a microservice-based architecture for a major client, resulting in a 30% improvement in system scalability and a 25% reduction in deployment times. Implemented AI-driven monitoring solutions that proactively identified and resolved system issues, reducing downtime by 28%. Collaborated with cross-functional teams to integrate AI features into existing applications, enhancing user experience and functionality.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Professional Journey
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Work Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 text-balance">
            Building impactful solutions and growing as a software engineer
          </p>

          {/* Moved up: Highlights total metric on top of the cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="italic inline-block px-3 py-1.5 rounded-sm text-sm text-white bg-teal-400/20 border border-teal-500/30 shadow-md">
              3 years of professional software engineering experience
            </p>
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex gap-6 md:gap-8">
                  <div className="relative flex-shrink-0 hidden md:block">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center relative z-10">
                      <Briefcase className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 pb-8">
                    <GlassSurface
                      width="100%"
                      height="auto"
                      borderRadius={16}
                      displace={3}
                      className="h-full hover:scale-[1.02] transition-transform duration-300"
                    >
                      <div className="p-6 md:p-8">
                        <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                              {item.title}
                            </h3>
                            
                            <div className="flex items-center gap-3 mb-1">
                              <div className={`relative flex-shrink-0 overflow-hidden ${
                                item.company === "IBM" ? "w-14 h-6" : "w-7 h-5 rounded bg-white/5 p-0.5"
                              }`}>
                                <Image
                                  src={item.logoPath}
                                  alt={`${item.company} logo`}
                                  fill
                                  className="object-contain object-left"
                                  priority={index === 0}
                                />
                              </div>

                              {item.company !== "IBM" && (
                                <p className="text-lg font-semibold text-primary">
                                  {item.company}
                                </p>
                              )}
                            </div>
                          </div>
                          
                          <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                            <p className="text-sm font-semibold text-primary flex items-center gap-2">
                              <TrendingUp className="w-4 h-4" />
                              {item.type}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </GlassSurface>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}