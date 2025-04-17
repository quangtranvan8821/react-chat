import ChatInput from '@/components/chat/Input'
import ChatMessage from '@/components/chat/Message'
import LayoutChat from '@/components/layout/layout/Chat'

function App() {
  const messages: { id: string; message: string }[] = [
    {
      id: '1',
      message: 'Hello'
    },
    {
      id: '2',
      message: 'Hello'
    },
    {
      id: '3',
      message: 'Hello'
    }
  ]

  return (
    <>
      <LayoutChat>
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message.message} />
          ))}
        </div>

        <ChatInput className="mt-4" />
      </LayoutChat>
    </>
  )
}

export default App
