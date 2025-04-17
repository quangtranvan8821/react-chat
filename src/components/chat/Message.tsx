import { Card, CardContent } from '@/ui'

type Props = {
  message: string
}

export default function ChatMessage({ message = '' }: Props) {
  return (
    <Card>
      <CardContent>{message}</CardContent>
    </Card>
  )
}
