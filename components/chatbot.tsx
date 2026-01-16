"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to help you learn more about this portfolio. Ask me anything!",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const quickReplies = [
    "What services do you offer?",
    "Tell me about your experience",
    "How can I contact you?",
    "What's your tech stack?",
  ]

  const botResponses: Record<string, string> = {
    services:
      "I offer full-stack web development services including frontend development with React/Next.js, backend APIs with Node.js, database design, and deployment solutions.",
    experience:
      "I have extensive experience building modern web applications with technologies like React, Next.js, TypeScript, Node.js, and various databases. Check out the Projects section to see my work!",
    contact:
      "You can reach me through the contact form below, or directly via email at your.email@example.com. I typically respond within 24 hours!",
    stack:
      "My primary tech stack includes React, Next.js, TypeScript, Tailwind CSS on the frontend, and Node.js, Express, PostgreSQL/MongoDB on the backend. I also work with AWS, Docker, and various other tools.",
    default:
      "That's a great question! For detailed information, feel free to explore the different sections of this portfolio or use the contact form to reach out directly.",
  }

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("service") || lowerMessage.includes("offer")) {
      return botResponses.services
    } else if (lowerMessage.includes("experience") || lowerMessage.includes("about")) {
      return botResponses.experience
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("reach")) {
      return botResponses.contact
    } else if (lowerMessage.includes("tech") || lowerMessage.includes("stack") || lowerMessage.includes("technology")) {
      return botResponses.stack
    } else {
      return botResponses.default
    }
  }

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              size="lg"
              className="rounded-full w-14 h-14 shadow-lg"
              onClick={() => setIsOpen(true)}
              aria-label="Open chat"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96"
          >
            <Card className="bg-card border-border shadow-2xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold">Chat Assistant</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close chat">
                  <X className="w-5 h-5" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px] px-4">
                  <div className="space-y-4 py-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="px-4 py-3 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply) => (
                        <Button
                          key={reply}
                          variant="outline"
                          size="sm"
                          className="text-xs bg-transparent"
                          onClick={() => handleSendMessage(reply)}
                        >
                          {reply}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="bg-background"
                    />
                    <Button size="icon" onClick={() => handleSendMessage()} aria-label="Send message">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
