import { Card } from "@/components/Card"

const projects = [
  {
    image: "https://picsum.photos/400/303",
    title: "ポートフォリオサイト",
    startDate: "2025-06-01",
    endDate: "現在進行中",
    teamSize: 1,
    githubUrl: "https://github.com/example/portfolio",
    techs: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
  },
]

export function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            startDate={project.startDate}
            endDate={project.endDate}
            teamSize={project.teamSize}
            githubUrl={project.githubUrl}
            techs={project.techs}
          />
        ))}
      </div>
    </div>
  )
} 