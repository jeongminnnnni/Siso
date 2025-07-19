"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useParams } from "next/navigation"
import Header from "@/components/Header"
import { useAuth } from "@/contexts/AuthContext"
import { useChat } from "@/contexts/ChatContext"
import { Send, Plus, MoreHorizontal, Search } from "lucide-react"
import Image from "next/image"

export default function ChatRoomPage() {
  const params = useParams()
  const roomId = params.id as string
  const [message, setMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { user, isLoggedIn } = useAuth()
  const { chatRooms, getMessagesForRoom, sendMessage } = useChat()

  const room = chatRooms.find((r) => r.id === roomId)
  const messages = getMessagesForRoom(roomId)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && user) {
      sendMessage(roomId, message.trim(), user.name)
      setMessage("")
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">로그인이 필요합니다</h2>
            <a href="/login" className="text-blue-600 hover:text-blue-700">
              로그인하러 가기 →
            </a>
          </div>
        </div>
      </div>
    )
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">채팅방을 찾을 수 없습니다</h2>
            <a href="/community" className="text-blue-600 hover:text-blue-700">
              시소챗으로 돌아가기 →
            </a>
          </div>
        </div>
      </div>
    )
  }

  const otherUsers = [
    { name: "김영철", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "박철민", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "한미순", avatar: "/placeholder.svg?height=32&width=32" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          {/* 채팅방 헤더 */}
          <div className="bg-blue-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">
                  {room.title} {room.participants}/{room.maxParticipants}
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-blue-700 rounded">
                  <Search className="h-5 w-5" />
                </button>
                <button className="p-2 hover:bg-blue-700 rounded">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* 채팅 메시지 영역 */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-3">
                <Image
                  src={msg.avatar || "/placeholder.svg"}
                  alt={msg.user}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-sm">{msg.user}</span>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 max-w-md shadow-sm">
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* 다른 사용자들의 입력 상태 표시 */}
            {otherUsers.map((otherUser, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Image
                  src={otherUser.avatar || "/placeholder.svg"}
                  alt={otherUser.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="bg-gray-200 rounded-lg px-3 py-2">
                  <p className="text-sm text-gray-500">텍스트를 입력해주세요.</p>
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* 메시지 입력 영역 */}
          <div className="border-t p-4 bg-white">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
              <button type="button" className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Plus className="h-5 w-5" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="메세지 보내기..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={!message.trim()}
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
