"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"

export default function Header() {
  const pathname = usePathname()
  const { user, isLoggedIn, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-medium text-gray-900">시설</span>
          </Link>

          {/* 네비게이션 */}
          <nav className="flex space-x-8">
            <Link
              href="/travel"
              className={`font-medium ${
                pathname === "/travel" ? "text-blue-600" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              여행
            </Link>
            <Link
              href="/class"
              className={`font-medium ${pathname === "/class" ? "text-blue-600" : "text-gray-700 hover:text-gray-900"}`}
            >
              클래스
            </Link>
            <Link
              href="/community"
              className={`font-medium ${
                pathname === "/community" ? "text-blue-600" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              시소챗
            </Link>
            <Link
              href="/support"
              className={`font-medium ${
                pathname === "/support" ? "text-blue-600" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              고객센터
            </Link>
          </nav>

          {/* 검색 및 로그인/사용자 정보 */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="예약 검색"
                className="w-32 px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-gray-400"
              />
            </div>

            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <Link href="/mypage" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                  {user?.name}님 환영해요
                </Link>
                <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-700">
                  로그아웃
                </button>
              </div>
            ) : (
              <Link href="/login" className="text-sm text-gray-700 hover:text-gray-900">
                로그인하기
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
