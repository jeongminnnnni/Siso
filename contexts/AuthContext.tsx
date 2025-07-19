"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  name: string
  email: string
  provider: string
  isFirstTime?: boolean
  profile?: {
    interestCount: string
    spendingHabit: string
    healthStatus: string
    skillLevel: string
    preferredDuration: string
    availableDay: string
    availableTime: string
  }
}

interface AuthContextType {
  user: User | null
  login: (userData: User) => void
  logout: () => void
  isLoggedIn: boolean
  completeInitialProfile: (profileData: any) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (userData: User) => {
    setUser({ ...userData, isFirstTime: true })
  }

  const logout = () => {
    setUser(null)
  }

  const isLoggedIn = !!user

  const completeInitialProfile = (profileData: any) => {
    if (user) {
      setUser({
        ...user,
        isFirstTime: false,
        profile: profileData,
      })
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn, completeInitialProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
