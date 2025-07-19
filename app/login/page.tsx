"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import { useAuth } from "@/contexts/AuthContext"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true)

    // 실제로는 각 소셜 로그인 API를 호출해야 하지만,
    // 데모용으로 가짜 사용자 데이터를 생성합니다
    setTimeout(() => {
      const userData = {
        name: "정영호",
        email: `user@${provider}.com`,
        provider: provider,
      }

      login(userData)
      setIsLoading(false)
      router.push("/") // 메인 페이지로 리다이렉트
    }, 1000)
  }

  const handleGuestLogin = () => {
    const userData = {
      name: "게스트",
      email: "guest@siso.com",
      provider: "guest",
    }

    login(userData)
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full">
          {/* 로고 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">시설</h1>
            <h2 className="text-2xl font-semibold text-gray-900">로그인하기</h2>
          </div>

          {/* 로그인 버튼들 */}
          <div className="space-y-4">
            <button
              onClick={() => handleSocialLogin("google")}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <div className="w-5 h-5 mr-3 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              구글로 시작하기
            </button>

            <button
              onClick={() => handleSocialLogin("kakao")}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-colors disabled:opacity-50"
            >
              <div className="w-5 h-5 mr-3 bg-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">K</span>
              </div>
              카카오로 시작하기
            </button>

            <button
              onClick={() => handleSocialLogin("naver")}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-green-500 text-white hover:bg-green-600 transition-colors disabled:opacity-50"
            >
              <div className="w-5 h-5 mr-3 bg-green-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">N</span>
              </div>
              네이버로 시작하기
            </button>

            <button
              onClick={() => handleSocialLogin("email")}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <div className="w-5 h-5 mr-3 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">@</span>
              </div>
              이메일로 시작하기
            </button>

            <button
              onClick={handleGuestLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              비회원으로 이용하기
            </button>
          </div>

          {isLoading && (
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">로그인 중...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
