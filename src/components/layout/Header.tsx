import { cn } from '@/libs/utils'

export default function LayoutHeader({ className }: React.ComponentProps<'div'>) {
  return <div className={cn('h-12 p-3 sticky top-0 z-20 pointer-events-none', className)}></div>
}
