"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ChatRoom {
  id: string
  title: string
  participants: number
  maxParticipants: number
  lastMessage?: string
  lastMessageTime?: string
  isJoined: boolean
}

interface Message {
  id: string
  roomId: string
  user: string
  content: string
  time: string
  avatar?: string
}

interface ChatContextType {
  chatRooms: ChatRoom[]
  messages: Message[]
  joinChatRoom: (roomId: string) => void
  leaveChatRoom: (roomId: string) => void
  sendMessage: (roomId: string, content: string, user: string) => void
  getMessagesForRoom: (roomId: string) => Message[]
  getJoinedRooms: () => ChatRoom[]
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: ReactNode }) {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([
    {
      id: "tennis-basics",
      title: "테니스의 기초! 공 리듬 파악반",
      participants: 23,
      maxParticipants: 40,
      lastMessage: "모두 다음 주에 봐요~!!",
      lastMessageTime: "16:36",
      isJoined: false,
    },
    {
      id: "photo-club",
      title: "사진 동호회",
      participants: 15,
      maxParticipants: 30,
      lastMessage: "오늘 촬영 어땠나요?",
      lastMessageTime: "15:20",
      isJoined: false,
    },
    {
      id: "food-tour",
      title: "맛집 탐방",
      participants: 28,
      maxParticipants: 50,
      lastMessage: "다음 주 홍대 맛집 투어 어떠세요?",
      lastMessageTime: "14:45",
      isJoined: false,
    },
  ])

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      roomId: "tennis-basics",
      user: "박민지",
      content: "이번주 한 주는 쉬어가도록 하겠습니다. 여러분 더운 여름에 모두 지치지 말고 재충전하고 오시길바래요 :)",
      time: "16:32",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      roomId: "tennis-basics",
      user: "박민지",
      content: "모두 다음 주에 봐요~!!",
      time: "16:36",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ])

  const joinChatRoom = (roomId: string) => {
    setChatRooms((prev) =>
      prev.map((room) =>
        room.id === roomId ? { ...room, isJoined: true, participants: room.participants + 1 } : room,
      ),
    )
  }

  const leaveChatRoom = (roomId: string) => {
    setChatRooms((prev) =>
      prev.map((room) =>
        room.id === roomId ? { ...room, isJoined: false, participants: Math.max(0, room.participants - 1) } : room,
      ),
    )
  }

  const sendMessage = (roomId: string, content: string, user: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      roomId,
      user,
      content,
      time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
      avatar: "/placeholder.svg?height=40&width=40",
    }

    setMessages((prev) => [...prev, newMessage])

    // 채팅방의 마지막 메시지 업데이트
    setChatRooms((prev) =>
      prev.map((room) =>
        room.id === roomId ? { ...room, lastMessage: content, lastMessageTime: newMessage.time } : room,
      ),
    )
  }

  const getMessagesForRoom = (roomId: string) => {
    return messages.filter((message) => message.roomId === roomId)
  }

  const getJoinedRooms = () => {
    return chatRooms.filter((room) => room.isJoined)
  }

  return (
    <ChatContext.Provider
      value={{
        chatRooms,
        messages,
        joinChatRoom,
        leaveChatRoom,
        sendMessage,
        getMessagesForRoom,
        getJoinedRooms,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider")
  }
  return context
}
