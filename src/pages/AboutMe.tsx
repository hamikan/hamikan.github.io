import { Code2, ExternalLink, GraduationCap, Sparkles, Trophy, UsersRound } from "lucide-react"
import { TagBadge } from "@/components/TagBadge"
import { focusAreas } from "@/data/activities"
import { hackathons } from "@/data/hackathons"
import { others } from "@/data/others"
import { projects } from "@/data/projects"

const basicInfo = [
  ["名前", "堀　温大"],
  ["所属", "近畿大学 情報学部 3回生"],
  ["在学期間", "2024年4月 - 2028年3月（予定）"],
  ["関心領域", "競技プログラミング / チーム開発 / Web開発 / ゲーム開発"],
]

const skills = Array.from(
  new Map([...projects, ...hackathons, ...others].flatMap((item) => item.techs).map((tag) => [tag.label, tag])).values()
).sort((a, b) => a.label.localeCompare(b.label))

const focusIcons = [Trophy, UsersRound, Code2]

export function AboutMe() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700">About</p>
          <h1 className="mt-4 text-4xl font-black text-slate-950 md:text-6xl">About Me</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            近畿大学情報学部に所属しています。
            <div/>
            競技プログラミングで培った基礎力や論理的思考力を基に、アルバイト、ハッカソン、個人開発に挑戦しています。
          </p>

          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-teal-700" aria-hidden="true" />
              <h2 className="text-lg font-black text-slate-950">基本情報</h2>
            </div>
            <dl className="mt-6 grid gap-4">
              {basicInfo.map(([label, value]) => (
                <div key={label} className="grid gap-1 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</dt>
                  <dd className="font-semibold text-slate-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="grid content-start gap-6">
          <section className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-teal-300" aria-hidden="true" />
              <h2 className="text-xl font-black">現在の目標</h2>
            </div>
            <p className="mt-5 text-base leading-8 text-slate-300">
              ICPCアジア地区大会出場
              <div/>
              個人開発 AtCoder Progress を完成させる
              <div/>
              就職に向けてインターンに参加したり、企業研究を進める
            </p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Code2 className="h-5 w-5 text-teal-700" aria-hidden="true" />
              <h2 className="text-xl font-black text-slate-950">スキル</h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <TagBadge key={skill.label} tag={skill} />
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="mt-12">
        <div className="mb-6 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700">Efforts</p>
          <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">学生時代に力を入れたこと</h2>
        </div>

        <div className="grid gap-6">
          {focusAreas.map((area, index) => {
            const Icon = focusIcons[index] ?? Code2

            return (
              <article key={area.title} className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.36fr_0.64fr]">
                <div className="bg-slate-950 p-6 text-white">
                  <Icon className="h-7 w-7 text-teal-300" aria-hidden="true" />
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{area.subtitle}</p>
                  <h3 className="mt-3 text-2xl font-black">{area.title}</h3>
                  <p className="mt-6 text-3xl font-black text-teal-300">{area.metric}</p>
                </div>

                <div className="p-6">
                  <p className="text-base leading-8 text-slate-700">{area.summary}</p>
                  <ul className="mt-6 grid gap-3">
                    {area.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm leading-7 text-slate-600">
                        <span className="mt-2 size-2 shrink-0 rounded-full bg-teal-600" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {area.links ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {area.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-sm font-bold text-white transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                        >
                          {link.label}
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <TagBadge key={tag.label} tag={tag} />
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
} 
