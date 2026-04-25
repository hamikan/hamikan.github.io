import { ArrowRight, Code2, Github, Layers3, Trophy, UsersRound } from "lucide-react"
import { Link } from "react-router-dom"
import { focusAreas } from "@/data/activities"
import { hackathons } from "@/data/hackathons"
import { others } from "@/data/others"
import { projects } from "@/data/projects"

const allProjects = [...projects, ...hackathons].sort((a, b) => b.startDate.localeCompare(a.startDate))
const latestProject = allProjects[0]

const highlights = [
  {
    label: "Projects",
    value: allProjects.length,
    icon: Code2,
    to: "/projects",
  },
  {
    label: "Others",
    value: others.length,
    icon: Layers3,
    to: "/others",
  },
]

const activityIcons = [Trophy, UsersRound, Code2]

export function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative border-b border-slate-200 bg-[#f6f8f7]">
        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-teal-700">
              Portfolio
            </p>
            <h1 className="text-5xl font-black leading-[1.05] text-slate-950 md:text-7xl">
              つくって、試して、学び続けるエンジニア。
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              近畿大学情報学部で学びながら、競技プログラミング、チーム開発、個人開発に取り組んでいます。作る力と続ける力を磨いています。
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/about-me"
                className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                About me
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="https://github.com/hamikan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                >
                  <item.icon className="mb-4 h-5 w-5 text-teal-700" aria-hidden="true" />
                  <p className="text-lg font-black text-slate-950">{item.label}</p>
                  <p className="text-2xl font-bold text-slate-600">{item.value}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="size-3 rounded-full bg-[#f97316]" />
                <span className="size-3 rounded-full bg-[#facc15]" />
                <span className="size-3 rounded-full bg-[#14b8a6]" />
              </div>
              <div className="grid gap-4 p-5 text-sm text-slate-200">
                <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-300">
                    Focus Areas
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["競プロ", "インターン", "機械学習"].map((tech) => (
                      <span key={tech} className="rounded-md bg-white/10 px-3 py-1 font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-md bg-white p-4 text-slate-950">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                      Latest
                    </p>
                    <p className="mt-3 text-lg font-black">{latestProject?.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{latestProject?.summary}</p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-teal-500 p-4 text-slate-950">
                    <p className="text-xs font-bold uppercase tracking-[0.2em]">Current Goal</p>
                    <p className="mt-3 text-3xl font-black">ICPC</p>
                    <p className="mt-2 text-sm font-semibold">アジア地区大会出場を目指す</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700">Strengths</p>
            <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">特に力を入れてきたこと</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              継続して伸ばした基礎力、チームで形にする経験、自分で作り切る挑戦を軸に活動しています。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {focusAreas.map((area, index) => {
              const Icon = activityIcons[index] ?? Code2

              return (
                <article key={area.title} className="rounded-lg border border-slate-200 bg-[#f6f8f7] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{area.subtitle}</p>
                      <h3 className="mt-3 text-2xl font-black text-slate-950">{area.title}</h3>
                    </div>
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-slate-950 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="mt-6 text-3xl font-black text-teal-700">{area.metric}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{area.summary}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
} 
