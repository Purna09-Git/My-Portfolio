"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "purna.mummani12@gmail.com",
      href: "mailto:purna.mummani12@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (704) 299-0350",
      href: "tel:+17042990350",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Charlotte, NC",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Contact</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Feel free to reach out. I'm always open to discussing new
            opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <GlassSurface width="100%" height={320} borderRadius={20} displace={5}>
              <div className="p-8 w-full h-full overflow-auto text-left">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                        {info.href ? (
                          <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassSurface>

            <GlassSurface width="100%" height={200} borderRadius={20} displace={5}>
              <div className="p-8 w-full text-left">
                <h3 className="text-xl font-bold text-foreground mb-4">Code. Connect. Conquer!</h3>
                <p className="text-muted-foreground leading-relaxed">
                I'm currently seeking challenging Software Engineer roles, with a focus on Java/Spring Boot, React, and Cloud technologies. I'd love to discuss how I can contribute to your team.
                </p>
              </div>
            </GlassSurface>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassSurface width="100%" height="100%" borderRadius={20} displace={5} className="min-h-[536px]">
              <div className="p-8 w-full h-full overflow-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
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
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
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
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
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
