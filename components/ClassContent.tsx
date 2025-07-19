"use client"

import Image from "next/image"
import { Star, Heart } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export default function ClassContent() {
  const { user, isLoggedIn } = useAuth()

  const bestClasses = [
    {
      id: 1,
      title: "내 목소리로 완성하는 오디오북 만들기",
      description: "성우 체험 + 낭독 연습 + 나만의 MP3 오디오북 파일 제작",
      rating: 4.1,
      reviews: 56,
      price: "39,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 2,
      title: "감정이 머무는 사진, 필름카메라 클래스",
      description: "감성 필름카메라 촬영 → 필름 현상까지 / 중년 대상 초급반",
      rating: 4.3,
      reviews: 78,
      price: "42,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 3,
      title: "나만의 향수 만들기-기억의 향기 조향 클래스",
      description: "감정 키워드 기반 향 조합 퍼스널 향수 완성",
      rating: 3.8,
      reviews: 42,
      price: "35,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
  ]

  const localClasses = [
    {
      id: 4,
      title: "에세이 한 문장 - 북카페 글쓰기 클래스",
      description: "인문 감성 글쓰기 + 내글 낭독 + 소규모 북토크",
      rating: 4.1,
      reviews: 56,
      price: "29,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
      hasHeart: true,
    },
    {
      id: 5,
      title: "도시 풍경 따라 드로잉 산책",
      description: "카페·거리·공원 등 서울 공간을 드로잉하며 걷기",
      rating: 4.3,
      reviews: 78,
      price: "33,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
  ]

  const difficultyClasses = [
    {
      id: 6,
      title: "우리는 함께 빚습니다 - 커뮤니티 도예클래스",
      description: "원형 테이블에서 함께 도자기를 만들며 대화 / 공동 전시 제안",
      rating: 4.1,
      reviews: 56,
      price: "42,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 7,
      title: "디지털 사진 동아리 맛보기",
      description: "인근 골목을 함께 돌며 사진 촬영 + 결과물 공유 + 커피타임",
      rating: 4.3,
      reviews: 78,
      price: "38,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
  ]

  const scheduleClasses = [
    {
      id: 8,
      title: "플라워클래스 with 커피",
      description: "생화 플라워 어레인지 + 테이블 세팅 체험 + 커피 제공",
      rating: 3.8,
      reviews: 42,
      price: "37,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
      hasExpress: true,
    },
    {
      id: 9,
      title: "커피를 배우고, 나누고, 브루잉 친구 만들기",
      description: "커플 또는 그룹 브루잉 체험 + 커피취향 테스트 + 커피 챗",
      rating: 3.8,
      reviews: 42,
      price: "35,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
      hasHeart: true,
    },
    {
      id: 10,
      title: "동네 출판사 하루 체험-함께 만드는 미니잡지",
      description: "소규모 편집체험 + 주제 잡고 글/사진 나누기 + 실물 미니북 제작",
      rating: 4.1,
      reviews: 56,
      price: "45,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 11,
      title: "음악이 흐르는 오후, 어쿠스틱 합주 클래스",
      description: "초보 악기(우쿨렐레/젬베 등)로 기본 연주 간단한 합주 도전",
      rating: 4.3,
      reviews: 78,
      price: "39,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 12,
      title: "감정카드로 나를 소개하는 심리워크",
      description: "감정카드 선택 삶의 이야기 나누기 공감 기반 소그룹 토크",
      rating: 3.8,
      reviews: 42,
      price: "37,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
  ]

  const additionalClasses = [
    {
      id: 13,
      title: "도시를 벗어나, 한적한 저수지 낚시교실",
      description: "입문자용 루어낚시/대물보단 체험 중심 / 장비 제공",
      rating: 4.1,
      reviews: 56,
      price: "35,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 14,
      title: "손맛이란 이런 거예요, 바다 선상낚시 초급",
      description: "서해안 연안 바다낚시/가이드 동반 / 간단한 조리 포함",
      rating: 4.3,
      reviews: 78,
      price: "48,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
    {
      id: 15,
      title: "낚시터에서 만난 오후, 커피 한 잔과 함께",
      description: "카페형 낚시터에서 소규모 그룹 체험 + 뒤풀이 티타임",
      rating: 3.8,
      reviews: 42,
      price: "39,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=160&width=280",
    },
  ]

  const ClassCard = ({ classItem }: { classItem: any }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden relative">
      <div className="relative">
        <Image
          src={classItem.image || "/placeholder.svg"}
          alt={classItem.title}
          width={280}
          height={160}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-medium">
          {classItem.capacity}
        </div>
        {classItem.hasExpress && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            express
          </div>
        )}
        {classItem.hasHeart && (
          <div className="absolute bottom-3 right-3">
            <Heart className="h-5 w-5 text-red-500 fill-current" />
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-600 mb-1">{classItem.description}</p>
        <h3 className="font-medium text-gray-900 mb-2 text-sm">{classItem.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
            <span className="text-xs font-medium">{classItem.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({classItem.reviews})</span>
          </div>
          <span className="text-sm font-semibold text-gray-900">{classItem.price}</span>
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
            {isLoggedIn ? `${user?.name}님을 위한 맞춤 클래스 추천` : "맞춤 클래스 추천"}
          </h1>
          <p className="text-sm text-gray-600">다음과 같은 정보를 바탕으로 분석하고 클래스를 제시할 거에요</p>
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
          <span>주말 오후</span>
          <span>*사진/문화명소</span>
          <span>☆ 비싸도 좋으면 구매해요</span>
          <span>☆ 중급이에요</span>
        </div>
      </div>

      {/* 가장 좋은 3가지 클래스 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">가장 좋은 3가지 클래스</h2>
        <p className="text-sm text-gray-600 mb-6">키워드를 최대한 담고자 했어요!</p>
        <div className="grid grid-cols-3 gap-6">
          {bestClasses.map((classItem) => (
            <ClassCard key={classItem.id} classItem={classItem} />
          ))}
        </div>
      </div>

      {/* 지역 중점 클래스 추천 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">지역 중점 클래스 추천</h2>
        <p className="text-sm text-gray-600 mb-6">가장 가까운 곳에 있는 클래스를 모아봤어요</p>
        <div className="grid grid-cols-3 gap-6">
          {localClasses.map((classItem) => (
            <ClassCard key={classItem.id} classItem={classItem} />
          ))}
        </div>
      </div>

      {/* 난이도 중점 클래스 추천 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">난이도 중점 클래스 추천</h2>
        <p className="text-sm text-gray-600 mb-6">만족할 수 있도록 활동을 중심으로 고려했어요!</p>
        <div className="grid grid-cols-3 gap-6">
          {difficultyClasses.map((classItem) => (
            <ClassCard key={classItem.id} classItem={classItem} />
          ))}
        </div>
      </div>

      {/* 일정 중점 클래스 추천 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">일정 중점 클래스 추천</h2>
        <p className="text-sm text-gray-600 mb-6">가장 실현 가능성이 높도록 기간과 장소 등을 고려했어요</p>
        <div className="grid grid-cols-3 gap-6">
          {scheduleClasses.map((classItem) => (
            <ClassCard key={classItem.id} classItem={classItem} />
          ))}
        </div>
      </div>

      {/* 이런 클래스들 어때요? */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">이런 클래스들 어때요?</h2>
        <p className="text-sm text-gray-600 mb-6">가장 실현 가능성이 높도록 기간과 장소 등을 고려했어요</p>
        <div className="grid grid-cols-3 gap-6">
          {additionalClasses.map((classItem) => (
            <ClassCard key={classItem.id} classItem={classItem} />
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
