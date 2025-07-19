"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useWizard } from "@/contexts/WizardContext"

interface UserWizardStep4Props {
  onNext: () => void
  onPrev: () => void
}

export default function UserWizardStep4({ onNext, onPrev }: UserWizardStep4Props) {
  const { wizardData, updateWizardData } = useWizard()
  const [spendingHabit, setSpendingHabit] = useState(wizardData.userProfile?.spendingHabit || "")

  const options = [
    { value: "cost-effective", label: "가성비가 중요해요" },
    { value: "rational", label: "합리·효율적이에요" },
    { value: "quality-first", label: "비싸도 좋으면 구매해요" },
  ]

  const handleNext = () => {
    updateWizardData({
      userProfile: {
        ...wizardData.userProfile,
        spendingHabit,
      },
    })
    onNext()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">소비습관. 평소 소비습관은 어떤가요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setSpendingHabit(option.value)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
              spendingHabit === option.value
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <span className="text-lg">{option.label}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="bg-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors"
        >
          이전
        </button>
        <button
          onClick={handleNext}
          disabled={!spendingHabit}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          다음
        </button>
      </div>
    </div>
  )
}
