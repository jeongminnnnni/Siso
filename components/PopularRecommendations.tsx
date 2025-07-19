import Image from "next/image"
import { Star, Heart } from "lucide-react"

export default function PopularRecommendations() {
  const travelItems = [
    {
      id: 1,
      title: "파도 따라 걷는 부산 바닷길 2박 3일",
      location: "부산 해운대·송정·이기대",
      rating: 4.8,
      reviews: 15,
      price: "319,000원~",
      capacity: "26/30",
      image: "/placeholder.svg?height=200&width=300",
      tag: "#바다",
    },
    {
      id: 2,
      title: "여수의 바다, 섬 그리고 낙조",
      location: "여수 돌산대교 야경, 오동도 산책, 여수밤바다 뱃놀이",
      rating: 4.5,
      reviews: 28,
      price: "359,000원~",
      capacity: "12/20",
      image: "/placeholder.svg?height=200&width=300",
      tag: "#바다",
    },
    {
      id: 3,
      title: "파란 날의 통영 바다미술관 여행",
      location: "통영 동피랑 벽화마을 + 통영해양갤러리 + 한산도 뱃길 투어",
      rating: 4.6,
      reviews: 126,
      price: "299,000원~",
      capacity: "24/40",
      image: "/placeholder.svg?height=200&width=300",
      tag: "#바다",
    },
  ]

  const classItems = [
    {
      id: 1,
      title: "도시를 벗어나, 한적한 저수지 낚시교실",
      description: "입문자용 루어낚시/대물보단 체험 중심/장비 제공",
      rating: 4.1,
      reviews: 56,
      price: "35,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=200&width=300",
      tag: "#낚시",
    },
    {
      id: 2,
      title: "손맛이란 이런 거예요, 바다 선상낚시 초급",
      description: "서해안 연안 바다낚시/가이드 동반 / 간단한 조리 포함",
      rating: 4.3,
      reviews: 78,
      price: "48,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=200&width=300",
      tag: "#낚시",
    },
    {
      id: 3,
      title: "낚시터에서 만난 오후, 커피 한 잔과 함께",
      description: "카페형 낚시터에서 소규모 그룹 체험 + 뒤풀이 티타임",
      rating: 3.8,
      reviews: 42,
      price: "39,000원",
      capacity: "26/30",
      image: "/placeholder.svg?height=200&width=300",
      tag: "#낚시",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 인기 여행 추천 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">인기 여행 추천</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">{item.tag}</span>
                  </div>
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
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.location}</p>
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

        {/* 인기 클래스 추천 */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">인기 클래스 추천</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">{item.tag}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-gray-700 px-2 py-1 rounded text-sm font-medium">
                      {item.capacity}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                      <span className="text-sm text-gray-500">({item.reviews})</span>
                    </div>
                    <span className="font-semibold text-green-600">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
