"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/Header"
import { ChevronDown, ChevronUp, Phone, MessageCircle } from "lucide-react"

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const faqs = [
    {
      id: 1,
      question: "예약 취소는 어떻게 하나요?",
      answer:
        "마이페이지에서 예약 내역을 확인하시고, 취소 정책에 따라 취소하실 수 있습니다. 취소 수수료는 상품별로 다를 수 있습니다.",
    },
    {
      id: 2,
      question: "결제 방법은 어떤 것들이 있나요?",
      answer: "신용카드, 체크카드, 계좌이체, 간편결제(카카오페이, 네이버페이) 등을 지원합니다.",
    },
    {
      id: 3,
      question: "여행자 보험은 어떻게 가입하나요?",
      answer: "예약 시 여행자 보험 가입 옵션을 선택하실 수 있으며, 별도로 가입하실 수도 있습니다.",
    },
    {
      id: 4,
      question: "클래스 준비물은 어디서 확인하나요?",
      answer: "각 클래스 상세 페이지에서 준비물 안내를 확인하실 수 있습니다.",
    },
  ]

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 문의 제출 로직
    console.log("문의 제출:", contactForm)
    alert("문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.")
    setContactForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">고객센터</h1>

          {/* 연락처 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">전화 문의</h3>
              <p className="text-blue-600 font-semibold">1588-0000</p>
              <p className="text-sm text-gray-600">평일 09:00~18:00</p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <MessageCircle className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">카카오톡 문의</h3>
              <p className="text-yellow-600 font-semibold">@시소고객센터</p>
              <p className="text-sm text-gray-600">24시간 접수 가능</p>
            </div>
          </div>

          {/* 자주 묻는 질문 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">자주 묻는 질문</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {openFaq === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 1:1 문의 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">1:1 문의</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이름 *</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이메일 *</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">제목 *</label>
                <input
                  type="text"
                  required
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">문의 내용 *</label>
                <textarea
                  required
                  rows={6}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="문의하실 내용을 자세히 작성해 주세요."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                문의 제출
              </button>
            </form>
          </div>

          {/* 이용 가이드 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">이용 가이드</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">오프라인 안내</h3>
                <p className="text-gray-600 mb-4">시소 오프라인 매장에서도 상담 및 예약이 가능합니다.</p>
                <div className="text-sm text-gray-600">
                  <p>주소: 서울특별시 성동구 여행로 77, 3층</p>
                  <p>운영시간: 평일 10:00~19:00, 주말 10:00~17:00</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">서비스 이용 가이드</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• 회원가입 및 로그인 방법</li>
                  <li>• 설계 마법사 이용 방법</li>
                  <li>• 예약 및 결제 프로세스</li>
                  <li>• 커뮤니티 이용 규칙</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
