"use client"
import Link from "next/link"
import Header from "@/components/Header"
import { useAuth } from "@/contexts/AuthContext"
import { useChat } from "@/contexts/ChatContext"
import { Users } from "lucide-react"
import Image from "next/image"

export default function CommunityPage() {
  const { user, isLoggedIn } = useAuth()
  const { chatRooms, joinChatRoom, getJoinedRooms } = useChat()

  const joinedRooms = getJoinedRooms()
  const availableRooms = chatRooms.filter((room) => !room.isJoined)

  const handleJoinChat = (roomId: string) => {
    joinChatRoom(roomId)
  }

  const keywords = [
    { name: "색 스포츠", participants: 8 },
    { name: "걷기", participants: 87 },
    { name: "산책", participants: 87 },
    { name: "조기 축구", participants: 0 },
    { name: "집밥", participants: 0 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">시소챗</h1>
            {isLoggedIn && (
              <div className="text-right">
                <p className="text-lg font-semibold">{user?.name}님 환영해요</p>
              </div>
            )}
          </div>

          {/* 내 시소챗 */}
          {isLoggedIn && joinedRooms.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">내 시소챗</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {joinedRooms.map((room) => (
                  <Link
                    key={room.id}
                    href={`/community/${room.id}`}
                    className="border rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt={room.title}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm text-gray-600">클래스 정기 모임 챗</span>
                          <span className="text-sm text-blue-600">+{room.participants}</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{room.title}</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>
                              {room.participants}/{room.maxParticipants}명 참여
                            </span>
                          </div>
                          {room.lastMessage && <p className="text-gray-500 text-sm">{room.lastMessage}</p>}
                        </div>
                        <div className="mt-3">
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">참여 중</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 이런 모임도 있어요 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">이런 모임도 있어요!</h2>
            <p className="text-gray-600 mb-6">키워드를 분석해 다양한 모임을 추천해드려요</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">추천 채팅방</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableRooms.map((room) => (
                  <div key={room.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt={room.title}
                      width={60}
                      height={60}
                      className="rounded-lg mb-3"
                    />
                    <h4 className="font-medium mb-2">{room.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {room.participants}/{room.maxParticipants}명
                      </span>
                      {isLoggedIn ? (
                        <button
                          onClick={() => handleJoinChat(room.id)}
                          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                        >
                          참여하기
                        </button>
                      ) : (
                        <Link
                          href="/login"
                          className="bg-gray-300 text-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-400 transition-colors"
                        >
                          로그인 필요
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 이런 키워드는 어떤가요 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">이런 키워드는 어떤가요?</h2>
            <p className="text-gray-600 mb-6">다양한 관심사를 늘려 다양한 사람들을 만나보세요!</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {keywords.map((keyword, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 rounded-lg p-4 mb-2 hover:bg-gray-200 transition-colors cursor-pointer">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt={keyword.name}
                      width={60}
                      height={60}
                      className="mx-auto rounded"
                    />
                  </div>
                  <p className="font-medium text-sm">#{keyword.name}</p>
                  <p className="text-xs text-gray-500">{keyword.participants}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
