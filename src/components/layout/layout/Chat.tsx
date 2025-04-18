import LayoutHeader from '../Header'

export default function LayoutChat({ children }: React.ComponentProps<'div'>) {
  return (
    <div className="flex flex-col w-full h-full relative">
      <LayoutHeader />

      <div className="relative w-full h-full">{children}</div>
    </div>
  )
}
