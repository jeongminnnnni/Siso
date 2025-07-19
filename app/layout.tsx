import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/AuthContext"
import { ChatProvider } from "@/contexts/ChatContext"
import { WizardProvider } from "@/contexts/WizardContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "시소 - 개인 맞춤형 여행/클래스 추천 플랫폼",
  description: "3분 이내로 나에게 맞는 플랜을 구성해주는 설계 마법사",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AuthProvider>
          <ChatProvider>
            <WizardProvider>{children}</WizardProvider>
          </ChatProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
