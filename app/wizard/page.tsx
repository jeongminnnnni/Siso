"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import { useAuth } from "@/contexts/AuthContext"
import { useWizard } from "@/contexts/WizardContext"
import NonUserWizardStep1 from "@/components/wizard/NonUserWizardStep1"
import NonUserWizardStep2 from "@/components/wizard/NonUserWizardStep2"
import NonUserWizardStep3 from "@/components/wizard/NonUserWizardStep3"
import NonUserWizardStep4 from "@/components/wizard/NonUserWizardStep4"

// 회원용 초기 프로필 설정 단계
import UserWizardStep1 from "@/components/wizard/UserWizardStep1"
import UserWizardStep2 from "@/components/wizard/UserWizardStep2"
import UserWizardStep3 from "@/components/wizard/UserWizardStep3"
import UserWizardStep4 from "@/components/wizard/UserWizardStep4"
import UserWizardStep5 from "@/components/wizard/UserWizardStep5"
import UserWizardStep6 from "@/components/wizard/UserWizardStep6"
import UserWizardStep7 from "@/components/wizard/UserWizardStep7"
import UserWizardStep8 from "@/components/wizard/UserWizardStep8"

export default function WizardPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isInitialProfileComplete, setIsInitialProfileComplete] = useState(false)
  const { isLoggedIn, user, completeInitialProfile } = useAuth()
  const { resetWizard, wizardData } = useWizard()
  const router = useRouter()

  // 회원의 첫 방문 여부 확인
  const isFirstTimeUser = isLoggedIn && user?.isFirstTime

  const handleNext = () => {
    if (isFirstTimeUser && !isInitialProfileComplete) {
      // 초기 프로필 설정 단계 (8단계)
      if (currentStep < 8) {
        setCurrentStep(currentStep + 1)
      } else {
        // 초기 프로필 완료 후 일반 설계 마법사로 전환
        completeInitialProfile(wizardData.userProfile)
        setIsInitialProfileComplete(true)
        setCurrentStep(1) // 일반 설계 마법사 1단계로 리셋
      }
    } else {
      // 일반 설계 마법사 단계 (4단계)
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1)
      } else {
        router.push("/wizard/results")
      }
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // 초기 프로필 설정이 필요한 첫 방문 회원
  if (isFirstTimeUser && !isInitialProfileComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="max-w-4xl mx-auto py-8 px-4">
          {/* 초기 프로필 설정 안내 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">초기 프로필 설정</h1>
            <p className="text-gray-600">더 정확한 추천을 위해 기본 정보를 입력해주세요</p>
          </div>

          {/* 진행 상태 표시 */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      step <= currentStep ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 8 && <div className="w-8 h-1 bg-gray-300 mx-1"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* 초기 프로필 설정 단계별 컴포넌트 */}
          {currentStep === 1 && <UserWizardStep1 onNext={handleNext} />}
          {currentStep === 2 && <UserWizardStep2 onNext={handleNext} onPrev={handlePrev} />}
          {currentStep === 3 && <UserWizardStep3 onNext={handleNext} onPrev={handlePrev} />}
          {currentStep === 4 && <UserWizardStep4 onNext={handleNext} onPrev={handlePrev} />}
          {currentStep === 5 && <UserWizardStep5 onNext={handleNext} onPrev={handlePrev} />}
          {currentStep === 6 && <UserWizardStep6 onNext={handleNext} onPrev={handlePrev} />}
          {currentStep === 7 && <UserWizardStep7 onNext={handleNext} onPrev={handlePrev} />}
          {currentStep === 8 && <UserWizardStep8 onNext={handleNext} onPrev={handlePrev} />}
        </div>
      </div>
    )
  }

  // 일반 설계 마법사 (회원/비회원 공통)
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* 설계 마법사 안내 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">설계 마법사</h1>
          <p className="text-gray-600">3분 이내로 나에게 맞는 플랜을 구성해드려요</p>
        </div>

        {/* 진행 상태 표시 */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && <div className="w-12 h-1 bg-gray-300 mx-2"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* 일반 설계 마법사 단계별 컴포넌트 */}
        {currentStep === 1 && <NonUserWizardStep1 onNext={handleNext} />}
        {currentStep === 2 && <NonUserWizardStep2 onNext={handleNext} onPrev={handlePrev} />}
        {currentStep === 3 && <NonUserWizardStep3 onNext={handleNext} onPrev={handlePrev} />}
        {currentStep === 4 && <NonUserWizardStep4 onNext={handleNext} onPrev={handlePrev} />}
      </div>
    </div>
  )
}
