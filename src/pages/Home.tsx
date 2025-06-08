import { User } from "lucide-react"

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-r from-white via-orange-50 to-white">
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-auto text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-b from-orange-200 to-orange-400 flex items-center justify-center shadow-lg">
              <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </h1>
          </div>
        </div>
      </section>
    </div>
  )
} 