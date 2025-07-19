"use client"

import Image from "next/image"
import { Star, Heart } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export default function TravelContent() {
  const { user, isLoggedIn } = useAuth()

  const bestPlans = [
    {
      id: 1,
      title: "부산 진짜 밥상: 시장 속 이야기와 맛",
      description: "부산 부전시장 투어 + 보리밥 정식 + 60년 노포 탐방",
      rating: 4.8,
      reviews: 15,
      price: "289,000원~",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 2,
      title: "바다 냄새 따라 골목 밥상 투어",
      description: "부산 초량 이바구길 + 해물칼국수+ 깡통시장 식도락",
      rating: 4.5,
      reviews: 28,
      price: "309,000원~",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 3,
      title: "기장 대게 한 상, 바닷가를 품다",
      description: "부산 기장 대게 정식 + 해동용궁사 산책 + 오시리아 해변 카페",
      rating: 4.6,
      reviews: 126,
      price: "349,000원~",
      capacity: "12/20",
      image: "/placeholder.svg?height=160&width=280",
    },
  ]

  const regionPlans = [
    {
      id: 4,
      title: "부산 포구의 맛, 흑밀면과 회 한 접시",
      description: "부산 자갈치 시장 활어회 + 흑밀면 + 영도대교 산책",
      rating: 4.8,
      reviews: 15,
      price: "329,000원~",
      capacity: "12/20",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 5,
      title: "바다 위 마카롱, 감성카페와 디저트 투어",
      description: "부산 해운대·광안리 해변 카페 + 로컬 디저트 클래스",
      rating: 4.5,
      reviews: 28,
      price: "279,000원~",
      capacity: "12/20",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 6,
      title: "온천천 산책과 돼지국밥 이야기",
      description: "부산 동래온천천 걷기 + 동래파전 + 돼지국밥 노포 체험",
      rating: 4.6,
      reviews: 126,
      price: "269,000원~",
      capacity: "12/20",
      image: "/placeholder.svg?height=160&width=280",
    },
  ]

  const themePlans = [
    {
      id: 7,
      title: "전주 한상 가득 미식기행",
      description: "전주 전주 남부시장 먹거리 투어 + 한옥마을 한정식 체험",
      rating: 4.8,
      reviews: 15,
      price: "289,000원~",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
  ]

  const periodPlans = [
    {
      id: 8,
      title: "속초 바다 먹거리 산책",
      description: "속초 중앙시장 오징어순대 + 대포항 물회 + 해변 걷기",
      rating: 4.8,
      reviews: 15,
      price: "299,000원~",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
  ]

  const additionalPlans = [
    {
      id: 9,
      title: "광주의 숨은 맛, 정겨운 밥상",
      description: "광주 양동시장 탐방 + 송정 떡갈비 + 로컬 미식 클래스",
      rating: 4.5,
      reviews: 28,
      price: "309,000원~",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 10,
      title: "제주의 밥상, 바다와 오름 사이",
      description: "제주 고기국수 + 흑돼지 숯불구이 + 감귤 밭 체험",
      rating: 4.5,
      reviews: 28,
      price: "379,000원~",
      capacity: "12/20",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 11,
      title: "춘천 닭갈비와 낭만의 시장길",
      description: "춘천 닭갈비 체험 + 중앙시장 + 막국수 시식",
      rating: 4.6,
      reviews: 126,
      price: "299,000원~",
      capacity: "12/20",
      image: "/placeholder.svg?height=160&width=280",
      hasHeart: true,
    },
    {
      id: 12,
      title: "경주의 고도 밥상, 신라의 맛을 잇다",
      description: "경주 황리단길 미식 탐방 + 전통 찻집 투어",
      rating: 4.6,
      reviews: 126,
      price: "319,000원~",
      capacity: "24/40",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 13,
      title: "느린 숲길, 정선 힐링여행 2박 3일",
      description: "정선 숲 명상 + 한옥 숙박 + 천천히 걷는 걷기길",
      rating: 4.8,
      reviews: 15,
      price: "309,000원~",
      capacity: "24/40",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 14,
      title: "소리로 치유받는 남해 명상여행",
      description: "남해군 남해 바닷가 소리명상 + 차 한잔과 통기타 힐링 타임",
      rating: 4.5,
      reviews: 28,
      price: "329,000원~",
      capacity: "24/40",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 15,
      title: "고요한 하루, 강화도 템플스테이",
      description: "강화도 조용한 사찰 숙박+ 마음챙김 프로그램 + 걷기명상",
      rating: 4.6,
      reviews: 126,
      price: "259,000원~",
      capacity: "24/40",
      image: "/placeholder.svg?height=160&width=280",
    },
  ]

  const TravelCard = ({ plan, showArrows = false }: { plan: any; showArrows?: boolean }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden relative">
      <div className="relative">
        <Image
          src={plan.image || "/placeholder.svg"}
          alt={plan.title}
          width={280}
          height={160}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-medium">{plan.capacity}</div>
        {plan.hasHeart && (
          <div className="absolute bottom-3 right-3">
            <Heart className="h-5 w-5 text-red-500 fill-current" />
          </div>
        )}
        {showArrows && (
          <>
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1">
              ←
            </button>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1">
              →
            </button>
          </>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-600 mb-1">{plan.description}</p>
        <h3 className="font-medium text-gray-900 mb-2 text-sm">{plan.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
            <span className="text-xs font-medium">{plan.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({plan.reviews})</span>
          </div>
          <span className="text-sm font-semibold text-gray-900">{plan.price}</span>
        </div>
      </div>
    </div>
  )

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* 헤더 섹션 */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {isLoggedIn ? `${user?.name}님을 위한 맞춤 여행 여정` : "맞춤 여행 여정"}
          </h1>
          <p className="text-sm text-gray-600">다음과 같은 정보를 바탕으로 분석하고 여행 플랜을 제시할 거에요</p>
        </div>
        {isLoggedIn && (
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900">{user?.name}님 환영해요</p>
          </div>
        )}
      </div>

      {/* 사용자 정보 */}
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <div className="flex items-center space-x-6 text-sm">
          <span>66년생</span>
          <span>서울·서초시·방배1동</span>
          <span>+ 튼튼해요</span>
          <span>08.04(월)~08.06(목) 3박4일</span>
          <span>부산/어디나</span>
          <span>*사진/문화명소</span>
          <span>☆ 비싸도 좋으면 구매해요</span>
        </div>
      </div>

      {/* 가장 좋은 3가지 플랜 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">가장 좋은 3가지 플랜</h2>
        <p className="text-sm text-gray-600 mb-6">키워드를 최대한 담고자 했어요!</p>
        <div className="grid grid-cols-3 gap-6">
          {bestPlans.map((plan) => (
            <TravelCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>

      {/* 지역 중점 플랜 추천 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">지역 중점 플랜 추천</h2>
        <p className="text-sm text-gray-600 mb-6">가고 싶은 곳 위주로 다양한 경로를 짜봤어요!</p>
        <div className="grid grid-cols-3 gap-6">
          {regionPlans.map((plan) => (
            <TravelCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>

      {/* 활동 테마 중점 플랜 추천 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">활동 테마 중점 플랜 추천</h2>
        <p className="text-sm text-gray-600 mb-6">만족할 수 있도록 활동을 중심으로 고려했어요!</p>
        <div className="grid grid-cols-3 gap-6">
          {themePlans.map((plan) => (
            <TravelCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>

      {/* 기간 중점 플랜 추천 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">기간 중점 플랜 추천</h2>
        <p className="text-sm text-gray-600 mb-6">가장 실현 가능성이 높도록 기간과 장소 등을 고려했어요!</p>
        <div className="grid grid-cols-3 gap-6">
          {periodPlans.map((plan) => (
            <TravelCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>

      {/* 이런 여행은 어때요? */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">이런 여행은 어때요?</h2>
        <p className="text-sm text-gray-600 mb-6">가장 실현 가능성이 높도록 기간과 장소 등을 고려했어요</p>
        <div className="grid grid-cols-3 gap-6">
          {additionalPlans.map((plan) => (
            <TravelCard key={plan.id} plan={plan} showArrows={plan.id >= 11 && plan.id <= 16} />
          ))}
        </div>
      </div>

      {/* 원하는 곳이 없어요 섹션 */}
      <div className="text-center mb-12">
        <div className="mb-4">
          <span className="text-4xl">😔</span>
        </div>
        <p className="text-gray-600 mb-2">원하는 곳이 없어요:/</p>
        <p className="text-xs text-gray-500">{isLoggedIn ? "재구성 횟수: 무제한" : "(비회원일 경우) 재구성 횟수: 1"}</p>
      </div>
    </main>
  )
}
