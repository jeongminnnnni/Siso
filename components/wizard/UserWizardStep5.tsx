"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useWizard } from "@/contexts/WizardContext"

interface UserWizardStep5Props {
  onNext: () => void
  onPrev: () => void
}

export default function UserWizardStep5({ onNext, onPrev }: UserWizardStep5Props) {
  const { wizardData, updateWizardData } = useWizard()
  const [healthStatus, setHealthStatus] = useState(wizardData.userProfile?.healthStatus || "")

  const options = [
    { value: "low", label: "조금만 움직여도 힘들고 아파요" },
    { value: "moderate", label: "3~4시간 정도면 적당해요" },
    { value: "high", label: "어떤 시간도 무리없어요" },
  ]

  const handleNext = () => {
    updateWizardData({
      userProfile: {
        ...wizardData.userProfile,
        healthStatus,
      },
    })
    onNext()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">건강상태. 평소 무리없는 활동량은 어느 정도 인가요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setHealthStatus(option.value)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
              healthStatus === option.value
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
          disabled={!healthStatus}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          다음
        </button>
      </div>
    </div>
  )
}
