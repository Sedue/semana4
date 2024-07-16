interface BannerProps {
  children: React.ReactNode
}

export function Banner({ children }: BannerProps) {
  return (
    <div className="h-60 bg-gray-400 flex justify-center items-center">
      {children}
    </div>
  )
}