"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Instagram, Send } from "lucide-react" 
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import GlassSurface from "@/components/glass-surface"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  // Pure digital profiles format - UPDATE YOUR EMAIL HERE
  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "saikiran.mummani09@gmail.com", // <-- Change this line
      href: "mailto:saikiran.mummani09@gmail.com", // <-- Change this line too
    },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      value: "linkedin.com/in/purna09",
      href: "https://www.linkedin.com/in/purna09/",
    },
    {
      icon: Github,
      label: "GITHUB",
      value: "github.com/Purna09-Git",
      href: "https://github.com/Purna09-Git",
    },
    {
      icon: Instagram,
      label: "INSTAGRAM",
      value: "@purna_mummani",
      href: "https://instagram.com/",
    },
  ]

  return (
    <section id="contact" className="pt-20 md:pt-32 pb-4 md:pb-6 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Heading Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h6 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Get In Touch
          </h6>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground leading-tight text-balance">
            Let's start a <span className="italic text-muted-foreground/80 font-light">conversation.</span>
          </h1>
        </motion.div>

        {/* 2-Column Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Contact Links & Beautiful Status Message Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Upper Glass Box - Social Links Grid */}
            <GlassSurface width="100%" height={360} borderRadius={20} displace={5}>
              <div className="p-8 w-full h-full flex flex-col justify-start text-left">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="flex flex-col gap-5 overflow-y-auto pr-2">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      {/* Brand Colored Icon Background Wrap */}
                      <div className="p-2.5 bg-primary/10 rounded-lg shrink-0 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      
                      {/* Clean Text Label Stack */}
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold tracking-widest text-muted-foreground/70 uppercase">
                          {info.label}
                        </span>
                        <a 
                          href={info.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassSurface>

            {/* LOWER BOX: Beautifully balanced text styling layout */}
            <GlassSurface width="100%" height={160} borderRadius={20} displace={5}>
              <div className="p-8 w-full h-full text-left flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2.5">
                  <span 
                    className="text-[10px] font-mono uppercase tracking-widest font-bold"
                    style={{ color: '#009ba9' }}
                  >
                    Open for new challenges
                  </span>
                </div>
                
                <p className="text-xs md:text-sm font-normal text-muted-foreground leading-relaxed">
                  Open to AI, backend infrastructure, and deep technical engineering roles. Whether it's a system architecture challenge, an ML pipeline, or just a good conversation about data scale and intelligence — <span className="text-primary font-medium hover:underline cursor-pointer">reach out.</span>
                </p>
              </div>
            </GlassSurface>
          </motion.div>

          {/* Right Column: Complete Message Submit Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <GlassSurface width="100%" height={546} borderRadius={20} displace={5}>
              <div className="p-8 w-full h-full flex flex-col justify-between">
                <form onSubmit={handleSubmit} className="space-y-4 text-left flex flex-col h-full justify-between">
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="bg-background/50 border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email" // <-- Placeholder updated here too!
                      className="bg-background/50 border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="bg-background/50 border-border"
                    />
                  </div>

                  <div className="flex-grow flex flex-col mb-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      className="bg-background/50 border-border resize-none flex-grow"
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full mt-auto" size="lg">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </GlassSurface>
          </motion.div>

        </div>
      </div>
    </section>
  )
}