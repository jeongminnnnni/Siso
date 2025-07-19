"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useWizard } from "@/contexts/WizardContext"

interface ReconstructModalProps {
  onClose: () => void
  onComplete: () => void
}

export default function ReconstructModal({ onClose, onComplete }: ReconstructModalProps) {
  const { updateWizardData, incrementReconstructCount } = useWizard()
  const [selectedIssues, setSelectedIssues] = useState<string[]>([])
  const [customFeedback, setCustomFeedback] = useState("")

  const issues = [
    "너무 비싸요",
    "너무 많이 걸어요",
    "기간을 줄여줘요",
    "기간을 늘려줘요",
    "키워드 반영이 안된거 같아요",
    "동행자들이 맘에 들지 않아요",
    "업그레이드 해줘요",
  ]

  const toggleIssue = (issue: string) => {
    setSelectedIssues((prev) => (prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue]))
  }

  const handleReconstruct = () => {
    updateWizardData({
      feedback: {
        issues: selectedIssues,
        customFeedback,
      },
    })
    incrementReconstructCount()
    onComplete()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">재구성→ 어떤 점을 보완할까요?</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4 mb-8">
          {issues.map((issue) => (
            <button
              key={issue}
              onClick={() => toggleIssue(issue)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                selectedIssues.includes(issue)
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {issue}
            </button>
          ))}
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">적어주세요:)</label>
          <textarea
            value={customFeedback}
            onChange={(e) => setCustomFeedback(e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="추가로 원하시는 내용을 자유롭게 적어주세요..."
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors"
          >
            이전
          </button>
          <button
            onClick={handleReconstruct}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            재구성하기
          </button>
        </div>
      </div>
    </div>
  )
}
