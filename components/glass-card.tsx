import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "frosted" | "light"
}

export function GlassCard({ children, className, variant = "default" }: GlassCardProps) {
  const variants = {
    default: "bg-white/5 backdrop-blur-md border-white/10",
    frosted: "bg-white/10 backdrop-blur-xl border-white/20",
    light: "bg-white/[0.03] backdrop-blur-lg border-white/5",
  }

  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-300",
        "hover:bg-white/[0.08] hover:border-white/20",
        "shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]",
        variants[variant],
        className,
      )}
    >
      {children}
    </div>
  )
}
