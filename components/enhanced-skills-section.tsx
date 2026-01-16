"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import SkillCard from "@/components/skill-card"
// MODIFIED: Removed Smartphone icon
import { Code2, Database, Wrench, Cpu } from "lucide-react" 
import { cn } from "@/lib/utils"

// Import skill icons as SVG components for authenticity
const SkillIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src || "/placeholder.svg"} alt={alt} className="w-8 h-8 object-contain" />
)

// MODIFIED: Removed "android" from Category type
type Category = "frontend" | "backend" | "tools" | "ml";

export default function EnhancedSkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("frontend") // Default to "frontend"

  // MODIFIED: Removed "Android" category button
  const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
    { id: "frontend", label: "Frontend", icon: <Code2 className="w-4 h-4" /> },
    { id: "backend", label: "Backend", icon: <Database className="w-4 h-4" /> },
    { id: "ml", label: "Machine Learning", icon: <Cpu className="w-4 h-4" /> },
    { id: "tools", label: "Tools & DevOps", icon: <Wrench className="w-4 h-4" /> },
  ]

  const skills = {
    frontend: [
      { name: "React.Js", level: 95, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /> },
      { name: "Tailwind CSS", level: 90, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" /> },
      { name: "HTML", level: 95, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" /> },
      { name: "CSS", level: 95, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" /> },
      { name: "JavaScript", level: 95, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /> },
      {
        name: "TypeScript",
        level: 90,
        icon: (
          <SkillIcon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
          />
        ),
      },
      { name: "Next.js", level: 90, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" /> },
      { name: "WordPress", level: 80, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress" /> },
      { name: "jQuery", level: 80, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery" /> },

      { name: "Bootstrap", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" /> },
      // FIXED ICON
     
    ],
    backend: [
      { name: "Java", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" /> },
      { name: "Node.js", level: 90, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /> },
      { name: "Express Js", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" /> },
      { name: "PostgreSQL", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" /> },
      { name: "MongoDB", level: 80, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /> },
      { name: "REST API", level: 90, icon: <SkillIcon src="/restapi.webp" alt="REST API" /> }, 
      { name: "MySQL", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" /> },
      { name: "AngularJS", level: 85, icon: <SkillIcon src="/angularjs.jpg" alt="AngularJS" /> },
      { name: "ASP.NET", level: 75, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt="ASP.NET" /> },
      { name: "Flask", level: 70, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" /> },
      { name: "GraphQL", level: 75, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" /> },
      
      // FIXED ICON
      { name: "NoSQL", level: 75, icon: <SkillIcon src="/nosql.png" alt="NoSQL" /> }, 
      
    ],
    // REMOVED SECTION: Android was here
     
    // NEW SECTION: Machine Learning
    ml: [
      { name: "Python", level: 90, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" /> },
      { name: "Tensorflow", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="Tensorflow" /> },
      { name: "Keras", level: 80, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" alt="Keras" /> },
      { name: "Jupyter", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" /> },
      { name: "Numpy", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="Numpy" /> },
      { name: "Pandas", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" /> },
      { name: "Matplotlib", level: 80, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" alt="Matplotlib" /> },
      { name: "Pytorch", level: 75, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="Pytorch" /> },
      { name: "OpenCV", level: 70, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="OpenCV" /> },
      // FIXED ICON
      { name: "Scikit-learn", level: 75, icon: <SkillIcon src="https://raw.githubusercontent.com/scikit-learn/scikit-learn/main/doc/logos/scikit-learn-logo.png" alt="Scikit-learn" /> }, 
      { name: "Anaconda", level: 75, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" alt="Anaconda" /> },
    ],
    tools: [
      { name: "AWS", level: 75, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" /> },
      { name: "Git", level: 90, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /> },
      { name: "GitHub", level: 90, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" /> },
      { name: "Docker", level: 80, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" /> },
      { name: "Power BI", level: 75, icon: <SkillIcon src="/200x200ia-75.webp" alt="Power BI" /> }, 
      { name: "Tableau", level: 75, icon: <SkillIcon src="/200x200ia-75 (1).webp" alt="Tableau" /> },
      { name: "Figma", level: 70, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" /> },
      { name: "VS Code", level: 95, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" /> },
      { name: "NPM", level: 90, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" /> },
      { name: "PostMan", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="PostMan" /> },
      { name: "ViteJs", level: 80, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="ViteJs" /> },
      { name: "Ubuntu", level: 70, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" alt="Ubuntu" /> },
      // FIXED ICON
      // FIXED ICON
      { name: "WireShark", level: 60, icon: <SkillIcon src="/wireshark-.png" alt="WireShark" /> }, 
      
      // FIXED ICON
    
    ],
  } as const;

  const getFilteredSkills = () => {
    return skills[activeCategory as keyof typeof skills]
  }

  const filteredSkills = getFilteredSkills()

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary">Technical Expertise</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          My go-to tech stack for building modern web apps
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-6 py-3 rounded-xl font-medium transition-all duration-300",
                "flex items-center gap-2 backdrop-blur-sm",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card/50 text-muted-foreground hover:bg-card/80 border border-border/50",
              )}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SkillCard name={skill.name} level={skill.level} icon={skill.icon} delay={index * 0.05} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}