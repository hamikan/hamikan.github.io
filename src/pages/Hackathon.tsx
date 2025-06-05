import { Card } from "@/components/Card"

const hackathons = [
  {
    image: "https://picsum.photos/400/300",
    title: "AIチャットボット開発ハッカソン",
    startDate: "2024-01-15",
    endDate: "2024-01-17",
    teamSize: 4,
    githubUrl: "https://github.com/example/ai-chatbot"
  },
  {
    image: "https://picsum.photos/400/301",
    title: "Web3.0アプリケーション開発ハッカソン",
    startDate: "2023-12-01",
    endDate: "2023-12-03",
    teamSize: 3,
    githubUrl: "https://github.com/example/web3-app"
  },
  {
    image: "https://picsum.photos/400/302",
    title: "モバイルアプリ開発ハッカソン",
    startDate: "2023-10-20",
    endDate: "2023-10-22",
    teamSize: 5,
    githubUrl: "https://github.com/example/mobile-app"
  }
]

export function Hackathon() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Hackathon</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.map((hackathon, index) => (
          <Card
            key={index}
            image={hackathon.image}
            title={hackathon.title}
            startDate={hackathon.startDate}
            endDate={hackathon.endDate}
            teamSize={hackathon.teamSize}
            githubUrl={hackathon.githubUrl}
          />
        ))}
      </div>
    </div>
  )
} 