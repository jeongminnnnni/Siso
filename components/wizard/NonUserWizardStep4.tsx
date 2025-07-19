"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useWizard } from "@/contexts/WizardContext"

interface NonUserWizardStep4Props {
  onNext: () => void
  onPrev: () => void
}

export default function NonUserWizardStep4({ onNext, onPrev }: NonUserWizardStep4Props) {
  const { wizardData, updateWizardData } = useWizard()
  const [selectedDate, setSelectedDate] = useState(wizardData.schedule?.date || "")
  const [departureTime, setDepartureTime] = useState(wizardData.schedule?.departureTime || "12:30")
  const [arrivalTime, setArrivalTime] = useState(wizardData.schedule?.arrivalTime || "22:30")
  const [peopleCount, setPeopleCount] = useState(wizardData.schedule?.peopleCount || 2)
  const [selectedRegions, setSelectedRegions] = useState(wizardData.schedule?.regions || ["부산"])

  const regions = ["부산", "울산", "어디나"]

  const toggleRegion = (region: string) => {
    setSelectedRegions((prev) => (prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]))
  }

  const handleNext = () => {
    updateWizardData({
      schedule: {
        date: selectedDate,
        departureTime,
        arrivalTime,
        peopleCount,
        regions: selectedRegions,
      },
    })
    onNext()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">일정. 언제, 어디로, 몇명이서 갈까요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* 캘린더 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <button className="p-2 hover:bg-gray-100 rounded">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h3 className="text-lg font-semibold">2025년 8월</h3>
            <button className="p-2 hover:bg-gray-100 rounded">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
              <div key={day} className="p-2 font-medium text-gray-500">
                {day}
              </div>
            ))}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(`2025-08-${date.toString().padStart(2, "0")}`)}
                className={`p-2 hover:bg-blue-100 rounded ${
                  selectedDate === `2025-08-${date.toString().padStart(2, "0")}` ? "bg-blue-600 text-white" : ""
                }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        {/* 시간 및 기타 설정 */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">선호 시간</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">출발</label>
                <input
                  type="time"
                  value={departureTime}
                  onChange={(e) => setDepartureTime(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">도착</label>
                <input
                  type="time"
                  value={arrivalTime}
                  onChange={(e) => setArrivalTime(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">인원수</h4>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                -
              </button>
              <span className="text-xl font-semibold">{peopleCount}</span>
              <button
                onClick={() => setPeopleCount(peopleCount + 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">가고 싶은 지역</h4>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => toggleRegion(region)}
                  className={`px-4 py-2 rounded-full border transition-colors ${
                    selectedRegions.includes(region)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
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
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          분석하기
        </button>
      </div>
    </div>
  )
}
