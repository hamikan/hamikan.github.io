import { Card } from "@/components/Card"
import { hackathons } from "@/data/hackathons"
import { projects } from "@/data/projects"

const projectItems = [...projects, ...hackathons]

export function Projects() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-24 lg:px-10">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700">Selected Work</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950 md:text-6xl">Projects</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          個人制作やチーム開発の制作物をまとめたページです。何を作ったかだけでなく、
          どんな技術で形にしたかが伝わるように整理しています。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projectItems.map((item, index) => (
          <Card
            key={`${item.title}-${index}`}
            image={item.image}
            title={item.title}
            summary={item.summary}
            startDate={item.startDate}
            endDate={item.endDate}
            teamSize={item.teamSize}
            githubUrl={item.githubUrl}
            techs={item.techs}
          />
        ))}
      </div>
    </div>
  )
} 
