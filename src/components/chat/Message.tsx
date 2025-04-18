import { cn } from '@/libs/utils'
import { Card, CardContent } from '@/ui'

type Props = {
  message: {
    id: string
    message: string
    isMe: boolean
  }
}

export default function ChatMessage({ message }: Props) {
  return (
    <div
      className={cn(
        'flex items-center w-full h-fit',
        message.isMe ? 'justify-end' : 'justify-start'
      )}
    >
      <Card
        className={cn(
          'w-fit p-0 shadow-2xs',
          message.isMe ? 'bg-gray-100 border-none' : 'border-gray-100'
        )}
      >
        <CardContent className={cn('w-fit px-3.5 py-2 text-sm whitespace-pre-line')}>
          {message.message}
        </CardContent>
      </Card>
    </div>
  )
}
