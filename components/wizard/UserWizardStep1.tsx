"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useWizard } from "@/contexts/WizardContext"

interface UserWizardStep1Props {
  onNext: () => void
}

export default function UserWizardStep1({ onNext }: UserWizardStep1Props) {
  const { wizardData, updateWizardData } = useWizard()
  const [city, setCity] = useState(wizardData.location?.city || "서울")
  const [district, setDistrict] = useState(wizardData.location?.district || "서초구")
  const [neighborhood, setNeighborhood] = useState(wizardData.location?.neighborhood || "방배1동")

  const handleNext = () => {
    updateWizardData({
      location: {
        city,
        district,
        neighborhood,
      },
    })
    onNext()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">거주지. 어디에 살고 있으신가요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="mb-8">
        <p className="text-lg text-gray-700 mb-6">
          "저는 <span className="font-semibold">{city}</span> <span className="font-semibold">{district}</span>{" "}
          <span className="font-semibold">{neighborhood}</span> 에 살아요."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="대구">대구</option>
            <option value="인천">인천</option>
            <option value="광주">광주</option>
            <option value="대전">대전</option>
            <option value="울산">울산</option>
            <option value="경기">경기</option>
          </select>

          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="서초구">서초구</option>
            <option value="강남구">강남구</option>
            <option value="송파구">송파구</option>
            <option value="마포구">마포구</option>
          </select>

          <select
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="방배1동">방배1동</option>
            <option value="방배2동">방배2동</option>
            <option value="서초1동">서초1동</option>
            <option value="서초2동">서초2동</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음
        </button>
      </div>
    </div>
  )
}
