"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Project } from "@/lib/projects-data"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex-shrink-0 w-full sm:w-[400px] md:w-[450px]"
      >
        <GlassCard
          variant="frosted"
          className="group h-full hover:border-primary transition-all duration-300 overflow-hidden cursor-pointer"
        >
          <div className="relative h-[250px] overflow-hidden" onClick={() => setIsOpen(true)}>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="default" size="sm" className="flex-1" onClick={() => setIsOpen(true)}>
                View Details
              </Button>
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </GlassCard>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <DialogDescription>{project.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">About This Project</h4>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              {project.liveUrl && (
                <Button asChild className="flex-1">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
