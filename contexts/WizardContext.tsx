"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface WizardData {
  location?: {
    city: string
    district: string
    neighborhood: string
  }
  activity?: string
  interests?: string[]
  schedule?: {
    date: string
    departureTime: string
    arrivalTime: string
    peopleCount: number
    regions: string[]
  }
  userProfile?: {
    interestCount: string
    spendingHabit: string
    healthStatus: string
    skillLevel: string
    preferredDuration: string
    availableDay: string
    availableTime: string
  }
  feedback?: {
    issues: string[]
    customFeedback: string
  }
}

interface WizardContextType {
  wizardData: WizardData
  updateWizardData: (data: Partial<WizardData>) => void
  resetWizard: () => void
  reconstructCount: number
  incrementReconstructCount: () => void
}

const WizardContext = createContext<WizardContextType | undefined>(undefined)

export function WizardProvider({ children }: { children: ReactNode }) {
  const [wizardData, setWizardData] = useState<WizardData>({})
  const [reconstructCount, setReconstructCount] = useState(0)

  const updateWizardData = (data: Partial<WizardData>) => {
    setWizardData((prev) => ({ ...prev, ...data }))
  }

  const resetWizard = () => {
    setWizardData({})
    setReconstructCount(0)
  }

  const incrementReconstructCount = () => {
    setReconstructCount((prev) => prev + 1)
  }

  return (
    <WizardContext.Provider
      value={{
        wizardData,
        updateWizardData,
        resetWizard,
        reconstructCount,
        incrementReconstructCount,
      }}
    >
      {children}
    </WizardContext.Provider>
  )
}

export function useWizard() {
  const context = useContext(WizardContext)
  if (context === undefined) {
    throw new Error("useWizard must be used within a WizardProvider")
  }
  return context
}
