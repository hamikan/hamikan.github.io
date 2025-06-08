import { Card } from "@/components/Card"
import { hackathons } from "@/data/hackathons";

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
            techs={hackathon.techs}
          />
        ))}
      </div>
    </div>
  )
} 