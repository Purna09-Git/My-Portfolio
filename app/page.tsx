import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import EnhancedHeroSection from "@/components/enhanced-hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import EnhancedSkillsSection from "@/components/enhanced-skills-section"
import CoreCompetenciesSection from "@/components/CoreCompetenciesSection"
import { ContactSection } from "@/components/contact-section"
import { Chatbot } from "@/components/chatbot"
import ScrollToTop from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { LoadingScreen } from "@/components/loading-screen"
import LightRays from "@/components/light-rays"
import { Toaster } from "@/components/ui/toaster"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 bg-background">
        <LightRays
          raysOrigin="top-center"
          raysColor="#14b8a6"
          raysSpeed={0.8}
          lightSpread={0.6}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.03}
          fadeDistance={0.9}
          saturation={1.2}
        />
      </div>

      <LoadingScreen />

      <ScrollProgress />

      <Navigation />

      <main className="relative z-10">
        <EnhancedHeroSection />
        <AboutSection />
        
        {/* 1. Professional Experience takes top priority */}
        <ExperienceSection /> 

        {/* 2. Academic Journey second */}
        <EducationSection />
        
        {/* 3. Technical Projects third */}
        <ProjectsSection />
        
        {/* 4. Skills and Core Competencies fourth */}
        <EnhancedSkillsSection />
        <CoreCompetenciesSection />
        
        {/* 5. Contact Form and Footer at the bottom */}
        <ContactSection />
        <Footer />
      </main>

      <Chatbot />
      <ScrollToTop />
      <Toaster />
    </div>
  )
}