import {
  CalendarDays,
  Code2,
  Lightbulb,
} from "lucide-react"
import { TagBadge } from "@/components/TagBadge"
import { Link } from "react-router-dom"
import { historyItems } from "@/data/history"

const categoryIcons = {
  Project: Code2,
  Other: Lightbulb,
}

export function History() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-24 lg:px-10">
      <div className="mb-14 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700">Timeline</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950 md:text-6xl">History</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          プロジェクトと競技プログラミング関連の活動を時系列でまとめています。
          気になる項目から該当ページへ移動できます。
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-5 top-0 h-full w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2" />

        <div className="grid gap-8">
          {historyItems.map((item, index) => {
            const Icon = categoryIcons[item.category]
            const isLeft = index % 2 === 0

            return (
              <article
                key={`${item.date}-${item.title}`}
                className="relative grid gap-5 pl-14 md:grid-cols-2 md:pl-0"
              >
                <div className="absolute left-5 top-7 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-md bg-slate-950 text-white shadow-sm md:left-1/2">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <div className={isLeft ? "md:col-start-1 md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <Link
                    to={item.pagePath}
                    aria-label={`${item.title} の詳細を見る`}
                    className="group block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">
                        <CalendarDays className="h-4 w-4 text-teal-700" aria-hidden="true" />
                        {item.date}
                      </span>
                    </div>

                    <div className="mt-5">
                      <h2 className="text-2xl font-black leading-tight text-slate-950">{item.title}</h2>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <TagBadge key={tag.label} tag={tag} />
                      ))}
                    </div>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
