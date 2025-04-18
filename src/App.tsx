import ChatInput from '@/components/chat/Input'
import ChatMessage from '@/components/chat/Message'
import LayoutChat from '@/components/layout/layout/Chat'
import { cn } from '@/libs/utils'
import { useState } from 'react'

function App() {
  const [messages, setMessages] = useState<{ id: string; message: string; isMe: boolean }[]>([
    {
      id: '1',
      message: 'Hello',
      isMe: false
    },
    {
      id: '2',
      message: 'Hello',
      isMe: true
    },
    {
      id: '3',
      message: 'Hello',
      isMe: false
    }
  ])

  const createMessage = (message: string) => {
    if (!message.trim().length) {
      return
    }

    console.log('message: ', message)

    setMessages([
      ...messages,
      { id: messages.length.toString() + 1, message: message.trim(), isMe: true }
    ])
  }

  return (
    <>
      <LayoutChat>
        <div
          className={cn(
            'flex flex-col gap-1 py-4 px-16 z-0',
            'max-h-[calc(100%_-_9rem)] overflow-y-auto'
          )}
        >
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>

        <ChatInput createMessage={createMessage} />
      </LayoutChat>
    </>
  )
}

export default App
