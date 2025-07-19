import Image from "next/image"
import Link from "next/link"
import { Star, ChevronRight } from "lucide-react"

export default function MainContent() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* 상단 섹션 - 인기 검색어와 설계 마법사 */}
      <div className="text-center mb-12">
        <div className="mb-8">
          <span className="text-gray-600 text-sm mr-4">인기 검색어</span>
          <span className="text-blue-600 text-sm mr-4">#맛집투어</span>
          <span className="text-blue-600 text-sm mr-4">#힐링여행</span>
          <span className="text-blue-600 text-sm">#걷기 최소</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
          3분 이내로 나에게 맞는 플랜을
          <br />
          구성해주는 '설계 마법사'
        </h1>

        <Link href="/wizard" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
          설계 마법사 시작하기 →
        </Link>
      </div>

      {/* 추천 인기 키워드 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">추천 인기 키워드</h2>
        <p className="text-gray-600 text-sm mb-6">현재 많은 사람들이 선택하고 있어요!</p>

        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-gray-700">바다</span>
          </div>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-gray-700">서핑</span>
          </div>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-gray-700">테마파크</span>
          </div>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-gray-700">다이빙</span>
          </div>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-gray-700">크루즈</span>
          </div>
        </div>
      </div>

      {/* 인기 여행 추천 */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 mr-3">인기 여행 추천</h2>
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">#바다</span>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=160&width=280"
                alt="부산 바닷길"
                width={280}
                height={160}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-medium">26/30</div>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-600 mb-1">부산 해운대·송정·이기대</p>
              <h3 className="font-medium text-gray-900 mb-2 text-sm">파도 따라 걷는 부산 바닷길 2박 3일</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                  <span className="text-xs font-medium">4.8</span>
                  <span className="text-xs text-gray-500 ml-1">(15)</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">319,000원~</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=160&width=280"
                alt="여수 바다"
                width={280}
                height={160}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-medium">12/20</div>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-600 mb-1">여수 돌산대교 야경, 오동도 산책, 여수밤바다 뱃놀이</p>
              <h3 className="font-medium text-gray-900 mb-2 text-sm">여수의 바다, 섬 그리고 낙조</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                  <span className="text-xs font-medium">4.5</span>
                  <span className="text-xs text-gray-500 ml-1">(28)</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">359,000원~</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=160&width=280"
                alt="통영 바다미술관"
                width={280}
                height={160}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-medium">24/40</div>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-600 mb-1">통영 동피랑 벽화마을 + 통영해양갤러리 + 한산도 뱃길 투어</p>
              <h3 className="font-medium text-gray-900 mb-2 text-sm">파란 날의 통영 바다미술관 여행</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                  <span className="text-xs font-medium">4.6</span>
                  <span className="text-xs text-gray-500 ml-1">(126)</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">299,000원~</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 인기 클래스 추천 */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 mr-3">인기 클래스 추천</h2>
          <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">#낚시</span>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=160&width=280"
                alt="저수지 낚시교실"
                width={280}
                height={160}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-medium">26/30</div>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-600 mb-1">입문자용 루어낚시/대물보단 체험 중심/장비 제공</p>
              <h3 className="font-medium text-gray-900 mb-2 text-sm">도시를 벗어나, 한적한 저수지 낚시교실</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                  <span className="text-xs font-medium">4.1</span>
                  <span className="text-xs text-gray-500 ml-1">(56)</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">35,000원</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=160&width=280"
                alt="바다 선상낚시"
                width={280}
                height={160}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-medium">26/30</div>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-600 mb-1">서해안 연안 바다낚시/가이드 동반 / 간단한 조리 포함</p>
              <h3 className="font-medium text-gray-900 mb-2 text-sm">손맛이란 이런 거예요, 바다 선상낚시 초급</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                  <span className="text-xs font-medium">4.3</span>
                  <span className="text-xs text-gray-500 ml-1">(78)</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">48,000원</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=160&width=280"
                alt="낚시터 커피"
                width={280}
                height={160}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-medium">26/30</div>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-600 mb-1">카페형 낚시터에서 소규모 그룹 체험 + 뒤풀이 티타임</p>
              <h3 className="font-medium text-gray-900 mb-2 text-sm">낚시터에서 만난 오후, 커피 한 잔과 함께</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                  <span className="text-xs font-medium">3.8</span>
                  <span className="text-xs text-gray-500 ml-1">(42)</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">39,000원</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 시소챗 추천 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">시소챗 추천</h2>

        <div className="flex flex-wrap gap-3">
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">#활발한 사람들의 모임</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">#공감</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">#친해져요</span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">#아침 7시 워킹족</span>
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">#한강 공원</span>
        </div>
      </div>
    </main>
  )
}
