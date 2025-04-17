import LayoutHeader from '../Header'

export default function LayoutChat({ children }: React.ComponentProps<'div'>) {
  return (
    <div className="flex flex-col w-full h-full">
      <LayoutHeader />

      <div className="px-16 py-4">{children}</div>
    </div>
  )
}
