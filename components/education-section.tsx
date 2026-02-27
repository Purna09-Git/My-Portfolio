"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import GlassSurface from "@/components/glass-surface"

interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  description: string
  gpa?: string
  highlights?: string[]
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of North Carolina at Charlotte",
    location: "Charlotte, NC",
    period: "Jan 2024 - Dec 2025",
    gpa: "3.8/4.0",
    description:
      "I completed my Master’s degree in Computer Science (Concentration in Data Science) at UNC Charlotte with a GPA of 3.80. My coursework included Algorithms & Data Structures, Artificial Intelligence, Visual Analytics, Computer Communications & Networks, Survey of Programming Languages, Principles of Information Security & Privacy, Software System Design & Implementation, Big Data Analytics for Competitive Advantage, Illustrative Visualization, and Database Systems. Through this program, I developed hands-on projects that reflect my technical skills and real-world problem-solving abilities.",
    highlights: [
     
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Vellore Institute of Technology",
    location: "India",
    period: "Jul 2019 - May 2023",
    
    description:
      "I completed my Bachelor's in Computer Science at Vellore Institute of Technology . My coursework included Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering, Object-Oriented Programming, Machine Learning, Internet of Things, and Cryptography & Network Security. Through this program, I led team projects in IoT, Machine Learning, and Blockchain technologies, served as a core member of the Coding Club, and won the 'Most Contemporary Project' award at the Engineering Clinics Expo 2020.",
    highlights: [
      
    ],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 bg-background">
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
                <GraduationCap className="w-4 h-4" />
                Academic Journey
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Education
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Building a strong foundation in computer science and software engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            {educationData.map((item, index) => (
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
                      <GraduationCap className="w-7 h-7 text-primary" />
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
                              {item.degree}
                            </h3>
                            <p className="text-lg font-semibold text-primary mb-1">
                              {item.institution}
                            </p>
                          </div>
                          {item.gpa && (
                            <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                              <p className="text-sm font-semibold text-primary">
                                GPA: {item.gpa}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* MODIFIED: Removed the Calendar/period display here */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                          {/* The previous div for Calendar and item.period is gone */}
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {item.highlights && item.highlights.length > 0 && (
                          <div className="space-y-2">
                            {item.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-primary mt-1.5 flex-shrink-0">
                                  ▸
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
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