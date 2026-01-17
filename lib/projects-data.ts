export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: "frontend" | "fullstack" | "backend" | "mobile"
}

// This data structure can be easily connected to a CMS like Sanity, Contentful, or a database
export const projects: Project[] = [
  // --- NEW PROJECTS FROM GITHUB (Seen First) ---
  {
    id: "gh-1",
    title: "Career War Room: AI Resume Insight",
    description: "AI-powered career intelligence platform utilizing neural parsing for resume analysis",
    longDescription:
      "The Goal: Bridge the gap between job seekers' resumes and current market requirements using Artificial Intelligence. The Solution: An intelligent platform that utilizes neural parsing and semantic matching. The system reads resumes, compares them against job descriptions, identifies critical skill gaps, and suggests optimizations to help users land their target roles. Uses neural parsing and semantic matching to analyze resumes, identify skill gaps, and align professional profiles with market demands. Helps candidates optimize their applications for specific job descriptions.",
    image: "/My-Portfolio/career-war-room-ai.png", // Placeholder - make sure to add this image to your public folder
    tags: ["AI", "NLP", "CSS", "Neural Networks", "Semantic Matching"],
    githubUrl: "https://github.com/Purna09-Git/career-war-room--An-Al-Resume-Insight-Job-Matcher",
    featured: true,
    category: "backend", 
  },
  {
    id: "gh-2",
    title: "Doctor-on-Call: Telehealth Platform",
    description: "Comprehensive telehealth app for remote consultations and medical records",
    longDescription:
      "The Goal: Make healthcare accessible by connecting patients with doctors remotely. The Solution: A secure, full-stack telehealth application. Features include live consultation capabilities, a booking engine for appointments, and a secure database for managing electronic medical records. Built with a robust FastAPI backend and MongoDB for flexible data storage",
    image: "/My-Portfolio/doctor-on-call-telehealth.png",
    tags: ["Node.js","react.js","Python","HTML","CSS", "FastAPI", "MongoDB", "JavaScript", "Healthcare"],
    githubUrl: "https://github.com/Purna09-Git/doctor-on-call",
    featured: true,
    category: "fullstack",
  },
  {
    id: "gh-3",
    title: "Real-Time Action Detection (MS-TCT)",
    description: "Real-time Human Action Detection system using Deep learning system for human action detection using Temporal Transformers",
    longDescription:
      "The Goal: Improve the speed and accuracy of video-based human action recognition. The Solution: A high-performance deep learning model. By leveraging MS-TCT (Multi-scale Temporal Convolutional Transformers), the system captures both immediate movements (via convolutions) and long-term dependencies (via Transformers), making it significantly more effective than traditional CNNs for real-time analysis. ",
    image: "/My-Portfolio/action-detection-ai.png",
    tags: ["Python", "Deep Learning", "Transformers", "OpenCV","Computer Vision","NumPy", "PyTorch"],
    githubUrl: "https://github.com/Purna09-Git/-Multi-scale-Temporal-conv-Transformer-For-Action-Detection-",
    featured: true,
    category: "backend",
  },
  {
    id: "gh-4",
    title: "Personal Portfolio",
    description: "Responsive personal portfolio website with Chatbot Integration showcasing projects and skills",
    longDescription:
      " The Goal: Transform a static resume into an interactive, 24/7 personal brand experience that actively engages recruiters and visitors. The Solution: A high-performance portfolio website built with TypeScript. To enhance user experience, I engineered and integrated a custom AI Chatbot Assistant. This assistant acts as a virtual guide, answering questions about my experience in real-time, navigating users to relevant projects, and streamlining the contact process, effectively bridging the gap between a visitor and a potential employer. ",
    image: "/My-Portfolio/personal-portfolio-v2.png",
    tags: ["JavaScript","React.js", "Next.js", "HTML","CSS","UI/UX", "Web Design"],
    githubUrl: "https://github.com/Purna09-Git/My-Portfolio",
    featured: true,
    category: "frontend",
  },
  {
    id: "gh-5",
    title: "Airline Market Trends Analysis",
    description: "Interactive data visualization dashboard analyzing 30+ years of US aviation market dynamics",
    longDescription:
      "The Goal: To decode complex relationships between flight distances, ticket pricing, and airline market dominance. The Solution: A comprehensive Tableau dashboard that visualizes historical trends from 1993 to 2024. The project features geospatial mapping of airport hubs, scatter plot analysis for fare-to-distance correlations, and a time-series analysis of passenger volume—notably highlighting the industry's resilience and recovery following the 2020 global pandemic dip.",
    image: "/My-Portfolio/airline-market-trends.png", // Ensure you save your dashboard screenshot with this name in your public folder
    tags: ["Tableau", "Data Analytics", "Market Research", "Geospatial Analysis", "Trend Forecasting"],
    githubUrl: "https://github.com/Purna09-Git/Airline-Market-Analysis.git", // Replace with your actual repo link once created
    featured: true,
    category: "backend", 
  },
  
  // --- EXISTING PROJECTS ---
  {
    id: "1",
    title: "Robotic Hand Controlled by Hand Gesture",
    description: "Award-winning artificial hand controlled by glove with flex sensors using Arduino Uno",
    longDescription:
      "Led a team to design and implement an artificial hand controlled by a glove with flex sensors using C and Arduino Uno.An IoT-based hardware system featuring a robotic hand controlled by a sensory glove. Using Arduino Uno and Flex Sensors, the system translates human finger movements into robotic actuation in real-time. This project won Most Contemporary Project for its potential application in affordable assistive technology.",
    image: "/My-Portfolio/Robotichand.png",
    tags: ["C", "Arduino Uno", "Flex Sensors", "Hardware", "IoT"],
    githubUrl: "https://github.com/Purna09-Git",
    featured: true,
    category: "fullstack",
  },
  {
    id: "2",
    title: "Credit Card Fraud Detection System",
    description: "Machine learning system achieving 95% accuracy in identifying fraudulent transactions",
    longDescription:
      "Built a credit card fraud detection system using machine learning techniques, achieving 95% accuracy in identifying fraudulent transactions, significantly improving security. Trained and tested multiple machine learning models using scikit-learn, tuning hyperparameters to increase model performance by 15% in fraud detection accuracy.",
    image: "/My-Portfolio/machine-learning-fraud-detection-dashboard.jpg",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "Data Science"],
    githubUrl: "https://github.com/Purna09-Git",
    featured: true,
    category: "backend",
  },
  {
    id: "3",
    title: "Decentralized Crowd Funding Platform",
    description: "Blockchain-based crowdfunding platform with smart contracts and secure transactions",
    longDescription:
      "Created a blockchain-based crowdfunding platform that allows secure and transparent transactions between project creators and investors, with no intermediaries. Wrote smart contracts in Solidity, automating funding and investment processes, ensuring tamper-proof and efficient fund management. Designed and built a responsive front-end with HTML, CSS, and JavaScript.",
    image: "/My-Portfolio/blockchain-crowdfunding-platform-cryptocurrency.jpg",
    tags: ["Blockchain", "Solidity", "JavaScript", "HTML", "CSS", "Smart Contracts"],
    githubUrl: "https://github.com/Purna09-Git",
    featured: true,
    category: "fullstack",
  },

  {
    id: "5",
    title: "Online Learning Platform",
    description: "Interactive learning platform with AWS integration supporting 100+ concurrent users",
    longDescription:
      "Developed an interactive online learning platform using HTML, CSS, JavaScript, and PHP, delivering a responsive and user-friendly interface. Integrated AWS services (EC2, S3, RDS, Cognito) to manage authentication, file storage, and databases. Designed backend workflows supporting 100+ user sessions while maintaining data integrity and consistent performance.",
    image: "/My-Portfolio/online-learning-platform-education-dashboard.jpg",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "AWS", "EC2", "S3", "RDS"],
    githubUrl: "https://github.com/Purna09-Git",
    featured: false,
    category: "fullstack",
  },
  {
    id: "6",
    title: "Secure Authentication System",
    description: "Encrypted authentication with secure data handling for enterprise applications",
    longDescription:
      "Designed and enforced secure authentication and encrypted data handling, safeguarding sensitive data for 50+ internal users and meeting compliance standards. Implemented industry-standard security practices including JWT tokens, password hashing, and role-based access control.",
    image: "/My-Portfolio/secure-authentication-system-login-dashboard.jpg",
    tags: ["Authentication", "Security", "Encryption", "JWT", "RBAC"],
    githubUrl: "https://github.com/Purna09-Git",
    featured: false,
    category: "backend",
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((project) => project.category === category)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
