"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useWizard } from "@/contexts/WizardContext"

interface UserWizardStep8Props {
  onNext: () => void
  onPrev: () => void
}

export default function UserWizardStep8({ onNext, onPrev }: UserWizardStep8Props) {
  const { wizardData, updateWizardData } = useWizard()
  const [availableDay, setAvailableDay] = useState(wizardData.userProfile?.availableDay || "")
  const [availableTime, setAvailableTime] = useState(wizardData.userProfile?.availableTime || "")

  const days = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"]
  const times = ["오전", "오후", "저녁", "밤"]

  const handleNext = () => {
    updateWizardData({
      userProfile: {
        ...wizardData.userProfile,
        availableDay,
        availableTime,
      },
    })
    onNext()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">일정. 평소 여유가 있는 시간은 언제 일까요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="mb-8">
        <p className="text-lg text-gray-700 mb-6">
          "평소 여유 있는 시간은 <span className="font-semibold">{availableDay || "요일"}</span>{" "}
          <span className="font-semibold">{availableTime || "시간"}</span> 에요."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">요일</label>
            <select
              value={availableDay}
              onChange={(e) => setAvailableDay(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">요일 선택</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">시간</label>
            <select
              value={availableTime}
              onChange={(e) => setAvailableTime(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">시간 선택</option>
              {times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
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
          disabled={!availableDay || !availableTime}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          마칠게요
        </button>
      </div>
    </div>
  )
}
