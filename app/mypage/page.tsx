"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/Header"
import { useAuth } from "@/contexts/AuthContext"
import { useChat } from "@/contexts/ChatContext"
import { ChevronRight, User, Settings, Clock, MessageCircle } from "lucide-react"

export default function MyPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const { user, isLoggedIn } = useAuth()
  const { joinChatRoom, getJoinedRooms, chatRooms } = useChat()

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">로그인이 필요합니다</h2>
            <Link href="/login" className="text-blue-600 hover:text-blue-700">
              로그인하러 가기 →
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const sidebarItems = [
    { id: "profile", label: user?.name || "사용자", icon: User, isTitle: true },
    { id: "account", label: "계정 관리", icon: Settings },
    { id: "history", label: "이용 내역", icon: Clock },
    { id: "chat", label: "내 시소챗", icon: MessageCircle },
  ]

  const joinedRooms = getJoinedRooms()
  const recommendedRooms = chatRooms.filter((room) => !room.isJoined)

  const handleJoinChat = (roomId: string) => {
    joinChatRoom(roomId)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* 사이드바 */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <div key={item.id}>
                    {item.isTitle ? (
                      <div className="flex items-center space-x-3 py-3 px-4 bg-gray-50 rounded-lg">
                        <item.icon className="h-5 w-5 text-gray-600" />
                        <span className="font-semibold text-gray-900">{item.label}</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === item.id
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                        {item.id === "chat" && joinedRooms.length > 0 && (
                          <span className="ml-auto bg-blue-600 text-white text-xs rounded-full px-2 py-1">
                            {joinedRooms.length}
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="flex-1">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{user?.name}님 환영해요</h1>
              </div>

              {/* 맞춤 여행 추천 섹션 */}
              <div className="mb-12">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">이런 여행은 어떠신가요?</h2>
                  <p className="text-gray-600 mb-4">
                    {user?.name}님의 취향을 분석하여 맞춤형 여행 상품을 추천해드립니다.
                  </p>
                  <Link
                    href="/travel"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    맞춤 여행 추천
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* 탭 콘텐츠 */}
              {activeTab === "account" && (
                <div>
                  <h3 className="text-xl font-bold mb-6">계정 관리</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                        <input
                          type="text"
                          value={user?.name || ""}
                          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                        <input
                          type="email"
                          value={user?.email || ""}
                          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                          readOnly
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">로그인 방식</label>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm capitalize">
                          {user?.provider}
                        </span>
                      </div>
                    </div>

                    {/* 프로필 정보 수정 섹션 */}
                    {user?.profile && (
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-900">프로필 정보</h4>
                          <button className="text-blue-600 hover:text-blue-700 text-sm">수정하기</button>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-gray-700">관심사 개수:</span>
                              <p className="text-gray-600">{user.profile.interestCount}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">소비습관:</span>
                              <p className="text-gray-600">
                                {user.profile.spendingHabit === "cost-effective" && "가성비가 중요해요"}
                                {user.profile.spendingHabit === "rational" && "합리·효율적이에요"}
                                {user.profile.spendingHabit === "quality-first" && "비싸도 좋으면 구매해요"}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">건강상태:</span>
                              <p className="text-gray-600">
                                {user.profile.healthStatus === "low" && "조금만 움직여도 힘들어요"}
                                {user.profile.healthStatus === "moderate" && "3~4시간 정도면 적당해요"}
                                {user.profile.healthStatus === "high" && "어떤 시간도 무리없어요"}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">숙련도:</span>
                              <p className="text-gray-600">
                                {user.profile.skillLevel === "beginner" && "처음이에요"}
                                {user.profile.skillLevel === "novice" && "초보정도"}
                                {user.profile.skillLevel === "intermediate" && "중급정도"}
                                {user.profile.skillLevel === "advanced" && "상급정도"}
                                {user.profile.skillLevel === "master" && "마스터정도"}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">선호 여행기간:</span>
                              <p className="text-gray-600">
                                {user.profile.preferredDuration === "within-1week" && "1주 이내"}
                                {user.profile.preferredDuration === "1week" && "1주"}
                                {user.profile.preferredDuration === "2weeks" && "2주"}
                                {user.profile.preferredDuration === "3weeks" && "3주"}
                                {user.profile.preferredDuration === "4weeks" && "4주 이상"}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">여유 시간:</span>
                              <p className="text-gray-600">
                                {user.profile.availableDay} {user.profile.availableTime}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">개인정보 설정</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">거주지</label>
                          <input
                            type="text"
                            placeholder="서울 서초구 방배1동"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">관심 분야</label>
                          <div className="flex flex-wrap gap-2">
                            {["사진", "문화명소", "맛집", "바다"].map((tag) => (
                              <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "history" && (
                <div>
                  <h3 className="text-xl font-bold mb-6">이용 내역</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-4 flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          여행 예약 내역
                        </h4>
                        <p className="text-gray-600 text-sm">예약한 여행이 없습니다.</p>
                        <Link href="/travel" className="text-blue-600 text-sm hover:text-blue-700 mt-2 inline-block">
                          여행 둘러보기 →
                        </Link>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-4 flex items-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                          클래스 수강 내역
                        </h4>
                        <p className="text-gray-600 text-sm">수강한 클래스가 없습니다.</p>
                        <Link href="/class" className="text-blue-600 text-sm hover:text-blue-700 mt-2 inline-block">
                          클래스 둘러보기 →
                        </Link>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">찜한 상품</h4>
                      <p className="text-gray-600 text-sm">찜한 상품이 없습니다.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "chat" && (
                <div>
                  <h3 className="text-xl font-bold mb-6">내 시소챗</h3>
                  <div className="space-y-6">
                    {/* 참여 중인 채팅방 */}
                    <div>
                      <h4 className="font-semibold mb-4">참여 중인 채팅방</h4>
                      {joinedRooms.length > 0 ? (
                        <div className="space-y-3">
                          {joinedRooms.map((room) => (
                            <Link
                              key={room.id}
                              href={`/community/${room.id}`}
                              className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h5 className="font-medium text-gray-900">{room.title}</h5>
                                  <p className="text-sm text-gray-600">
                                    {room.participants}/{room.maxParticipants}명 참여
                                  </p>
                                  {room.lastMessage && <p className="text-sm text-gray-500 mt-1">{room.lastMessage}</p>}
                                </div>
                                <div className="text-right">
                                  {room.lastMessageTime && (
                                    <span className="text-xs text-gray-400">{room.lastMessageTime}</span>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <p className="text-gray-600 text-sm mb-4">참여 중인 채팅방이 없습니다.</p>
                          <Link
                            href="/community"
                            className="text-blue-600 text-sm hover:text-blue-700 inline-flex items-center"
                          >
                            시소챗 둘러보기
                            <ChevronRight className="h-3 w-3 ml-1" />
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* 추천 채팅방 */}
                    <div>
                      <h4 className="font-semibold mb-4 text-blue-900">추천 채팅방</h4>
                      <p className="text-blue-700 text-sm mb-4">
                        {user?.name}님의 관심사를 바탕으로 추천하는 채팅방입니다.
                      </p>
                      <div className="space-y-3">
                        {recommendedRooms.slice(0, 3).map((room) => (
                          <div key={room.id} className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <h5 className="font-medium text-blue-900">{room.title}</h5>
                                <p className="text-sm text-blue-700">
                                  {room.participants}/{room.maxParticipants}명 참여
                                </p>
                              </div>
                              <button
                                onClick={() => handleJoinChat(room.id)}
                                className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                              >
                                참여하기
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "profile" && (
                <div>
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{user?.name}님</h3>
                    <p className="text-gray-600 mb-6">{user?.email}</p>

                    {/* 초기 프로필 정보 표시 */}
                    {user?.profile && (
                      <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                        <h4 className="font-semibold text-gray-900 mb-4">프로필 정보</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">관심사 개수:</span>
                            <p className="text-gray-600">{user.profile.interestCount}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">소비습관:</span>
                            <p className="text-gray-600">
                              {user.profile.spendingHabit === "cost-effective" && "가성비가 중요해요"}
                              {user.profile.spendingHabit === "rational" && "합리·효율적이에요"}
                              {user.profile.spendingHabit === "quality-first" && "비싸도 좋으면 구매해요"}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">건강상태:</span>
                            <p className="text-gray-600">
                              {user.profile.healthStatus === "low" && "조금만 움직여도 힘들어요"}
                              {user.profile.healthStatus === "moderate" && "3~4시간 정도면 적당해요"}
                              {user.profile.healthStatus === "high" && "어떤 시간도 무리없어요"}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">숙련도:</span>
                            <p className="text-gray-600">
                              {user.profile.skillLevel === "beginner" && "처음이에요"}
                              {user.profile.skillLevel === "novice" && "초보정도"}
                              {user.profile.skillLevel === "intermediate" && "중급정도"}
                              {user.profile.skillLevel === "advanced" && "상급정도"}
                              {user.profile.skillLevel === "master" && "마스터정도"}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">선호 여행기간:</span>
                            <p className="text-gray-600">
                              {user.profile.preferredDuration === "within-1week" && "1주 이내"}
                              {user.profile.preferredDuration === "1week" && "1주"}
                              {user.profile.preferredDuration === "2weeks" && "2주"}
                              {user.profile.preferredDuration === "3weeks" && "3주"}
                              {user.profile.preferredDuration === "4weeks" && "4주 이상"}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">여유 시간:</span>
                            <p className="text-gray-600">
                              {user.profile.availableDay} {user.profile.availableTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => setActiveTab("account")}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        계정 관리
                      </button>
                      <button
                        onClick={() => setActiveTab("history")}
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        이용 내역
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
