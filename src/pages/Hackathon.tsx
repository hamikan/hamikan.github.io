import { Card } from "@/components/Card"

const hackathons = [
  {
    image: "https://cdn.discordapp.com/attachments/1365540095813353532/1365675867388383345/top_page_sample.jpg?ex=68439103&is=68423f83&hm=35d1899545251f12075dc6389bebc3f73293b2d901b58f70c01b3100a22def56&",
    title: "WakeUp!ハッカソン 〜眠る空き家を起こせ！〜",
    startDate: "2025-04-26",
    endDate: "2025-04-29",
    teamSize: 4,
    githubUrl: "https://github.com/wakeup-B/destroy-akiya",
    techs: ["Swift", "Unity", "Blender", "AR Kit"]
  },
  {
    image: "",
    title: "登竜門Hack 2025",
    startDate: "2025-5-31",
    endDate: "2025-6-15",
    teamSize: 5,
    githubUrl: "https://github.com/orgs/toryumon-pj/teams/hack-kansai-2025-teamf",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
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
            techs={hackathon.techs}
          />
        ))}
      </div>
    </div>
  )
} 