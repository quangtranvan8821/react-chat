import { cn } from '@/libs/utils'
import { Button, Card, CardDescription, Input } from '@/ui'

export default function ChatInput({ className }: React.ComponentProps<'div'>) {
  return (
    <Card className={cn('flex flex-col gap-2 p-4', className)}>
      <Input placeholder="Please enter your message!" />

      <div className={cn('flex items-center justify-between')}>
        <CardDescription className="text-sm text-primary">Implement new AI</CardDescription>

        <Button>Submit</Button>
      </div>
    </Card>
  )
}
