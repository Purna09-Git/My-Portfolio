"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import SkillCard from "@/components/skill-card"
import { Database, Wrench, Cpu, Sparkles, BrainCircuit, Network, Layout, Terminal, Box, Globe } from "lucide-react" 
import { cn } from "@/lib/utils"

const SkillIcon = ({ src, alt, colorClass }: { src: string; alt: string; colorClass?: string }) => {
  const [error, setError] = useState(false);

  return (
    <div className="w-10 h-10 flex items-center justify-center p-1">
      {error ? (
        <Globe className="w-6 h-6 text-muted-foreground/50" />
      ) : (
        <img 
          src={src} 
          alt={alt} 
          className={cn("w-full h-full object-contain", colorClass)}
          style={{ filter: 'none' }} // Prevents global CSS from making icons grayscale
          onError={() => setError(true)}
        />
      )}
    </div>
  )
}

type Category = "frontend" | "backend" | "ml" | "tools" | "genai";

export default function EnhancedSkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("frontend")

  const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
    { id: "frontend", label: "Frontend", icon: <Layout className="w-4 h-4" /> },
    { id: "backend", label: "Backend", icon: <Database className="w-4 h-4" /> },
    { id: "ml", label: "Machine Learning", icon: <Cpu className="w-4 h-4" /> },
    { id: "tools", label: "Tools & DevOps", icon: <Wrench className="w-4 h-4" /> },
    { id: "genai", label: "GenAI", icon: <Sparkles className="w-4 h-4" /> },
  ]

  const skills = {
    frontend: [
      { name: "React.Js", level: 95, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /> },
      { name: "Tailwind CSS", level: 90, icon: <SkillIcon src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind" /> },
      { name: "HTML", level: 95, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" /> },
      { name: "CSS", level: 95, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" /> },
      { name: "JavaScript", level: 95, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" /> },
      { name: "TypeScript", level: 90, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TS" /> },
      { name: "Next.js", level: 90, icon: <SkillIcon src="https://cdn.simpleicons.org/nextdotjs/white" alt="Next.js" /> },
      { name: "WordPress", level: 80, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WP" /> },
      { name: "jQuery", level: 80, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery" /> },
      { name: "Bootstrap", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" /> },
    ],
    backend: [
      { name: "Java", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" /> },
      { name: "Node.js", level: 90, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" /> },
      { name: "Express Js", level: 85, icon: <SkillIcon src="https://cdn.simpleicons.org/express/white" alt="Express" /> },
      { name: "PostgreSQL", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="Postgres" /> },
      { name: "MongoDB", level: 80, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="Mongo" /> },
      { name: "REST API", level: 90, icon: <div className="px-1 py-0.5 bg-blue-500/20 rounded text-[9px] font-bold text-blue-400 border border-blue-500/30">REST</div> }, 
      { name: "MySQL", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" /> },
      { name: "AngularJS", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" /> },
      { name: "ASP.NET", level: 75, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt="DotNet" /> },
      { name: "Flask", level: 70, icon: <SkillIcon src="https://cdn.simpleicons.org/flask/white" alt="Flask" /> },
      { name: "GraphQL", level: 75, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" /> },
      { name: "NoSQL", level: 75, icon: <Database className="text-emerald-500 w-8 h-8" /> },
    ],
    ml: [
      { name: "Python", level: 90, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" /> },
      { name: "Tensorflow", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TF" /> },
      { name: "Keras", level: 80, icon: <SkillIcon src="https://cdn.simpleicons.org/keras/D00000" alt="Keras" /> },
      { name: "Jupyter", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" /> },
      { name: "Numpy", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="Numpy" /> },
      { name: "Pandas", level: 85, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" /> },
      { name: "Matplotlib", level: 80, icon: <div className="p-1 bg-blue-400/20 rounded text-[8px] font-bold text-blue-300">PLOT</div> },
      { name: "Pytorch", level: 75, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="Pytorch" /> },
      { name: "OpenCV", level: 70, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="OpenCV" /> },
      { name: "Scikit-learn", level: 75, icon: <SkillIcon src="https://cdn.simpleicons.org/scikitlearn/F7931E" alt="Sklearn" /> },
      { name: "Anaconda", level: 75, icon: <SkillIcon src="https://cdn.simpleicons.org/anaconda/44A833" alt="Anaconda" /> },
    ],
    tools: [
      { name: "AWS", level: 75, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" /> },
      { name: "Git", level: 90, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /> },
      { name: "GitHub", level: 90, icon: <SkillIcon src="https://cdn.simpleicons.org/github/white" alt="GitHub" /> },
      { name: "Docker", level: 80, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" /> },
      { name: "Power BI", level: 75, icon: <SkillIcon src="./200x200ia-75.webp" alt="Power BI" /> },
      { name: "Tableau", level: 75, icon: <SkillIcon src="./200x200ia-75 (1).webp" alt="Tableau" /> },
      { name: "Apache Spark", level: 80, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" alt="Spark" /> },
      { name: "Kafka", level: 75, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" alt="Kafka" /> },
      { name: "Airflow", level: 75, icon: <SkillIcon src="https://cdn.simpleicons.org/apacheairflow/017CEE" alt="Airflow" /> },
      { name: "Streamlit", level: 85, icon: <SkillIcon src="https://cdn.simpleicons.org/streamlit/FF4B4B" alt="Streamlit" /> },
      { name: "GCP", level: 70, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="GCP" /> },
      { name: "Figma", level: 70, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" /> },
      { name: "VS Code", level: 95, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" /> },
      { name: "NPM", level: 90, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" /> },
      { name: "Postman", level: 85, icon: <SkillIcon src="https://cdn.simpleicons.org/postman/FF6C37" alt="Postman" /> },
      { name: "ViteJs", level: 80, icon: <SkillIcon src="https://cdn.simpleicons.org/vite/646CFF" alt="Vite" /> },
      { name: "Ubuntu", level: 70, icon: <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" alt="Ubuntu" /> },
    ],
    genai: [
      { name: "LangChain", level: 90, icon: <SkillIcon src="https://cdn.simpleicons.org/langchain/white" alt="LangChain" /> },
      { name: "OpenAI API", level: 95, icon: <SkillIcon src="./OpenAI.png" alt="OpenAI API" /> },
      { name: "LlamaIndex", level: 85, icon: <Terminal className="text-purple-400 w-8 h-8" /> },
      { name: "Groq", level: 80, icon: <div className="w-8 h-8 flex items-center justify-center bg-[#F55036] rounded font-bold text-[10px] text-white">GROQ</div> },
      { name: "Prompt Engineering", level: 95, icon: <BrainCircuit className="text-yellow-400 w-8 h-8" /> },
      { name: "Vector DBs", level: 85, icon: <Network className="text-blue-400 w-8 h-8" /> },
      { name: "RAG Pipelines", level: 85, icon: <Sparkles className="text-fuchsia-400 w-8 h-8" /> },
    ],
  } as const;

  return (
    <section id="skills" className="py-20 px-4 relative bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My go-to tech stack for building modern web apps
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 border",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                  : "bg-card/50 text-muted-foreground hover:bg-card/80 border-border/50",
              )}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <SkillCard name={skill.name} level={skill.level} icon={skill.icon} delay={index * 0.05} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}