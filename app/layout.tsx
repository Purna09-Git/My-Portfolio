import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Purna Mummani | Portfolio",
  description: "A showcase of my work, skills, and experience as a Software Engineer",
  generator: "",
  keywords: ["portfolio", "developer", "full stack", "web development", "projects"],
  authors: [{ name: "Purna Mummani" }],
  openGraph: {
    title: "Purna Mummani | Portfolio",
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
      <body className="font-sans antialiased bg-background text-foreground">
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