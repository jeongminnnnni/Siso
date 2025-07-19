"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useWizard } from "@/contexts/WizardContext"

interface UserWizardStep3Props {
  onNext: () => void
  onPrev: () => void
}

export default function UserWizardStep3({ onNext, onPrev }: UserWizardStep3Props) {
  const { wizardData, updateWizardData } = useWizard()
  const [interestCount, setInterestCount] = useState(wizardData.userProfile?.interestCount || "")

  const options = [
    { value: "none", label: "없어요" },
    { value: "1-2", label: "1~2개 에요" },
    { value: "3-4", label: "3~4개 에요" },
    { value: "5+", label: "5~ 에요" },
  ]

  const handleNext = () => {
    updateWizardData({
      userProfile: {
        ...wizardData.userProfile,
        interestCount,
      },
    })
    onNext()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">관심사 갯수. 즐기는 관심사 또는 취미활동이 보통 몇가지인가요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setInterestCount(option.value)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
              interestCount === option.value
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
          disabled={!interestCount}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          다음
        </button>
      </div>
    </div>
  )
}
