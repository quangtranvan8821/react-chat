import { cn } from '@/libs/utils'
import { Button, Card, CardDescription, Textarea } from '@/ui'
import React, { useEffect, useState } from 'react'

type Props = {
  createMessage: (message: string) => void
}

export default function ChatInput({
  className,
  createMessage
}: React.ComponentProps<'div'> & Props) {
  const [message, setMessage] = useState<string>('')

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== 'Enter') {
      return
    }

    event.preventDefault()

    if (event.shiftKey) {
      setMessage(message + ' \n')
      return
    }

    if (!message.trim().length) {
      setMessage('')
      return
    }

    createMessage(message as string)
    setMessage('')
  }

  return (
    <div className="absolute bottom-4 w-full px-16 flex justify-center items-center z-20 bg-white">
      <Card className={cn('flex flex-col gap-2 p-4 w-full mx-16 min-w-sm', className)}>
        <Textarea
          value={message}
          className="max-h-40 overflow-y-auto resize-none border-none p-0"
          placeholder="Please enter your message!"
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div className={cn('flex items-center justify-between')}>
          <CardDescription className="text-sm text-primary">Implement new AI</CardDescription>

          <Button onClick={() => createMessage(message || '')}>Submit</Button>
        </div>
      </Card>
    </div>
  )
}
