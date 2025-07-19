"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import { useAuth } from "@/contexts/AuthContext"
import { useWizard } from "@/contexts/WizardContext"
import { Star, Heart } from "lucide-react"
import Image from "next/image"
import ReconstructModal from "@/components/wizard/ReconstructModal"

export default function WizardResultsPage() {
  const [showReconstructModal, setShowReconstructModal] = useState(false)
  const { isLoggedIn } = useAuth()
  const { wizardData, reconstructCount } = useWizard()
  const router = useRouter()

  // 선택된 활동에 따라 페이지 리다이렉트
  useEffect(() => {
    if (wizardData.activity === "여행") {
      router.push("/travel")
    } else if (wizardData.activity === "클래스") {
      router.push("/class")
    }
  }, [wizardData.activity, router])

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
    },
  ]

  const additionalRecommendations = [
    {
      id: 4,
      title: "부산 포구의 맛, 흑밀면과 회 한 접시",
      description: "부산 자갈치 시장 활어회 + 흑밀면 + 영도대교 산책",
      rating: 4.8,
      reviews: 15,
      price: "329,000원~",
      capacity: "12/20",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "바다 위 마카롱, 감성카페와 디저트 투어",
      description: "부산 해운대·광안리 해변 카페 + 로컬 디저트 클래스",
      rating: 4.5,
      reviews: 28,
      price: "279,000원~",
      capacity: "12/20",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "온천천 산책과 돼지국밥 이야기",
      description: "부산 동래온천천 걷기 + 동래파전 + 돼지국밥 노포 체험",
      rating: 4.6,
      reviews: 126,
      price: "269,000원~",
      capacity: "12/20",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      title: "전주 한상 가득 미식기행",
      description: "전주 전주 남부시장 먹거리 투어 + 한옥마을 한정식 체험",
      rating: 4.8,
      reviews: 15,
      price: "289,000원~",
      capacity: "26/30",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 8,
      title: "속초 바다 먹거리 산책",
      description: "속초 중앙시장 오징어순대 + 대포항 물회 + 해변 걷기",
      rating: 4.8,
      reviews: 15,
      price: "299,000원~",
      capacity: "26/30",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 9,
      title: "광주의 숨은 맛, 정겨운 밥상",
      description: "광주 양동시장 탐방 + 송정 떡갈비 + 로컬 미식 클래스",
      rating: 4.5,
      reviews: 28,
      price: "309,000원~",
      capacity: "26/30",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 10,
      title: "제주의 밥상, 바다와 오름 사이",
      description: "제주 고기국수 + 흑돼지 숯불구이 + 감귤 밭 체험",
      rating: 4.5,
      reviews: 28,
      price: "379,000원~",
      capacity: "12/20",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 11,
      title: "춘천 닭갈비와 낭만의 시장길",
      description: "춘천 닭갈비 체험 + 중앙시장 + 막국수 시식",
      rating: 4.6,
      reviews: 126,
      price: "299,000원~",
      capacity: "12/20",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 12,
      title: "경주의 고도 밥상, 신라의 맛을 잇다",
      description: "경주 황리단길 미식 탐방 + 전통 찻집 투어",
      rating: 4.6,
      reviews: 126,
      price: "319,000원~",
      capacity: "24/40",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 13,
      title: "느린 숲길, 정선 힐링여행 2박 3일",
      description: "정선 숲 명상 + 한옥 숙박 + 천천히 걷는 걷기길",
      rating: 4.8,
      reviews: 15,
      price: "309,000원~",
      capacity: "24/40",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 14,
      title: "소리로 치유받는 남해 명상여행",
      description: "남해군 남해 바닷가 소리명상 + 차 한잔과 통기타 힐링 타임",
      rating: 4.5,
      reviews: 28,
      price: "329,000원~",
      capacity: "24/40",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 15,
      title: "고요한 하루, 강화도 템플스테이",
      description: "강화도 조용한 사찰 숙박+ 마음챙김 프로그램 + 걷기명상",
      rating: 4.6,
      reviews: 126,
      price: "259,000원~",
      capacity: "24/40",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const handleReconstructComplete = () => {
    setShowReconstructModal(false)
    // 재구성된 결과를 보여주기 위해 페이지 새로고침 또는 상태 업데이트
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

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
                  {wizardData.location?.city} {wizardData.location?.district} {wizardData.location?.neighborhood}
                </p>
              </div>
              {isLoggedIn ? (
                <>
                  <div>
                    <span className="font-medium">관심사 수:</span>
                    <p>{wizardData.userProfile?.interestCount}</p>
                  </div>
                  <div>
                    <span className="font-medium">소비습관:</span>
                    <p>
                      {wizardData.userProfile?.spendingHabit === "quality-first"
                        ? "☆ 비싸도 좋으면 구매해요"
                        : wizardData.userProfile?.spendingHabit}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">건강상태:</span>
                    <p>
                      {wizardData.userProfile?.healthStatus === "high"
                        ? "+ 튼튼해요"
                        : wizardData.userProfile?.healthStatus}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <span className="font-medium">일정:</span>
                    <p>08.04(월)~08.06(목) 3박4일</p>
                  </div>
                  <div>
                    <span className="font-medium">지역:</span>
                    <p>{wizardData.schedule?.regions?.join("/")}</p>
                  </div>
                  <div>
                    <span className="font-medium">인원:</span>
                    <p>{wizardData.schedule?.peopleCount}명</p>
                  </div>
                </>
              )}
            </div>
            <div className="mt-2">
              <span className="font-medium">관심사:</span>
              <p>*{wizardData.interests?.join("·")}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">가장 좋은 3가지 플랜</h3>
            <p className="text-gray-600 mb-6">키워드를 최대한 담고자 했어요!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

            {/* 추가 추천 상품들 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalRecommendations.map((item) => (
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
            <p className="text-sm text-gray-500 mb-6">
              {isLoggedIn ? "재구성 횟수: 무제한" : `(비회원일 경우) 재구성 횟수: ${reconstructCount + 1}`}
            </p>

            <button
              onClick={() => setShowReconstructModal(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              다시 설계하기
            </button>
          </div>
        </div>
      </div>

      {showReconstructModal && (
        <ReconstructModal onClose={() => setShowReconstructModal(false)} onComplete={handleReconstructComplete} />
      )}
    </div>
  )
}
