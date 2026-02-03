"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react"
import GlassSurface from "@/components/glass-surface"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  type: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

const experienceData: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Adobe",
    location: "Remote, USA",
    period: "Jul 2025 - Current",
    type: "Internship",
    description:
      "Contributing to the design and development of scalable, enterprise-grade applications using Java, Spring Boot, and React. Supporting internal and customer-facing platforms for 2M+ active users while adhering to Adobe’s strict engineering standards and secure development practices.",
    responsibilities: [
     "Assisted in implementing backend components on AWS (EC2, Lambda, RDS), reducing processing latency by 21% through optimized resource usage.",
    "Developed secure REST APIs with OAuth 2.0 and JWT, improving data security posture and role-based access control.",
    "Analyzed SQL queries and indexing for PostgreSQL and Oracle, resulting in a 28% improvement in query response times.",
    "Collaborated on React and TypeScript features, building reusable components that achieved 24% faster page load times.",
    "Enhanced CI/CD pipelines using Jenkins and Docker, reducing manual deployment effort by 30% and improving release consistency.",
    "Utilized AWS CloudWatch to reduce issue detection time by 26% while delivering user stories via Agile Scrum ceremonies."
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Jenkins",
    ],
  },
  {
    
    title: "Software Engineer Graduate Assistant ",
    company: "University of North Carolina at Charlotte",
    location: "Charlotte, NC",
    period: "May 2024 - April 2025",
    type: "Part-time",
    description:
      "Architecting AI-driven systems and modernizing infrastructure to support university-wide faculty operations and legacy system transitions.",
    responsibilities: [
     "Developed an AI-driven Learning Management System using React, TypeScript, and FastAPI, integrating a RAG pipeline to automate support ticket resolution for 500+ faculty users.",
    "Engineered scalable vector search infrastructure using Pinecone and LangChain, enabling semantic queries with Gemini LLMs while maintaining 96% response accuracy.",
    "Modernized legacy monitoring systems into a Spring Boot microservices architecture on AWS, supporting 110+ parallel requests/sec with zero data leakage.",
    "Implemented LLM Guardrails and Circuit Breaker patterns to ensure high system reliability and secure data handling during high-traffic periods.",
    "Optimized cloud-based data retrieval workflows to decrease query latency and improve the overall performance of internal knowledge bases."
    ],
    technologies: ["React", "TypeScript", "FastAPI", "Python", "Spring Boot", "AWS", "Pinecone", "LangChain", "Gemini LLM"],
  },
  {
    title: "Software Engineer",
    company: "Accenture",
    location: "Hyderabad, India",
    period: "Jul 2022 - Dec 2023",
    type: "Full-time",
    description:
      "Developed and enhanced enterprise web applications for global clients, focusing on performance optimization and scalability.",
    responsibilities: [
      "Designed and implemented modular microservices to modernize legacy systems, reducing application downtime by 28% through improved fault isolation.",
    "Optimized database schemas and SQL queries across MySQL and Oracle, resulting in 34% faster data retrieval and improved reporting accuracy.",
    "Built dynamic, responsive web interfaces using Angular and JavaScript, reducing end-user support tickets by 22% through improved UI consistency.",
    "Supported  in cloud migration to AWS environments, contributing to a 25% reduction in infrastructure costs through optimized resource utilization."
    ],
    technologies: [
      "Java", "Spring MVC", "Angular", "JavaScript", "MySQL", "Oracle", "AWS", "Hibernate"
    ],
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
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Building impactful solutions and growing as a software engineer
          </p>
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
                            <p className="text-lg font-semibold text-primary mb-1">
                              {item.company}
                            </p>
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

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-foreground mb-3">
                            Key Responsibilities:
                          </h4>
                          <div className="space-y-2">
                            {item.responsibilities.map((resp, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-primary mt-1.5 flex-shrink-0">
                                  ▸
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  {resp}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </GlassSurface>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="italic inline-block px-1 rounded-sm text-white bg-teal-400/20">
  3 years of professional software engineering experience
</p>
        </motion.div>
      </div>
    </section>
  )
}
