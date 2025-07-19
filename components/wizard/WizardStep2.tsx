"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"

interface WizardStep2Props {
  onNext: () => void
  onPrev: () => void
  onUpdate: (data: any) => void
  data: any
}

export default function WizardStep2({ onNext, onPrev, onUpdate, data }: WizardStep2Props) {
  const [selectedActivity, setSelectedActivity] = useState(data.activity || "")

  const handleNext = () => {
    onUpdate({ activity: selectedActivity })
    onNext()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">활동. 어떤걸 할까요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <button
          onClick={() => setSelectedActivity("여행")}
          className={`p-8 rounded-lg border-2 transition-colors ${
            selectedActivity === "여행" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="text-center">
            <div className="mb-4">
              <Image src="/placeholder.svg?height=80&width=80" alt="여행" width={80} height={80} className="mx-auto" />
            </div>
            <span className="text-xl font-semibold">여행</span>
          </div>
        </button>

        <button
          onClick={() => setSelectedActivity("클래스")}
          className={`p-8 rounded-lg border-2 transition-colors ${
            selectedActivity === "클래스" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="text-center">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="클래스"
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
            <span className="text-xl font-semibold">클래스</span>
          </div>
        </button>
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
          disabled={!selectedActivity}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          다음
        </button>
      </div>
    </div>
  )
}
