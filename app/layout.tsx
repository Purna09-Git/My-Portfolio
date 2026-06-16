import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sai Kiran Mummani | Portfolio",
  description: "A showcase of my work, skills, and experience as a Software Engineer",
  generator: "",
  keywords: ["portfolio", "developer", "full stack", "web development", "projects"],
  authors: [{ name: "Sai Kiran Mummani" }],
  openGraph: {
    title: "Sai Kiran Portfolio",
    description: "A showcase of my work, skills, and experience as a Software Engineer",
    type: "website",
  },
  icons: {
    icon: "/icon-dark-32x32.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      {/* 
        FIXED: Removed 'bg-background' from the body tag so it remains transparent,
        allowing the dynamic LightRays background to visibly shine through from behind!
      */}
      <body className="font-sans antialiased text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}