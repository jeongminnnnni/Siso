"use client"

import Image from "next/image"
import { Star, Heart } from "lucide-react"

interface WizardResultsProps {
  data: any
  onRestart: () => void
}

export default function WizardResults({ data, onRestart }: WizardResultsProps) {
  const recommendations = [
    {
      id: 1,
      title: "부산 진짜 밥상: 시장 속 이야기와 맛",
      description: "부산 부전시장 투어 + 보리밥 정식 + 60년 노포 탐방",
      rating: 4.8,
      reviews: 15,
      price: "289,000원~",
      capacity: "26/30",
      image: "/placeholder.svg?height=200&width=300",
      category: "travel",
    },
    {
      id: 2,
      title: "바다 냄새 따라 골목 밥상 투어",
      description: "부산 초량 이바구길 + 해물칼국수+ 깡통시장 식도락",
      rating: 4.5,
      reviews: 28,
      price: "309,000원~",
      capacity: "26/30",
      image: "/placeholder.svg?height=200&width=300",
      category: "travel",
    },
    {
      id: 3,
      title: "기장 대게 한 상, 바닷가를 품다",
      description: "부산 기장 대게 정식 + 해동용궁사 산책 + 오시리아 해변 카페",
      rating: 4.6,
      reviews: 126,
      price: "349,000원~",
      capacity: "12/20",
      image: "/placeholder.svg?height=200&width=300",
      category: "travel",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-center mb-8">시소에서 가장 좋은 일정 3개를 세웠어요 :-)</h1>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-4">
              다음과 같은 정보를 바탕으로 분석하고 여행 플랜을 제시할 거에요
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="font-medium">거주지:</span>
                <p>
                  {data.location?.city} {data.location?.district} {data.location?.neighborhood}
                </p>
              </div>
              <div>
                <span className="font-medium">일정:</span>
                <p>08.04(월)~08.06(목) 3박4일</p>
              </div>
              <div>
                <span className="font-medium">지역:</span>
                <p>{data.schedule?.regions?.join("/")}</p>
              </div>
              <div>
                <span className="font-medium">인원:</span>
                <p>{data.schedule?.peopleCount}명</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">가장 좋은 3가지 플랜</h3>
            <p className="text-gray-600 mb-6">키워드를 최대한 담고자 했어요!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white text-gray-700 px-2 py-1 rounded text-sm font-medium">
                        {item.capacity}
                      </span>
                    </div>
                    <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                      <Heart className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{item.rating}</span>
                        <span className="text-sm text-gray-500">({item.reviews})</span>
                      </div>
                      <span className="font-semibold text-blue-600">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <span className="text-6xl">😔</span>
            </div>
            <p className="text-gray-600 mb-4">원하는 곳이 없어요:/</p>
            <p className="text-sm text-gray-500 mb-6">(비회원일 경우) 재구성 횟수: 1</p>

            <button
              onClick={onRestart}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              다시 설계하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
