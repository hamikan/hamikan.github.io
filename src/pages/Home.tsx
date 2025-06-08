import { User } from "lucide-react"

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50">
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-auto text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-b from-orange-200 to-orange-400 flex items-center justify-center shadow-lg">
              <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              エンジニアとしての成長の軌跡と、これまでに取り組んできたプロジェクトをご紹介します
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 