import { Card } from "@/components/Card"
import { projects } from "@/data/projects"

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