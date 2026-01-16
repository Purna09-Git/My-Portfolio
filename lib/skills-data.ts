export interface Skill {
  name: string
  icon: string
  level: number
  category: "frontend" | "backend" | "tools" | "other"
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", level: 95, category: "frontend" },
  { name: "Next.js", icon: "▲", level: 90, category: "frontend" },
  { name: "TypeScript", icon: "TS", level: 90, category: "frontend" },
  { name: "JavaScript", icon: "JS", level: 95, category: "frontend" },
  { name: "HTML/CSS", icon: "🎨", level: 95, category: "frontend" },
  { name: "Angular", icon: "🅰️", level: 80, category: "frontend" },
  { name: "Redux", icon: "🔄", level: 85, category: "frontend" },

  // Backend
  { name: "Node.js", icon: "🟢", level: 90, category: "backend" },
  { name: "Express", icon: "⚡", level: 85, category: "backend" },
  { name: "Java", icon: "☕", level: 90, category: "backend" },
  { name: "Spring Boot", icon: "🍃", level: 85, category: "backend" },
  { name: "Python", icon: "🐍", level: 85, category: "backend" },
  { name: "PostgreSQL", icon: "🐘", level: 85, category: "backend" },
  { name: "MySQL", icon: "🗄️", level: 85, category: "backend" },
  { name: "GraphQL", icon: "◆", level: 80, category: "backend" },
  { name: "Kafka", icon: "🔄", level: 75, category: "backend" },

  // Tools & Cloud
  { name: "Git", icon: "🔧", level: 90, category: "tools" },
  { name: "AWS", icon: "☁️", level: 85, category: "tools" },
  { name: "Docker", icon: "🐳", level: 75, category: "tools" },
  { name: "Jira", icon: "📋", level: 85, category: "tools" },
  { name: "Figma", icon: "🎨", level: 80, category: "tools" },
  { name: "Tableau", icon: "📊", level: 75, category: "tools" },
]

export function getSkillsByCategory(category: Skill["category"]): Skill[] {
  return skills.filter((skill) => skill.category === category)
}
